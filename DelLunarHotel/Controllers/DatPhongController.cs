using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DelLunarHotel.Models;
using Microsoft.AspNetCore.Http;
using System.Web;
using Microsoft.AspNetCore.Session;
using Newtonsoft.Json;

namespace DelLunarHotel.Controllers
{
    public class DatPhongController : Controller
    {
        const string SessionKeyUser = "_User";
        const string SessionBranch = "_Branch";
        public IActionResult ChooseBranch()
        {
            return View();
        }
        public IActionResult BookRoom(string branchHotel)
        {
            StoreContext storeContext = new StoreContext();
            ViewData["DanhSachDoAn"] = storeContext.GetDoAns();
            if (HttpContext.Session.Get<KhachHang>(SessionKeyUser) != null)
            {
                ViewData["usersession"] = true;
            }
            else ViewData["usersession"] = false;

            DateTime _today = DateTime.Now;
            string checkinDay = _today.ToString("yyyy-MM-dd");
            string checkoutDay = _today.AddDays(1).ToString("yyyy-MM-dd");
            int numberPeople = 1;
            string branch = branchHotel;

            HttpContext.Session.Set<string>(SessionBranch, branch);
            ViewData["checkinDay"] = checkinDay;
            ViewData["checkoutDay"] = checkoutDay;
            ViewData["numberPeople"] = numberPeople;
            ViewData["branch"] = branch;

            List<object> lst = storeContext.GetPhongsByFilter(checkinDay, checkoutDay, numberPeople, branch);

            ViewData["lst"] = lst;
            if (lst.Count() == 0)
            {
                ViewData["checkList"] = false;
            }
            else
            {
                ViewData["checkList"] = true;
            }
            return View();
        }
        public IActionResult BookResult(string result)
        {
            if (result == "FAIL")
            {
                ViewData["linkIMG"] = "/assets/Fail.png";
                ViewData["thongbaodp"] = "ĐẶT PHÒNG THẤT BẠI!";
                ViewData["welcome"] = "CÓ THỂ BẠN ĐÃ CHẬM 1 BƯỚC RỒI :((!";
            }
            else if (result == "OK")
            {
                ViewData["linkIMG"] = "/assets/Success.png";
                ViewData["thongbaodp"] = "ĐẶT PHÒNG THÀNH CÔNG!";
                ViewData["welcome"] = "CHÚC BẠN CÓ 1 ĐÊM THẬT TUYỆT :)))!";
            }
            return View();
        }
        [HttpPost]
        public JsonResult ReadFilter(IFormCollection form)
        {
            DateTime checkinDay = Convert.ToDateTime(form["checkinDay"]);
            DateTime checkoutDay = Convert.ToDateTime(form["checkoutDay"]);
            int numberPeople = Convert.ToInt32(form["numberPeople"]);

            string branchHotel = HttpContext.Session.Get<string>(SessionBranch);
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.GetPhongsByFilter(checkinDay.ToString("yyyy-MM-dd"), checkoutDay.ToString("yyyy-MM-dd"), numberPeople, branchHotel));
        }
        [HttpPost]
        public string checkValidBook(IFormCollection form)
        {
            var maLoaiPhong = form["maLoaiPhong[]"];
            var soNguoiO = form["soNguoiO[]"];
            var checkIn = form["checkIn[]"];
            var checkOut = form["checkOut[]"];
            var soLuong = form["soLuong[]"];
            string idChiNhanh = HttpContext.Session.Get<string>(SessionBranch);

            List<CheckBookRoom> listCheckBookRoom = new List<CheckBookRoom>();

            for (int i = 0; i < maLoaiPhong.Count; i++)
            {
                CheckBookRoom cbr = new CheckBookRoom()
                {
                    maLoaiPhong = maLoaiPhong[i].ToString(),
                    soNguoiO = Convert.ToInt32(soNguoiO[i]),
                    checkIn = Convert.ToDateTime(checkIn[i]),
                    checkOut = Convert.ToDateTime(checkOut[i]),
                    soLuong = Convert.ToInt32(soLuong[i])
                };
                listCheckBookRoom.Add(cbr);
            }
            //Group Book Room
            var groupedListCheckBookRoom = from l in listCheckBookRoom
                                           group l by new { l.maLoaiPhong, l.soNguoiO };

            StoreContext storeContext = new StoreContext();
            bool kt = true;

            foreach (var groupItem in groupedListCheckBookRoom)
            {
                List<ChiTietDatPhong> chiTietDatPhongs = storeContext.GetChiTietDatPhongByOneBookRoom(groupItem.Key.maLoaiPhong, groupItem.Key.soNguoiO, idChiNhanh);
                List<GraphColoringCTDP> lstGC_CTDP = new List<GraphColoringCTDP>();
                int idState = 0;
                foreach (ChiTietDatPhong ctdp in chiTietDatPhongs)
                {
                    GraphColoringCTDP GC_CTDP = new GraphColoringCTDP()
                    {
                        CTDPID = idState++,
                        NgayDenO = ctdp.NgayDenO,
                        NgayRoiDi = ctdp.NgayRoiDi
                    };
                    lstGC_CTDP.Add(GC_CTDP);
                }
                foreach (var g in groupItem)
                {
                    for (int i = 0; i < Convert.ToInt32(g.soLuong); i++)
                    {
                        GraphColoringCTDP GC_CTDP = new GraphColoringCTDP()
                        {
                            CTDPID = idState++,
                            NgayDenO = g.checkIn,
                            NgayRoiDi = g.checkOut
                        };
                        lstGC_CTDP.Add(GC_CTDP);
                    }
                }
                int allowRoomNumber = storeContext.GetAllowRoomNumber(groupItem.Key.maLoaiPhong, groupItem.Key.soNguoiO, idChiNhanh);
                GraphColoring GC = new GraphColoring();
                GC.listCTDP = lstGC_CTDP;
                kt = GC.checkValidBookRoom(allowRoomNumber);
            }
            if (kt)
            {
                return "VALID";
            }
            else
            {
                return "INVALID";
            }

        }
        private string addDotForCurency(string giaTien)
        {
            string giaTienAfter = "";
            for (int i = 1; i <= giaTien.Length; i++)
            {
                giaTienAfter = giaTien[giaTien.Length - i] + giaTienAfter;
                if (i % 3 == 0 && i != giaTien.Length)
                {
                    giaTienAfter = "." + giaTienAfter;
                }
            }
            return giaTienAfter;
        }
        [HttpPost]
        public JsonResult calculateForBook(IFormCollection form)
        {
            //Init cofficient
            double[] cofficientSoNguoiO = new double[] { 0, 1.0, 1.2, 1.5, 1.8 };
            //Get Form
            var maLoaiPhong = form["maLoaiPhong[]"];
            var soNguoiO = form["soNguoiO[]"];
            var CI = form["CI[]"];
            var CO = form["CO[]"];
            var dsDoAn = form["dsDoAn[]"];

            StoreContext storeContext = new StoreContext();
            List<LoaiPhong> loaiPhongs = storeContext.GetGiaLoaiPhong();
            List<DoAn> doAns = storeContext.GetGiaDoAn();
            KhachHang kh = HttpContext.Session.Get<KhachHang>(SessionKeyUser);
            int chietkhaudoan = (storeContext.GetDiscountInfoByLoaiKH(kh.LoaiKH)).ChietKhauDoAn;
            int tongTien = 0;
            int tongTienDoAn = 0;
            string tBody = "", tFoot;
            int countRoom = 0;
            for (int i = 0; i < maLoaiPhong.Count(); i++)
            {
                countRoom++;
                string reRoom, reFood = "";
                int giaPhong = 0;
                string tenLoaiPhong = "";
                foreach (LoaiPhong lp in loaiPhongs)
                {
                    if (lp.IDLoaiPhong == maLoaiPhong[i])
                    {
                        giaPhong = lp.GiaTien;
                        tenLoaiPhong = lp.TenLoaiPhong;
                    }
                }
                DateTime checkInDay = Convert.ToDateTime(CI[i]);
                DateTime checkOutDay = Convert.ToDateTime(CO[i]);

                int giaPhongBothCICO = ((int)(checkOutDay - checkInDay).TotalDays) * ((int)(giaPhong * cofficientSoNguoiO[Convert.ToInt32(soNguoiO[i])] * 0.5));
                tongTien += giaPhongBothCICO;
                reRoom = "<tr>" +
                            "<td>Room " + countRoom + "</td>" +
                            "<td>" + tenLoaiPhong + ", " + soNguoiO[i] + " người</td>" +
                            "<td>" + checkInDay.ToString("yyyy-MM-dd") + "</td>" +
                            "<td>" + checkOutDay.ToString("yyyy-MM-dd") + "</td>" +
                            "<td>1</td>" +
                            "<td>" + addDotForCurency(giaPhongBothCICO.ToString()) + "</td>" +
                            "</tr>";
                List<string> dsstring = dsDoAn[i].Split("###").ToList();
                dsstring.RemoveAt(dsstring.Count() - 1);
                for (int j = 0; j < dsstring.Count(); j++)
                {
                    List<string> itemDoAn = dsstring[j].Split("...").ToList();
                    int slDoAn = Convert.ToInt32(itemDoAn[1]);
                    int giaDoAn = 0;
                    string tenDoAn = "";

                    foreach (DoAn da in doAns)
                    {
                        if (Convert.ToInt32(itemDoAn[0]) == da.IDDoAn)
                        {
                            giaDoAn = da.Gia;
                            tenDoAn = da.TenDoAn;
                        }
                    }
                    int giaTong = giaDoAn * slDoAn;
                    tongTienDoAn += giaTong;
                    tongTien += giaTong;
                    reFood += "<tr>" +
                                "<td class='data-food-empty'></td>" +
                                "<td>" + tenDoAn + "</td>" +
                                "<td></td>" +
                                "<td></td>" +
                                "<td>" + slDoAn + "</td>" +
                                "<td>" + addDotForCurency(giaTong.ToString()) + "</td>" +
                                "</tr>";
                }
                tBody += reRoom + reFood;
            }
            int tienCKDoAn = tongTienDoAn * chietkhaudoan / 100;
            int soTienCanTra = tongTien - tienCKDoAn;
            tFoot = "<tr class='sum-row-table-receipt'>" +
                "<td colspan = '6' class='sum-price-booking'>Tổng tiền: " + addDotForCurency(tongTien.ToString()) + " VND</td>" +
                "</tr>" +
                "<tr class='sum-row-table-receipt'>" +
                "<td colspan = '6' class='sum-price-booking'>Chiết khấu đồ ăn(" + chietkhaudoan + "%): " + addDotForCurency(tienCKDoAn.ToString()) + " VND</td>" +
                "</tr>" +
                "<tr class='sum-row-table-receipt'>" +
                "<td colspan = '6' id='sum-price-booking-id'>Số tiền cần trả: " + addDotForCurency(soTienCanTra.ToString()) + " VND</td>" +
                "</tr>";

            object resultBill = new
            {
                inforKH = new {cccd = kh.IDKhachHang, email=kh.Email, hoten = kh.Ho +" "+ kh.Ten},
                billDate = DateTime.Now.ToString("yyyy-MM-dd"),
                tBody = tBody,
                tFoot = tFoot
            };
            return Json(resultBill);
        }
        [HttpPost]
        public string BookListRoom(IFormCollection form)
        {
            //Get Form
            var maLoaiPhong = form["maLoaiPhong[]"];
            var soNguoiO = form["soNguoiO[]"];
            var CI = form["CI[]"];
            var CO = form["CO[]"];
            var dsDoAn = form["dsDoAn[]"];
            List<BookRoom> listBookRoom = new List<BookRoom>();

            for (int i = 0; i < maLoaiPhong.Count; i++)
            {
                BookRoom br = new BookRoom()
                {
                    maLoaiPhong = maLoaiPhong[i].ToString(),
                    soNguoiO = Convert.ToInt32(soNguoiO[i]),
                    checkIn = Convert.ToDateTime(CI[i]),
                    checkOut = Convert.ToDateTime(CO[i]),
                    dsDoAn = dsDoAn[i].ToString()
                };
                listBookRoom.Add(br);
            }
            //Group Book Room
            var groupedListBookRoom = from l in listBookRoom
                                      group l by new { l.maLoaiPhong, l.soNguoiO };

            StoreContext storeContext = new StoreContext();
            string idChiNhanh = HttpContext.Session.Get<string>(SessionBranch);
            string tenChiNhanh = (idChiNhanh == "HCM") ? ("Hồ Chí Minh") : ("Hà Nội");
            KhachHang kh = HttpContext.Session.Get<KhachHang>(SessionKeyUser);
            string idKhachDat = kh.IDKhachHang;
            LoaiKhachHang loaiKhachHang = storeContext.GetDiscountInfoByLoaiKH(kh.LoaiKH);
            string idDatPhong = storeContext.InsertDatPhong(idKhachDat, idChiNhanh);
            List<LoaiPhong> loaiPhongs = storeContext.GetGiaLoaiPhong();
            List<DoAn> doAns = storeContext.GetGiaDoAn();
            InputProcBookRoom inputProcBookRoom = new InputProcBookRoom();
            int countRoom = 0;
            int TongTien = 0;
            int TongTienDoAn = 0;

            //Initial Mail
            string bodyMail = "<h1 style='color: #002B49; text-align: center;'>CHÀO MỪNG ĐẾN VỚI KHÁCH SẠN DEL LUNAR</h1>" +
                "<h2 style='text-align: center;'>Cảm ơn bạn đã đặt phòng tại khách sạn Del Lunar chi nhánh Hồ Chí Minh </h2>" +
                "<div style='border: 1px solid black;width: 70%;margin: 0 auto;padding-bottom: 3rem;padding-top: 1rem;margin-top: 20px;'>" +
                "<div class=receipt-table-field>" +
                "<table style='border-collapse: collapse; margin: 0 auto;'>" +
                "<caption style='margin-bottom: 1rem; font-size: 1.5rem;font-weight: bold;'>Mã đặt phòng: "+ idDatPhong + "</caption>" +
                "<colgroup>" +
                "<col style='width: 11%'>" +
                "<col style='width: 28%'>" +
                "<col style='width: 15%'>" +
                "<col style='width: 15%'>" +
                "<col style='width: 11%'>" +
                "<col style='width: 20%'>" +
                "</colgroup>" +
                "<thead>" +
                "<tr style='background: #002B49;color: white;'>" +
                "<th style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>#</th>" +
                "<th style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>Phòng</th>" +
                "<th style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>Check In</th>" +
                "<th style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>Check Out</th>" +
                "<th style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>Số lượng</th>" +
                "<th style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>Giá tiền (VND)</th>" +
                "</tr>" +
                "</thead>" +
                "<tbody>";

            foreach (var groupItem in groupedListBookRoom)
            {
                double[] cofficientSoNguoiO = new double[] { 0, 1.0, 1.2, 1.5, 1.8 };
                int giaPhong = 0;
                string tenLoaiPhong = "";
                foreach (LoaiPhong lp in loaiPhongs)
                {
                    if (lp.IDLoaiPhong == groupItem.Key.maLoaiPhong)
                    {
                        giaPhong = lp.GiaTien;
                        tenLoaiPhong = lp.TenLoaiPhong;
                    }
                }

                int giaPhongMotNgay =  (int)( giaPhong * cofficientSoNguoiO[Convert.ToInt32(groupItem.Key.soNguoiO)] * 0.5);
                tenLoaiPhong += ", " + groupItem.Key.soNguoiO.ToString() + " người";

                List<ChiTietDatPhong> chiTietDatPhongs = storeContext.GetChiTietDatPhongByOneBookRoom(groupItem.Key.maLoaiPhong, groupItem.Key.soNguoiO, idChiNhanh);
                
                List<GraphColoringCTDP> listGC_CTDP = new List<GraphColoringCTDP>();
                int idState = 0;
                foreach (ChiTietDatPhong ctdp in chiTietDatPhongs)
                {
                    GraphColoringCTDP GC_CTDP = new GraphColoringCTDP()
                    {
                        CTDPID = idState++,
                        IDDatPhong = ctdp.IDDatPhong,
                        IDPhong = ctdp.IDPhong,
                        CheckIn = ctdp.CheckIn,
                        SoTienDaThanhToan = ctdp.SoTienDaThanhToan,
                        TrucTuyen = ctdp.TrucTuyen,
                        NgayDenO = ctdp.NgayDenO,
                        NgayRoiDi = ctdp.NgayRoiDi,
                        dsDoAn = null
                    };
                    listGC_CTDP.Add(GC_CTDP);
                }
                foreach (var g in groupItem)
                {
                    GraphColoringCTDP GC_CTDP = new GraphColoringCTDP()
                    {
                        CTDPID = idState++,
                        IDDatPhong = idDatPhong,
                        IDPhong = null,
                        CheckIn = null,
                        SoTienDaThanhToan = 0,
                        TrucTuyen = 1,
                        NgayDenO = g.checkIn,
                        NgayRoiDi = g.checkOut,
                        dsDoAn = g.dsDoAn
                    };
                    listGC_CTDP.Add(GC_CTDP);
                }
                List<string> listMaPhong = storeContext.GetAllowRoom(groupItem.Key.maLoaiPhong, groupItem.Key.soNguoiO, idChiNhanh);
                GraphColoring GC = new GraphColoring();
                GC.listCTDP = listGC_CTDP;
                string catMail = "";
                if (GC.distributeRoom(listMaPhong, ref inputProcBookRoom, doAns, tenLoaiPhong, giaPhongMotNgay, ref catMail, ref countRoom, ref TongTien, ref TongTienDoAn) == false)
                {
                    storeContext.DeleteDatPhong(idDatPhong);
                    return "FAIL";
                }
                bodyMail += catMail;
            }
            int tongTienCKDoAn = TongTienDoAn * (loaiKhachHang.ChietKhauDoAn) / 100;
            int soTienCanTra = TongTien - tongTienCKDoAn;
            bodyMail += "</tbody>" +
                "<tfoot>" +
                "<tr>" +
                "<td colspan = '6' style='border: none;text-align: right; padding-top: 10px;'>Tổng tiền: " + addDotForCurency(TongTien.ToString()) + " VND</td>" +
                "</tr>" +
                "<tr>" +
                "<td colspan = '6' style='border: none;text-align: right; padding-top: 10px;'>Chiết khấu đồ ăn (" + loaiKhachHang.ChietKhauDoAn + "%): " + addDotForCurency(tongTienCKDoAn.ToString()) + " VND</td>" +
                "</tr>" +
                "<tr>" +
                "<td colspan = '6' style='border: none;text-align: right; font-weight: bold; padding-top: 10px;'>Số tiền cần trả: "+ addDotForCurency(soTienCanTra.ToString()) + " VND</td>" +
                "</tr>" +
                "</tfoot>" +
                "</table>" +
                "</div>" +
                "</div>";
            inputProcBookRoom.update_tientichluy = "UPDATE khachhang " +
                "SET TongTien=TongTien+" + soTienCanTra.ToString() + 
                " WHERE IDKhachHang='" + idKhachDat.ToString() + "';";
            if (storeContext.InsertBookRoom(inputProcBookRoom))
            {
                string email_kh = storeContext.GetMailKH(idKhachDat);
                clsMail mail = new clsMail();
                mail.Send(email_kh, "Đặt phòng khách sạn Del Lunar thành công", bodyMail);
                storeContext.UpdateStatePhongAfterBookOn();
                return "OK";
            } 
            else
            {
                storeContext.DeleteDatPhong(idDatPhong);
                return "FAIL";
            }    
        }
    }
    public static class SessionExtensions
    {
        public static void Set<T>(this ISession session, string key, T value)
        {
            session.SetString(key, JsonConvert.SerializeObject(value));
        }

        public static T Get<T>(this ISession session, string key)
        {
            var value = session.GetString(key);
            return value == null ? default(T) :
                                  JsonConvert.DeserializeObject<T>(value);
        }
    }
}
