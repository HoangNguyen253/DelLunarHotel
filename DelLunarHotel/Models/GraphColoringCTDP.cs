using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DelLunarHotel.Models
{
    public class GraphColoringCTDP
    {
        //Attribute
        public int CTDPID { get; set; }
        public List<int> degreeOverlap { get; set; }
        public int groupID { get; set; }
#pragma warning disable CS8632 // The annotation for nullable reference types should only be used in code within a '#nullable' annotations context.
        public string? dsDoAn { get; set; }
        private string? idphong;
#pragma warning restore CS8632 // The annotation for nullable reference types should only be used in code within a '#nullable' annotations context.

        private string iddatphong;
        
        private DateTime ngaydeno;
        private DateTime ngayroidi;
        private DateTime? checkin;
        private int tructuyen;
        private int sotiendathanhtoan;
        private byte dathanhtoan;
        public string IDDatPhong { get { return iddatphong; } set { iddatphong = value; } }
        public string IDPhong { get { return idphong; } set { idphong = value; } }
        public DateTime NgayDenO { get { return ngaydeno; } set { ngaydeno = value; } }
        public DateTime NgayRoiDi { get { return ngayroidi; } set { ngayroidi = value; } }
        public DateTime? CheckIn { get { return checkin; } set { checkin = value; } }
        public int TrucTuyen { get { return tructuyen; } set { tructuyen = value; } }
        public int SoTienDaThanhToan { get { return sotiendathanhtoan; } set { sotiendathanhtoan = value; } }
        public byte DaThanhToan { get { return dathanhtoan; } set { dathanhtoan = value; } }

        //Method

        public GraphColoringCTDP()
        {
            degreeOverlap = new List<int>();
        }
    }
}
