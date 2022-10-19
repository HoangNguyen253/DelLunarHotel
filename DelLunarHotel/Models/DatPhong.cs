using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class DatPhong
    {
        private string iddatphong;
        private string idkhachdat;
        private DateTime thoigiandat;
        public string IDDatPhong { get { return iddatphong; } set { iddatphong = value; } }
        public string IDKhachDat { get { return idkhachdat; } set { idkhachdat = value; } }
        public DateTime ThoiGianDat { get { return thoigiandat; } set { thoigiandat = value; } }
    }
}
