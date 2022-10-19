using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class BookRoom
    {
        public string maLoaiPhong { get; set; }
        public int soNguoiO { get; set; }
        public DateTime checkIn { get; set; }
        public DateTime checkOut { get; set; }
        public string dsDoAn { get; set; }
    }
}
