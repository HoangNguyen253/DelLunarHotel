// Hiển thị màn hình đăng nhập đăng ký--- begin//
const login_button = document.getElementById("login-button-all-pages");
const login_page_container = document.getElementById("login_page_container");
const signup_page_container = document.getElementById("signup_page_container");
login_button.addEventListener('click', () => { login_page_container.classList.add('show'); });
const closebuttonlogin = document.getElementById("close-button-login");
closebuttonlogin.addEventListener('click', () => {
    login_page_container.classList.remove('show');
    document.getElementById("login_error_notify").innerHTML = "";
    document.getElementById("userpass_inform").value = "";
});

const closebuttonsignup = document.getElementById("close-button-signup");
closebuttonsignup.addEventListener('click', () => {
    signup_page_container.classList.remove('show');
    document.getElementById("registry_error_notify").innerHTML = "";
    document.getElementById("registry_cccd_user").value = "";
    document.getElementById("registry_firstname_user").value = "";
    document.getElementById("registry_lastname_user").value = "";
    document.getElementById("registry_datebirth_user").value = "";
    document.getElementById("registry_gender_user").value = "";
    document.getElementById("registry_email_user").value = "";
    document.getElementById("registry_tele_user").value = "";
});

const signupbutton_tran = document.querySelector("button.signup-page-button");
signupbutton_tran.addEventListener('click', () => {
    login_page_container.classList.remove('show');
    signup_page_container.classList.add('show');
    document.getElementById("registry_error_notify").innerHTML = "";
});

const loginbutton_tran = document.querySelector("button.login-page-button");
loginbutton_tran.addEventListener('click', () => {
    signup_page_container.classList.remove('show');
    login_page_container.classList.add('show');
    document.getElementById("login_error_notify").innerHTML = "";
    document.getElementById("userpass_inform").value = "";
});
// Hiển thị màn hình đăng nhập đăng ký--- end




