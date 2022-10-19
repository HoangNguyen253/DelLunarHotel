using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class GraphColoring
    {
        public List<GraphColoringCTDP> listCTDP { get; set; }
        public GraphColoring()
        {
            listCTDP = new List<GraphColoringCTDP>();
        }
        bool checkOverlap(GraphColoringCTDP ct1, GraphColoringCTDP ct2)
        {
            if ((ct1.NgayDenO < ct2.NgayRoiDi && ct2.NgayRoiDi <= ct1.NgayRoiDi))
            {
                return true;
            }
            if ((ct1.NgayDenO <= ct2.NgayDenO && ct2.NgayDenO < ct1.NgayRoiDi))
            {
                return true;
            }
            if ((ct2.NgayDenO <= ct1.NgayDenO && ct1.NgayRoiDi <= ct2.NgayRoiDi))
            {
                return true;
            }
            return false;
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
        public bool checkValidBookRoom(int allowRoomNumber)
        {
            for (int i = 0; i < listCTDP.Count - 1; i++)
            {
                for (int j = i + 1; j < listCTDP.Count; j++)
                {
                    if (checkOverlap(listCTDP[i], listCTDP[j]))
                    {
                        listCTDP[i].degreeOverlap.Add(listCTDP[j].CTDPID);
                        listCTDP[j].degreeOverlap.Add(listCTDP[i].CTDPID);
                    }
                }
            }

            var sortedList = from l in listCTDP
                             orderby l.degreeOverlap.Count descending
                             select l;

            List<GraphColoringCTDP> newListCTDP = new List<GraphColoringCTDP>();
            foreach (var s in sortedList)
            {
                GraphColoringCTDP ctdp = (GraphColoringCTDP)s;
                newListCTDP.Add(ctdp);
            }

            int countNodeColored = 0;
            int[] groupState = new int[newListCTDP.Count];
            int newgroupID = 1;

            while (countNodeColored < newListCTDP.Count)
            {
                for (int i = 0; i < newListCTDP.Count; i++)
                {
                    if (newListCTDP[i].groupID == 0)
                    {
                        bool kt = true;
                        for (int j = 0; j < newListCTDP[i].degreeOverlap.Count; j++)
                        {
                            if (groupState[newListCTDP[i].degreeOverlap[j]] == newgroupID)
                            {
                                kt = false;
                                break;
                            }
                        }
                        if (kt)
                        {
                            countNodeColored++;
                            newListCTDP[i].groupID = newgroupID;
                            groupState[newListCTDP[i].CTDPID] = newgroupID;
                        }
                    }
                }
                newgroupID++;
            }
            if (allowRoomNumber >= (newgroupID - 1))
            {
                return true;
            }
            else
            {
                return false;
            }    
        }
        public bool distributeRoom(List<string> listMaPhong, ref InputProcBookRoom inputProcBookRoom, List<DoAn> doAns, string tenLoaiPhong, int giaPerDay, ref string catMail, ref int countRoom, ref int TongTien, ref int TongTienDoAn)
        {
            for (int i = 0; i < listCTDP.Count - 1; i++)
            {
                for (int j = i + 1; j < listCTDP.Count; j++)
                {
                    if (checkOverlap(listCTDP[i], listCTDP[j]))
                    {
                        listCTDP[i].degreeOverlap.Add(listCTDP[j].CTDPID);
                        listCTDP[j].degreeOverlap.Add(listCTDP[i].CTDPID);
                    }
                }
            }

            var sortedList = from l in listCTDP
                             orderby l.degreeOverlap.Count descending
                             select l;

            List<GraphColoringCTDP> newListCTDP = new List<GraphColoringCTDP>();
            foreach (var s in sortedList)
            {
                GraphColoringCTDP ctdp = (GraphColoringCTDP)s;
                newListCTDP.Add(ctdp);
            }

            int countNodeColored = 0;
            int[] groupState = new int[newListCTDP.Count];
            int newgroupID = 1;

            while (countNodeColored < newListCTDP.Count)
            {
                for (int i = 0; i < newListCTDP.Count; i++)
                {
                    if (newListCTDP[i].groupID == 0)
                    {
                        bool kt = true;
                        for (int j = 0; j < newListCTDP[i].degreeOverlap.Count; j++)
                        {
                            if (groupState[newListCTDP[i].degreeOverlap[j]] == newgroupID)
                            {
                                kt = false;
                                break;
                            }
                        }
                        if (kt)
                        {
                            countNodeColored++;
                            newListCTDP[i].groupID = newgroupID;
                            groupState[newListCTDP[i].CTDPID] = newgroupID;
                        }
                    }
                }
                newgroupID++;
            }
            if (listMaPhong.Count() >= (newgroupID - 1))
            {
                string deleteCTDatPhong_Cu = "";
                string deleteCTDoAn_Cu = "";
                int countCTDatPhong_Cu = 0;
                int countCTDaAn_Cu = 0;
                string insertCTDP_AfterOptimize = "";
                string insertCTDA_AfterOptimize = "";
                int counCTDA_AfterOptimize = 0;
                var groupbyID_ListCTDP = from item in newListCTDP group item by item.groupID;
                StoreContext storeContext = new StoreContext();
                foreach (var ItemGroup in groupbyID_ListCTDP)
                {
                    string maphong = ((from item in ItemGroup.ToList<GraphColoringCTDP>() where item.CheckIn != null select item.IDPhong).FirstOrDefault());
                    if (!(maphong is null))
                    {
                        foreach (var item in ItemGroup)
                        {
                            if (item.IDPhong == null)
                            {
                                int TongTienMotPhong = 0;
                                countRoom++;
                                TongTienMotPhong += giaPerDay * ((int)(item.NgayRoiDi - item.NgayDenO).TotalDays);
                                catMail += "<tr>" +
                                    "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>Room "+ countRoom + "</td>" +
                                    "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>"+tenLoaiPhong+"</td>" +
                                    "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>" + item.NgayDenO.ToString("yyyy-MM-dd") + "</td>" +
                                    "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>" + item.NgayRoiDi.ToString("yyyy-MM-dd") + "</td>" +
                                    "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>1</td>" +
                                    "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>"+addDotForCurency(TongTienMotPhong.ToString()) +"</td>" +
                                    "</tr>";
                                //chi tiết đặt phòng mới
                                DateTime _now = DateTime.Now;
                                List<string> dsstring = item.dsDoAn.Split("###").ToList();
                                dsstring.RemoveAt(dsstring.Count() - 1);
                                for (int j = 0; j < dsstring.Count(); j++)
                                {
                                    List<string> doAn = dsstring[j].Split("...").ToList();
                                    int giaDoAn = 0;
                                    string tenDoAn = "";
                                    foreach (DoAn da in doAns)
                                    {
                                        if (da.IDDoAn == Convert.ToInt32(doAn[0]))
                                        {
                                            giaDoAn = da.Gia;
                                            tenDoAn = da.TenDoAn;
                                        }    
                                    }
                                    int TongGiaDoAn= giaDoAn * Convert.ToInt32(doAn[1]);
                                    TongTienDoAn += TongGiaDoAn;
                                    TongTienMotPhong += TongGiaDoAn;
                                    catMail += "<tr>" +
                                        "<td style='border: none;'></td> " +
                                        "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>"+ tenDoAn + "</td>" +
                                        "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'></td>" +
                                        "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'></td>" +
                                        "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>"+ doAn[1] + "</td>" +
                                        "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>"+addDotForCurency(TongGiaDoAn.ToString()) +"</td>" +
                                        "</tr>";
                                    insertCTDA_AfterOptimize += "('" + item.IDDatPhong + "', '" + maphong + "', '" + item.NgayDenO.ToString("yyyy-MM-dd") + "', " +
                                        doAn[0] + ", '" + _now.ToString("yyyy-MM-dd HH:mm:ss") + "', " + doAn[1] + ", 1),";
                                    counCTDA_AfterOptimize++;
                                }
                                insertCTDP_AfterOptimize += "('" + item.IDDatPhong + "', '" + maphong + "', '" + item.NgayDenO.ToString("yyyy-MM-dd") + "', '" +
                                   item.NgayRoiDi.ToString("yyyy-MM-dd") + "', null, " + TongTienMotPhong + ", " + item.TrucTuyen + ", 0),";
                                TongTien += TongTienMotPhong;
                            }
                            else
                            {
                                //update chi tiết đặt phòng cũ
                                deleteCTDatPhong_Cu += "DELETE FROM chitietdatphong WHERE IDDatPhong='"+ item.IDDatPhong +"' AND IDPhong='"+ item.IDPhong+"' AND NgayDenO='"+ item.NgayDenO.ToString("yyyy-MM-dd")+"';###";
                                countCTDatPhong_Cu++;
                                if (item.CheckIn.HasValue == false)
                                {
                                    insertCTDP_AfterOptimize += "('" + item.IDDatPhong + "', '" + maphong + "', '" + item.NgayDenO.ToString("yyyy-MM-dd") + "', '" +
                                    item.NgayRoiDi.ToString("yyyy-MM-dd") + "', null, " + item.SoTienDaThanhToan + ", " + item.TrucTuyen + ", 0),";
                                }
                                else
                                {
                                    insertCTDP_AfterOptimize += "('" + item.IDDatPhong + "', '" + maphong + "', '" + item.NgayDenO.ToString("yyyy-MM-dd") + "', '" +
                                      item.NgayRoiDi.ToString("yyyy-MM-dd") + "', '" + item.CheckIn.Value.ToString("yyyy-MM-dd HH:mm:ss") + "', " + item.SoTienDaThanhToan + ", " + item.TrucTuyen + ", 0),";
                                }
                                //update chi tiết đồ ăn cũ
                                deleteCTDoAn_Cu += "DELETE FROM chitietdatdoan WHERE IDDatPhong='" + item.IDDatPhong + "' AND IDPhong='" + item.IDPhong + "' AND NgayDenO='" + item.NgayDenO.ToString("yyyy-MM-dd") + "';###";
                                countCTDaAn_Cu++;
                                List<ChiTietDatDoAn> chiTietDatDoAns = storeContext.GetChiTietDatDoAnsOfOneRoom(item.IDDatPhong, item.IDPhong, item.NgayDenO);
                                for (int i = 0; i< chiTietDatDoAns.Count();i++)
                                {
                                    counCTDA_AfterOptimize++;
                                    insertCTDA_AfterOptimize += "('" + item.IDDatPhong + "', '" + maphong + "', '" + item.NgayDenO.ToString("yyyy-MM-dd") + "', " +
                                        chiTietDatDoAns[i].IDDoAn + ", '" + chiTietDatDoAns[i].ThoiGianDat + "', " + chiTietDatDoAns[i].SoLuong + ", " + chiTietDatDoAns[i].DaThanhToan + "),";
                                } 
                            }
                        }
                        listMaPhong.Remove(maphong);
                    }
                }
                foreach (var ItemGroup in groupbyID_ListCTDP)
                {
                    string maphong = ((from item in ItemGroup.ToList<GraphColoringCTDP>() where item.CheckIn != null select item.IDPhong).FirstOrDefault());
                    if (maphong is null)
                    {
                        maphong = listMaPhong[0];
                        foreach (var item in ItemGroup)
                        {
                            if (item.IDPhong == null)
                            {
                                int TongTienMotPhong = 0;
                                countRoom++;
                                TongTienMotPhong += giaPerDay * ((int)(item.NgayRoiDi - item.NgayDenO).TotalDays);
                                catMail += "<tr>" +
                                    "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>Room " + countRoom + "</td>" +
                                    "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>" + tenLoaiPhong + "</td>" +
                                    "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>" + item.NgayDenO.ToString("yyyy-MM-dd") + "</td>" +
                                    "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>" + item.NgayRoiDi.ToString("yyyy-MM-dd") + "</td>" +
                                    "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>1</td>" +
                                    "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>" + addDotForCurency(TongTienMotPhong.ToString()) + "</td>" +
                                    "</tr>";
                                //chi tiết đặt phòng mới
                                DateTime _now = DateTime.Now;
                                List<string> dsstring = item.dsDoAn.Split("###").ToList();
                                dsstring.RemoveAt(dsstring.Count() - 1);
                                for (int j = 0; j < dsstring.Count(); j++)
                                {
                                    List<string> doAn = dsstring[j].Split("...").ToList();
                                    int giaDoAn = 0;
                                    string tenDoAn = "";
                                    foreach (DoAn da in doAns)
                                    {
                                        if (da.IDDoAn == Convert.ToInt32(doAn[0]))
                                        {
                                            giaDoAn = da.Gia;
                                            tenDoAn = da.TenDoAn;
                                        }
                                    }
                                    int TongGiaDoAn = giaDoAn * Convert.ToInt32(doAn[1]);
                                    TongTienDoAn += TongGiaDoAn;
                                    TongTienMotPhong += TongGiaDoAn;
                                    catMail += "<tr>" +
                                        "<td style='border: none;'></td> " +
                                        "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>" + tenDoAn + "</td>" +
                                        "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'></td>" +
                                        "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'></td>" +
                                        "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>" + doAn[1] + "</td>" +
                                        "<td style='text-align: center;padding: 0.7rem; border-bottom: 0.1rem solid black;'>" + addDotForCurency(TongGiaDoAn.ToString()) + "</td>" +
                                        "</tr>";
                                    insertCTDA_AfterOptimize += "('" + item.IDDatPhong + "', '" + maphong + "', '" + item.NgayDenO.ToString("yyyy-MM-dd") + "', " +
                                        doAn[0] + ", '" + _now.ToString("yyyy-MM-dd HH:mm:ss") + "', " + doAn[1] + ", 1),";
                                    counCTDA_AfterOptimize++;
                                }
                                insertCTDP_AfterOptimize += "('" + item.IDDatPhong + "', '" + maphong + "', '" + item.NgayDenO.ToString("yyyy-MM-dd") + "', '" +
                                   item.NgayRoiDi.ToString("yyyy-MM-dd") + "', null, " + TongTienMotPhong + ", " + item.TrucTuyen + ", 0),";
                                TongTien += TongTienMotPhong;
                            }
                            else
                            {
                                //update chi tiết đặt phòng cũ
                                deleteCTDatPhong_Cu += "DELETE FROM chitietdatphong WHERE IDDatPhong='" + item.IDDatPhong + "' AND IDPhong='" + item.IDPhong + "' AND NgayDenO='" + item.NgayDenO.ToString("yyyy-MM-dd") + "';###";
                                countCTDatPhong_Cu++;
                                if (item.CheckIn.HasValue == false)
                                {
                                    insertCTDP_AfterOptimize += "('" + item.IDDatPhong + "', '" + maphong + "', '" + item.NgayDenO.ToString("yyyy-MM-dd") + "', '" +
                                    item.NgayRoiDi.ToString("yyyy-MM-dd") + "', null, " + item.SoTienDaThanhToan + ", " + item.TrucTuyen + ", 0),";
                                }
                                else
                                {
                                    insertCTDP_AfterOptimize += "('" + item.IDDatPhong + "', '" + maphong + "', '" + item.NgayDenO.ToString("yyyy-MM-dd") + "', '" +
                                      item.NgayRoiDi.ToString("yyyy-MM-dd") + "', '" + item.CheckIn.Value.ToString("yyyy-MM-dd HH:mm:ss") + "', " + item.SoTienDaThanhToan + ", " + item.TrucTuyen + ", 0),";
                                }
                                //update chi tiết đồ ăn cũ
                                deleteCTDoAn_Cu += "DELETE FROM chitietdatdoan WHERE IDDatPhong='" + item.IDDatPhong + "' AND IDPhong='" + item.IDPhong + "' AND NgayDenO='" + item.NgayDenO.ToString("yyyy-MM-dd") + "';###";
                                countCTDaAn_Cu++;
                                List<ChiTietDatDoAn> chiTietDatDoAns = storeContext.GetChiTietDatDoAnsOfOneRoom(item.IDDatPhong, item.IDPhong, item.NgayDenO);
                                for (int i = 0; i < chiTietDatDoAns.Count(); i++)
                                {
                                    counCTDA_AfterOptimize++;
                                    insertCTDA_AfterOptimize += "('" + item.IDDatPhong + "', '" + maphong + "', '" + item.NgayDenO.ToString("yyyy-MM-dd") + "', " +
                                        chiTietDatDoAns[i].IDDoAn + ", '" + chiTietDatDoAns[i].ThoiGianDat + "', " + chiTietDatDoAns[i].SoLuong + ", " + chiTietDatDoAns[i].DaThanhToan + "),";
                                }
                            }
                        }
                        listMaPhong.RemoveAt(0);
                    }
                }
                inputProcBookRoom.delete_CTDatPhong_Query += deleteCTDatPhong_Cu;
                inputProcBookRoom.count_delete_CTDatPhong_Query += countCTDatPhong_Cu;
                inputProcBookRoom.delete_CTDoAn_Query += deleteCTDoAn_Cu;
                inputProcBookRoom.count_delete_CTDoAn_Query += countCTDaAn_Cu;
                inputProcBookRoom.insert_CTDatPhong_Query += insertCTDP_AfterOptimize;
                inputProcBookRoom.insert_CTDoAn_Query += insertCTDA_AfterOptimize;
                inputProcBookRoom.count_insert_CTDoAn_Query += counCTDA_AfterOptimize;
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
