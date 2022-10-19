const oldPass = document.querySelector("main .container .OldPass input");
const newPass = document.querySelector("main .container .NewPass input");
const confirmPass = document.querySelector("main .container .Confirm input");
const btnValidate = document.querySelector("main .container .validate");
var inputClass = ["OldPass", "NewPass","Confirm"]
btnValidate.addEventListener('click', function () {
    let kt = true;
    for (let i = 0; i < inputClass.length; i++) {
        if (document.querySelector("main .container ." + inputClass[i] + " input").value == "") {
            document.querySelector("main .container ." + inputClass[i] + " input + .error").innerHTML = "Vui lòng nhập thông tin.";
            kt = false;
        }
        else {
            document.querySelector("main .container ." + inputClass[i] + " input + .error").innerHTML = "";
        }
    }
    if (kt) {
        if (confirmPass.value != newPass.value) {
            document.querySelector("main .container .Confirm input + .error").innerHTML = "Mật khẩu xác nhận không khớp.";
        }
        else {
            document.querySelector("main .container .Confirm input + .error").innerHTML = "";

            let xhr_changePassForUser = new XMLHttpRequest();
            let url_changePassForUser = "https://localhost:5001/KhachHang/ChangePassForUser?oldPass=" + oldPass.value + "&newPass=" + newPass.value + "&confirmPass=" + confirmPass.value;
            xhr_changePassForUser.open("POST", url_changePassForUser, true);
            xhr_changePassForUser.timeout = 50000;
            xhr_changePassForUser.onreadystatechange = function () {
                if (xhr_changePassForUser.readyState == 4 && xhr_changePassForUser.status == 200) {
                    let kq = xhr_changePassForUser.responseText;
                    if (kq == "OK") {
                        alert("Mật khẩu được thay đổi thành công.");
                        window.location.replace("https://localhost:5001/KhachHang/ViewInfoUser");
                    }
                    else {
                        document.querySelector("main .container div .resultChange").innerHTML = "Đổi mật khẩu thất bại vui lòng thử lại.";
                    }
                }
            }
            xhr_changePassForUser.send();
        }
    }
});