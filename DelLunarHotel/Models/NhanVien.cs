using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class NhanVien
    {
        private string idNhanVien;
        public string IDNhanVien
        {
            get { return idNhanVien; }
            set { idNhanVien = value; }
        }
        private string matKhau;
        public string MatKhau
        {
            get { return matKhau; }
            set { matKhau = value; }
        }
        private string ho;
        public string Ho
        {
            get { return ho; }
            set { ho = value; }
        }
        private string ten;
        public string Ten
        {
            get { return ten; }
            set { ten = value; }
        }
        private DateTime ngaySinh;
        public DateTime NgaySinh
        {
            get { return ngaySinh; }
            set { ngaySinh = value; }
        }
        private string email;
        public string Email
        {
            get { return email; }
            set { email = value; }
        }
        private string sdt;
        public string SDT
        {
            get { return sdt; }
            set { sdt = value; }
        }
        private DateTime ngayVaoLam;
        public DateTime NgayVaoLam
        {
            get { return ngayVaoLam; }
            set { ngayVaoLam = value; }
        }
        private string idChucVu;
        public string IDChucVu
        {
            get { return idChucVu; }
            set { idChucVu = value; }
        }
        private string idChiNhanh;
        public string IDChiNhanh
        {
            get { return idChiNhanh; }
            set { idChiNhanh = value; }
        }
        private string avt;
        public string Avt
        {
            get { return avt; }
            set { avt = value; }
        }
        private byte gioiTinh;
        public byte GioiTinh
        {
            get { return gioiTinh; }
            set { gioiTinh = value; }
        }
    }
}
