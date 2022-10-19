using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class DoAn
    {
        private int iddoan;
        private string tendoan;
        private string linkimg;
        private int gia;
        public int IDDoAn { get { return iddoan; } set { iddoan = value; } }
        public string TenDoAn { get { return tendoan; } set { tendoan = value; } }
        public string LinkIMG { get { return linkimg; } set { linkimg = value; } }
        public int Gia { get { return gia; } set { gia = value; } }
    }
}
