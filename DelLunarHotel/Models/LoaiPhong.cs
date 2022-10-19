using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class LoaiPhong
    {
        private string idLoaiPhong;
        public string IDLoaiPhong
        {
            get { return idLoaiPhong; }
            set { idLoaiPhong = value; }
        }
        private string tenLoaiPhong;
        public string TenLoaiPhong
        {
            get { return tenLoaiPhong; }
            set { tenLoaiPhong = value; }
        }    
        private string kichThuocGiuong;
        public string KichThuocGiuong
        {
            get { return kichThuocGiuong; }
            set { kichThuocGiuong = value; }
        }
        private double phanTramQuaSoNguoi;
        public double PhanTramQuaSoNguoi
        {
            get { return phanTramQuaSoNguoi; }
            set { phanTramQuaSoNguoi = value; }
        }
        private string kichThuocPhong;
        public string KichThuocPhong
        {
            get { return kichThuocPhong; }
            set { kichThuocPhong = value; }
        }
        private string moTa;
        public string MoTa
        {
            get { return moTa; }
            set { moTa = value; }
        }
        private byte mayLanh;
        public byte MayLanh
        {
            get { return mayLanh; }
            set { mayLanh = value; }
        }
        private byte tuLanh;
        public byte TuLanh
        {
            get { return tuLanh; }
            set { tuLanh = value; }
        }
        private string linkIMG;
        public string LinkIMG
        {
            get { return linkIMG; }
            set { linkIMG = value; }
        }
        private int giaTien;
        public int GiaTien
        {
            get { return giaTien; }
            set { giaTien = value; }
        }
        private int giaCoc;
        public int GiaCoc
        {
            get { return giaCoc; }
            set { giaCoc = value; }
        }
    }
}
