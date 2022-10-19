using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class LoaiChiTra
    {
        private int idLoaiChiTra;
        public int IDLoaiChiTra
        {
            get { return idLoaiChiTra; }
            set { idLoaiChiTra = value; }
        }
        private string tenLoaiChiTra;
        public string TenLoaiChiTra
        {
            get { return tenLoaiChiTra; }
            set { tenLoaiChiTra = value; }
        }
    }
}
