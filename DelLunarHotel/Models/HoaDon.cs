using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class HoaDon
    {
        private string idhoahon;
        private string idkhachthanhtoan;
        private DateTime thoigianxuat;
        private string idnhanhvien;
        private int tongsotien;
        private int loaithanhtoan;
        public string IDHoaDon { get { return idhoahon; } set { idhoahon = value; } }
        public string IDKhachThanhToan { get { return idkhachthanhtoan; } set { idkhachthanhtoan = value; } }
        public DateTime ThoiGianXuat { get { return thoigianxuat; } set { thoigianxuat = value; } }
        public string IDNhanVien { get { return idnhanhvien; } set { idnhanhvien = value; } }
        public int TongSoTien { get { return tongsotien; } set { tongsotien = value; } }
        public int LoaiThanhToan { get { return loaithanhtoan; } set { loaithanhtoan = value; } }
    }
}
