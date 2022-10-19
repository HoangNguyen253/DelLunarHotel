using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class HoaDonPhong
    {
        private string idhoadon;
        private string iddatphong;
        private string idphong;
        private int sotien;
        public string IDHoaDon { get { return idhoadon; } set { idhoadon = value; } }
        public string IDDatPhong { get { return iddatphong; } set { iddatphong = value; } }
        public string IDPhong { get { return idphong; } set { idphong = value; } }
        public int SoTien { get { return sotien; } set { sotien = value; } }

    }
}
