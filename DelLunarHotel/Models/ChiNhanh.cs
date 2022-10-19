using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class ChiNhanh
    {
        private string idchinhanh;
        private string diachi;
        private int sotang;
        public string IDChiNhanh { get { return idchinhanh; } set { idchinhanh = value; } }
        public string DiaChi { get { return diachi; } set { diachi = value; } }
        public int SoTang { get { return sotang; } set { sotang = value; } }
    }
}
