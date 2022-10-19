using DelLunarHotel.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;

namespace DelLunarHotel.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        const string SessionKeyAvailableRooms = "_AvailableRooms";
        const string SessionKeyUser = "_User";
        const string SessionKeyStaff = "_Staff";
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            string ss = HttpContext.Session.GetString(SessionKeyAvailableRooms);
            ViewData["ss"] = ss;
            return View();
        }
        public IActionResult CompareRoom()
        {
            return View();
        }
        public IActionResult Room()
        {
            return View();
        }
        public IActionResult Dining()
        {
            return View();
        }
        public IActionResult Facility()
        {
            return View();
        }
        public IActionResult Promotion()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();
        }
        public IActionResult RoomDeluxe()
        {
            return View();
        }
        public IActionResult RoomStandard()
        {
            return View();
        }
        public IActionResult RoomSuite()
        {
            return View();
        }
        public IActionResult RoomSuperior()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        [HttpPost]
        public string CheckLogin(IFormCollection form)
        {
            string usercccd = form["usercccd_inform"].ToString();
            string userpass = form["userpass_inform"].ToString();
            StoreContext storeContext = new StoreContext();
            KhachHang kh = storeContext.GetKhachHangByID(usercccd, userpass);
            if (kh == null)
            {
                NhanVien nv = storeContext.GetNhanVienByID(usercccd, userpass);
                if (nv == null)
                    return "false";
                else
                {
                    HttpContext.Session.Set<NhanVien>(SessionKeyStaff, nv);
                    return "staff_role";
                }   
            }
            HttpContext.Session.Set<KhachHang>(SessionKeyUser, kh);
            return "true";
        }
        public string CheckRegistry(IFormCollection form)
        {
            string usercccd_registryform = form["usercccd_registryform"].ToString();
            string userfirstname_registryform = form["userfirstname_registryform"].ToString();
            string userlastname_registryform = form["userlastname_registryform"].ToString();
            DateTime userdatebirth_registryform;
            if (form["userdatebirth_registryform"] != "")
            {
                 userdatebirth_registryform = Convert.ToDateTime(form["userdatebirth_registryform"]);
            }
            else  userdatebirth_registryform = DateTime.Now;
            byte usergender_registryform = Convert.ToByte(form["usergender_registryform"]);
            string useremail_registryform = form["useremail_registryform"].ToString();
            string usertele_registryform = form["usertele_registryform"].ToString();
            string userpswd_registryform = form["userpswd_registryform"].ToString();
            KhachHang kh = new KhachHang
            {
                IDKhachHang = usercccd_registryform,
                Ho = userfirstname_registryform,
                Ten = userlastname_registryform,
                NgaySinh = userdatebirth_registryform,
                NgayDangKy = DateTime.Now,
                GioiTinh = usergender_registryform,
                Email = useremail_registryform,
                SDT = usertele_registryform,
                MatKhau = userpswd_registryform
            };
            StoreContext storeContext = new StoreContext();
            if (storeContext.InsertKhachHang(kh))
            {
                HttpContext.Session.Set<KhachHang>(SessionKeyUser, kh);
                return "true";
            }
            return "false";
        }
        public JsonResult GetUserBySS()
        {
            return Json(HttpContext.Session.Get<KhachHang>(SessionKeyUser));
        }
    }
}
