using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class NgayLe
    {
        private string idNgayLe;
        public string IDNgayLe
        {
            get { return idNgayLe; }
            set { idNgayLe = value; }
        }
        private DateTime ngay;
        public DateTime Ngay
        {
            get { return ngay; }
            set { ngay = value; }
        }
        private string moTa;
        public string MoTa
        {
            get { return moTa; }
            set { moTa = value; }
        }
        private double heSoTangCa;
        public double HeSoTangCa
        {
            get { return heSoTangCa; }
            set { heSoTangCa = value; }
        }
    }
}
