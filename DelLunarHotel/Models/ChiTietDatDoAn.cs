using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class ChiTietDatDoAn
    {
        private string iddatphong;
        private string idphong;
        private DateTime ngaydeno;
        private int iddoan;
        private DateTime thoigiandat;
        private int soluong;
        private byte dathanhtoan;
        public string IDDatPhong { get { return iddatphong; } set { iddatphong = value; } }
        public string IDPhong { get { return idphong; } set { idphong = value; } }
        public DateTime NgayDenO { get { return ngaydeno; } set { ngaydeno = value; } }
        public int IDDoAn { get { return iddoan; } set { iddoan = value; } }
        public DateTime ThoiGianDat { get { return thoigiandat; } set { thoigiandat = value; } }
        public int SoLuong { get { return soluong; } set { soluong = value; } }
        public byte DaThanhToan { get { return dathanhtoan; } set { dathanhtoan = value; } }
    }
}
