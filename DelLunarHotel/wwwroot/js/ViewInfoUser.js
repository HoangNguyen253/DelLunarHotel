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
//-----------------redirect change Info-----------------

const changeInfo = document.getElementById("changeInfoImageButton");
changeInfo.addEventListener('click', function () {
    window.location.replace("https://localhost:5001/KhachHang/ViewChangeInfo");
});