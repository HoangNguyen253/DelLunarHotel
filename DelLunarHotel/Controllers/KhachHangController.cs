using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DelLunarHotel.Models;
using Microsoft.AspNetCore.Http;
using System.Text;
using System.Web;
using System.IO;

namespace DelLunarHotel.Controllers
{
    public class KhachHangController : Controller
    {
        const string SessionKeyUser = "_User";
        public IActionResult ViewInfoUser()
        {
            if (HttpContext.Session.Get<KhachHang>(SessionKeyUser) != null)
            {
                KhachHang kh = HttpContext.Session.Get<KhachHang>(SessionKeyUser);
                ViewData["KH"] = kh;
                StoreContext storeContext = new StoreContext();
                ViewData["LKH"] = storeContext.GetDiscountInfoByLoaiKH(kh.LoaiKH);
                return View();
            }
            return Redirect("/Home/Index");
        }
        public IActionResult LogOutUser()
        {
            HttpContext.Session.Set<KhachHang>(SessionKeyUser, null);
            return Redirect("/Home/Index");
        }
        public IActionResult ViewChangeInfo()
        {
            if (HttpContext.Session.Get<KhachHang>(SessionKeyUser) != null)
            {
                KhachHang kh = HttpContext.Session.Get<KhachHang>(SessionKeyUser);
                ViewData["KH"] = kh;
                return View();
            }
            return Redirect("/Home/Index");
        } 
        public string resultUpdate(string kq)
        {
            return kq;
        }
        public IActionResult ChangeInfo(IFormCollection form)
        {
            string Ho = form["Ho"].ToString();
            string Ten = form["Ten"].ToString();
            DateTime NgaySinh = Convert.ToDateTime(form["NgaySinh"]);
            byte GioiTinh = Convert.ToByte(form["GioiTinh"]);
            string SDT = form["SDT"].ToString();
            string Email = form["Email"].ToString();
            KhachHang oldInfo = HttpContext.Session.Get<KhachHang>(SessionKeyUser);
            if (oldInfo != null)
            {
                KhachHang kh = new KhachHang() {
                    IDKhachHang = oldInfo.IDKhachHang,
                    Ho = Ho,
                    Ten = Ten,
                    NgaySinh = NgaySinh,
                    GioiTinh =GioiTinh,
                    SDT = SDT,
                    Email = Email
                };
                StoreContext storeContext = new StoreContext();
                if (storeContext.UpdateInfoUser(kh))
                {
                    KhachHang newKH = storeContext.GetKhachHangByID(oldInfo.IDKhachHang, oldInfo.MatKhau);
                    HttpContext.Session.Set<KhachHang>(SessionKeyUser, newKH);
                    return RedirectToAction("resultUpdate", new { kq = "OK"});
                }
                else
                {
                    return RedirectToAction("resultUpdate", new { kq = "FAIL" });
                }    
                
            }
            return Redirect("/Home/Index");
            
        }
        public IActionResult ForgetPassword()
        {
            if (HttpContext.Session.Get<KhachHang>(SessionKeyUser) != null)
            {
                return Redirect("/Home/Index");
            }
            return View();
        }
        public string GetMailByID(string CCCD)
        {
            StoreContext storeContext = new StoreContext();
            string eMail = storeContext.GetMailKH(CCCD);
            if (eMail == null)
            {
                return "";
            }    
            else
            {
                string result = "";
                bool kt = true;
                for (int i = 0; i < eMail.Length; i++)
                {
                    if (eMail[i] == '@')
                    {
                        kt = false;
                    }    
                    if (i<4 || kt == false)
                    {
                        result += eMail[i];
                    }    
                    else
                    {
                        result += "*";
                    }    
                }
                return result;
            }    
        }
        private string GenerateNewPass()
        {
            int length = 8;
            const string valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            StringBuilder res = new StringBuilder();
            Random rnd = new Random();
            while (0 < length--)
            {
                res.Append(valid[rnd.Next(valid.Length)]);
            }
            return res.ToString();
        }
        public string CheckValidCCCDandEmail(string CCCD, string Email)
        {
            StoreContext storeContext = new StoreContext();
            bool kt = storeContext.CheckValidCCCDandEmail(CCCD, Email);
            if (kt)
            {
                string newPass = GenerateNewPass();
                if (storeContext.UpdateMatKhau(CCCD, newPass))
                {
                    string bodyMail = "<h2>Del Lunar kính chào quý khách</h2><p >Mật khẩu mới của quý khách là: " + newPass + "</p>";
                    clsMail mail = new clsMail();
                    mail.Send(Email, "Mật khẩu mới", bodyMail);
                    return "OK";
                }
                return "FAIL";
            }    
            else
            {
                return "FAIL";
            } 
        }
        public IActionResult ViewChangePass()
        {
            if (HttpContext.Session.Get<KhachHang>(SessionKeyUser) != null)
            {
                return View();
            }
            return Redirect("/Home/Index");
        }
        public string ChangePassForUser(string oldPass, string newPass, string confirmPass)
        {
            if (newPass =="" || oldPass == "" || confirmPass == "")
            {
                return "FAIL";
            }
            else
            {
                if (confirmPass != newPass)
                {
                    return "FAIL";
                }
                else
                {
                    KhachHang kh = HttpContext.Session.Get<KhachHang>(SessionKeyUser);
                    if (oldPass!=kh.MatKhau)
                    {
                        return "FAIL";
                    }   
                    else
                    {
                        StoreContext storeContext = new StoreContext();
                        if (storeContext.UpdateMatKhau(kh.IDKhachHang, newPass))
                        {
                            return "OK";
                        }
                        return "FAIL";
                    }    
                }    
            }    
        }
        public string UploadImage(IFormFile file)
        {
            KhachHang kh = HttpContext.Session.Get<KhachHang>(SessionKeyUser);
            string IDKhachHang = kh.IDKhachHang;
            StoreContext storeContext = new StoreContext();
            string path = "/assets/User/" + IDKhachHang + DateTime.Now.ToString("yyyy-MM-dd-HH-mm-ss") + file.FileName;
            string pathinsert = "wwwroot" + path;
            using (var filestream = new FileStream(Path.Combine(pathinsert), FileMode.Create))
            {
                file.CopyToAsync(filestream);
                storeContext.UpdateImage(path, IDKhachHang);
                kh.Avt = path;
                HttpContext.Session.Set<KhachHang>(SessionKeyUser, kh);
                return path;
            }
        }
    }
}
