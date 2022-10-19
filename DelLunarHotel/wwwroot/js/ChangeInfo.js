//-----------------dropdown user-----------------

const infoUser = document.querySelector(".header-top-bar .top-bar-right .user-dropdown-content .infocustomer");
const logOutUser = document.querySelector(".header-top-bar .top-bar-right .user-dropdown-content .logoutcustomer");
const changePass = document.querySelector(".header-top-bar .top-bar-right .user-dropdown-content .changepass");
changePass.addEventListener('click', function () {
    window.location.replace("https://localhost:5001/KhachHang/ViewChangePass");
});
infoUser.addEventListener('click', function () {
    window.location.replace("https://localhost:5001/KhachHang/ViewInfoUser");
});
logOutUser.addEventListener('click', function () {
    window.location.replace("https://localhost:5001/KhachHang/LogOutUser");
});

//-----------------change press-----------------
const changeInfoBtn = document.querySelector(".page-4 .form-fill-field .next-button-field .next-button");
function checkEntry() {
    let idEntry = ["userfname_require_step3", "userlname_require_step3", "userdatebirth_require_step3", "useremail_require_step3"];
    let kt = true;
    for (let i = 0; i < idEntry.length; i++) {
        let entryValue = document.getElementById(idEntry[i]).value;
        if (entryValue == "") {
            document.querySelector("#" + idEntry[i] + "+ p.warning-field").classList.add("visibility-visible");
            kt = false;
        }
        else {
            document.querySelector("#" + idEntry[i] + "+ p.warning-field").classList.remove("visibility-visible");
        }
    }
    return kt;
}
changeInfoBtn.addEventListener('click', function () {
    if (checkEntry()) {
        let formChangeInfo = new FormData();
        formChangeInfo.append("Ho", document.querySelector("#userfname_require_step3").value);
        formChangeInfo.append("Ten", document.querySelector("#userlname_require_step3").value);
        formChangeInfo.append("NgaySinh", document.querySelector("#userdatebirth_require_step3").value);
        formChangeInfo.append("GioiTinh", document.querySelector("#usergender_require_step3").value);
        formChangeInfo.append("SDT", document.querySelector("#usertele_require_step3").value);
        formChangeInfo.append("Email", document.querySelector("#useremail_require_step3").value);
        let xhr_changeInfo = new XMLHttpRequest();
        let url_changeInfo = "https://localhost:5001/KhachHang/ChangeInfo";
        xhr_changeInfo.open("POST", url_changeInfo, true);
        xhr_changeInfo.timeout = 50000;
        xhr_changeInfo.onreadystatechange = function () {
            if (xhr_changeInfo.readyState == 4 && xhr_changeInfo.status == 200) {
                let kq = xhr_changeInfo.responseText;
                if (kq == "OK") {
                    alert("Thay đổi thông tin thành công");
                    window.location.replace("https://localhost:5001/KhachHang/ViewInfoUser")
                }
                else {
                    document.querySelector("#errorform p").innerHTML = "Thay đổi thông tin thất bại! Vui lòng thử lại."
                }
            }
        }
        xhr_changeInfo.send(formChangeInfo);
    }
});