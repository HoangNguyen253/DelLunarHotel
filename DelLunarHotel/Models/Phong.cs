using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class Phong
    {
        private string idPhong;
        public string IDPhong
        {
            get { return idPhong; }
            set { idPhong = value; }
        }
        private string idChiNhanh;
        public string IDChiNhanh
        {
            get { return idChiNhanh; }
            set { idChiNhanh = value; }
        }
        private string soPhong;
        public string SoPhong
        {
            get { return soPhong; }
            set { soPhong = value; }
        }
        private string tang;
        public string Tang
        {
            get { return tang; }
            set { tang = value; }
        }
        private string idLoaiPhong;
        public string IDLoaiPhong
        {
            get { return idLoaiPhong; }
            set { idLoaiPhong = value; }
        }
        private int soGiuong;
        public int SoGiuong
        {
            get { return soGiuong; }
            set { soGiuong = value; }
        }
        private int trangThaiPhong;
        public int TrangThaiPhong
        {
            get { return trangThaiPhong; }
            set { trangThaiPhong = value; }
        }
        private int soNguoiO;
        public int SoNguoiO
        {
            get { return soNguoiO; }
            set { soNguoiO = value; }
        }
    }
}
