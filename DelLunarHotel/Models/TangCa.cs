using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class TangCa
    {
        private int idTangCa;
        public int IDTangCa
        {
            get { return idTangCa; }
            set { idTangCa = value; }
        }
        private string idNhanVien;
        public string IDNhanVien
        {
            get { return idNhanVien; }
            set { idNhanVien = value; }
        }
        private DateTime thoiGianBatDau;
        public DateTime ThoiGianBatDau
        {
            get { return thoiGianBatDau; }
            set { thoiGianBatDau = value; }
        }
        private DateTime thoiGianKetThuc;
        public DateTime ThoiGianKetThuc
        {
            get { return thoiGianKetThuc; }
            set { thoiGianKetThuc = value; }
        }
        private string idNgayLe;
        public string IDNgayLe
        {
            get { return idNgayLe; }
            set { idNgayLe = value; }
        }
    }
}
