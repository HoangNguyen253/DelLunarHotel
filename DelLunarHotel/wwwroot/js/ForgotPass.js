//-----------Lấy mail----------
const getMailBtn = document.querySelector("main .container .field .getMail button");
const CCCDInput = document.querySelector("main .container .field .getMail input");
getMailBtn.addEventListener('click', function () {
    if (CCCDInput.value == "") {
        document.querySelector("main .container .field .cccderror").innerHTML = "Vui lòng nhập CCCD/CMND.";
    }
    else {
        document.querySelector("main .container .field .cccderror").innerHTML = "";
        let xhr_getMail = new XMLHttpRequest();
        let url_getMail = "https://localhost:5001/KhachHang/GetMailByID?CCCD=" + CCCDInput.value;
        xhr_getMail.open("POST", url_getMail, true);
        xhr_getMail.timeout = 50000;
        xhr_getMail.onreadystatechange = function () {
            if (xhr_getMail.readyState == 4 && xhr_getMail.status == 200) {
                let kq = xhr_getMail.responseText;
                if (kq == "") {
                    document.querySelector("main .container .field .cccderror").innerHTML = "CCCD/CMND không hợp lệ.";
                }
                else {
                    document.querySelector("main .container .field.wait .label span").innerHTML = kq;
                }
            }
        }
        xhr_getMail.send();
    }
});
//-----------Đổi pass----------
const changePass = document.querySelector("main .container div .changePass");
const EMailInput = document.querySelector("main .container .field.wait input");
const resultChange = document.querySelector("main .container div .resultChange");
changePass.addEventListener('click', function () {
    if (CCCDInput.value == "") {
        document.querySelector("main .container .field .cccderror").innerHTML = "Vui lòng nhập CCCD/CMND.";
    }
    else {
        if (EMailInput.value == "") {
            document.querySelector("main .container .field.wait .emailerror").innerHTML = "Vui lòng nhập Email.";
        }
        else {
            document.querySelector("main .container .field .cccderror").innerHTML = "";
            document.querySelector("main .container .field.wait .emailerror").innerHTML = "";
            document.querySelector("main .container .field.wait .fail img").style.display = "none";
            document.querySelector("main .container .field.wait .success img").style.display = "none";
            document.querySelector("main .container .field.wait .waitanimate img").style.display = "block";
            document.querySelector("main .container div .resultChange").innerHTML = "";
            let xhr_changePass = new XMLHttpRequest();
            let url_changePass = "https://localhost:5001/KhachHang/CheckValidCCCDandEmail?CCCD=" + CCCDInput.value + "&Email=" + EMailInput.value;
            xhr_changePass.open("POST", url_changePass, true);
            xhr_changePass.timeout = 50000;
            xhr_changePass.onreadystatechange = function () {
                if (xhr_changePass.readyState == 4 && xhr_changePass.status == 200) {
                    let kq = xhr_changePass.responseText;
                    if (kq == "OK") {
                        document.querySelector("main .container .field.wait .waitanimate img").style.display = "none";
                        document.querySelector("main .container .field.wait .success img").style.display = "block";
                        document.querySelector("main .container div .resultChange").innerHTML="Mật khẩu mới đã được gửi về email của quý khách.";
                    }
                    else {
                        document.querySelector("main .container .field.wait .waitanimate img").style.display = "none";
                        document.querySelector("main .container .field.wait .fail img").style.display = "block";
                        document.querySelector("main .container div .resultChange").innerHTML = "Đổi mật khẩu thất bại vui lòng thử lại.";
                    }
                }
            }
            xhr_changePass.send();
        }
    }
});