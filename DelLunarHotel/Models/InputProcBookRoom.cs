using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class InputProcBookRoom
    {
        public string delete_CTDatPhong_Query { get; set; }
        public int count_delete_CTDatPhong_Query { get; set; }
        public string delete_CTDoAn_Query { get; set; }
        public int count_delete_CTDoAn_Query { get; set; }
        public string insert_CTDatPhong_Query { get; set; }
        public string insert_CTDoAn_Query { get; set; }
        public int count_insert_CTDoAn_Query { get; set; }
        public string update_tientichluy { get; set; }
        public InputProcBookRoom()
        {
            this.delete_CTDatPhong_Query = "";
            this.count_delete_CTDatPhong_Query = 0;
            this.delete_CTDoAn_Query = "";
            this.count_delete_CTDoAn_Query = 0;
            this.insert_CTDatPhong_Query = "INSERT INTO ChiTietDatPhong(IDDatPhong, IDPhong, NgayDenO, NgayRoiDi, CheckIn, SoTienDaThanhToan, TrucTuyen, DaThanhToan) VALUES ";
            this.insert_CTDoAn_Query = "INSERT INTO ChiTietDatDoAn(IDDatPhong, IDPhong, NgayDenO, IDDoAn, ThoiGianDat, SoLuong, DaThanhToan) VALUES ";
            this.count_insert_CTDoAn_Query = 0;
            this.update_tientichluy = "";
        }
    }
}
