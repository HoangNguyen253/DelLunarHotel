using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Http;

namespace DelLunarHotel.Models
{
    public class StoreContext
    {
        public string ConnectionString { get; set; }
        public StoreContext() {
            this.ConnectionString = "server = 127.0.0.1; user id = root; password =; port = 3307; database = dellunarhotel;";
        }
        public StoreContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }
        private MySqlConnection GetConnection()
        {
            return (new MySqlConnection(ConnectionString));
        }
        public void UpdateImage(string path, string IDKhachHang)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "UPDATE khachhang " +
                    "SET Avt=@Avt " +
                    "WHERE IDKhachHang=@IDKhachHang;";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("IDKhachHang", IDKhachHang);
                cmd.Parameters.AddWithValue("Avt", path);
                cmd.ExecuteNonQuery();
            }
        }
        public void InsertChiTietDoAn(string str)
        {
                using (MySqlConnection conncheck = this.GetConnection())
                {
                    conncheck.Open();
                    MySqlCommand cmd = new MySqlCommand(str, conncheck);
                try
                {
                    int check = cmd.ExecuteNonQuery();
                }
                catch(MySqlException)
                {
                    return;
                }
                }
        }
        public bool InsertBookRoom(InputProcBookRoom FinalBook)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "BookRoom";
                MySqlCommand cmd = new MySqlCommand(str, conn);

                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@deletePhong", FinalBook.delete_CTDatPhong_Query);
                cmd.Parameters["@deletePhong"].Direction = ParameterDirection.Input;
                cmd.Parameters.AddWithValue("@countDEL_Phong", FinalBook.count_delete_CTDatPhong_Query);
                cmd.Parameters["@countDEL_Phong"].Direction = ParameterDirection.Input;

                cmd.Parameters.AddWithValue("@deleteDoAn", FinalBook.delete_CTDoAn_Query);
                cmd.Parameters["@deleteDoAn"].Direction = ParameterDirection.Input;
                cmd.Parameters.AddWithValue("@countDEL_DoAn", FinalBook.count_delete_CTDoAn_Query);
                cmd.Parameters["@countDEL_DoAn"].Direction = ParameterDirection.Input;

                cmd.Parameters.AddWithValue("@insertPhong", FinalBook.insert_CTDatPhong_Query.Remove(FinalBook.insert_CTDatPhong_Query.Length - 1, 1));
                cmd.Parameters["@insertPhong"].Direction = ParameterDirection.Input;

                cmd.Parameters.AddWithValue("@insertDoAn", FinalBook.insert_CTDoAn_Query.Remove(FinalBook.insert_CTDoAn_Query.Length - 1, 1));
                cmd.Parameters["@insertDoAn"].Direction = ParameterDirection.Input;
                cmd.Parameters.AddWithValue("@countINS_DoAn", FinalBook.count_insert_CTDoAn_Query);
                cmd.Parameters["@countINS_DoAn"].Direction = ParameterDirection.Input;

                cmd.Parameters.AddWithValue("@updateTichLuy", FinalBook.update_tientichluy);
                cmd.Parameters["@updateTichLuy"].Direction = ParameterDirection.Input;

                cmd.Parameters.Add("@isSucccess", MySqlDbType.Int32);
                cmd.Parameters["@isSucccess"].Direction = ParameterDirection.Output;
                cmd.ExecuteNonQuery();
                return Convert.ToBoolean(cmd.Parameters["@isSucccess"].Value);
            }
        }
        public int DeleteDatPhong(string idDatPhong)
        {
            using (MySqlConnection conncheck = this.GetConnection())
            {
                conncheck.Open();
                string str = "DELETE FROM DatPhong WHERE IDDatPhong = @iddatphong";
                MySqlCommand cmd = new MySqlCommand(str, conncheck);
                cmd.Parameters.AddWithValue("iddatphong", idDatPhong);
                int check = cmd.ExecuteNonQuery();
                return check;
            }
        }
        public string InsertDatPhong(string idkhachdat, string chiNhanh)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "InsertDatPhong";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@idkhachdat", idkhachdat);
                cmd.Parameters["@idkhachdat"].Direction = ParameterDirection.Input;

                cmd.Parameters.AddWithValue("@ThoiGian", DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
                cmd.Parameters["@ThoiGian"].Direction = ParameterDirection.Input;

                cmd.Parameters.AddWithValue("@vitri", chiNhanh);
                cmd.Parameters["@vitri"].Direction = ParameterDirection.Input;

                cmd.Parameters.Add("@iddp", MySqlDbType.VarChar);
                cmd.Parameters["@iddp"].Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();
                conn.Close();
                return (string) cmd.Parameters["@iddp"].Value;
            }
        }
        public KhachHang GetKhachHangByID(string usercccd, string userpass)
        {
            KhachHang kh = new KhachHang();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT * FROM KhachHang WHERE IDKhachHang = @usercccd";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("usercccd", usercccd);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        if (reader["MatKhau"].ToString() == userpass)
                        {
                            kh.IDKhachHang = reader["IDKhachHang"].ToString();
                            kh.MatKhau = reader["MatKhau"].ToString();
                            kh.Ho = reader["Ho"].ToString();
                            kh.Ten = reader["Ten"].ToString();
                            kh.Email = reader["Email"].ToString();
                            kh.SDT = reader["SDT"].ToString();
                            kh.Avt = reader["Avt"].ToString();
                            kh.LoaiKH = reader["LoaiKH"].ToString();
                            kh.GioiTinh = Convert.ToByte(reader["GioiTinh"]);
                            kh.NgaySinh = Convert.ToDateTime(reader["NgaySinh"].ToString());
                            return kh;
                        }
                        else return null;
                    }
                    else return null;
                }
            }
        }
        public bool GetKhachHangByID(KhachHang kh)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT * FROM KhachHang WHERE IDKhachHang = @usercccd";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("usercccd", kh.IDKhachHang);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
        }
        public bool CheckIfKhachHangDontHavePass(KhachHang kh)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT * FROM KhachHang WHERE IDKhachHang = @usercccd AND MatKhau is null;";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("usercccd", kh.IDKhachHang);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
        }
        public bool CheckValidCCCDandEmail(string CCCD, string Email)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT * FROM KhachHang WHERE IDKhachHang = @CCCD AND Email=@Email";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("CCCD", CCCD);
                cmd.Parameters.AddWithValue("Email", Email);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
        }
        public LoaiKhachHang GetDiscountInfoByLoaiKH(string LoaiKH)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT * FROM loaikhachhang WHERE LoaiKH = @LoaiKH";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("LoaiKH", LoaiKH);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        LoaiKhachHang lkh = new LoaiKhachHang();
                        while (reader.Read())
                        {
                            lkh.LoaiKH = reader["LoaiKH"].ToString();
                            lkh.TenLoaiKH = reader["TenLoaiKH"].ToString();
                            lkh.ChietKhauDoAn = Convert.ToInt32(reader["ChietKhauDoAn"]);
                            lkh.ChietKhauPhong = Convert.ToInt32(reader["ChietKhauPhong"]);
                            lkh.MoTa = reader["MoTa"].ToString();
                        }
                        return lkh;
                    }
                    else
                    {
                        return null ;
                    }
                }
            }
        }

        public bool InsertKhachHangDontCheck(KhachHang kh)
        {
            using (MySqlConnection conncheck = this.GetConnection())
            {
                conncheck.Open();
                var str = "INSERT INTO KhachHang(IDKhachHang, Ho, Ten, NgaySinh, NgayDangKy, GioiTinh, Email, SDT, MatKhau) " +
                "VALUES(@id, @ho, @ten, @ngaysinh, @ngaydangky, @gioitinh, @email, @sdt, @matkhau)";
                MySqlCommand cmd = new MySqlCommand(str, conncheck);
                cmd.Parameters.AddWithValue("id", kh.IDKhachHang);
                cmd.Parameters.AddWithValue("ho", kh.Ho);
                cmd.Parameters.AddWithValue("ten", kh.Ten);
                cmd.Parameters.AddWithValue("ngaysinh", kh.NgaySinh);
                cmd.Parameters.AddWithValue("ngaydangky", kh.NgayDangKy);
                cmd.Parameters.AddWithValue("gioitinh", kh.GioiTinh);
                cmd.Parameters.AddWithValue("email", kh.Email);
                cmd.Parameters.AddWithValue("sdt", kh.SDT);
                cmd.Parameters.AddWithValue("matkhau", kh.MatKhau);
                int check = cmd.ExecuteNonQuery();
                if (check > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        public bool UpdateKhachHangDontCheck(KhachHang kh)
        {
            using (MySqlConnection conncheck = this.GetConnection())
            {
                conncheck.Open();
                var str = "UPDATE KhachHang " +
                    "SET MatKhau=@matkhau, " +
                        "Ho=@ho, " +
                        "Ten=@ten, " +
                        "NgaySinh=@ngaysinh, " +
                        "NgayDangKy=@ngaydangky, " +
                        "GioiTinh=@gioitinh, " +
                        "Email=@email, " +
                        "SDT=@sdt " +
                        "WHERE IDKhachHang=@id;";
                MySqlCommand cmd = new MySqlCommand(str, conncheck);
                cmd.Parameters.AddWithValue("id", kh.IDKhachHang);
                cmd.Parameters.AddWithValue("ho", kh.Ho);
                cmd.Parameters.AddWithValue("ten", kh.Ten);
                cmd.Parameters.AddWithValue("ngaysinh", kh.NgaySinh);
                cmd.Parameters.AddWithValue("ngaydangky", kh.NgayDangKy);
                cmd.Parameters.AddWithValue("gioitinh", kh.GioiTinh);
                cmd.Parameters.AddWithValue("email", kh.Email);
                cmd.Parameters.AddWithValue("sdt", kh.SDT);
                cmd.Parameters.AddWithValue("matkhau", kh.MatKhau);
                int check = cmd.ExecuteNonQuery();
                if (check > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
        public bool InsertKhachHang(KhachHang kh)
        {
            if (this.GetKhachHangByID(kh))
            {
                if (CheckIfKhachHangDontHavePass(kh))
                {
                    return UpdateKhachHangDontCheck(kh);
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return InsertKhachHangDontCheck(kh);
                
            }
        }
        public string GetMailKH(string idkh)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT Email FROM KhachHang WHERE IDKhachHang = @usercccd";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("usercccd", idkh);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        string email = reader["Email"].ToString();
                        return email;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
        }
        public List<DoAn> GetDoAns()
        {
            List<DoAn> dsDoAn = new List<DoAn>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT * FROM DoAn";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dsDoAn.Add(new DoAn
                            {
                                IDDoAn = Convert.ToInt32(reader["IDDoAn"]),
                                LinkIMG = reader["LinkIMG"].ToString(),
                                Gia = Convert.ToInt32(reader["Gia"]),
                                TenDoAn = reader["TenDoAn"].ToString()
                            });
                        }
                        return dsDoAn;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
        }
        private int minDateIndex(DateTime date1, DateTime checkOut, int dateDiffCICO)
        {
            int diff = (int)(date1 - checkOut).TotalDays;
            if (diff > 0)
            {
                return dateDiffCICO;
            }    
            else
            {
                return dateDiffCICO + diff;
            }    
        }
        private int maxDateIndex(DateTime date1, DateTime checkIn)
        {
            int diff = (int)(date1 - checkIn).TotalDays;
            if (diff > 0)
            {
                return diff;
            }
            else
            {
                return 0;
            }
        }
        private void addState(ref int[] stateBooked, int beginIndex, int endIndex)
        {
            for (int i = beginIndex; i< endIndex;i++)
            {
                stateBooked[i]++;
            }    
        }
        private int maxAmountRoom(string checkinDay, string checkoutDay, int numberPeople, string branchHotel, string IDLoaiPhong)
        {
            DateTime CI = Convert.ToDateTime(checkinDay);
            DateTime CO = Convert.ToDateTime(checkoutDay);
            int dateDiffCICO = (int)(CO - CI).TotalDays + 1;
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                int[] stateBooked = new int[dateDiffCICO];
                string str = "SELECT NgayDenO, NgayRoiDi " +
                    "FROM (phong P1 INNER JOIN loaiphong LP ON P1.IDLoaiPhong = LP.IDLoaiPhong) " +
                        "INNER JOIN chitietdatphong CTDP1 ON P1.IDPhong = CTDP1.IDPhong " +
                    "WHERE P1.TrangThaiPhong <> 2 AND P1.IDLoaiPhong = @IDLoaiPhong AND P1.IDChiNhanh = @branchHotel AND P1.SoNguoiO = @numberPeople " +
                            "AND ((CTDP1.NgayDenO < @checkoutDay AND @checkoutDay <= CTDP1.NgayRoiDi) " +
                                "OR(CTDP1.NgayDenO <= @checkinDay AND @checkinDay < CTDP1.NgayRoiDi) " +
                                "OR(@checkinDay <= CTDP1.NgayDenO AND CTDP1.NgayRoiDi <= @checkoutDay)) ";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("checkinDay", checkinDay);
                cmd.Parameters.AddWithValue("checkoutDay", checkoutDay);
                cmd.Parameters.AddWithValue("branchHotel", branchHotel);
                cmd.Parameters.AddWithValue("numberPeople", numberPeople);
                cmd.Parameters.AddWithValue("IDLoaiPhong", IDLoaiPhong);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        DateTime ngayDenO = Convert.ToDateTime(reader["NgayDenO"].ToString());
                        DateTime ngayRoiDi = Convert.ToDateTime(reader["NgayRoiDi"].ToString());

                        int beginIndex = maxDateIndex(ngayDenO, CI);
                        int endIndex = minDateIndex(ngayRoiDi.AddDays(-1), CO, dateDiffCICO);

                        addState(ref stateBooked, beginIndex, endIndex);
                    }
                }
                return stateBooked.Max();
            }
            
        }
        public List<object> GetPhongsByFilter(string checkinDay, string checkoutDay, int numberPeople, string branchHotel)
        {
            List<object> dsPhongTrong = new List<object>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT P1.IDLoaiPhong, TenLoaiPhong, TuLanh, MayLanh, LP.LinkIMG, GiaTien, KichThuocPhong, COUNT(*) AS SL " +
                    "FROM phong P1 INNER JOIN loaiphong LP ON P1.IDLoaiPhong = LP.IDLoaiPhong " +
                    "WHERE P1.TrangThaiPhong <> 2 AND P1.IDLoaiPhong <> 'BAC' AND P1.IDChiNhanh = @branchHotel AND P1.SoNguoiO = @numberPeople " +
                    "GROUP BY P1.IDLoaiPhong;";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("checkinDay", checkinDay);
                cmd.Parameters.AddWithValue("checkoutDay", checkoutDay);
                cmd.Parameters.AddWithValue("branchHotel", branchHotel);
                cmd.Parameters.AddWithValue("numberPeople", numberPeople);
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        int maxBooked = maxAmountRoom(checkinDay, checkoutDay, numberPeople, branchHotel, reader["IDLoaiPhong"].ToString());
                        int soLuong = Int32.Parse(reader["SL"].ToString());
                        if (soLuong - maxBooked!=0)
                        {
                            dsPhongTrong.Add(new
                            {
                                checkinDay = checkinDay,
                                checkoutDay = checkoutDay,
                                numberPeople = numberPeople,
                                idLoaiPhong = reader["IDLoaiPhong"].ToString(),
                                tenLoaiPhong = reader["TenLoaiPhong"].ToString(),
                                kichThuocPhong = reader["KichThuocPhong"].ToString(),
                                tuLanh = Convert.ToInt32(reader["TuLanh"]),
                                mayLanh = Convert.ToInt32(reader["MayLanh"]),
                                giaTien = Int32.Parse(reader["GiaTien"].ToString()),
                                linkIMG = reader["LinkIMG"].ToString(),
                                sl = soLuong - maxBooked
                            });
                        }   
                    }
                }
            }
            return dsPhongTrong;
        }
        public List<ChiTietDatPhong> GetChiTietDatPhongByOneBookRoom(string IDLoaiPhong, int SoNguoiO, string IDChiNhanh)
        {
            List<ChiTietDatPhong> lstCTDP = new List<ChiTietDatPhong>();
            string _today = DateTime.Now.ToString("yyyy-MM-dd");
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT IDDatPhong, p.IDPhong, NgayDenO, NgayRoiDi, CheckIn, SoTienDaThanhToan, TrucTuyen " +
                    "FROM phong p INNER JOIN chitietdatphong ctdp ON p.IDPhong = ctdp.IDPhong " +
                    "WHERE p.TrangThaiPhong <> 2 AND p.IDLoaiPhong = @IDLoaiPhong AND p.SoNguoiO = @SoNguoiO AND ctdp.NgayRoiDi > @ToDay AND IDChiNhanh = @IDChiNhanh";

                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("IDLoaiPhong", IDLoaiPhong);
                cmd.Parameters.AddWithValue("IDChiNhanh", IDChiNhanh);
                cmd.Parameters.AddWithValue("SoNguoiO", SoNguoiO);
                cmd.Parameters.AddWithValue("ToDay", _today);
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        DateTime? ci = null;
                        if (reader["CheckIn"] != DBNull.Value)
                        {
                            ci = Convert.ToDateTime(reader["CheckIn"]);
                        }    
                        lstCTDP.Add(new ChiTietDatPhong()
                        {
                            IDDatPhong = reader["IDDatPhong"].ToString(),
                            IDPhong = reader["IDPhong"].ToString(),
                            CheckIn = ci,
                            SoTienDaThanhToan = Convert.ToInt32(reader["SoTienDaThanhToan"]),
                            TrucTuyen = Convert.ToByte(reader["TrucTuyen"]),
                            NgayDenO = Convert.ToDateTime(reader["NgayDenO"].ToString()),
                            NgayRoiDi = Convert.ToDateTime(reader["NgayRoiDi"].ToString())
                        });
                    }
                }
            }
            return lstCTDP;
        }
        public int GetAllowRoomNumber(string IDLoaiPhong, int SoNguoiO, string IDChiNhanh)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT Count(*) as SL " +
                    "FROM phong " +
                    "WHERE IDLoaiPhong = @IDLoaiPhong AND SoNguoiO = @SoNguoiO AND IDChiNhanh = @IDChiNhanh AND TrangThaiPhong <> 2 ";


                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("IDLoaiPhong", IDLoaiPhong);
                cmd.Parameters.AddWithValue("IDChiNhanh", IDChiNhanh);
                cmd.Parameters.AddWithValue("SoNguoiO", SoNguoiO);
                using (var reader = cmd.ExecuteReader())
                {
                    reader.Read();
                    return Convert.ToInt32(reader["SL"]);   
                }
            }
        }
        public List<string> GetAllowRoom(string IDLoaiPhong, int SoNguoiO, string IDChiNhanh)
        {
            List<string> listMaPhong = new List<string>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT IDPhong " +
                    "FROM phong " +
                    "WHERE IDLoaiPhong = @IDLoaiPhong AND SoNguoiO = @SoNguoiO AND IDChiNhanh = @IDChiNhanh AND TrangThaiPhong <> 2 ";


                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("IDLoaiPhong", IDLoaiPhong);
                cmd.Parameters.AddWithValue("IDChiNhanh", IDChiNhanh);
                cmd.Parameters.AddWithValue("SoNguoiO", SoNguoiO);
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        listMaPhong.Add(reader["IDPhong"].ToString());
                    }
                }
            }
            return listMaPhong;
        }
        public List<LoaiPhong> GetGiaLoaiPhong()
        {
            List<LoaiPhong> listLoaiPhong = new List<LoaiPhong>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT * FROM loaiphong";

                MySqlCommand cmd = new MySqlCommand(str, conn);
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        listLoaiPhong.Add(new LoaiPhong()
                        {
                            IDLoaiPhong=reader["IDLoaiPhong"].ToString(),
                            GiaTien=Convert.ToInt32(reader["GiaTien"]),
                            TenLoaiPhong=reader["TenLoaiPhong"].ToString()
                        });
                    }
                }
            }
            return listLoaiPhong;
        }
        public List<DoAn> GetGiaDoAn()
        {
            List<DoAn> doAns = new List<DoAn>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT * FROM doan";

                MySqlCommand cmd = new MySqlCommand(str, conn);
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        doAns.Add(new DoAn()
                        {
                            IDDoAn = Convert.ToInt32(reader["IDDoAn"]),
                            Gia = Convert.ToInt32(reader["Gia"]),
                            TenDoAn = reader["TenDoAn"].ToString()
                        });
                    }
                }
            }
            return doAns;
        }
        public List<ChiTietDatDoAn> GetChiTietDatDoAnsOfOneRoom(string IDDatPhong, string IDPhong, DateTime NgayDenO)
        {
            List<ChiTietDatDoAn> chiTietDatDoAns = new List<ChiTietDatDoAn>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDDoAn, ThoiGianDat, SoLuong, DaThanhToan " +
                    "FROM chitietdatdoan " +
                    "WHERE IDDatPhong=@IDDatPhong AND IDPhong=@IDPhong AND NgayDenO=@NgayDenO;";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("IDDatPhong", IDDatPhong);
                cmd.Parameters.AddWithValue("IDPhong", IDPhong);
                cmd.Parameters.AddWithValue("NgayDenO", NgayDenO.ToString("yyyy-MM-dd"));
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            chiTietDatDoAns.Add(new ChiTietDatDoAn()
                            {
                                IDDoAn = Convert.ToInt32(reader["IDDoAn"]),
                                ThoiGianDat = Convert.ToDateTime(reader["ThoiGianDat"]),
                                SoLuong = Convert.ToInt32(reader["SoLuong"]),
                                DaThanhToan = Convert.ToByte(reader["DaThanhToan"])
                            });
                        }
                    }    
                }    
            }
            return chiTietDatDoAns;
        }
        public bool UpdateInfoUser(KhachHang kh)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "UPDATE khachhang " +
                    "SET Ten=@Ten, " +
                    "Ho=@Ho, " +
                    "SDT=@SDT, " +
                    "Email=@Email, " +
                    "NgaySinh=@NgaySinh, " +
                    "GioiTinh=@GioiTinh " +
                    "WHERE IDKhachHang=@IDKhachHang;";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("Ten", kh.Ten);
                cmd.Parameters.AddWithValue("Ho", kh.Ho);
                cmd.Parameters.AddWithValue("SDT", kh.SDT);
                cmd.Parameters.AddWithValue("Email", kh.Email);
                cmd.Parameters.AddWithValue("NgaySinh", kh.NgaySinh.ToString("yyyy-MM-dd"));
                cmd.Parameters.AddWithValue("GioiTinh", kh.GioiTinh);
                cmd.Parameters.AddWithValue("IDKhachHang", kh.IDKhachHang);
                int count = cmd.ExecuteNonQuery();
                if (count==0)
                {
                    return false;
                }  
                else
                {
                    return true;
                }    
            }
        }
        public bool UpdateMatKhau(string IDKhachHang, string MatKhau)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "UPDATE khachhang " +
                    "SET MatKhau=@MatKhau " +
                    "WHERE IDKhachHang=@IDKhachHang;";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("MatKhau", MatKhau);
                cmd.Parameters.AddWithValue("IDKhachHang", IDKhachHang);
                int count = cmd.ExecuteNonQuery();
                if (count == 0)
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }
        }



        //Code mới
        public NhanVien GetNhanVienByID(string staffcccd, string staffpass)
        {
            NhanVien nv = new NhanVien();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT * FROM NhanVien WHERE IDNhanVien = @staffcccd";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("staffcccd", staffcccd);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        if (reader["MatKhau"].ToString() == staffpass)
                        {
                            nv.IDNhanVien = reader["IDNhanVien"].ToString();
                            nv.Ho = reader["Ho"].ToString();
                            nv.Ten = reader["Ten"].ToString();
                            nv.Email = reader["Email"].ToString();
                            nv.SDT = reader["SDT"].ToString();
                            nv.GioiTinh = Convert.ToByte(reader["GioiTinh"]);
                            nv.NgaySinh = Convert.ToDateTime(reader["NgaySinh"].ToString());
                            nv.IDChucVu = reader["IDChucVu"].ToString();
                            nv.IDChiNhanh = reader["IDChiNhanh"].ToString();
                            nv.NgayVaoLam = Convert.ToDateTime(reader["NgayVaoLam"].ToString());
                            return nv;
                        }
                        else return null;
                    }
                    else return null;
                }
            }
        }
        public List<object> GetPhongForSDP(string machinhanh)
        {
            List<object> dsPhong = new List<object>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                //string str = "SELECT phong.IDPhong, phong.IDChiNhanh, SoPhong, Tang, IDLoaiPhong, phong.SoNguoiO, TrangThaiPhong, MIN(NgayDenO) AS NgayDenO, NgayRoiDi, CheckIn, kh.Ten" +
                //                " FROM phong LEFT JOIN ((chitietdatphong ctdp inner join datphong dp on ctdp.IDDatPhong = dp.IDDatPhong) inner join khachhang kh on kh.IDKhachHang = dp.IDKhachDat ) on phong.IDPhong = ctdp.IDPhong" +
                //                " WHERE(DaThanhToan = 0 OR  DaThanhToan is null OR TrangThaiPhong = 0 OR TrangThaiPhong = 2 OR TrangThaiPhong =3) AND IDChiNhanh = @machinhanh " +
                //                " GROUP BY phong.IDPhong" +
                //                " ORDER BY Tang ASC, SoPhong ASC";
                string str = "SELECT p1.IDPhong, p1.IDChiNhanh, SoPhong, Tang, IDLoaiPhong, p1.SoNguoiO, TrangThaiPhong, MIN(NgayDenO) AS NgayDenO, NgayRoiDi, CheckIn, kh.Ten" +
                                " FROM phong p1 LEFT JOIN((chitietdatphong ctdp1 inner join datphong dp on ctdp1.IDDatPhong = dp.IDDatPhong) inner join khachhang kh on kh.IDKhachHang = dp.IDKhachDat ) on p1.IDPhong = ctdp1.IDPhong" +
                                " WHERE(((DaThanhToan = 0 OR  DaThanhToan is null) AND NgayDenO = (SELECT MIN(NgayDenO)" +
                                " FROM phong p2 LEFT JOIN chitietdatphong ctdp2 on p2.IDPhong = ctdp2.IDPhong" +
                                " WHERE(DaThanhToan = 0 OR  DaThanhToan is null OR TrangThaiPhong = 0 OR TrangThaiPhong = 2 OR TrangThaiPhong = 3) AND IDChiNhanh = @machinhanh AND p1.IDPhong = p2.IDPhong" +
                                " GROUP BY p2.IDPhong)) OR TrangThaiPhong = 0 OR TrangThaiPhong = 2 OR TrangThaiPhong = 3) AND IDChiNhanh = @machinhanh" +
                                " GROUP BY p1.IDPhong" +
                                " ORDER BY Tang ASC, SoPhong ASC;";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("@machinhanh", machinhanh);
                using (var reader = cmd.ExecuteReader())
                {
                    string loaiphong = "";
                    string ngayRoiDi = "";
                    string ngayDenO = "";
                    while (reader.Read())
                    {
                        ngayDenO = reader["NgayDenO"].ToString();
                        ngayRoiDi = reader["NgayRoiDi"].ToString();
                        if (ngayDenO != "")
                        {
                            ngayDenO = (Convert.ToDateTime(ngayDenO)).ToString("MM-dd-yyyy");
                        }
                        else
                        {
                            ngayDenO = "01-01-2000";
                        }
                        if (ngayRoiDi != "")
                        {
                            ngayRoiDi = (Convert.ToDateTime(ngayRoiDi)).ToString("MM-dd-yyyy");
                        }
                        else
                        {
                            ngayRoiDi = "01-01-2000";
                        }
                        if (reader["IDLoaiPhong"].ToString() == "STA")
                        {
                            loaiphong = "Standard";
                        }
                        else if (reader["IDLoaiPhong"].ToString() == "BAC")
                        {
                            loaiphong = "Backup";
                        }
                        else if (reader["IDLoaiPhong"].ToString() == "DEL")
                        {
                            loaiphong = "Deluxe";
                        }
                        else if (reader["IDLoaiPhong"].ToString() == "SUP")
                        {
                            loaiphong = "Superior";
                        }
                        else if (reader["IDLoaiPhong"].ToString() == "SUI")
                        {
                            loaiphong = "Suite";
                        }
                        dsPhong.Add(new
                        {
                            idPhong = reader["IDPhong"].ToString(),
                            idChiNhanh = reader["IDChiNhanh"].ToString(),
                            soPhong = reader["SoPhong"].ToString(),
                            tang = reader["Tang"].ToString(),
                            idLoaiPhong = loaiphong.ToString(),
                            soNguoiO = reader["SoNguoiO"].ToString(),
                            checkIn = reader["CheckIn"].ToString(),
                            trangThaiPhong = Convert.ToInt32(reader["TrangThaiPhong"].ToString()),
                            ngayDenO = ngayDenO,
                            ngayRoiDi = ngayRoiDi,
                            tenKH = reader["Ten"].ToString()
                        });
                    }
                }
            }
            return dsPhong;
        }
        public List<object> GetPhongForSDPByFilter(string machinhanh, string ngaydeno, string ngayroidi, int songuoio, string maloaiphong)
        {
            List<object> dsPhong = new List<object>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT phong.IDPhong, phong.IDChiNhanh, SoPhong, Tang, IDLoaiPhong, phong.SoNguoiO, TrangThaiPhong, MIN(NgayDenO) AS NgayDenO, CheckIn" +
                                " FROM phong LEFT JOIN chitietdatphong ctdp on phong.IDPhong = ctdp.IDPhong" +
                                " WHERE(TrangThaiPhong = 0 OR (TrangThaiPhong = 1 AND DaThanhToan = 0)) AND IDChiNhanh = @machinhanh AND phong.SoNguoiO = @songuoio AND phong.IDLoaiPhong = @maloaiphong" +
                                " GROUP BY phong.IDPhong " +
                                " HAVING (MIN(NgayDenO) >= @ngayroidi OR MIN(NgayDenO) is Null)" +
                                " ORDER BY Tang ASC, SoPhong ASC";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("@machinhanh", machinhanh);
                cmd.Parameters.AddWithValue("@songuoio", songuoio);
                cmd.Parameters.AddWithValue("@maloaiphong", maloaiphong);
                cmd.Parameters.AddWithValue("@ngayroidi", ngayroidi);
                using (var reader = cmd.ExecuteReader())
                {
                    string loaiphong = "";
                    string ngayDenO = "";
                    while (reader.Read())
                    {
                        ngayDenO = reader["NgayDenO"].ToString();
                        if (ngayDenO != "")
                        {
                            ngayDenO = (Convert.ToDateTime(ngayDenO)).ToString("MM-dd-yyyy");
                        }
                        else
                        {
                            ngayDenO = "01-01-2000";
                        }
                        if (reader["IDLoaiPhong"].ToString() == "STA")
                        {
                            loaiphong = "Standard";
                        }
                        else if (reader["IDLoaiPhong"].ToString() == "BAC")
                        {
                            loaiphong = "Backup";
                        }
                        else if (reader["IDLoaiPhong"].ToString() == "DEL")
                        {
                            loaiphong = "Deluxe";
                        }
                        else if (reader["IDLoaiPhong"].ToString() == "SUP")
                        {
                            loaiphong = "Superior";
                        }
                        else if (reader["IDLoaiPhong"].ToString() == "SUI")
                        {
                            loaiphong = "Suite";
                        }
                        dsPhong.Add(new
                        {
                            idPhong = reader["IDPhong"].ToString(),
                            idChiNhanh = reader["IDChiNhanh"].ToString(),
                            soPhong = reader["SoPhong"].ToString(),
                            tang = reader["Tang"].ToString(),
                            idLoaiPhong = loaiphong.ToString(),
                            soNguoiO = reader["SoNguoiO"].ToString(),
                            checkIn = reader["CheckIn"].ToString(),
                            trangThaiPhong = Convert.ToInt32(reader["TrangThaiPhong"].ToString()),
                            ngayDenO = ngayDenO
                        });
                    }
                }
            }
            return dsPhong;
        }
        public bool UpdateStatusFixedForRoom(string IDPhong)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "UPDATE phong " +
                    "SET TrangThaiPhong = 2 " +
                    "WHERE IDPhong = @maphong ";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("maphong", IDPhong);
                int k = cmd.ExecuteNonQuery();
                if (k > 0)
                    return true;
                return false;
            }
        }

        public string UpdateStatusReadyForRoom(string IDPhong)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT * " +
                            "FROM chitietdatphong " +
                            "WHERE IDPhong = @maphong AND NgayDenO = CURDATE() AND DaThanhToan = 0";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("maphong", IDPhong);
                bool kt = false;
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        kt = true;
                    }
                    else
                    {
                        kt = false;
                    }
                }
                if (kt)
                {
                    var str_update = "UPDATE phong" +
                                    " SET TrangThaiPhong = 1 " +
                                    "WHERE IDPhong = @maphong";
                    MySqlCommand cmd_update = new MySqlCommand(str_update, conn);
                    cmd_update.Parameters.AddWithValue("maphong", IDPhong);
                    int check = cmd_update.ExecuteNonQuery();
                    if (check > 0)
                    {
                        var str_name = "SELECT MIN(NgayDenO) AS NgayDenO, NgayRoiDi, kh.Ten" +
                                    " FROM phong p1 LEFT JOIN((chitietdatphong ctdp inner join datphong dp on ctdp.IDDatPhong = dp.IDDatPhong) inner join khachhang kh on kh.IDKhachHang = dp.IDKhachDat ) on p1.IDPhong = ctdp.IDPhong" +
                                    " WHERE(DaThanhToan = 0 AND p1.IDPhong = 'HCM0203' and NgayDenO = (SELECT MIN(NgayDenO)" +
                                    " FROM phong p2 LEFT JOIN chitietdatphong ctdp2 on p2.IDPhong = ctdp2.IDPhong" +
                                    " WHERE(DaThanhToan = 0 AND p2.IDPhong = p1.IDPhong)" +
                                    " GROUP BY p2.IDPhong))" +
                                    " GROUP BY p1.IDPhong";
                        MySqlCommand cmd_name = new MySqlCommand(str_name, conn);
                        cmd_name.Parameters.AddWithValue("maphong", IDPhong);
                        using (var reader_name = cmd_name.ExecuteReader())
                        {
                            reader_name.Read();
                            string name = reader_name["Ten"].ToString();
                            string ngayDenO = reader_name["NgayDenO"].ToString();
                            string ngayRoiDi = reader_name["NgayRoiDi"].ToString();
                            ngayDenO = (Convert.ToDateTime(ngayDenO)).ToString("MM-dd-yyyy");
                            ngayRoiDi = (Convert.ToDateTime(ngayRoiDi)).ToString("MM-dd-yyyy");
                            return name + "_" + ngayDenO + "_" + ngayRoiDi;
                        }
                    }
                    else return "None";
                }
                else
                {
                    var str_two = "SELECT MIN(NgayDenO) as NgayDenO " +
                            "FROM chitietdatphong " +
                            "WHERE IDPhong = @maphong AND NgayDenO > CURDATE() AND DaThanhToan = 0" +
                            " GROUP BY IDPhong";
                    MySqlCommand cmd_two = new MySqlCommand(str_two, conn);
                    cmd_two.Parameters.AddWithValue("maphong", IDPhong);
                    bool kt_two = false;
                    string ngayDenO = "";

                    using (var reader_two = cmd_two.ExecuteReader())
                    {
                        if (reader_two.HasRows)
                        {
                            reader_two.Read();
                            ngayDenO = reader_two["NgayDenO"].ToString();
                            ngayDenO = (Convert.ToDateTime(ngayDenO)).ToString("MM-dd-yyyy");
                            kt_two = true;
                        }
                        else
                        {
                            kt_two = false;
                        }
                    }
                    if (kt_two)
                    {
                        var str_update = "UPDATE phong" +
                                " SET TrangThaiPhong = 1 " +
                                "WHERE IDPhong = @maphong";
                        MySqlCommand cmd_update_av = new MySqlCommand(str_update, conn);
                        cmd_update_av.Parameters.AddWithValue("maphong", IDPhong);
                        int check = cmd_update_av.ExecuteNonQuery();
                        if (check > 0)
                            return "available_" + ngayDenO;
                        else return "fail";
                    }
                    else
                    {
                        var str_update = "UPDATE phong" +
                                " SET TrangThaiPhong = 0 " +
                                "WHERE IDPhong = @maphong";
                        MySqlCommand cmd_update_av = new MySqlCommand(str_update, conn);
                        cmd_update_av.Parameters.AddWithValue("maphong", IDPhong);
                        int check = cmd_update_av.ExecuteNonQuery();
                        if (check > 0)
                            return "available_N";
                        else return "fail";
                    }
                }
            }
        }
        public string GetNgayRoiDiMax(string maphong)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT MIN(NgayDenO) as NgayDenO " +
                    "FROM chitietdatphong " +
                    "WHERE IDPhong = @maphong AND DaThanhToan = 0 AND CheckIn is null AND NgayDenO > CURDATE() " +
                    "GROUP BY IDPhong";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("maphong", maphong);
                string NgayMax = "";
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        NgayMax = Convert.ToDateTime(reader["NgayDenO"]).ToString("yyyy-MM-dd");
                    }
                    else
                        NgayMax = "vohan";
                }
                return NgayMax;
            }
        }
        public List<object> GetInfoBookedRoom(string maphong)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT phong.IDPhong, SoPhong, Tang, SoGiuong, phong.SoNguoiO, dp.IDDatPhong, NgayDenO, NgayRoiDi, IDKhachDat, ThoiGianDat, TenLoaiPhong, GiaTien " +
                    "FROM ((phong INNER JOIN chitietdatphong ctdp ON phong.IDPhong = ctdp.IDPhong) inner join datphong dp on dp.IDDatPhong = ctdp.IDDatPhong) inner join loaiphong lp on lp.IDLoaiPhong = phong.IDLoaiPhong " +
                    "WHERE NgayDenO <= CURDATE() AND NgayRoiDi >= CURDATE() AND phong.IDPhong = @maphong AND CheckIn is null AND DaThanhToan = 0";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("maphong", maphong);
                List<object> InfoBookedRoom = new List<object>();
                var iddp = "";
                var ngaydeno = "";
                string maxroidi = GetNgayRoiDiMax(maphong);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        iddp = reader["IDDatPhong"].ToString();
                        ngaydeno = Convert.ToDateTime(reader["NgayDenO"]).ToString("yyyy-MM-dd");
                        InfoBookedRoom.Add(new
                        {
                            idPhong = reader["IDPhong"].ToString(),
                            soPhong = reader["SoPhong"].ToString(),
                            tenLoaiPhong = reader["TenLoaiPhong"].ToString() + " Room",
                            giaTien = Convert.ToInt32(reader["GiaTien"]),
                            tang = reader["Tang"].ToString(),
                            soGiuong = reader["SoGiuong"].ToString(),
                            soNguoiO = Convert.ToInt32(reader["SoNguoiO"]),
                            idDatPhong = reader["IDDatPhong"].ToString(),
                            ngayDenO = Convert.ToDateTime(reader["NgayDenO"]).ToString("yyyy-MM-dd"),
                            ngayRoiDi = Convert.ToDateTime(reader["NgayRoiDi"]).ToString("yyyy-MM-dd"),
                            idKhachDat = reader["IDKhachDat"],
                            thoiGianDat = Convert.ToDateTime(reader["ThoiGianDat"]).ToString("dd/MM/yyyy HH:mm"),
                            ngayRoiDiMax = maxroidi
                        });
                    }
                }
                var str_doan = "SELECT da.IDDoAn, ThoiGianDat, SoLuong, TenDoAn, Gia " +
                    "FROM chitietdatdoan ctda inner join doan da on ctda.IDDoan = da.IDDoAn " +
                    "WHERE IDDatPhong = @madatphong AND IDPhong = @maphong AND NgayDenO = @ngaydeno " +
                    "ORDER BY ThoiGianDat ASC";
                MySqlCommand cmd_doan = new MySqlCommand(str_doan, conn);
                cmd_doan.Parameters.AddWithValue("madatphong", iddp);
                cmd_doan.Parameters.AddWithValue("maphong", maphong);
                cmd_doan.Parameters.AddWithValue("ngaydeno", ngaydeno);
                using (var reader_doan = cmd_doan.ExecuteReader())
                {
                    if (reader_doan.HasRows)
                    {
                        while (reader_doan.Read())
                        {
                            InfoBookedRoom.Add(new
                            {
                                idDoAn = reader_doan["IDDoAn"].ToString(),
                                thoiGianDat = Convert.ToDateTime(reader_doan["ThoiGianDat"]).ToString("dd/MM/yyyy HH:mm"),
                                soLuong = Convert.ToInt32(reader_doan["SoLuong"]),
                                tenDoAn = reader_doan["TenDoAn"].ToString(),
                                gia = Convert.ToInt32(reader_doan["Gia"])
                            });
                        }
                    }
                }
                return InfoBookedRoom;
            }
        }
        public List<object> QueryKhachHangByID(string usercccd)
        {
            List<object> kh = new List<object>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT kh.IDKhachHang, Ho, Ten, Email, SDT, GioiTinh, NgaySinh, TenLoaiKH " +
                    "FROM KhachHang kh inner join LoaiKhachHang lkh on kh.LoaiKH = lkh.LoaiKH " +
                    "WHERE IDKhachHang = @usercccd";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("usercccd", usercccd);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        kh.Add(new
                        {

                            idKhachHang = reader["IDKhachHang"].ToString(),
                            ho = reader["Ho"].ToString(),
                            ten = reader["Ten"].ToString(),
                            email = reader["Email"].ToString(),
                            sdt = reader["SDT"].ToString(),
                            gioiTinh = Convert.ToByte(reader["GioiTinh"]),
                            ngaySinh = Convert.ToDateTime(reader["NgaySinh"]).ToString("yyyy-MM-dd")
                        });
                        kh.Add(new
                        {
                            tenLoaiKH = reader["TenLoaiKH"].ToString()
                        });
                        return kh;
                    }
                    else return null;
                }
            }
        }

        public string Save_Customer_Info_For_Booked_Room(IFormCollection formData)
        {
            string idkhachhang = formData["idkhachhang"].ToString();
            string idkhachhang_new = formData["idkhachhang_new"].ToString();
            byte gioitinhkhachhang_new = Convert.ToByte(formData["gioitinhkhachhang_new"]);
            string hokhachhang_new = formData["hokhachhang_new"].ToString();
            string tenkhachhang_new = formData["tenkhachhang_new"].ToString();
            string emailkhachhang_new = formData["emailkhachhang_new"].ToString();
            string sdtkhachhang_new = formData["sdtkhachhang_new"].ToString();
            string ngaysinhkhachhang_new = Convert.ToDateTime(formData["ngaysinhkhachhang_new"]).ToString("yyyy-MM-dd");
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "UPDATE khachhang " +
                    "SET IDKhachHang = @idkhachhang_new, GioiTinh = @gioitinh, Ho = @ho, Ten = @ten, Email = @email, SDT = @sdt, NgaySinh = @ngaysinh " +
                    "WHERE IDKhachHang = @idkhachhang";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("idkhachhang_new", idkhachhang_new);
                cmd.Parameters.AddWithValue("gioitinh", gioitinhkhachhang_new);
                cmd.Parameters.AddWithValue("ho", hokhachhang_new);
                cmd.Parameters.AddWithValue("ten", tenkhachhang_new);
                cmd.Parameters.AddWithValue("email", emailkhachhang_new);
                cmd.Parameters.AddWithValue("sdt", sdtkhachhang_new);
                cmd.Parameters.AddWithValue("ngaysinh", ngaysinhkhachhang_new);
                cmd.Parameters.AddWithValue("idkhachhang", idkhachhang);
                try
                {
                    int check = cmd.ExecuteNonQuery();
                    if (check == 1)
                    {
                        return hokhachhang_new + " " + tenkhachhang_new;
                    }
                    return "Fail";
                }
                catch (MySqlException)
                {
                    return "Fail";
                }
            }
        }
        public string Create_Customer_Info_For_Booked_Room(IFormCollection formData)
        {
            string idkhachhang_new = formData["idkhachhang_new"].ToString();
            byte gioitinhkhachhang_new = Convert.ToByte(formData["gioitinhkhachhang_new"]);
            string hokhachhang_new = formData["hokhachhang_new"].ToString();
            string tenkhachhang_new = formData["tenkhachhang_new"].ToString();
            string emailkhachhang_new = formData["emailkhachhang_new"].ToString();
            string sdtkhachhang_new = formData["sdtkhachhang_new"].ToString();
            string ngaysinhkhachhang_new = Convert.ToDateTime(formData["ngaysinhkhachhang_new"]).ToString("yyyy-MM-dd");
            string ngaydangkykhachhang = DateTime.Now.ToString("yyyy-MM-dd");
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "INSERT INTO khachhang(IDKhachHang, GioiTinh, Ho, Ten, Email, SDT, NgaySinh, LoaiKH, NgayDangKy) VALUES(@idkhachhang_new, @gioitinh, @ho, @ten, @email, @sdt, @ngaysinh, 'NO', @ngaydangky)";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("idkhachhang_new", idkhachhang_new);
                cmd.Parameters.AddWithValue("gioitinh", gioitinhkhachhang_new);
                cmd.Parameters.AddWithValue("ho", hokhachhang_new);
                cmd.Parameters.AddWithValue("ten", tenkhachhang_new);
                cmd.Parameters.AddWithValue("email", emailkhachhang_new);
                cmd.Parameters.AddWithValue("sdt", sdtkhachhang_new);
                cmd.Parameters.AddWithValue("ngaysinh", ngaysinhkhachhang_new);
                cmd.Parameters.AddWithValue("ngaydangky", ngaydangkykhachhang);
                try
                {
                    int check = cmd.ExecuteNonQuery();
                    if (check == 1)
                    {
                        return hokhachhang_new + " " + tenkhachhang_new;
                    }
                    return "Fail";
                }
                catch (MySqlException ex)
                {
                    return "Fail";
                }
            }
        }
        public string CheckIn_For_Booked_Room(IFormCollection formData)
        {
            string checkin_Time = Convert.ToDateTime(formData["checkin_Time"]).ToString("yyyy-MM-dd HH:mm:ss");
            string ngayRoiDi = formData["ngayRoiDi"].ToString();
            string ngayDenO = formData["ngayDenO"].ToString();
            string idkhachhangchu = formData["idkhachhangchu"].ToString();
            string thongtin_nguoio = formData["thongtin_nguoio"].ToString();
            string idkhachhangdat = formData["idkhachhangdat"].ToString();
            string maphong = formData["maphong"].ToString();
            string madatphong = formData["madatphong"].ToString();
            int songuoio_info = Convert.ToInt32(formData["songuoio_info"]) + 1;
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "UPDATE chitietdatphong " +
                    "SET CheckIn = @checkin_Time, NgayRoiDi = @ngayRoiDi, IDKhachChuPhong = @idkhachhangchu, ThongTinKhachO = @thongtin_nguoio, SoNguoiO = @songuoio " +
                    "WHERE IDDatPhong = @madatphong AND IDPhong = @maphong AND NgayDenO = @ngayDenO ";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("checkin_Time", checkin_Time);
                cmd.Parameters.AddWithValue("ngayRoiDi", ngayRoiDi);
                cmd.Parameters.AddWithValue("idkhachhangchu", idkhachhangchu);
                cmd.Parameters.AddWithValue("thongtin_nguoio", thongtin_nguoio);
                cmd.Parameters.AddWithValue("maphong", maphong);
                cmd.Parameters.AddWithValue("madatphong", madatphong);
                cmd.Parameters.AddWithValue("ngayDenO", ngayDenO);
                cmd.Parameters.AddWithValue("songuoio", songuoio_info);
                int check = cmd.ExecuteNonQuery();
                if (check > 0)
                {
                    var str_tenkd = "SELECT Ten FROM khachhang WHERE IDKhachHang = @idkhachhangdat";
                    MySqlCommand cmd_tenkhachdat = new MySqlCommand(str_tenkd, conn);
                    cmd_tenkhachdat.Parameters.AddWithValue("idkhachhangdat", idkhachhangdat);
                    using (var reader = cmd_tenkhachdat.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            reader.Read();
                            return reader["Ten"].ToString();
                        }
                        else
                            return "Noone";
                    }
                }
                else return "Fail";
            }
        }
        public string Order_Food_For_Room(IFormCollection formData, string thoigiandat)
        {
            string maphong = formData["maphong"].ToString();
            string madatphong = formData["madatphong"].ToString();
            string ngaydeno = formData["ngaydeno"].ToString();
            string chuoi_doan_order = formData["chuoi_doan_order"].ToString();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "INSERT INTO chitietdatdoan(IDDatPhong, IDPhong, NgayDenO, IDDoAn, ThoiGianDat, SoLuong) VALUES";
                string[] item_doan = chuoi_doan_order.Split(" ");
                foreach (string item in item_doan)
                {
                    string[] id_soluong = item.Split("-");
                    str = str + "(@madatphong, @maphong, @ngaydeno, " + id_soluong[0] + ", @thoigiandat, " + id_soluong[1] + "), ";
                }
                str = str.Remove(str.Length - 2, 2);
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("madatphong", madatphong);
                cmd.Parameters.AddWithValue("maphong", maphong);
                cmd.Parameters.AddWithValue("ngaydeno", ngaydeno);
                cmd.Parameters.AddWithValue("thoigiandat", thoigiandat);
                int check = cmd.ExecuteNonQuery();
                if (check > 0)
                    return "OK";
                return "Fail";
            }
        }
        public List<object> GetInfoOccupiedRoom(string maphong)
        {
            List<object> InfoOccupiedRoom = new List<object>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT phong.IDPhong, SoPhong, TenLoaiPhong, GiaTien, Tang, SoGiuong, phong.SoNguoiO, dp.IDDatPhong, NgayDenO, NgayRoiDi, IDKhachDat, ThoiGianDat, CheckIn, IDKhachChuPhong, Ho, Ten, ThongTinKhachO " +
                    "FROM (((phong INNER JOIN chitietdatphong ctdp ON phong.IDPhong = ctdp.IDPhong) inner join datphong dp on dp.IDDatPhong = ctdp.IDDatPhong) inner join loaiphong lp on lp.IDLoaiPhong = phong.IDLoaiPhong) inner join khachhang kh on kh.IDKhachHang = ctdp.IDKhachChuPhong " +
                    "WHERE NgayDenO <= CURDATE() AND NgayRoiDi >= CURDATE() AND phong.IDPhong = @maphong AND CheckIn is not null AND DaThanhToan = 0";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("maphong", maphong);
                var iddp = "";
                var ngaydeno = "";
                string maxroidi = GetNgayRoiDiMax(maphong);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        iddp = reader["IDDatPhong"].ToString();
                        ngaydeno = Convert.ToDateTime(reader["NgayDenO"]).ToString("yyyy-MM-dd");
                        InfoOccupiedRoom.Add(new
                        {
                            idPhong = reader["IDPhong"].ToString(),
                            soPhong = reader["SoPhong"].ToString(),
                            tenLoaiPhong = reader["TenLoaiPhong"].ToString() + " Room",
                            giaTien = Convert.ToInt32(reader["GiaTien"]),
                            tang = reader["Tang"].ToString(),
                            soGiuong = reader["SoGiuong"].ToString(),
                            soNguoiO = Convert.ToInt32(reader["SoNguoiO"]),
                            idDatPhong = reader["IDDatPhong"].ToString(),
                            ngayDenO = Convert.ToDateTime(reader["NgayDenO"]).ToString("yyyy-MM-dd"),
                            ngayRoiDi = Convert.ToDateTime(reader["NgayRoiDi"]).ToString("yyyy-MM-dd"),
                            idKhachDat = reader["IDKhachDat"],
                            thoiGianDat = Convert.ToDateTime(reader["ThoiGianDat"]).ToString("dd/MM/yyyy HH:mm"),
                            ngayRoiDiMax = maxroidi,
                            checkIn = Convert.ToDateTime(reader["CheckIn"]).ToString("dd/MM/yyyy HH:mm"),
                            idKhachChu = reader["IDKhachChuPhong"].ToString(),
                            hoKhachChu = reader["Ho"].ToString(),
                            tenKhachChu = reader["Ten"].ToString(),
                            thongTinKhachO = reader["ThongTinKhachO"].ToString()
                        });
                    }
                }
                var str_doan = "SELECT da.IDDoAn, ThoiGianDat, SoLuong, TenDoAn, Gia " +
                    "FROM chitietdatdoan ctda inner join doan da on ctda.IDDoan = da.IDDoAn " +
                    "WHERE IDDatPhong = @madatphong AND IDPhong = @maphong AND NgayDenO = @ngaydeno " +
                    "ORDER BY ThoiGianDat ASC";
                MySqlCommand cmd_doan = new MySqlCommand(str_doan, conn);
                cmd_doan.Parameters.AddWithValue("madatphong", iddp);
                cmd_doan.Parameters.AddWithValue("maphong", maphong);
                cmd_doan.Parameters.AddWithValue("ngaydeno", ngaydeno);
                using (var reader_doan = cmd_doan.ExecuteReader())
                {
                    if (reader_doan.HasRows)
                    {
                        while (reader_doan.Read())
                        {
                            InfoOccupiedRoom.Add(new
                            {
                                idDoAn = reader_doan["IDDoAn"].ToString(),
                                thoiGianDat = Convert.ToDateTime(reader_doan["ThoiGianDat"]).ToString("dd/MM/yyyy HH:mm"),
                                soLuong = Convert.ToInt32(reader_doan["SoLuong"]),
                                tenDoAn = reader_doan["TenDoAn"].ToString(),
                                gia = Convert.ToInt32(reader_doan["Gia"])
                            });
                        }
                    }
                }
                return InfoOccupiedRoom;
            }
        }
        public string Update_Info_Service_For_Occupied_Room(IFormCollection formData)
        {
            string ngayRoiDi = formData["ngayRoiDi"].ToString();
            string ngayDenO = formData["ngayDenO"].ToString();
            string thongtin_nguoio = formData["thongtin_nguoio"].ToString();
            string maphong = formData["maphong"].ToString();
            string madatphong = formData["madatphong"].ToString();
            int songuoio_info = Convert.ToInt32(formData["songuoio_info"]) + 1;
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "UPDATE chitietdatphong " +
                    "SET NgayRoiDi = @ngayRoiDi, ThongTinKhachO = @thongtin_nguoio, SoNguoiO = @songuoio " +
                    "WHERE IDDatPhong = @madatphong AND IDPhong = @maphong AND NgayDenO = @ngayDenO ";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("ngayRoiDi", ngayRoiDi);
                cmd.Parameters.AddWithValue("thongtin_nguoio", thongtin_nguoio);
                cmd.Parameters.AddWithValue("maphong", maphong);
                cmd.Parameters.AddWithValue("madatphong", madatphong);
                cmd.Parameters.AddWithValue("ngayDenO", ngayDenO);
                cmd.Parameters.AddWithValue("songuoio", songuoio_info);
                int check = cmd.ExecuteNonQuery();
                if (check > 0)
                {
                    return "OK";
                }
                else return "Fail";
            }
        }

        public List<object> GetInfoBookToOrder(string maphong)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT phong.IDPhong, SoPhong, Tang, SoGiuong, phong.SoNguoiO, TenLoaiPhong, GiaTien, IDChiNhanh " +
                    "FROM phong inner join loaiphong lp on lp.IDLoaiPhong = phong.IDLoaiPhong " +
                    "WHERE phong.IDPhong = @maphong";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("maphong", maphong);
                List<object> InfoRoomToOrder = new List<object>();
                string maxroidi = GetNgayRoiDiMax(maphong);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        InfoRoomToOrder.Add(new
                        {
                            idPhong = reader["IDPhong"].ToString(),
                            soPhong = reader["SoPhong"].ToString(),
                            tenLoaiPhong = reader["TenLoaiPhong"].ToString() + " Room",
                            giaTien = Convert.ToInt32(reader["GiaTien"]),
                            tang = reader["Tang"].ToString(),
                            soGiuong = reader["SoGiuong"].ToString(),
                            soNguoiO = Convert.ToInt32(reader["SoNguoiO"]),
                            idChiNhanh = reader["IDChiNhanh"].ToString(),
                            ngayRoiDiMax = maxroidi
                        });
                    }
                }
                return InfoRoomToOrder;
            }
        }
        public string Book_and_CheckIn_Room_Now(IFormCollection formData)
        {
            string checkin_Time = Convert.ToDateTime(formData["checkin_Time"]).ToString("yyyy-MM-dd HH:mm:ss");
            string thoiGianDat = Convert.ToDateTime(formData["thoigiandat"]).ToString("yyyy-MM-dd HH:mm:ss");
            string chinhanh = formData["chinhanh"].ToString();
            string ngayRoiDi = formData["ngayRoiDi"].ToString();
            string ngayDenO = formData["ngayDenO"].ToString();
            string idkhachhangchu = formData["idkhachhangchu"].ToString();
            string thongtin_nguoio = formData["thongtin_nguoio"].ToString();
            string idkhachhangdat = formData["idkhachhangdat"].ToString();
            string maphong = formData["maphong"].ToString();
            int songuoio_info = Convert.ToInt32(formData["songuoio_info"]) + 1;
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "InsertDatPhong";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@idkhachdat", idkhachhangdat);
                cmd.Parameters["@idkhachdat"].Direction = ParameterDirection.Input;

                cmd.Parameters.AddWithValue("@ThoiGian", thoiGianDat);
                cmd.Parameters["@ThoiGian"].Direction = ParameterDirection.Input;

                cmd.Parameters.AddWithValue("@vitri", chinhanh);
                cmd.Parameters["@vitri"].Direction = ParameterDirection.Input;

                cmd.Parameters.Add("@iddp", MySqlDbType.VarChar);
                cmd.Parameters["@iddp"].Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();
                string IDDatPhong = (string)cmd.Parameters["@iddp"].Value;

                var str_ctdp = "INSERT INTO chitietdatphong(IDDatPhong, IDPhong, IDKhachChuPhong, NgayDenO, NgayRoiDi, CheckIn, SoNguoiO, ThongTinKhachO, TrucTuyen) " +
                    "VALUES(@iddp, @idphong, @idkhachchu, @ngaydeno, @ngayroidi, @checkin, @songuoio, @thongtinkhacho, 0)";
                MySqlCommand cmd_ctdp = new MySqlCommand(str_ctdp, conn);
                cmd_ctdp.Parameters.AddWithValue("iddp", IDDatPhong);
                cmd_ctdp.Parameters.AddWithValue("idphong", maphong);
                cmd_ctdp.Parameters.AddWithValue("idkhachchu", idkhachhangchu);
                cmd_ctdp.Parameters.AddWithValue("ngaydeno", ngayDenO);
                cmd_ctdp.Parameters.AddWithValue("ngayroidi", ngayRoiDi);
                cmd_ctdp.Parameters.AddWithValue("checkin", checkin_Time);
                cmd_ctdp.Parameters.AddWithValue("songuoio", songuoio_info);
                cmd_ctdp.Parameters.AddWithValue("thongtinkhacho", thongtin_nguoio);
                int check = 0;
                try
                {
                    check = cmd_ctdp.ExecuteNonQuery();
                }
                catch (MySqlException ex)
                {
                    check = 0;
                }
                finally
                {
                }
                if (check == 0)
                {
                    string str_delete_dp = "DELETE FROM DatPhong WHERE IDDatPhong = @iddatphong";
                    MySqlCommand cmd_delete_dp = new MySqlCommand(str_delete_dp, conn);
                    cmd_delete_dp.Parameters.AddWithValue("iddatphong", IDDatPhong);
                    int check_delete_dp = cmd_delete_dp.ExecuteNonQuery();
                    return "Fail_";
                }
                else
                {
                    string update_status_room = "UPDATE phong SET TrangThaiPhong = 1 WHERE IDPhong = @maphong";
                    MySqlCommand cmd_update_status = new MySqlCommand(update_status_room, conn);
                    cmd_update_status.Parameters.AddWithValue("maphong", maphong);
                    int check_update_status = cmd_update_status.ExecuteNonQuery();

                    string str_tenkd = "SELECT Ten FROM khachhang WHERE IDKhachHang = @idkhachhangdat";
                    MySqlCommand cmd_tenkhachdat = new MySqlCommand(str_tenkd, conn);
                    cmd_tenkhachdat.Parameters.AddWithValue("idkhachhangdat", idkhachhangdat);
                    using (var reader = cmd_tenkhachdat.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            reader.Read();
                            return "Success_" + IDDatPhong + "_" + reader["Ten"].ToString() + "_" + ngayRoiDi;
                        }
                        else
                            return "Success_" + IDDatPhong + "_" + "Noone_" + ngayRoiDi;
                    }
                }
            }
        }

        //Danh sách đặt phòng - begin
        public List<object> Load_Data_For_DSDatPhong(string machinhanh)
        {
            List<object> dsdp = new List<object>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT dp.IDDatPhong, phong.IDPhong, dp.IDKhachDat, NgayDenO, NgayRoiDi, SoTienDaThanhToan " +
                    "FROM (datphong dp inner join chitietdatphong ctdp on dp.IDDatPhong = ctdp.IDDatPhong) inner join phong on ctdp.IDPhong = phong.IDPhong " +
                    "WHERE IDChiNhanh = @machinhanh AND CheckIn is null AND DaThanhToan = 0 " +
                    "ORDER BY dp.IDDatPhong ASC";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("machinhanh", machinhanh);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dsdp.Add(new
                            {
                                idDatPhong = reader["IDDatPhong"].ToString(),
                                idPhong = reader["IDPhong"].ToString(),
                                idKhachDat = reader["IDKhachDat"].ToString(),
                                ngayDenO = Convert.ToDateTime(reader["NgayDenO"]).ToString("yyyy-MM-dd"),
                                ngayRoiDi = Convert.ToDateTime(reader["NgayRoiDi"]).ToString("yyyy-MM-dd"),
                                soTienDaThanhToan = Convert.ToInt32(reader["SoTienDaThanhToan"])
                            });
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return dsdp;
        }
        public List<object> Load_Data_For_CTDP(IFormCollection formData)
        {
            string maphong = formData["maphong"].ToString();
            string ngaydeno = formData["ngaydeno"].ToString();
            string madatphong = formData["madatphong"].ToString();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT phong.IDPhong, SoPhong, Tang, SoGiuong, phong.SoNguoiO, dp.IDDatPhong, NgayDenO, NgayRoiDi, IDKhachDat, ThoiGianDat, TenLoaiPhong, GiaTien " +
                    "FROM ((phong INNER JOIN chitietdatphong ctdp ON phong.IDPhong = ctdp.IDPhong) inner join datphong dp on dp.IDDatPhong = ctdp.IDDatPhong) inner join loaiphong lp on lp.IDLoaiPhong = phong.IDLoaiPhong " +
                    "WHERE NgayDenO = @ngaydeno AND dp.IDDatPhong = @madatphong AND phong.IDPhong = @maphong";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("maphong", maphong);
                cmd.Parameters.AddWithValue("ngaydeno", ngaydeno);
                cmd.Parameters.AddWithValue("madatphong", madatphong);
                List<object> InfoCTDP = new List<object>();
                string maxroidi = GetNgayRoiDiMax(maphong);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        InfoCTDP.Add(new
                        {
                            idPhong = reader["IDPhong"].ToString(),
                            soPhong = reader["SoPhong"].ToString(),
                            tenLoaiPhong = reader["TenLoaiPhong"].ToString() + " Room",
                            giaTien = Convert.ToInt32(reader["GiaTien"]),
                            tang = reader["Tang"].ToString(),
                            soGiuong = reader["SoGiuong"].ToString(),
                            soNguoiO = Convert.ToInt32(reader["SoNguoiO"]),
                            idDatPhong = reader["IDDatPhong"].ToString(),
                            ngayDenO = Convert.ToDateTime(reader["NgayDenO"]).ToString("yyyy-MM-dd"),
                            ngayRoiDi = Convert.ToDateTime(reader["NgayRoiDi"]).ToString("yyyy-MM-dd"),
                            idKhachDat = reader["IDKhachDat"],
                            thoiGianDat = Convert.ToDateTime(reader["ThoiGianDat"]).ToString("dd/MM/yyyy HH:mm"),
                            ngayRoiDiMax = maxroidi
                        });
                    }
                }
                var str_doan = "SELECT da.IDDoAn, ThoiGianDat, SoLuong, TenDoAn, Gia " +
                    "FROM chitietdatdoan ctda inner join doan da on ctda.IDDoan = da.IDDoAn " +
                    "WHERE IDDatPhong = @madatphong AND IDPhong = @maphong AND NgayDenO = @ngaydeno " +
                    "ORDER BY ThoiGianDat ASC";
                MySqlCommand cmd_doan = new MySqlCommand(str_doan, conn);
                cmd_doan.Parameters.AddWithValue("madatphong", madatphong);
                cmd_doan.Parameters.AddWithValue("maphong", maphong);
                cmd_doan.Parameters.AddWithValue("ngaydeno", ngaydeno);
                using (var reader_doan = cmd_doan.ExecuteReader())
                {
                    if (reader_doan.HasRows)
                    {
                        while (reader_doan.Read())
                        {
                            InfoCTDP.Add(new
                            {
                                idDoAn = reader_doan["IDDoAn"].ToString(),
                                thoiGianDat = Convert.ToDateTime(reader_doan["ThoiGianDat"]).ToString("dd/MM/yyyy HH:mm"),
                                soLuong = Convert.ToInt32(reader_doan["SoLuong"]),
                                tenDoAn = reader_doan["TenDoAn"].ToString(),
                                gia = Convert.ToInt32(reader_doan["Gia"])
                            });
                        }
                    }
                }
                return InfoCTDP;
            }
        }
        public List<object> Load_Data_For_DSDatPhong_By_Filter(string machinhanh, string ngaydeno_dsdp, string stt_dsdp)
        {
            List<object> dsdp = new List<object>();
            if (stt_dsdp == null) stt_dsdp = "%";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT dp.IDDatPhong, phong.IDPhong, dp.IDKhachDat, NgayDenO, NgayRoiDi, SoTienDaThanhToan " +
                    "FROM (datphong dp inner join chitietdatphong ctdp on dp.IDDatPhong = ctdp.IDDatPhong) inner join phong on ctdp.IDPhong = phong.IDPhong " +
                    "WHERE IDChiNhanh = @machinhanh AND CheckIn is null AND DaThanhToan = 0 AND NgayDenO = @ngaydeno AND RIGHT(dp.IDDatPhong, 3) LIKE @stt_dsdp " +
                    "ORDER BY dp.IDDatPhong ASC";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("machinhanh", machinhanh);
                cmd.Parameters.AddWithValue("ngaydeno", ngaydeno_dsdp);
                cmd.Parameters.AddWithValue("stt_dsdp", stt_dsdp);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dsdp.Add(new
                            {
                                idDatPhong = reader["IDDatPhong"].ToString(),
                                idPhong = reader["IDPhong"].ToString(),
                                idKhachDat = reader["IDKhachDat"].ToString(),
                                ngayDenO = Convert.ToDateTime(reader["NgayDenO"]).ToString("yyyy-MM-dd"),
                                ngayRoiDi = Convert.ToDateTime(reader["NgayRoiDi"]).ToString("yyyy-MM-dd"),
                                soTienDaThanhToan = Convert.ToInt32(reader["SoTienDaThanhToan"])
                            });
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return dsdp;
        }

        //Danh sách đặt phòng - end

        //Danh sách hóa đơn - begin
        public List<object> Load_Data_For_DSHoaDon()
        {
            List<object> dshd = new List<object>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDHoaDon, IDKhachThanhToan, ThoiGianXuat, nv.IDNhanVien, TongSoTien, LoaiThanhToan, Ho, Ten " +
                    "FROM hoadon hd inner join nhanvien nv on hd.IDNhanVien = nv.IDNhanVien " +
                    "ORDER BY IDHoaDon ASC";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dshd.Add(new
                            {
                                idHoaDon = reader["IDHoaDon"].ToString(),
                                idKhachThanhToan = reader["IDKhachThanhToan"].ToString(),
                                thoiGianXuat = Convert.ToDateTime(reader["ThoiGianXuat"]).ToString("yyyy-MM-dd HH:mm"),
                                idNhanVien = reader["IDNhanVien"].ToString(),
                                tongSoTien = Convert.ToInt32(reader["TongSoTien"]),
                                loaiThanhToan = Convert.ToByte(reader["LoaiThanhToan"]),
                                tenNhanVien = reader["Ho"].ToString() + " " + reader["Ten"].ToString(),
                            });
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return dshd;
        }

        public List<object> Load_Data_For_Room_Ready_CheckOut(IFormCollection formData)
        {
            string maphong = formData["maphong"].ToString();
            string ngaydeno = formData["ngaydeno"].ToString();
            string madatphong = formData["madatphong"].ToString();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT phong.IDPhong, SoPhong, Tang, SoGiuong, phong.SoNguoiO, dp.IDDatPhong, NgayDenO, NgayRoiDi, IDKhachDat, ThoiGianDat, TenLoaiPhong, GiaTien, ctdp.SoNguoiO AS SNOP, SoTienDaThanhToan, CheckIn " +
                    "FROM ((phong INNER JOIN chitietdatphong ctdp ON phong.IDPhong = ctdp.IDPhong) inner join datphong dp on dp.IDDatPhong = ctdp.IDDatPhong) inner join loaiphong lp on lp.IDLoaiPhong = phong.IDLoaiPhong " +
                    "WHERE NgayDenO = @ngaydeno AND dp.IDDatPhong = @madatphong AND phong.IDPhong = @maphong";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("maphong", maphong);
                cmd.Parameters.AddWithValue("ngaydeno", ngaydeno);
                cmd.Parameters.AddWithValue("madatphong", madatphong);
                List<object> InfoCheckOutRoom = new List<object>();
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        InfoCheckOutRoom.Add(new
                        {
                            idPhong = reader["IDPhong"].ToString(),
                            soPhong = reader["SoPhong"].ToString(),
                            tenLoaiPhong = reader["TenLoaiPhong"].ToString() + " Room",
                            giaTien = Convert.ToInt32(reader["GiaTien"]),
                            tang = reader["Tang"].ToString(),
                            soGiuong = reader["SoGiuong"].ToString(),
                            soNguoiO = Convert.ToInt32(reader["SoNguoiO"]),
                            soNguoiOReal = Convert.ToInt32(reader["SNOP"]),
                            soTienDaThanhToan = Convert.ToInt32(reader["SoTienDaThanhToan"]),
                            idDatPhong = reader["IDDatPhong"].ToString(),
                            ngayDenO = Convert.ToDateTime(reader["NgayDenO"]).ToString("yyyy-MM-dd"),
                            ngayRoiDi = Convert.ToDateTime(reader["NgayRoiDi"]).ToString("yyyy-MM-dd"),
                            idKhachDat = reader["IDKhachDat"],
                            thoiGianDat = Convert.ToDateTime(reader["ThoiGianDat"]).ToString("dd/MM/yyyy HH:mm"),
                            checkIn = Convert.ToDateTime(reader["CheckIn"]).ToString("dd/MM/yyyy HH:mm"),
                        });
                    }
                }
                var str_doan = "SELECT da.IDDoAn, ThoiGianDat, SoLuong, TenDoAn, Gia, DaThanhToan " +
                    "FROM chitietdatdoan ctda inner join doan da on ctda.IDDoan = da.IDDoAn " +
                    "WHERE IDDatPhong = @madatphong AND IDPhong = @maphong AND NgayDenO = @ngaydeno";
                MySqlCommand cmd_doan = new MySqlCommand(str_doan, conn);
                cmd_doan.Parameters.AddWithValue("madatphong", madatphong);
                cmd_doan.Parameters.AddWithValue("maphong", maphong);
                cmd_doan.Parameters.AddWithValue("ngaydeno", ngaydeno);
                using (var reader_doan = cmd_doan.ExecuteReader())
                {
                    if (reader_doan.HasRows)
                    {
                        while (reader_doan.Read())
                        {
                            InfoCheckOutRoom.Add(new
                            {
                                idDoAn = reader_doan["IDDoAn"].ToString(),
                                thoiGianDat = Convert.ToDateTime(reader_doan["ThoiGianDat"]).ToString("dd/MM/yyyy HH:mm"),
                                soLuong = Convert.ToInt32(reader_doan["SoLuong"]),
                                tenDoAn = reader_doan["TenDoAn"].ToString(),
                                gia = Convert.ToInt32(reader_doan["Gia"]),
                                daThanhToan = Convert.ToByte(reader_doan["DaThanhToan"])
                            });
                        }
                    }
                }
                return InfoCheckOutRoom;
            }
        }

        public List<object> CheckOut_For_Occupied_Room(IFormCollection formData)
        {
            string maphong = formData["maphong"].ToString();
            string ngaydeno = formData["ngaydeno"].ToString();
            string madatphong = formData["madatphong"].ToString();
            string idhoadon = formData["idhoadon"].ToString();
            double chietkhaudoan = Convert.ToDouble(formData["chietkhaudoan"]);
            double chietkhauphong = Convert.ToDouble(formData["chietkhauphong"]);
            DateTime checkouttime = Convert.ToDateTime(formData["checkoutTime"]);
            List<object> data_room = Load_Data_For_Room_Ready_CheckOut(formData);
            int phichuan = Convert.ToInt32(data_room[0].GetType().GetProperty("giaTien").GetValue(data_room[0], null));
            int songuoiquydinh = Convert.ToInt32(data_room[0].GetType().GetProperty("soNguoiO").GetValue(data_room[0], null));
            int songuoireal = Convert.ToInt32(data_room[0].GetType().GetProperty("soNguoiOReal").GetValue(data_room[0], null));
            DateTime ngayDenO = Convert.ToDateTime(data_room[0].GetType().GetProperty("ngayDenO").GetValue(data_room[0], null));
            DateTime ngayRoiDi = Convert.ToDateTime(data_room[0].GetType().GetProperty("ngayRoiDi").GetValue(data_room[0], null));
            DateTime checkIn = Convert.ToDateTime(data_room[0].GetType().GetProperty("checkIn").GetValue(data_room[0], null));
            int tienPhong = 0;
            int phiOQuaSoNguoi = (int)(phichuan * 0.4) * (songuoireal - songuoiquydinh) * (int)(ngayRoiDi - ngayDenO).TotalDays;
            phiOQuaSoNguoi = (phiOQuaSoNguoi < 0) ? 0 : phiOQuaSoNguoi;
            int phiCheckOutTre = 0;
            int phiCheckInSom = 0;
            int giaphong = 0;
            if (songuoiquydinh == 2)
            {
                giaphong = (int)(phichuan * 1.2);
            }
            else if (songuoiquydinh == 3)
            {
                giaphong = (int)(phichuan * 1.5);
            }
            else if (songuoiquydinh == 4)
            {
                giaphong = (int)(phichuan * 1.8);
            }
            else
            {
                giaphong = phichuan;
            }
            tienPhong = (int)giaphong * (int)(ngayRoiDi - ngayDenO).TotalDays;
            DateTime checkoutDung = Convert.ToDateTime(ngayRoiDi.ToString("yyyy-MM-dd") + " 12:00");
            DateTime checkinDung = Convert.ToDateTime(ngayDenO.ToString("yyyy-MM-dd") + " 14:00");
            int kiemtracheckout = 0;
            if (checkouttime > checkinDung)
            {
                kiemtracheckout = (int)(checkouttime - checkoutDung).TotalMinutes;
            }
            kiemtracheckout = (int)kiemtracheckout / 15;
            if (kiemtracheckout > 24) //Sau 18h
            {
                phiCheckOutTre = giaphong;
            }
            else if (kiemtracheckout >= 12)
            {
                phiCheckOutTre = (int)(giaphong * 0.5);
            }
            else if (kiemtracheckout >= 1)
            {
                phiCheckOutTre = (int)(giaphong * 0.3);
            }

            int kiemtracheckin = 0;
            if (checkinDung > checkIn)
            {
                kiemtracheckin = (int)(checkinDung - checkIn).TotalMinutes;
            }
            kiemtracheckin = (int)kiemtracheckin / 15;
            if (kiemtracheckin > 20) //Sau 18h
            {
                phiCheckInSom = (int)(giaphong * 0.5);
            }
            else if (kiemtracheckin >= 1)
            {
                phiCheckInSom = (int)(giaphong * 0.3);
            }
            int PhiThem = phiOQuaSoNguoi + phiCheckInSom + phiCheckOutTre;

            int tongTienDoAn = 0;
            int tongTienDoAnDaThanhToan = 0;
            int tongTienDoAnPhaiTra = 0;

            for (int i = 1; i < data_room.Count; i++)
            {
                int dathanhtoan = Convert.ToInt32(data_room[i].GetType().GetProperty("daThanhToan").GetValue(data_room[i], null));
                int gia = Convert.ToInt32(data_room[i].GetType().GetProperty("gia").GetValue(data_room[i], null));
                int soLuong = Convert.ToInt32(data_room[i].GetType().GetProperty("soLuong").GetValue(data_room[i], null));
                if (dathanhtoan == 1)
                {
                    tongTienDoAnDaThanhToan = tongTienDoAnDaThanhToan + (int)(gia * soLuong);
                }
                else
                {
                    tongTienDoAnPhaiTra = tongTienDoAnPhaiTra + (int)(gia * soLuong);
                }
                tongTienDoAn = tongTienDoAn + (int)(gia * soLuong);
            }
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str_insert_hoadon_phong = "INSERT INTO hoadonphong(IDHoaDon, IDDatPhong, IDPhong, NgayDenO, SoTien) " +
                    "VALUES (@idhoadon, @iddatphong, @idphong, @ngaydeno, @sotien)";
                MySqlCommand cmd_insert_hoadon_phong = new MySqlCommand(str_insert_hoadon_phong, conn);
                cmd_insert_hoadon_phong.Parameters.AddWithValue("idphong", maphong);
                cmd_insert_hoadon_phong.Parameters.AddWithValue("ngaydeno", ngaydeno);
                cmd_insert_hoadon_phong.Parameters.AddWithValue("iddatphong", madatphong);
                cmd_insert_hoadon_phong.Parameters.AddWithValue("idhoadon", idhoadon);
                int sotienhoadonphong = (tienPhong - (int)(tienPhong * (double)(chietkhauphong / 100))) + (tongTienDoAn - (int)(tongTienDoAn * (double)(chietkhaudoan / 100))) + PhiThem;
                cmd_insert_hoadon_phong.Parameters.AddWithValue("sotien", sotienhoadonphong);
                int check_insert_hoadon_phong = cmd_insert_hoadon_phong.ExecuteNonQuery();
                if (check_insert_hoadon_phong > 0)
                {
                    var str = "UPDATE chitietdatphong " +
                        "SET PhiThem = @phithem, CheckOut = @checkout, DaThanhToan = 1 " +
                        "WHERE NgayDenO = @ngaydeno AND IDDatPhong = @madatphong AND IDPhong = @maphong";
                    MySqlCommand cmd = new MySqlCommand(str, conn);
                    cmd.Parameters.AddWithValue("maphong", maphong);
                    cmd.Parameters.AddWithValue("ngaydeno", ngaydeno);
                    cmd.Parameters.AddWithValue("madatphong", madatphong);
                    cmd.Parameters.AddWithValue("phithem", PhiThem);
                    cmd.Parameters.AddWithValue("checkout", checkouttime.ToString("yyyy-MM-dd HH:mm"));
                    int check = cmd.ExecuteNonQuery();
                    if (check > 0)
                    {
                        var str_staus = "UPDATE phong " +
                        "SET TrangThaiPhong = 3 " +
                        "WHERE phong.IDPhong = @maphong";
                        MySqlCommand cmd_status = new MySqlCommand(str_staus, conn);
                        cmd_status.Parameters.AddWithValue("maphong", maphong);
                        int check_status = cmd_status.ExecuteNonQuery();
                        data_room.Add(new
                        {
                            giaPhong = giaphong,
                            tienPhong = tienPhong,
                            phiCheckInSom = phiCheckInSom,
                            phiCheckOutTre = phiCheckOutTre,
                            phiOQuaSoNguoi = phiOQuaSoNguoi,
                            checkOutTime = checkouttime,
                            tongTienDoAn = tongTienDoAn,
                            tongTienDoAnDaThanhToan = tongTienDoAnDaThanhToan,
                            tongTienDoAnPhaiTra = tongTienDoAnPhaiTra
                        });
                        return data_room;
                    }
                    else return null;
                }
                else return null;
            }
        }
        public object GetKhachHangVoiChietKhau(string idKhachHang)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT IDKhachHang, Ho, Ten, ChietKhauPhong, ChietKhauDoAn " +
                    "FROM khachhang kh inner join loaikhachhang lkh on kh.LoaiKH = lkh.LoaiKH " +
                    "WHERE IDKhachHang = @idkhachhang";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("idkhachhang", idKhachHang);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();

                        object ChietKhau = (new
                        {
                            idKhachHang = reader["IDKhachHang"].ToString(),
                            hoTenKhachHang = reader["Ho"].ToString() + " " + reader["Ten"].ToString(),
                            chietKhauPhong = Convert.ToDouble(reader["ChietKhauPhong"]),
                            chietKhauDoAn = Convert.ToDouble(reader["ChietKhauDoAn"])
                        });
                        return ChietKhau;
                    }
                    else return null;
                }
            }
        }

        public string Tao_HoaDon_CheckOut(IFormCollection formData)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "InsertHoaDon";
                MySqlCommand cmd = new MySqlCommand(str, conn);

                string idnhanvienthanhtoan = formData["idnhanvienthanhtoan"].ToString();
                string idkhachthanhtoan = formData["idkhachthanhtoan"].ToString();
                DateTime checkoutTime = Convert.ToDateTime(formData["checkoutTime"]);

                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@idkhachthanhtoan", idkhachthanhtoan);
                cmd.Parameters["@idkhachthanhtoan"].Direction = ParameterDirection.Input;

                cmd.Parameters.AddWithValue("@idnhanvien", idnhanvienthanhtoan);
                cmd.Parameters["@idnhanvien"].Direction = ParameterDirection.Input;

                cmd.Parameters.AddWithValue("@ThoiGian", checkoutTime);
                cmd.Parameters["@ThoiGian"].Direction = ParameterDirection.Input;

                cmd.Parameters.AddWithValue("@tongsotien", 0);
                cmd.Parameters["@tongsotien"].Direction = ParameterDirection.Input;


                cmd.Parameters.AddWithValue("@loaithanhtoan", 1);
                cmd.Parameters["@loaithanhtoan"].Direction = ParameterDirection.Input;

                cmd.Parameters.Add("@idhd", MySqlDbType.VarChar);
                cmd.Parameters["@idhd"].Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();
                conn.Close();
                return (string)cmd.Parameters["@idhd"].Value;
            }
        }

        public List<object> Get_Data_HoaDon_By_MaHoaDon(string mahoadon)
        {
            List<object> data = new List<object>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT kh.Ho as HoKH, kh.Ten as TenKH, nv.Ho as HoNV, nv.Ten as TenNV, IDChiNhanh, ThoiGianXuat, ChietKhauPhong, ChietKhauDoAn " +
                    "FROM ((hoadon hd inner join khachhang kh on kh.IDKhachHang = hd.IDKhachThanhToan) inner join NhanVien nv on nv.IDNhanVien = hd.IDNhanVien) inner join loaikhachhang lkh on lkh.LoaiKH = kh.LoaiKh " +
                    "WHERE hd.IDHoaDon = @mahoadon";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("mahoadon", mahoadon);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            data.Add(new
                            {
                                tenNV = reader["HoNV"].ToString() + " " + reader["TenNV"].ToString(),
                                tenKH = reader["HoKH"].ToString() + " " + reader["TenKH"].ToString(),
                                idChiNhanh = reader["IDChiNhanh"].ToString(),
                                thoiGianXuat = Convert.ToDateTime(reader["ThoiGianXuat"]).ToString("dd/MM/yyyy"),
                                chietkhauphong = Convert.ToDouble(reader["ChietKhauPhong"]),
                                chietkhaudoan = Convert.ToDouble(reader["ChietKhauDoAn"]),
                            });
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return data;
        }

        public List<object> Load_HoaDonPhong_By_MaHoaDon(string mahoadon)
        {
            List<object> dshd = new List<object>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT hd.IDHoaDon, IDDatPhong, IDPhong, NgayDenO " +
                    "FROM hoadonphong hdp inner join hoadon hd on hdp.IDHoaDon = hd.IDHoaDon " +
                    "WHERE hd.IDHoaDon = @mahoadon";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("mahoadon", mahoadon);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dshd.Add(new
                            {
                                idHoaDon = reader["IDHoaDon"].ToString(),
                                idDatPhong = reader["IDDatPhong"].ToString(),
                                idPhong = reader["IDPhong"].ToString(),
                                ngayDenO = Convert.ToDateTime(reader["NgayDenO"]).ToString("yyyy-MM-dd"),
                            });
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return dshd;
        }

        public List<object> Load_Detail_Old_HoaDonPhong(IFormCollection formData)
        {
            string maphong = formData["maphong"].ToString();
            string ngaydeno = formData["ngaydeno"].ToString();
            string madatphong = formData["madatphong"].ToString();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT phong.IDPhong, phong.SoNguoiO AS SoNguoiOQD, ctdp.SoNguoiO AS SoNguoiOReal, NgayDenO, NgayRoiDi, TenLoaiPhong, lp.GiaTien, PhiThem " +
                    "FROM (phong INNER JOIN chitietdatphong ctdp ON phong.IDPhong = ctdp.IDPhong) inner join loaiphong lp on lp.IDLoaiPhong = phong.IDLoaiPhong " +
                    "WHERE NgayDenO = @ngaydeno AND ctdp.IDDatPhong = @madatphong AND phong.IDPhong = @maphong";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("maphong", maphong);
                cmd.Parameters.AddWithValue("ngaydeno", ngaydeno);
                cmd.Parameters.AddWithValue("madatphong", madatphong);

                List<object> InfoOldHoaDon = new List<object>();
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        int songuoiquydinh = Convert.ToInt32(reader["SoNguoiOQD"]);
                        int phichuan = Convert.ToInt32(reader["GiaTien"]);
                        DateTime ngaydeno_cal = Convert.ToDateTime(reader["NgayDenO"]);
                        DateTime ngayroidi_cal = Convert.ToDateTime(reader["NgayRoiDi"]);
                        int giaphong = 0;
                        int tienphong = 0;
                        if (songuoiquydinh == 2)
                        {
                            giaphong = (int)(phichuan * 1.2);
                        }
                        else if (songuoiquydinh == 3)
                        {
                            giaphong = (int)(phichuan * 1.5);
                        }
                        else if (songuoiquydinh == 4)
                        {
                            giaphong = (int)(phichuan * 1.8);
                        }
                        else
                        {
                            giaphong = phichuan;
                        }
                        tienphong = (int)(ngayroidi_cal - ngaydeno_cal).TotalDays * giaphong;
                        InfoOldHoaDon.Add(new
                        {
                            idPhong = reader["IDPhong"].ToString(),
                            tenLoaiPhong = reader["TenLoaiPhong"].ToString() + " Room",
                            giaPhong = giaphong,
                            soNguoiOQD = Convert.ToInt32(reader["SoNguoiOQD"]),
                            ngayDenO = Convert.ToDateTime(reader["NgayDenO"]).ToString("dd/MM/yyyy"),
                            ngayRoiDi = Convert.ToDateTime(reader["NgayRoiDi"]).ToString("dd/MM/yyyy"),
                            tienPhong = tienphong,
                            phiThem = Convert.ToInt32(reader["PhiThem"])
                        });
                    }
                }
                var str_doan = "SELECT da.IDDoAn, ThoiGianDat, SoLuong, TenDoAn, Gia, DaThanhToan " +
                    "FROM chitietdatdoan ctda inner join doan da on ctda.IDDoan = da.IDDoAn " +
                    "WHERE IDDatPhong = @madatphong AND IDPhong = @maphong AND NgayDenO = @ngaydeno";
                MySqlCommand cmd_doan = new MySqlCommand(str_doan, conn);
                cmd_doan.Parameters.AddWithValue("madatphong", madatphong);
                cmd_doan.Parameters.AddWithValue("maphong", maphong);
                cmd_doan.Parameters.AddWithValue("ngaydeno", ngaydeno);
                using (var reader_doan = cmd_doan.ExecuteReader())
                {
                    if (reader_doan.HasRows)
                    {
                        int tongtiendoan = 0;
                        while (reader_doan.Read())
                        {
                            tongtiendoan = tongtiendoan + Convert.ToInt32(reader_doan["Gia"]) * Convert.ToInt32(reader_doan["SoLuong"]);
                            InfoOldHoaDon.Add(new
                            {
                                idDoAn = reader_doan["IDDoAn"].ToString(),
                                thoiGianDat = Convert.ToDateTime(reader_doan["ThoiGianDat"]).ToString("dd/MM/yyyy HH:mm"),
                                soLuong = Convert.ToInt32(reader_doan["SoLuong"]),
                                tenDoAn = reader_doan["TenDoAn"].ToString(),
                                gia = Convert.ToInt32(reader_doan["Gia"]),
                                daThanhToan = Convert.ToByte(reader_doan["DaThanhToan"])
                            });
                        }
                        InfoOldHoaDon.Add(new
                        {
                            tongTienDoAn = tongtiendoan
                        });
                    }
                }
                return InfoOldHoaDon;
            }
        }

        public List<object> Get_DSHoaDon_ByFilter(string mahoadon)
        {
            List<object> dshd = new List<object>();
            mahoadon = mahoadon + "%";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDHoaDon, IDKhachThanhToan, ThoiGianXuat, nv.IDNhanVien, TongSoTien, LoaiThanhToan, Ho, Ten " +
                    "FROM hoadon hd inner join nhanvien nv on hd.IDNhanVien = nv.IDNhanVien " +
                    "WHERE IDHoaDon LIKE @mahoadon " +
                    "ORDER BY IDHoaDon ASC";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("mahoadon", mahoadon);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dshd.Add(new
                            {
                                idHoaDon = reader["IDHoaDon"].ToString(),
                                idKhachThanhToan = reader["IDKhachThanhToan"].ToString(),
                                thoiGianXuat = Convert.ToDateTime(reader["ThoiGianXuat"]).ToString("yyyy-MM-dd HH:mm"),
                                idNhanVien = reader["IDNhanVien"].ToString(),
                                tongSoTien = Convert.ToInt32(reader["TongSoTien"]),
                                loaiThanhToan = Convert.ToByte(reader["LoaiThanhToan"]),
                                tenNhanVien = reader["Ho"].ToString() + " " + reader["Ten"].ToString(),
                            });
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return dshd;
        }

        //Danh sách hóa đơn - end

        //Danh sách khách hàng - begin
        public List<object> Load_Data_For_DSKhachHang()
        {
            List<object> dskh = new List<object>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDKhachHang, Ho, Ten, NgaySinh, Email, MatKhau, SDT, NgayDangKy, TenLoaiKH, TongTien, GioiTinh " +
                    "FROM khachhang kh inner join loaikhachhang lkh on kh.LoaiKH = lkh.LoaiKH " +
                    "ORDER BY IDKhachHang ASC";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dskh.Add(new
                            {
                                idKhachHang = reader["IDKhachHang"].ToString(),
                                tenKhachHang = reader["Ho"].ToString() + " " + reader["Ten"].ToString(),
                                ngaySinh = Convert.ToDateTime(reader["NgaySinh"]).ToString("yyyy-MM-dd"),
                                email = reader["Email"].ToString(),
                                matKhau = reader["MatKhau"].ToString(),
                                sdt = reader["SDT"].ToString(),
                                ngayDangKy = Convert.ToDateTime(reader["NgayDangKy"]).ToString("yyyy-MM-dd"),
                                tenLoaiKH = reader["TenLoaiKH"].ToString(),
                                tongTien = Convert.ToInt32(reader["TongTien"]),
                                gioiTinh = Convert.ToInt32(reader["GioiTinh"])
                            });
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return dskh;
        }

        public object Load_Data_For_Detail_KhacHang(string makhachhang)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDKhachHang, Ho, Ten, NgaySinh, Email, MatKhau, SDT, NgayDangKy, TenLoaiKH, TongTien, GioiTinh " +
                    "FROM khachhang kh inner join loaikhachhang lkh on kh.LoaiKH = lkh.LoaiKH " +
                    "WHERE IDKhachHang = @makhachhang";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("makhachhang", makhachhang);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        object kh = new
                        {
                            idKhachHang = reader["IDKhachHang"].ToString(),
                            hoKhachHang = reader["Ho"].ToString(),
                            tenKhachHang = reader["Ten"].ToString(),
                            ngaySinh = Convert.ToDateTime(reader["NgaySinh"]).ToString("yyyy-MM-dd"),
                            email = reader["Email"].ToString(),
                            matKhau = reader["MatKhau"].ToString(),
                            sdt = reader["SDT"].ToString(),
                            ngayDangKy = Convert.ToDateTime(reader["NgayDangKy"]).ToString("yyyy-MM-dd"),
                            tenLoaiKH = reader["TenLoaiKH"].ToString(),
                            tongTien = Convert.ToInt32(reader["TongTien"]),
                            gioiTinh = Convert.ToInt32(reader["GioiTinh"])
                        };
                        return kh;
                    }
                    reader.Close();
                    return null;
                }
            }
        }
        public string Update_Change_Detail_KhachHangInFo(IFormCollection formData)
        {
            string idkhachhang = formData["idkhachhang"].ToString();
            string idkhachhang_new = formData["idkhachhang_new"].ToString();
            byte gioitinhkhachhang_new = Convert.ToByte(formData["gioitinhkhachhang_new"]);
            string hokhachhang_new = formData["hokhachhang_new"].ToString();
            string tenkhachhang_new = formData["tenkhachhang_new"].ToString();
            string emailkhachhang_new = formData["emailkhachhang_new"].ToString();
            string sdtkhachhang_new = formData["sdtkhachhang_new"].ToString();
            string matkhaukhachhang_new = formData["matkhaukhachhang_new"].ToString();
            string ngaysinhkhachhang_new = Convert.ToDateTime(formData["ngaysinhkhachhang_new"]).ToString("yyyy-MM-dd");
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "UPDATE khachhang " +
                    "SET IDKhachHang = @idkhachhang_new, GioiTinh = @gioitinh, Ho = @ho, Ten = @ten, Email = @email, SDT = @sdt, NgaySinh = @ngaysinh, MatKhau = @matkhaukhachhang_new " +
                    "WHERE IDKhachHang = @idkhachhang";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("idkhachhang_new", idkhachhang_new);
                cmd.Parameters.AddWithValue("gioitinh", gioitinhkhachhang_new);
                cmd.Parameters.AddWithValue("ho", hokhachhang_new);
                cmd.Parameters.AddWithValue("ten", tenkhachhang_new);
                cmd.Parameters.AddWithValue("email", emailkhachhang_new);
                cmd.Parameters.AddWithValue("sdt", sdtkhachhang_new);
                cmd.Parameters.AddWithValue("ngaysinh", ngaysinhkhachhang_new);
                cmd.Parameters.AddWithValue("matkhaukhachhang_new", matkhaukhachhang_new);
                cmd.Parameters.AddWithValue("idkhachhang", idkhachhang);
                try
                {
                    int check = cmd.ExecuteNonQuery();
                    if (check == 1)
                    {
                        return "Success";
                    }
                    return "Fail";
                }
                catch (MySqlException)
                {
                    return "Fail";
                }
            }
        }

        public List<object> Search_KhachHang_By_ID_In_DSKhachHang(string makhachhang)
        {
            List<object> dskh = new List<object>();
            makhachhang = "%" + makhachhang + "%";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDKhachHang, Ho, Ten, NgaySinh, Email, MatKhau, SDT, NgayDangKy, TenLoaiKH, TongTien, GioiTinh " +
                    "FROM khachhang kh inner join loaikhachhang lkh on kh.LoaiKH = lkh.LoaiKH " +
                    "WHERE IDKhachHang LIKE @makhachhang " +
                    "ORDER BY IDKhachHang ASC";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("makhachhang", makhachhang);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dskh.Add(new
                            {
                                idKhachHang = reader["IDKhachHang"].ToString(),
                                tenKhachHang = reader["Ho"].ToString() + " " + reader["Ten"].ToString(),
                                ngaySinh = Convert.ToDateTime(reader["NgaySinh"]).ToString("yyyy-MM-dd"),
                                email = reader["Email"].ToString(),
                                matKhau = reader["MatKhau"].ToString(),
                                sdt = reader["SDT"].ToString(),
                                ngayDangKy = Convert.ToDateTime(reader["NgayDangKy"]).ToString("yyyy-MM-dd"),
                                tenLoaiKH = reader["TenLoaiKH"].ToString(),
                                tongTien = Convert.ToInt32(reader["TongTien"]),
                                gioiTinh = Convert.ToInt32(reader["GioiTinh"])
                            });
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return dskh;
        }

        //Danh sách khách hàng - end

        //Danh sách nhân viên - begin
        public List<object> Load_Data_For_DSNhanVien()
        {
            List<object> dsnv = new List<object>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDNhanVien, Ho, Ten, NgaySinh, Email, SDT, NgayVaoLam, TenChucVu, IDChiNhanh " +
                    "FROM nhanvien nv inner join chucvu cv on nv.IDChucVu = cv.IDChucVu " +
                    "ORDER BY TenChucVu ASC, IDNhanVien ASC";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dsnv.Add(new
                            {
                                idNhanVien = reader["IDNhanVien"].ToString(),
                                tenNhanVien = reader["Ho"].ToString() + " " + reader["Ten"].ToString(),
                                ngaySinh = Convert.ToDateTime(reader["NgaySinh"]).ToString("yyyy-MM-dd"),
                                email = reader["Email"].ToString(),
                                sdt = reader["SDT"].ToString(),
                                ngayVaoLam = Convert.ToDateTime(reader["NgayVaoLam"]).ToString("yyyy-MM-dd"),
                                tenChucVu = reader["TenChucVu"].ToString(),
                                idChiNhanh = reader["IDChiNhanh"].ToString(),
                            });
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return dsnv;
        }

        public List<object> Load_Info_For_PopUp_Edit_NhanVien()
        {
            List<object> info = new List<object>();
            int count = -1;
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDChiNhanh " +
                    "FROM chinhanh";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            count++;
                            info.Add(new
                            {
                                idChiNhanh = reader["IDChiNhanh"].ToString(),
                            });
                        }
                    }
                    reader.Close();
                }
                string str_cv = "SELECT IDChucVu, TenChucVu " +
                    "FROM chucvu";
                MySqlCommand cmd_cv = new MySqlCommand(str_cv, conn);
                using (var reader_cv = cmd_cv.ExecuteReader())
                {
                    if (reader_cv.HasRows)
                    {
                        while (reader_cv.Read())
                        {
                            info.Add(new
                            {
                                idChucVu = reader_cv["IDChucVu"].ToString(),
                                tenChucVu = reader_cv["TenChucVu"].ToString(),
                            });
                        }
                    }
                    reader_cv.Close();
                }
                info.Add(new
                {
                    sl_chinhanh = count
                });
                conn.Close();
            }
            return info;
        }
        public object Load_Data_For_Detail_NhanVien(string manhanvien)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDNhanVien, MatKhau, Ho, Ten, NgaySinh, Email, SDT, NgayVaoLam, IDChucVu, IDChiNhanh, GioiTinh " +
                    "FROM nhanvien nv " +
                    "WHERE IDNhanVien = @manhanvien";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("manhanvien", manhanvien);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        object nv = new
                        {
                            idNhanVien = reader["IDNhanVien"].ToString(),
                            matKhau = reader["MatKhau"].ToString(),
                            tenNhanVien = reader["Ho"].ToString() + " " + reader["Ten"].ToString(),
                            ngaySinh = Convert.ToDateTime(reader["NgaySinh"]).ToString("yyyy-MM-dd"),
                            email = reader["Email"].ToString(),
                            sdt = reader["SDT"].ToString(),
                            ngayVaoLam = Convert.ToDateTime(reader["NgayVaoLam"]).ToString("yyyy-MM-dd"),
                            idChucVu = reader["IDChucVu"].ToString(),
                            idChiNhanh = reader["IDChiNhanh"].ToString(),
                            gioiTinh = Convert.ToByte(reader["GioiTinh"])
                        };
                        return nv;
                    }
                    reader.Close();
                    return null;
                }
            }
        }

        public string Update_Change_Detail_NhanVienInFo(IFormCollection formData)
        {
            string idnhanvien = formData["idnhanvien"].ToString();
            string idnhanvien_new = formData["idnhanvien_new"].ToString();
            byte gioitinhnhanvien_new = Convert.ToByte(formData["gioitinhnhanvien_new"]);
            string tennhanvien_new = formData["tennhanvien_new"].ToString();
            string emailnhanvien_new = formData["emailnhanvien_new"].ToString();
            string sdtnhanvien_new = formData["sdtnhanvien_new"].ToString();
            string matkhaunhanvien_new = formData["matkhaunhanvien_new"].ToString();
            string machucvunhanvien_new = formData["machucvunhanvien_new"].ToString();
            string machinhanhnhanvien_new = formData["machinhanhnhanvien_new"].ToString();
            string ngaysinhnhanvien_new = Convert.ToDateTime(formData["ngaysinhnhanvien_new"]).ToString("yyyy-MM-dd");

            while(tennhanvien_new[tennhanvien_new.Length-1] == ' ')
            {
                tennhanvien_new = tennhanvien_new.Remove(tennhanvien_new.Length - 1,1);
            }
            int tach = tennhanvien_new.LastIndexOf(' ');
            string honhanvien_new = tennhanvien_new.Remove(tach + 1, tennhanvien_new.Length - (tach + 1));
            tennhanvien_new = tennhanvien_new.Remove(0, tach + 1);
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "UPDATE nhanvien " +
                    "SET IDNhanVien = @idnhanvien_new, GioiTinh = @gioitinhnhanvien_new, Ho = @ho, Ten = @ten, Email = @email, SDT = @sdt, NgaySinh = @ngaysinh, MatKhau = @matkhaunhanvien_new, IDChucVu = @machucvu, IDChiNhanh = @machinhanh " +
                    "WHERE IDNhanVien = @idnhanvien";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("idnhanvien_new", idnhanvien_new);
                cmd.Parameters.AddWithValue("gioitinhnhanvien_new", gioitinhnhanvien_new);
                cmd.Parameters.AddWithValue("ho", honhanvien_new);
                cmd.Parameters.AddWithValue("ten", tennhanvien_new);
                cmd.Parameters.AddWithValue("email", emailnhanvien_new);
                cmd.Parameters.AddWithValue("sdt", sdtnhanvien_new);
                cmd.Parameters.AddWithValue("ngaysinh", ngaysinhnhanvien_new);
                cmd.Parameters.AddWithValue("matkhaunhanvien_new", matkhaunhanvien_new);
                cmd.Parameters.AddWithValue("machucvu", machucvunhanvien_new);
                cmd.Parameters.AddWithValue("machinhanh", machinhanhnhanvien_new);
                cmd.Parameters.AddWithValue("idnhanvien", idnhanvien);
                try
                {
                    int check = cmd.ExecuteNonQuery();
                    if (check == 1)
                    {
                        return "Success";
                    }
                    return "Fail";
                }
                catch (MySqlException)
                {
                    return "Fail";
                }
            }
        }

        public List<object> Search_NhanVien_By_ID_In_DSNhanVien(string manhanvien)
        {
            List<object> dsnv = new List<object>();
            manhanvien = "%" + manhanvien + "%";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDNhanVien, Ho, Ten, NgaySinh, Email, SDT, NgayVaoLam, TenChucVu, IDChiNhanh " +
                    "FROM nhanvien nv inner join chucvu cv on nv.IDChucVu = cv.IDChucVu " +
                    "WHERE IDNhanVien LIKE @manhanvien " +
                    "ORDER BY TenChucVu ASC, IDNhanVien ASC";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("manhanvien", manhanvien);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dsnv.Add(new
                            {
                                idNhanVien = reader["IDNhanVien"].ToString(),
                                tenNhanVien = reader["Ho"].ToString() + " " + reader["Ten"].ToString(),
                                ngaySinh = Convert.ToDateTime(reader["NgaySinh"]).ToString("yyyy-MM-dd"),
                                email = reader["Email"].ToString(),
                                sdt = reader["SDT"].ToString(),
                                ngayVaoLam = Convert.ToDateTime(reader["NgayVaoLam"]).ToString("yyyy-MM-dd"),
                                tenChucVu = reader["TenChucVu"].ToString(),
                                idChiNhanh = reader["IDChiNhanh"].ToString(),
                            });
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return dsnv;
        }

        public string Create_New_Staff_For_DSNhanVien(IFormCollection formData)
        {
            string idnhanvien_new = formData["idnhanvien_new"].ToString();
            byte gioitinhnhanvien_new = Convert.ToByte(formData["gioitinhnhanvien_new"]);
            string tennhanvien_new = formData["tennhanvien_new"].ToString();
            string emailnhanvien_new = formData["emailnhanvien_new"].ToString();
            string sdtnhanvien_new = formData["sdtnhanvien_new"].ToString();
            string matkhaunhanvien_new = formData["matkhaunhanvien_new"].ToString();
            string machucvunhanvien_new = formData["machucvunhanvien_new"].ToString();
            string machinhanhnhanvien_new = formData["machinhanhnhanvien_new"].ToString();
            string ngaysinhnhanvien_new = Convert.ToDateTime(formData["ngaysinhnhanvien_new"]).ToString("yyyy-MM-dd");
            string ngayvaolamnhanvien_new = Convert.ToDateTime(formData["ngaysinhnhanvien_new"]).ToString("yyyy-MM-dd");

            while (tennhanvien_new[tennhanvien_new.Length - 1] == ' ')
            {
                tennhanvien_new = tennhanvien_new.Remove(tennhanvien_new.Length - 1, 1);
            }
            int tach = tennhanvien_new.LastIndexOf(' ');
            string honhanvien_new = tennhanvien_new.Remove(tach + 1, tennhanvien_new.Length - (tach + 1));
            tennhanvien_new = tennhanvien_new.Remove(0, tach + 1);
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "INSERT INTO nhanvien(IDNhanVien, GioiTinh, Ho, Ten, Email, SDT, MatKhau, IDChucVu, IDChiNhanh, NgaySinh, NgayVaoLam) " +
                    "VALUES (@idnhanvien_new, @gioitinhnhanvien_new, @ho, @ten, @email, @sdt, @matkhaunhanvien_new, @machucvu, @machinhanh, @ngaysinh, @ngayvaolam)";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("idnhanvien_new", idnhanvien_new);
                cmd.Parameters.AddWithValue("gioitinhnhanvien_new", gioitinhnhanvien_new);
                cmd.Parameters.AddWithValue("ho", honhanvien_new);
                cmd.Parameters.AddWithValue("ten", tennhanvien_new);
                cmd.Parameters.AddWithValue("email", emailnhanvien_new);
                cmd.Parameters.AddWithValue("sdt", sdtnhanvien_new);
                cmd.Parameters.AddWithValue("ngaysinh", ngaysinhnhanvien_new);
                cmd.Parameters.AddWithValue("ngayvaolam", ngayvaolamnhanvien_new);
                cmd.Parameters.AddWithValue("matkhaunhanvien_new", matkhaunhanvien_new);
                cmd.Parameters.AddWithValue("machucvu", machucvunhanvien_new);
                cmd.Parameters.AddWithValue("machinhanh", machinhanhnhanvien_new);
                try
                {
                    int check = cmd.ExecuteNonQuery();
                    if (check == 1)
                    {
                        return "Success";
                    }
                    return "Fail";
                }
                catch (MySqlException)
                {
                    return "Fail";
                }
            }
        }

        //Danh sách nhân viên - end

        //Danh sách phòng - begin
        public List<object> Load_Data_For_DSPhong()
        {
            List<object> dsphong = new List<object>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDPhong, IDChiNhanh, p.IDLoaiPhong, TenLoaiPhong, SoPhong, SoNguoiO, SoGiuong " +
                    "FROM phong p inner join loaiphong lp on p.IDLoaiPhong = lp.IDLoaiPhong " +
                    "ORDER BY IDPhong ASC ";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dsphong.Add(new
                            {
                                idPhong = reader["IDPhong"].ToString(),
                                idChiNhanh = reader["IDChiNhanh"].ToString(),
                                tenLoaiPhong = reader["TenLoaiPhong"].ToString(),
                                soPhong = Convert.ToInt32(reader["SoPhong"]),
                                soNguoiO = Convert.ToInt32(reader["SoNguoiO"]),
                                soGiuong = Convert.ToInt32(reader["SoGiuong"])
                            });
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return dsphong;
        }

        public List<object> Load_Info_For_PopUp_Edit_Room()
        {
            List<object> info = new List<object>();
            int count = -1;
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDChiNhanh " +
                    "FROM chinhanh";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            count++;
                            info.Add(new
                            {
                                idChiNhanh = reader["IDChiNhanh"].ToString(),
                            });
                        }
                    }
                    reader.Close();
                }
                string str_cv = "SELECT IDLoaiPhong, TenLoaiPhong " +
                    "FROM loaiphong";
                MySqlCommand cmd_cv = new MySqlCommand(str_cv, conn);
                using (var reader_cv = cmd_cv.ExecuteReader())
                {
                    if (reader_cv.HasRows)
                    {
                        while (reader_cv.Read())
                        {
                            info.Add(new
                            {
                                idLoaiPhong = reader_cv["IDLoaiPhong"].ToString(),
                                tenLoaiPhong = reader_cv["TenLoaiPhong"].ToString(),
                            });
                        }
                    }
                    reader_cv.Close();
                }
                info.Add(new
                {
                    sl_chinhanh = count
                });
                conn.Close();
            }
            return info;
        }

        public object Load_Data_For_Detail_Phong(string maphong)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDPhong, IDChiNhanh, IDLoaiPhong, SoPhong, Tang, SoNguoiO, SoGiuong " +
                    "FROM phong " +
                    "WHERE IDPhong = @maphong";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("maphong", maphong);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        object phong = new
                        {
                            idPhong = reader["IDPhong"].ToString(),
                            idChiNhanh = reader["IDChiNhanh"].ToString(),
                            idLoaiPhong = reader["IDLoaiPhong"].ToString(),
                            soPhong = Convert.ToInt32(reader["SoPhong"]),
                            tang = Convert.ToInt32(reader["Tang"]),
                            soNguoiO = Convert.ToInt32(reader["SoNguoiO"]),
                            soGiuong = Convert.ToInt32(reader["SoGiuong"])
                        };
                        return phong;
                    }
                    reader.Close();
                    return null;
                }
            }
        }

        public string Update_Change_Detail_PhongInFo(IFormCollection formData)
        {
            string maphong = formData["maphong"].ToString();
            string maphong_new = formData["maphong_new"].ToString();
            int tangphong_new = Convert.ToInt32(formData["tangphong_new"]);
            int songuoiophong_new = Convert.ToInt32(formData["songuoiophong_new"]);
            int sogiuongphong_new = Convert.ToInt32(formData["sogiuongphong_new"]);
            string sophong_new = formData["sophong_new"].ToString();
            string chinhanhphong_new = formData["chinhanhphong_new"].ToString();
            string loaiphong_new = formData["loaiphong_new"].ToString();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "UPDATE phong " +
                    "SET IDPhong = @maphong_new, Tang = @tang, SoNguoiO = @songuoio, SoPhong = @sophong, SoGiuong = @sogiuong, IDChiNhanh = @idchinhanh, IDLoaiPhong = @idloaiphong " +
                    "WHERE IDPhong = @maphong";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("maphong_new", maphong_new);
                cmd.Parameters.AddWithValue("maphong", maphong);
                cmd.Parameters.AddWithValue("tang", tangphong_new);
                cmd.Parameters.AddWithValue("songuoio", songuoiophong_new);
                cmd.Parameters.AddWithValue("sophong", sophong_new);
                cmd.Parameters.AddWithValue("sogiuong", sogiuongphong_new);
                cmd.Parameters.AddWithValue("idchinhanh", chinhanhphong_new);
                cmd.Parameters.AddWithValue("idloaiphong", loaiphong_new);
                try
                {
                    int check = cmd.ExecuteNonQuery();
                    if (check == 1)
                    {
                        return "Success";
                    }
                    return "Fail";
                }
                catch (MySqlException)
                {
                    return "Fail";
                }
            }
        }

        public string Create_New_Room_For_DSPhong(IFormCollection formData)
        {
            string maphong_new = formData["maphong_new"].ToString();
            int tangphong_new = Convert.ToInt32(formData["tangphong_new"]);
            int songuoiophong_new = Convert.ToInt32(formData["songuoiophong_new"]);
            int sogiuongphong_new = Convert.ToInt32(formData["sogiuongphong_new"]);
            string sophong_new = formData["sophong_new"].ToString();
            string chinhanhphong_new = formData["chinhanhphong_new"].ToString();
            string loaiphong_new = formData["loaiphong_new"].ToString();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "INSERT INTO phong(IDPhong, Tang, SoNguoiO, SoGiuong, SoPhong, IDChiNhanh, IDLoaiPhong, TrangThaiPhong) " +
                    "VALUES (@maphong_new, @tang, @songuoio, @sogiuong, @sophong, @idchinhanh, @idloaiphong, 0)";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("maphong_new", maphong_new);
                cmd.Parameters.AddWithValue("tang", tangphong_new);
                cmd.Parameters.AddWithValue("songuoio", songuoiophong_new);
                cmd.Parameters.AddWithValue("sophong", sophong_new);
                cmd.Parameters.AddWithValue("sogiuong", sogiuongphong_new);
                cmd.Parameters.AddWithValue("idchinhanh", chinhanhphong_new);
                cmd.Parameters.AddWithValue("idloaiphong", loaiphong_new);
                try
                {
                    int check = cmd.ExecuteNonQuery();
                    if (check == 1)
                    {
                        return "Success";
                    }
                    return "Fail";
                }
                catch (MySqlException)
                {
                    return "Fail";
                }
            }
        }

        public List<object> Search_Phong_By_ID_In_DSPhong(string maphong)
        {
            List<object> dsphong = new List<object>();
            maphong = "%" + maphong + "%";
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDPhong, IDChiNhanh, p.IDLoaiPhong, TenLoaiPhong, SoPhong, SoNguoiO, SoGiuong " +
                    "FROM phong p inner join loaiphong lp on p.IDLoaiPhong = lp.IDLoaiPhong " +
                    "WHERE IDPhong LIKE @maphong " +
                    "ORDER BY IDPhong ASC ";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("maphong", maphong);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dsphong.Add(new
                            {
                                idPhong = reader["IDPhong"].ToString(),
                                idChiNhanh = reader["IDChiNhanh"].ToString(),
                                tenLoaiPhong = reader["TenLoaiPhong"].ToString(),
                                soPhong = Convert.ToInt32(reader["SoPhong"]),
                                soNguoiO = Convert.ToInt32(reader["SoNguoiO"]),
                                soGiuong = Convert.ToInt32(reader["SoGiuong"])
                            });
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return dsphong;
        }
        //Danh sách phòng - end

        //Danh sách loại phòng - begin
        public List<object> Load_Data_For_DSLoaiPhong()
        {
            List<object> dsloaiphong = new List<object>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDLoaiPhong, TenLoaiPhong, PhanTramQuaSoNguoi, TuLanh, MayLanh, GiaTien, GiaCoc " +
                    "FROM loaiphong " +
                    "ORDER BY IDLoaiPhong ASC ";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dsloaiphong.Add(new
                            {
                                idLoaiPhong = reader["IDLoaiPhong"].ToString(),
                                tenLoaiPhong = reader["TenLoaiPhong"].ToString(),
                                phanTram = reader["PhanTramQuaSoNguoi"].ToString(),
                                tuLanh = Convert.ToInt32(reader["TuLanh"]),
                                mayLanh = Convert.ToInt32(reader["MayLanh"]),
                                giaTien = Convert.ToInt32(reader["GiaTien"]),
                                giaCoc = Convert.ToInt32(reader["GiaCoc"])
                            });
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return dsloaiphong;
        }

        public object Load_Data_Detail_RoomType_For_DSLoaiPhong(string maloaiphong)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDLoaiPhong, TenLoaiPhong, GiaTien, GiaCoc, KichThuocPhong, TuLanh, MayLanh, MoTa " +
                    "FROM loaiphong " +
                    "WHERE IDLoaiPhong = @maloaiphong";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("maloaiphong", maloaiphong);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        object lp = new
                        {
                            idLoaiPhong = reader["IDLoaiPhong"].ToString(),
                            tenLoaiPhong = reader["TenLoaiPhong"].ToString(),
                            giaTien = Convert.ToInt32(reader["GiaTien"]),
                            giaCoc = Convert.ToInt32(reader["GiaCoc"]),
                            tuLanh = Convert.ToInt32(reader["TuLanh"]),
                            mayLanh = Convert.ToInt32(reader["MayLanh"]),
                            kichThuocPhong = reader["KichThuocPhong"].ToString(),
                            moTa = reader["MoTa"].ToString(),
                        };
                        return lp;
                    }
                    reader.Close();
                    return null;
                }
            }
        }

        public string Update_Change_Detail_LoaiPhongInFo(IFormCollection formData)
        {
            string idloaiphong = formData["idloaiphong"].ToString();
            string tenloaiphong = formData["tenloaiphong"].ToString();
            int giatien = Convert.ToInt32(formData["giatien"]);
            int giacoc = Convert.ToInt32(formData["giacoc"]);
            int tulanh = Convert.ToInt32(formData["tulanh"]);
            int maylanh = Convert.ToInt32(formData["maylanh"]);
            string kichthuocphong = formData["kichthuocphong"].ToString();
            string mota = formData["mota"].ToString();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "UPDATE loaiphong " +
                    "SET TenLoaiPhong = @tenloaiphong, GiaTien = @giatien, GiaCoc = @giacoc, TuLanh = @tulanh, MayLanh = @maylanh, kichthuocphong = @kichthuocphong, mota = @mota " +
                    "WHERE IDLoaiPhong = @idloaiphong";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("idloaiphong", idloaiphong);
                cmd.Parameters.AddWithValue("tenloaiphong", tenloaiphong);
                cmd.Parameters.AddWithValue("giatien", giatien);
                cmd.Parameters.AddWithValue("giacoc", giacoc);
                cmd.Parameters.AddWithValue("tulanh", tulanh);
                cmd.Parameters.AddWithValue("maylanh", maylanh);
                cmd.Parameters.AddWithValue("kichthuocphong", kichthuocphong);
                cmd.Parameters.AddWithValue("mota", mota);
                try
                {
                    int check = cmd.ExecuteNonQuery();
                    if (check == 1)
                    {
                        return "Success";
                    }
                    return "Fail";
                }
                catch (MySqlException)
                {
                    return "Fail";
                }
            }
        }
        //Danh sách loại phòng - end

        //Danh sách đồ ăn - begin
        public List<object> Load_Data_For_DSDoAn()
        {
            List<object> dsdoan = new List<object>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDDoAn, TenDoAn, LinkIMG, Gia " +
                    "FROM DoAn " +
                    "ORDER BY IDDoAn ASC ";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dsdoan.Add(new
                            {
                                idDoAn = Convert.ToInt32(reader["IDDoAn"]),
                                tenDoAn = reader["TenDoAn"].ToString(),
                                linkIMG = reader["LinkIMG"].ToString(),
                                gia = Convert.ToInt32(reader["Gia"]),
                            });
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return dsdoan;
        }

        public object Load_Data_Detail_Food_For_DSDoAn(int madoan)
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDDoAn, TenDoAn, Gia " +
                    "FROM doan " +
                    "WHERE IDDoAn = @madoan";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("madoan", madoan);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        object da = new
                        {
                            idDoAn = Convert.ToInt32(reader["IDDoAn"]),
                            tenDoAn = reader["TenDoAn"].ToString(),
                            gia = Convert.ToInt32(reader["Gia"]),
                        };
                        return da;
                    }
                    reader.Close();
                    return null;
                }
            }
        }
        public string Update_Change_Detail_DoAnInFo(IFormCollection formData)
        {
            int iddoan = Convert.ToInt32(formData["iddoan"]);
            string tendoan = formData["tendoan"].ToString();
            int gia = Convert.ToInt32(formData["gia"]);
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "UPDATE doan " +
                    "SET tendoan = @tendoan, Gia = @gia " +
                    "WHERE IDDoAn = @iddoan";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("iddoan", iddoan);
                cmd.Parameters.AddWithValue("tendoan", tendoan);
                cmd.Parameters.AddWithValue("gia", gia);
                try
                {
                    int check = cmd.ExecuteNonQuery();
                    if (check == 1)
                    {
                        return "Success";
                    }
                    return "Fail";
                }
                catch (MySqlException)
                {
                    return "Fail";
                }
            }
        }
        public int Load_Info_For_PopUp_Create_Food()
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "SELECT MAX(IDDoAn) AS IDDoAn " +
                    "FROM doan ";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        reader.Read();
                        int iddoan = Convert.ToInt32(reader["IDDoAn"]);
                        iddoan = iddoan + 1;
                        return iddoan;
                    }
                }
                conn.Close();
                return 0;
            }
        }
        public string Create_New_Food_For_DSDoAn(IFormCollection formData)
        {
            int madoan_new = Convert.ToInt32(formData["madoan_new"]);
            string tendoan_new = formData["tendoan_new"].ToString();
            int giadoan_new = Convert.ToInt32(formData["giadoan_new"]);
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                var str = "INSERT INTO doan(IDDoAn, TenDoAn, Gia, LinkIMG) " +
                    "VALUES (@madoan_new, @tendoan_new, @giadoan_new, '/assets/foodimg/hutieunamvang.jpg')";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("madoan_new", madoan_new);
                cmd.Parameters.AddWithValue("tendoan_new", tendoan_new);
                cmd.Parameters.AddWithValue("giadoan_new", giadoan_new);
                try
                {
                    int check = cmd.ExecuteNonQuery();
                    if (check == 1)
                    {
                        return "Success";
                    }
                    return "Fail";
                }
                catch (MySqlException)
                {
                    return "Fail";
                }
            }
        }
        public string Delete_Food_For_DSDoAn(IFormCollection formData)
        {
            string chuoi_doan_can_xoa = formData["madoan_delete"].ToString();
            chuoi_doan_can_xoa = chuoi_doan_can_xoa.Remove(chuoi_doan_can_xoa.Length - 1, 1);
            string[] ar_food_delete = chuoi_doan_can_xoa.Split(" ");
            string str_ctda = "DELETE FROM chitietdatdoan WHERE ";
            for (int i = 0; i < ar_food_delete.Length; i++)
            {
                str_ctda = str_ctda + "IDDoAn = @madoan_" + i.ToString() + " OR ";
            }
            str_ctda = str_ctda.Remove(str_ctda.Length - 4, 3);
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand(str_ctda, conn);
                for (int i = 0; i < ar_food_delete.Length; i++)
                {
                    cmd.Parameters.AddWithValue("madoan_" + i.ToString(), ar_food_delete[i]);
                }
                try
                {
                    int check = cmd.ExecuteNonQuery();
                    string str_da = "DELETE FROM doan WHERE ";
                    for (int i = 0; i < ar_food_delete.Length; i++)
                    {
                        str_da = str_da + "IDDoAn = @madoan_" + i.ToString() + " OR ";
                    }
                    str_da = str_da.Remove(str_da.Length - 4, 3);
                    MySqlCommand cmd_da = new MySqlCommand(str_da, conn);
                    for (int i = 0; i < ar_food_delete.Length; i++)
                    {
                        cmd_da.Parameters.AddWithValue("madoan_" + i.ToString(), ar_food_delete[i]);
                    }
                    try
                    {
                        int check_da = cmd_da.ExecuteNonQuery();
                        if (check_da > 0)
                        {
                            return "Success";
                        }
                        else return "Fail";
                    }
                    catch(MySqlException)
                    {
                        return "Fail";
                    }
                }
                catch (MySqlException)
                {
                    return "Fail";
                }
            }    
        }
        public List<object> Search_Food_By_Name_For_DSDoAn(string tendoan)
        {
            if (tendoan != null)
            {
                tendoan = tendoan.ToUpper();
                tendoan = RemoveSign4VietnameseString(tendoan);
            }
            tendoan = '%' + tendoan + '%';
            List<object> dsdoan = new List<object>();
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str = "SELECT IDDoAn, TenDoAn, LinkIMG, Gia " +
                    "FROM DoAn " +
                    "WHERE UPPER(TenDoAn) LIKE @tendoan " +
                    "ORDER BY IDDoAn ASC ";
                MySqlCommand cmd = new MySqlCommand(str, conn);
                cmd.Parameters.AddWithValue("tendoan", tendoan);
                using (var reader = cmd.ExecuteReader())
                {
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            dsdoan.Add(new
                            {
                                idDoAn = Convert.ToInt32(reader["IDDoAn"]),
                                tenDoAn = reader["TenDoAn"].ToString(),
                                linkIMG = reader["LinkIMG"].ToString(),
                                gia = Convert.ToInt32(reader["Gia"]),
                            });
                        }
                    }
                    reader.Close();
                }
                conn.Close();
            }
            return dsdoan;
        }
        //Danh sách đồ ăn - end
        //Mới thêm
        public void UpdateStatePhongAfterBookOn()
        {
            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                string str0 = "UPDATE phong p " +
                    "SET p.TrangThaiPhong = 0 " +
                    "WHERE NOT EXISTS (SELECT * " +
                                        "FROM chitietdatphong ctdp " +
                                        "WHERE p.IDPhong = ctdp.IDPhong AND ctdp.NgayRoiDi>=CURRENT_DATE());";

                string str1 = "UPDATE phong p " +
                    "SET p.TrangThaiPhong = 1 " +
                    "WHERE p.IDPhong IN(SELECT p1.IDPHONG " +
                                        "FROM phong p1 INNER JOIN chitietdatphong ctdp1 ON p1.IDPhong = ctdp1.IDPhong " +
                                        "WHERE ctdp1.NgayRoiDi >= CURRENT_DATE());";
                MySqlCommand cmd0 = new MySqlCommand(str0, conn);
                MySqlCommand cmd1 = new MySqlCommand(str1, conn);
                cmd0.ExecuteNonQuery();
                cmd1.ExecuteNonQuery();
            }
        }

        private static readonly string[] VietnameseSigns = new string[]
        {

            "aAeEoOuUiIdDyY",

            "áàạảãâấầậẩẫăắằặẳẵ",

            "ÁÀẠẢÃÂẤẦẬẨẪĂẮẰẶẲẴ",

            "éèẹẻẽêếềệểễ",

            "ÉÈẸẺẼÊẾỀỆỂỄ",

            "óòọỏõôốồộổỗơớờợởỡ",

            "ÓÒỌỎÕÔỐỒỘỔỖƠỚỜỢỞỠ",

            "úùụủũưứừựửữ",

            "ÚÙỤỦŨƯỨỪỰỬỮ",

            "íìịỉĩ",

            "ÍÌỊỈĨ",

            "đ",

            "Đ",

            "ýỳỵỷỹ",

            "ÝỲỴỶỸ"
        };
        public static string RemoveSign4VietnameseString(string str)
        {
            for (int i = 1; i < VietnameseSigns.Length; i++)
            {
                for (int j = 0; j < VietnameseSigns[i].Length; j++)
                    str = str.Replace(VietnameseSigns[i][j], '_');
            }
            return str;
        }
    }
}
