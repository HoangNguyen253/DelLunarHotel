using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class KhachHang
    {
        private string idkhachhang;
        private string matkhau;
        private string ho;
        private string ten;
        private DateTime ngaysinh;
        private string email;
        private string sdt;
        private DateTime ngaydangky;
        private string loaikhachhang;
        private long tongtien;
        private string avt;
        private byte gioitinh;
        public string IDKhachHang { get { return idkhachhang; } set { idkhachhang = value; } }
        public string MatKhau { get { return matkhau; } set { matkhau = value; } }
        public string Ho { get { return ho; } set { ho = value; } }
        public string Ten { get { return ten; } set { ten = value; } }
        public DateTime NgaySinh { get { return ngaysinh; } set { ngaysinh = value; } }
        public string Email { get { return email; } set { email = value; } }
        public string SDT { get { return sdt; } set { sdt = value; } }
        public DateTime NgayDangKy { get { return ngaydangky; } set { ngaydangky = value; } }
        public string LoaiKH { get { return loaikhachhang; } set { loaikhachhang = value; } }
        public long TongTien { get { return tongtien; } set { tongtien = value; } }
        public string Avt { get { return avt; } set { avt = value; } }
        public byte GioiTinh { get { return gioitinh; } set { gioitinh = value; } }
    }
}
