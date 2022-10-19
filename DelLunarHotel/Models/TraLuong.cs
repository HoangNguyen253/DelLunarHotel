using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class TraLuong
    {
        private string idNhanVien;
        public string IDNhanVien
        {
            get { return idNhanVien; }
            set { idNhanVien = value; }
        }
        private int thang;
        public int Thang
        {
            get { return thang; }
            set { thang = value; }
        }
        private int nam;
        public int Nam
        {
            get { return nam; }
            set { nam = value; }
        }
        private DateTime thoiGian;
        public DateTime ThoiGian
        {
            get { return thoiGian; }
            set { thoiGian = value; }
        }
        private int thuongThem;
        public int ThuongThem
        {
            get { return thuongThem; }
            set { thuongThem = value; }
        }
        private string ghiChu;
        public string GhiChu
        {
            get { return ghiChu; }
            set { ghiChu = value; }
        }
        private int tongTien;
        public int TongTien
        {
            get { return tongTien; }
            set { tongTien = value; }
        }
    }
}
