using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class ChiTra
    {
        private int idloaichitra;
        private DateTime thoigian;
        private string ghichu;
        private int sotienchitra;
        public int IDLoaiChiTra { get { return idloaichitra; } set { idloaichitra = value; } }
        public DateTime ThoiGian { get { return thoigian; } set { thoigian = value; } }
        public string GhiChu { get { return ghichu; } set { ghichu = value; } }
        public int SoTienChiTra { get { return sotienchitra; } set { sotienchitra = value; } }
    }
}
