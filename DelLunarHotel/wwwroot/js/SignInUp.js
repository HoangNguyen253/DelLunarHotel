CheckUser_Reload();
const btndangnhaponpage = document.getElementById("login-button-all-pages");
const btndangnhapform = document.querySelector(".login-page-container .login-page .login-page-button");
const btndangkyform = document.querySelector(".signup-page-container .signup-page .signup-page-button");
btndangnhapform.addEventListener('click', () => {
    var usercccd_inform = document.getElementById("usercccd_inform").value;
    var userpass_inform = document.getElementById("userpass_inform").value;
    if (usercccd_inform == "" || userpass_inform == "") {
        document.getElementById("login_error_notify").innerHTML = "Vui lòng nhập đầy đủ thông tin!";
    }
    else {
        var form_dn = new FormData();
        form_dn.append("usercccd_inform", usercccd_inform);
        form_dn.append("userpass_inform", userpass_inform);
        var xhr_dn = new XMLHttpRequest();
        var url_dn = "https://localhost:5001/Home/CheckLogin";
        xhr_dn.open("POST", url_dn, true);
        xhr_dn.timeout = 50000;
        xhr_dn.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText == "true") {
                    isUser = true;
                    if (visitedPage[3]) {
                        disbleform();
                    }
                    var xhr_getuserbyss = new XMLHttpRequest();
                    var url_getuserbyss = "https://localhost:5001/Home/GetUserBySS";
                    xhr_getuserbyss.open("POST", url_getuserbyss, true);
                    xhr_getuserbyss.timeout = 50000;
                    xhr_getuserbyss.onreadystatechange = function () {
                        if (xhr_getuserbyss.readyState == 4 && xhr_getuserbyss.status == 200) {
                            const userInSession = JSON.parse(xhr_getuserbyss.response);
                            document.querySelector("#user_name span").innerHTML = "<i class='fa fa-user' style='font-size: 1.25rem; color: #002b49'></i> "+userInSession["ten"];
                            document.getElementById("user_name").style.display = "block";
                            btndangnhaponpage.style.display = "none";
                            const login_page_afterlogin = document.getElementById("login_page_container");
                            login_page_afterlogin.classList.remove('show');
                        }
                    }
                    xhr_getuserbyss.send();
                }
                else if (this.responseText == "false") {
                    document.getElementById("login_error_notify").innerHTML = "Tài khoản hoặc mật khẩu không đúng!";
                    document.getElementById("userpass_inform").value = "";
                    isUser = false;
                }
            }
        }
        xhr_dn.send(form_dn);
    }
})
btndangkyform.addEventListener('click', () => {
    if (checkconfirmpswd() == false) {
        document.getElementById("registry_error_notify").innerHTML = "Mật khẩu không trùng khớp!!";
    }
    else {
        var usercccd_registryform = document.getElementById("registry_cccd_user").value;
        var userfirstname_registryform = document.getElementById("registry_firstname_user").value;
        var userlastname_registryform = document.getElementById("registry_lastname_user").value;
        var userdatebirth_registryform = document.getElementById("registry_datebirth_user").value;
        var usergender_registryform = document.getElementById("registry_gender_user").value;
        var useremail_registryform = document.getElementById("registry_email_user").value;
        var usertele_registryform = document.getElementById("registry_tele_user").value;
        var userpswd_registryform = document.getElementById("registry_pswd_user").value;
        if (usercccd_registryform == "" || userfirstname_registryform == "" || userlastname_registryform == ""
            || useremail_registryform == "") {
            document.getElementById("registry_error_notify").innerHTML = "Vui lòng nhập đầy đủ các thông tin bắt buộc!";
        }
        else {
            var form_dk = new FormData();
            form_dk.append("usercccd_registryform", usercccd_registryform);
            form_dk.append("userfirstname_registryform", userfirstname_registryform);
            form_dk.append("userlastname_registryform", userlastname_registryform);
            form_dk.append("userdatebirth_registryform", userdatebirth_registryform);
            form_dk.append("usergender_registryform", usergender_registryform);
            form_dk.append("useremail_registryform", useremail_registryform);
            form_dk.append("usertele_registryform", usertele_registryform);
            form_dk.append("userpswd_registryform", userpswd_registryform);
            var xhr_dk = new XMLHttpRequest();
            var url_dk = "https://localhost:5001/Home/CheckRegistry";
            xhr_dk.open("POST", url_dk, true);
            xhr_dk.timeout = 50000;
            xhr_dk.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    if (this.responseText == "true") {
                        isUser = true;
                        if (visitedPage[3]) {
                            disbleform();
                        }
                        var xhr_getuserbyss_dk = new XMLHttpRequest();
                        var url_getuserbyss_dk = "https://localhost:5001/Home/GetUserBySS";
                        xhr_getuserbyss_dk.open("POST", url_getuserbyss_dk, true);
                        xhr_getuserbyss_dk.timeout = 50000;
                        xhr_getuserbyss_dk.onreadystatechange = function () {
                            if (xhr_getuserbyss_dk.readyState == 4 && xhr_getuserbyss_dk.status == 200) {
                                const userInSession = JSON.parse(xhr_getuserbyss_dk.response);
                                document.querySelector("#user_name span").innerHTML = "<i class='fa fa-user' style='font-size: 1.25rem; color: #002b49'></i> "+userInSession["ten"];
                                document.getElementById("user_name").style.display = "block";
                                btndangnhaponpage.style.display = "none";
                                const registry_page_afterlogin = document.getElementById("signup_page_container");
                                registry_page_afterlogin.classList.remove('show');
                            }
                        }
                        xhr_getuserbyss_dk.send();
                    }
                    else if (this.responseText == "false") {
                        document.getElementById("registry_error_notify").innerHTML = "Đăng ký không thành công! Có thể tài khoản này đã tồn tại!";
                        isUser = false;
                    }
                }
            }
            xhr_dk.send(form_dk);
        }
    }
})
function disbleform() {
    var xhr_check_autofill_form_step3 = new XMLHttpRequest();
    var url_check_autofill_form_step3 = "https://localhost:5001/Home/GetUserBySS";
    xhr_check_autofill_form_step3.open("POST", url_check_autofill_form_step3, true);
    xhr_check_autofill_form_step3.timeout = 50000;
    xhr_check_autofill_form_step3.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const userInSession_Check = JSON.parse(xhr_check_autofill_form_step3.response);
            if (userInSession_Check == null) { }
            else {
                var usercccd_require_step3 = document.getElementById("usercccd_require_step3");
                var userfname_require_step3 = document.getElementById("userfname_require_step3");
                var userlname_require_step3 = document.getElementById("userlname_require_step3");
                var userdatebirth_require_step3 = document.getElementById("userdatebirth_require_step3");
                var usergender_require_step3 = document.getElementById("usergender_require_step3");
                var useremail_require_step3 = document.getElementById("useremail_require_step3");
                var usertele_require_step3 = document.getElementById("usertele_require_step3");
                document.getElementById("recaptcha_step3").style.display = "none";
                usercccd_require_step3.classList.add("dib");
                userfname_require_step3.classList.add("dib");
                userlname_require_step3.classList.add("dib");
                userdatebirth_require_step3.classList.add("dib");
                usergender_require_step3.classList.add("dib");
                useremail_require_step3.classList.add("dib");
                usertele_require_step3.classList.add("dib");

                usercccd_require_step3.value = userInSession_Check["idKhachHang"];
                userfname_require_step3.value = userInSession_Check["ho"];
                userlname_require_step3.value = userInSession_Check["ten"];
                var birthDay = new Date(userInSession_Check["ngaySinh"]);
                const datebirth = birthDay.getFullYear() + '-' + ("0" + (birthDay.getMonth() + 1)).substr(-2, 2) + '-' + ("0" + birthDay.getDate()).substr(-2, 2);
                userdatebirth_require_step3.value = datebirth;
                usergender_require_step3.value = userInSession_Check["gioiTinh"];
                useremail_require_step3.value = userInSession_Check["email"];
                usertele_require_step3.value = userInSession_Check["sdt"];
            }
        }
    }
    xhr_check_autofill_form_step3.send();
}
function checkconfirmpswd() {
    if (document.getElementById("registry_pswd_user").value == document.getElementById("registry_pswdconfirm_user").value)
        return true;
    return false;
}
function CheckUser_Reload() {
    var xhr_getuserbyss_reload = new XMLHttpRequest();
    var url_getuserbyss_reload = "https://localhost:5001/Home/GetUserBySS";
    xhr_getuserbyss_reload.open("POST", url_getuserbyss_reload, true);
    xhr_getuserbyss_reload.timeout = 50000;
    xhr_getuserbyss_reload.onreadystatechange = function () {
        if (xhr_getuserbyss_reload.readyState == 4 && xhr_getuserbyss_reload.status == 200) {
            var userInSession_Check_Reload = JSON.parse(xhr_getuserbyss_reload.response);
            if (userInSession_Check_Reload != null) {
                document.querySelector("#user_name span").innerHTML = "<i class='fa fa-user' style='font-size: 1.25rem; color: #002b49'></i> "+userInSession_Check_Reload["ten"];
                document.getElementById("user_name").style.display = "block";
            }
            else {
                document.getElementById("login-button-all-pages").style.display = "block";
            }
        }
    }
    xhr_getuserbyss_reload.send();
}