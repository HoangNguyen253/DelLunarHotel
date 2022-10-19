using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using DelLunarHotel.Models;

namespace DelLunarHotel.Controllers
{
    public class QuanLyController : Controller
    {
        const string SessionKeyStaff = "_Staff";
        public IActionResult Index()
        {
            NhanVien nv = HttpContext.Session.Get<NhanVien>(SessionKeyStaff);
            if (nv == null) return Redirect("/Home/Index");
            else
            {
                if (nv.IDChucVu != "AD")
                {
                    ViewData["Is_Admin"] = false;
                }
                else ViewData["Is_Admin"] = true;
                ViewData["Account"] = nv;
                return View();
            }
        }
        public JsonResult GetPhongForSDP (string branch)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.GetPhongForSDP(branch));
        }
        public JsonResult GetPhongForSDPByFilter(string thoigiano, string thoigianroidi, int songuoio, string loaiphong)
        {
            StoreContext storeContext = new StoreContext();
            NhanVien nv = HttpContext.Session.Get<NhanVien>(SessionKeyStaff);
            return Json(storeContext.GetPhongForSDPByFilter(nv.IDChiNhanh, thoigiano, thoigianroidi, songuoio, loaiphong));
        }
        public JsonResult GetInfoBookedRoom(string maphong)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.GetInfoBookedRoom(maphong));
        }
        public string UpdateStatusFixedForRoom (string maphong)
        {
            StoreContext storeContext = new StoreContext();
            bool check = storeContext.UpdateStatusFixedForRoom(maphong);
            if (check)
                return "Success";
            return "Fail";
        }
        public string UpdateStatusReadyForRoom(string maphong)
        {
            StoreContext storeContext = new StoreContext();
            string status = storeContext.UpdateStatusReadyForRoom(maphong);
            return status;
        }
        public JsonResult QueryKhachHangByID (string makh)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.QueryKhachHangByID(makh));
        }
        public string Save_Customer_Info_For_Booked_Room(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.Save_Customer_Info_For_Booked_Room(formData);
        }
        public string Create_Customer_Info_For_Booked_Room(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.Create_Customer_Info_For_Booked_Room(formData);
        }
        public string CheckIn_For_Booked_Room(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.CheckIn_For_Booked_Room(formData);
        }
        public string Order_Food_For_Room(IFormCollection formData)
        {
            string thoigiandat = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
            StoreContext storeContext = new StoreContext();
            return storeContext.Order_Food_For_Room(formData, thoigiandat);
        }
        public JsonResult GetDataFood()
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.GetDoAns());
        }
        public JsonResult GetInfoOccupiedRoom(string maphong)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.GetInfoOccupiedRoom(maphong));
        }
        public string Update_Info_Service_For_Occupied_Room(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.Update_Info_Service_For_Occupied_Room(formData);
        }
        public JsonResult GetInfoBookToOrder(string maphong)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.GetInfoBookToOrder(maphong));
        }
        public string Book_and_CheckIn_Room_Now(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.Book_and_CheckIn_Room_Now(formData);
        }


        // Danh sách đặt phòng - BEGIN
        public JsonResult Load_Data_For_DSDatPhong(string branch)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Data_For_DSDatPhong(branch));
        }
        public JsonResult Load_Data_For_CTDP(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Data_For_CTDP(formData));
        }
        public JsonResult Load_Data_For_DSDatPhong_By_Filter(string ngaydeno_dsdp, string stt_dsdp)
        {
            StoreContext storeContext = new StoreContext();
            NhanVien nv = HttpContext.Session.Get<NhanVien>(SessionKeyStaff);
            return Json(storeContext.Load_Data_For_DSDatPhong_By_Filter(nv.IDChiNhanh, ngaydeno_dsdp, stt_dsdp));
        }
        // Danh sách đặt phòng - END

        // Danh sách hóa đơn - BEGIN
        public JsonResult Load_Data_For_DSHoaDon()
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Data_For_DSHoaDon());
        }
        public JsonResult Load_Data_Create_Receipt()
        {
            NhanVien nv = HttpContext.Session.Get<NhanVien>(SessionKeyStaff);
            return Json(nv);
        }
        public JsonResult Load_Data_For_Room_Ready_CheckOut(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Data_For_Room_Ready_CheckOut(formData));
        }
        public JsonResult GetKhachHangVoiChietKhau(string idkhachhang)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.GetKhachHangVoiChietKhau(idkhachhang));
        }
        public JsonResult CheckOut_For_Occupied_Room(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.CheckOut_For_Occupied_Room(formData));
        }
        public string Tao_HoaDon_CheckOut(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.Tao_HoaDon_CheckOut(formData);
        }
        public JsonResult Get_Data_HoaDon_By_MaHoaDon(string mahoadon)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Get_Data_HoaDon_By_MaHoaDon(mahoadon));
        }
        public JsonResult Load_HoaDonPhong_By_MaHoaDon(string mahoadon)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_HoaDonPhong_By_MaHoaDon(mahoadon));
        }
        public JsonResult Load_Detail_Old_HoaDonPhong(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Detail_Old_HoaDonPhong(formData));
        }
        public JsonResult Get_DSHoaDon_ByFilter(DateTime ngay_cua_hoadon, string so_cua_hoadon)
        {
            StoreContext storeContext = new StoreContext();
            string mahoadon = ngay_cua_hoadon.ToString("yyyy-MM-dd");
            string[] strsplit = mahoadon.Split("-");
            mahoadon = strsplit[0] + strsplit[1] + strsplit[2] + so_cua_hoadon;
            return Json(storeContext.Get_DSHoaDon_ByFilter(mahoadon));
        }
        // Danh sách hóa đơn - END

        //Danh sách khách hàng - BEGIN
        public JsonResult Load_Data_For_DSKhachHang()
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Data_For_DSKhachHang());
        }
        public JsonResult Load_Data_For_Detail_KhacHang(string makhachhang)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Data_For_Detail_KhacHang(makhachhang));
        }
        public string Update_Change_Detail_KhachHangInFo(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.Update_Change_Detail_KhachHangInFo(formData);
        }

        public JsonResult Search_KhachHang_By_ID_In_DSKhachHang(string makhachhang)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Search_KhachHang_By_ID_In_DSKhachHang(makhachhang));
        }
        //Danh sách khách hàng - end


        //Danh sách nhân viên - begin
        public JsonResult Load_Data_For_DSNhanVien()
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Data_For_DSNhanVien());
        }
        public JsonResult Load_Info_For_PopUp_Edit_NhanVien()
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Info_For_PopUp_Edit_NhanVien());
        }
        public JsonResult Load_Data_For_Detail_NhanVien(string manhanvien)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Data_For_Detail_NhanVien(manhanvien));
        }
        public string Update_Change_Detail_NhanVienInFo(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.Update_Change_Detail_NhanVienInFo(formData);
        }
        public JsonResult Search_NhanVien_By_ID_In_DSNhanVien(string manhanvien)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Search_NhanVien_By_ID_In_DSNhanVien(manhanvien));
        }

        public string Create_New_Staff_For_DSNhanVien(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.Create_New_Staff_For_DSNhanVien(formData);
        }
        //Danh sách nhân viên - end

        //Danh sách phòng - begin
        public JsonResult Load_Data_For_DSPhong()
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Data_For_DSPhong());
        }
        public JsonResult Load_Info_For_PopUp_Edit_Room()
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Info_For_PopUp_Edit_Room());
        }
        public JsonResult Load_Data_For_Detail_Phong(string maphong)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Data_For_Detail_Phong(maphong));
        }
        public string Update_Change_Detail_PhongInFo(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.Update_Change_Detail_PhongInFo(formData);
        }
        public string Create_New_Room_For_DSPhong(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.Create_New_Room_For_DSPhong(formData);
        }
        public JsonResult Search_Phong_By_ID_In_DSPhong(string maphong)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Search_Phong_By_ID_In_DSPhong(maphong));
        }
        //Danh sách phòng - end

        //Danh sách loại phòng - begin
        public JsonResult Load_Data_For_DSLoaiPhong()
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Data_For_DSLoaiPhong());
        }
        public JsonResult Load_Data_Detail_RoomType_For_DSLoaiPhong(string maloaiphong)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Data_Detail_RoomType_For_DSLoaiPhong(maloaiphong));
        }
        public string Update_Change_Detail_LoaiPhongInFo(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.Update_Change_Detail_LoaiPhongInFo(formData);
        }
        //Danh sách loại phòng - end
        //Danh sách đồ ăn - begin
        public JsonResult Load_Data_For_DSDoAn()
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Data_For_DSDoAn());
        }
        public JsonResult Load_Data_Detail_Food_For_DSDoAn(int madoan)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Load_Data_Detail_Food_For_DSDoAn(madoan));
        }
        public string Update_Change_Detail_DoAnInFo(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.Update_Change_Detail_DoAnInFo(formData);
        }
        public int Load_Info_For_PopUp_Create_Food()
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.Load_Info_For_PopUp_Create_Food();
        }
        public string Create_New_Food_For_DSDoAn(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.Create_New_Food_For_DSDoAn(formData);
        }
        public string Delete_Food_For_DSDoAn(IFormCollection formData)
        {
            StoreContext storeContext = new StoreContext();
            return storeContext.Delete_Food_For_DSDoAn(formData);
        }
        public JsonResult Search_Food_By_Name_For_DSDoAn(string tendoan)
        {
            StoreContext storeContext = new StoreContext();
            return Json(storeContext.Search_Food_By_Name_For_DSDoAn(tendoan));
        }
        //Danh sách đồ ăn - end

        public IActionResult LogOutAdmin()
        {
            HttpContext.Session.Set<NhanVien>(SessionKeyStaff, null);
            return Redirect("/Home/Index");
        }
    }
}
