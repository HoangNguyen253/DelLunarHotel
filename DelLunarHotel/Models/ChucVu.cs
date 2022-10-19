using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class ChucVu
    {
        private string idchucvu;
        private string tenchucvu;
        private int luongcoban;
        public string IDChucVu { get { return idchucvu; } set { idchucvu = value; } }
        public string TenChucVu { get { return tenchucvu; } set { tenchucvu = value; } }
        public int LuongCoBan { get { return luongcoban; } set { luongcoban = value; } }
    }
}
