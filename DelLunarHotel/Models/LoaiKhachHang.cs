using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class LoaiKhachHang
    {
        private string loaiKH;
        public string LoaiKH
        {
            get { return loaiKH; }
            set { loaiKH = value; }
        }
        private string tenLoaiKH;
        public string TenLoaiKH
        {
            get { return tenLoaiKH; }
            set { tenLoaiKH = value; }
        }
        private string moTa;
        public string MoTa
        {
            get { return moTa; }
            set { moTa = value; }
        }
        private int chietKhauPhong;
        public int ChietKhauPhong
        {
            get { return chietKhauPhong; }
            set { chietKhauPhong = value; }
        }
        private int chietKhauDoAn;
        public int ChietKhauDoAn
        {
            get { return chietKhauDoAn; }
            set { chietKhauDoAn = value; }
        }
    }
}
