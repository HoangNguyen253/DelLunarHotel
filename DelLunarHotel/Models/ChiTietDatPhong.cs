using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class ChiTietDatPhong
    {
        private string iddatphong;
        private string idphong;
        private string idkhachchuphong;
        private DateTime ngaydeno;
        private DateTime ngayroidi;
        private DateTime? checkin;
        private DateTime checkout;
        private int songuoio;
        private string thongtinkhacho;
        private int phithem;
        private double danhgia;
        private int tructuyen;
        private int sotiendathanhtoan;
        private byte dathanhtoan;
        public string IDDatPhong { get { return iddatphong; } set { iddatphong = value; } }
        public string IDPhong { get { return idphong; } set { idphong = value; } }
        public string IDKhachChuPhong { get { return idkhachchuphong; } set { idkhachchuphong = value; } }
        public DateTime NgayDenO { get { return ngaydeno; } set { ngaydeno = value; } }
        public DateTime NgayRoiDi { get { return ngayroidi; } set { ngayroidi = value; } }
        public DateTime? CheckIn { get { return checkin; } set { checkin = value; } }
        public DateTime CheckOut { get { return checkout; } set { checkout = value; } }
        public int SoNguoiO { get { return songuoio; } set { songuoio = value; } }
        public string ThongTinKhachO { get { return thongtinkhacho; } set { thongtinkhacho = value; } }
        public int PhiThem { get { return phithem; } set { phithem = value; } }
        public double DanhGia { get { return danhgia; } set { danhgia = value; } }
        public int TrucTuyen { get { return tructuyen; } set { tructuyen = value; } }
        public int SoTienDaThanhToan { get { return sotiendathanhtoan; } set { sotiendathanhtoan = value; } }
        public byte DaThanhToan { get { return dathanhtoan; } set { dathanhtoan = value; } }
    }
}
