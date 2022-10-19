//load header và footer cho mọi page
CheckUser_Reload();
//slide banner
const home_banner = document.querySelector(".home-banner");

//if (home_banner) {
//    var swiper = new Swiper(".home-banner", {
//        spaceBetween: 30,
//        centeredSlides: true,
//        autoplay: {
//            delay: 2500,
//            disableOnInteraction: false,
//        },
//        pagination: {
//            el: ".swiper-pagination",
//            clickable: true,
//        },
//        navigation: {
//            nextEl: ".swiper-button-next",
//            prevEl: ".swiper-button-prev",
//        },
//    });
//}

//tương tác khi nhấn link trong nav bar của room
let standard = document.getElementById('standard');
let superior = document.getElementById('superior');
let deluxe = document.getElementById('deluxe');
let suite = document.getElementById('suite');

const displayedImg = document.getElementById('room-img');
const displayedTitle = document.getElementById('room-slide-detail-title');
const displayedDes = document.getElementById('room-slide-detail-descript');


if (superior) {
    superior.addEventListener('click', (e) => {
        displayedImg.src = "/assets/homeimg/room-superior.jpg";
        displayedTitle.innerHTML = "Superior Room";
        displayedDes.innerHTML = "Rộng hơn, tiện nghi hơn so với Standard";
    })
}

if (standard) {
    standard.addEventListener('click', (e) => {
        displayedImg.src = "/assets/homeimg/room-standard.jpg";
        displayedTitle.innerHTML = "Standard Room";
        displayedDes.innerHTML = "Phòng cơ bản nhất của khách sạn, phù hợp với ngân sách của bạn";
    })
}

if (deluxe) {
    deluxe.addEventListener('click', (e) => {
        displayedImg.src = "/assets/homeimg/room-deluxe.jpg";
        displayedTitle.innerHTML = "Deluxe Room";
        displayedDes.innerHTML = "Nâng tầm trải nghiệm của bạn khi du lịch với Deluxe";
    })
}

if (suite) {
    suite.addEventListener('click', (e) => {
        displayedImg.src = "/assets/homeimg/room-suite.jpg";
        displayedTitle.innerHTML = "Suite Room";
        displayedDes.innerHTML = "Suite là trải nghiệm độc quyền và sang trọng nhất mà bạn từng có";
    })
}

//thanh header nhỏ lại khi lăn chuột
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.fontsize = "0.5rem";
    } else {
        document.getElementById("navbar").style.fontsize = "0.5rem";
    }
}

var swiper = new Swiper(".mySwiper", {});


//slide của facility
const pool_slider = document.querySelector(".pool-slider");
if (pool_slider) {
    var swiper = new Swiper(".pool-slider", {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}


//nhấn LOAD MORE hiện thêm thức ăn
const readMoreBtn = document.querySelector('.read-more-button');
let food1 = document.querySelector('.dine-menu-block-1');
let food2 = document.querySelector('.dine-menu-block-2');

if (readMoreBtn) {
    readMoreBtn.addEventListener('click', (e) => {
        food1.classList.toggle("dine-menu-block");
        food2.classList.toggle("dine-menu-block");
        if (readMoreBtn.innerHTML === 'SHOW MORE') {
            readMoreBtn.innerHTML = 'SHOW LESS';
        } else {
            readMoreBtn.innerHTML = 'SHOW MORE';
        }

    })
}
//hiện popup thông tin chi tiết khuyến mãi


//scrollspy
let room = document.querySelector("#room-section");
let dine = document.querySelector("#dine-section");
let facility = document.querySelector("#facility-section");
let promotion = document.querySelector("#promotion-section");
let contact = document.querySelector("#contact-section");

//dẫn đường link button compare room
let compare_room = document.querySelector("#compare-room");
if (compare_room) {
    compare_room.addEventListener('click', (e) => {

    })
}

function compareTable(data) {
    let table = document.getElementById("compareTable")

    for (var i = 0; i < data.length; i++) {

    }
}
// man hinh dang nhap dang ky
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


/*Su kien dang nhap dang ky*/
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
                    var xhr_getuserbyss = new XMLHttpRequest();
                    var url_getuserbyss = "https://localhost:5001/Home/GetUserBySS";
                    xhr_getuserbyss.open("POST", url_getuserbyss, true);
                    xhr_getuserbyss.timeout = 50000;
                    xhr_getuserbyss.onreadystatechange = function () {
                        if (xhr_getuserbyss.readyState == 4 && xhr_getuserbyss.status == 200) {
                            const userInSession = JSON.parse(xhr_getuserbyss.response);
                            document.querySelector(".header-log").innerHTML = "<a style = 'font-weight: 500; color: #002B49; font-size: 1.25rem;'><i class='fa fa-user' style='font-size: 1.25rem; color: #002b49'></i> " + userInSession["ten"] +"</a>";
                            login_button.style.display = "none";
                            const login_page_afterlogin = document.getElementById("login_page_container");
                            login_page_afterlogin.classList.remove('show');
                        }
                    }
                    xhr_getuserbyss.send();
                }
                else if (this.responseText == "false") {
                    document.getElementById("login_error_notify").innerHTML = "Tài khoản hoặc mật khẩu không đúng!";
                    document.getElementById("userpass_inform").value = "";
                }
                //Code mới
                else if (this.responseText == "staff_role") {
                    let login_page_afterlogin = document.getElementById("login_page_container");
                    login_page_afterlogin.classList.remove('show');
                    window.location.replace("https://localhost:5001/QuanLy/Index");
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
            || useremail_registryform == "" || userpswd_registryform =="") {
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
                        var xhr_getuserbyss_dk = new XMLHttpRequest();
                        var url_getuserbyss_dk = "https://localhost:5001/Home/GetUserBySS";
                        xhr_getuserbyss_dk.open("POST", url_getuserbyss_dk, true);
                        xhr_getuserbyss_dk.timeout = 50000;
                        xhr_getuserbyss_dk.onreadystatechange = function () {
                            if (xhr_getuserbyss_dk.readyState == 4 && xhr_getuserbyss_dk.status == 200) {
                                const userInSession = JSON.parse(xhr_getuserbyss_dk.response);
                                document.querySelector(".header-log").innerHTML = "<a style = 'font-weight: 500; color: #002B49; font-size: 1.25rem;'><i class='fa fa-user' style='font-size: 1.25rem; color: #002b49'></i> " + userInSession["ten"] + "</a>";
                                login_button.style.display = "none";
                                const registry_page_afterlogin = document.getElementById("signup_page_container");
                                registry_page_afterlogin.classList.remove('show');
                            }
                        }
                        xhr_getuserbyss_dk.send();
                    }
                    else if (this.responseText == "false") {
                        document.getElementById("registry_error_notify").innerHTML = "Đăng ký không thành công! Có thể tài khoản này đã tồn tại!";
                    }
                }
            }
            xhr_dk.send(form_dk);
        }
    }
})
function checkconfirmpswd() {
    if (document.getElementById("registry_pswd_user").value == document.getElementById("registry_pswdconfirm_user").value)
        return true;
    return false;
}
function CheckUser_Reload() {
    var xhr_getuserbyss_reloadhome = new XMLHttpRequest();
    var url_getuserbyss_reloadhome = "https://localhost:5001/Home/GetUserBySS";
    xhr_getuserbyss_reloadhome.open("POST", url_getuserbyss_reloadhome, true);
    xhr_getuserbyss_reloadhome.timeout = 50000;
    xhr_getuserbyss_reloadhome.onreadystatechange = function () {
        if (xhr_getuserbyss_reloadhome.readyState == 4 && xhr_getuserbyss_reloadhome.status == 200) {
            var userInSession_Check_ReloadHome = JSON.parse(xhr_getuserbyss_reloadhome.response);
            if (userInSession_Check_ReloadHome != null) {
                document.querySelector(".header-log").innerHTML = "<a style = 'font-weight: 500; color: #002B49; font-size: 1.25rem;'><i class='fa fa-user' style='font-size: 1.25rem; color: #002b49'></i> " + userInSession_Check_ReloadHome["ten"] + "</a> ";
            }
            else {
                document.getElementById("login-button-all-pages").style.display = "inline-block";
            }
        }
    }
    xhr_getuserbyss_reloadhome.send();
}

//data cho bảng compare room 
const room_standard =
{
    name: "Standard Room",
    size: "5m x 6m",
    occupancy: "4",
    air_condition: "0",
    freezer: "1",
    deposit: "500.000vnd",
    price: "1.000.000vnd"
}

const room_superior =
{
    name: "Superior Room",
    size: "6m x 6m",
    occupancy: "4",
    air_condition: "0",
    freezer: "1",
    deposit: "750.000vnd",
    price: "1.500.000vnd"
}

const room_deluxe =
{
    name: "Deluxe Room",
    size: "8m x 9m",
    occupancy: "4",
    air_condition: "1",
    freezer: "1",
    deposit: "1.250.000vnd",
    price: "2.500.000vnd"
}

const room_suite =
{
    name: "Suite Room",
    size: "10m x 10m",
    occupancy: "4",
    air_condition: "1",
    freezer: "1",
    deposit: "2.500.000vnd",
    price: "5.000.000vnd"
}

//************************************************************************************** */
//lấy id cột của bảng compare room
let room_img_input = document.querySelectorAll(".room-img-input")
let room_id
let column_id

if (room_img_input) {
    room_img_input.forEach(function (b) {
        b.addEventListener('click', (e) => {
            room_id = e.target.id;
            column_id = " .column-" + room_id;
            console.log(column_id);
        })
    })
    // //hiện pop up của compare room
    // document.getElementById("room-list:target").style.display = "block";
}

//truyền data vào bảng compare room 
let room_select = document.querySelectorAll(".room-select");

if (room_select) {
    //gán event cho mọi class room_select
    room_select.forEach(function (b) {
        b.addEventListener('click', (e) => {
            //gán các cột 
            let name = document.querySelector('.name' + column_id);
            let size = document.querySelector('.size' + column_id);
            let occupancy = document.querySelector('.occupancy' + column_id);
            let air_condition = document.querySelector('.air_condition' + column_id);
            let freezer = document.querySelector('.freezer' + column_id);
            let deposit = document.querySelector('.deposit' + column_id);
            let price = document.querySelector('.price' + column_id);

            if (e.target.id == "room-standard") {
                name.innerHTML = room_standard.name;
                size.innerHTML = room_standard.size;
                occupancy.innerHTML = room_standard.occupancy;
                air_condition.innerHTML = room_standard.air_condition;
                freezer.innerHTML = room_standard.freezer;
                deposit.innerHTML = room_standard.deposit;
                price.innerHTML = room_standard.price;

                document.getElementById(room_id).style.display = "none";

                let img = document.createElement("img");
                img.src = "/assets/homeimg/room-standard.jpg";
                let container = document.getElementById('column-' + room_id);
                container.appendChild(img);
            }

            else if (e.target.id == "room-superior") {
                name.innerHTML = room_superior.name;
                size.innerHTML = room_superior.size;
                occupancy.innerHTML = room_superior.occupancy;
                air_condition.innerHTML = room_superior.air_condition;
                freezer.innerHTML = room_superior.freezer;
                deposit.innerHTML = room_superior.deposit;
                price.innerHTML = room_superior.price;

                document.getElementById(room_id).style.display = "none";

                let img = document.createElement("img");
                img.src = "/assets/homeimg/room-superior.jpg";
                let container = document.getElementById('column-' + room_id);
                container.appendChild(img);
            }

            else if (e.target.id == "room-deluxe") {
                name.innerHTML = room_deluxe.name;
                size.innerHTML = room_deluxe.size;
                occupancy.innerHTML = room_deluxe.occupancy;
                air_condition.innerHTML = room_deluxe.air_condition;
                freezer.innerHTML = room_deluxe.freezer;
                deposit.innerHTML = room_deluxe.deposit;
                price.innerHTML = room_deluxe.price;

                document.getElementById(room_id).style.display = "none";

                let img = document.createElement("img");
                img.src = "/assets/homeimg/room-deluxe.jpg";
                let container = document.getElementById('column-' + room_id);
                container.appendChild(img);
            }

            else if (e.target.id == "room-suite") {
                name.innerHTML = room_suite.name;
                size.innerHTML = room_suite.size;
                occupancy.innerHTML = room_suite.occupancy;
                air_condition.innerHTML = room_suite.air_condition;
                freezer.innerHTML = room_suite.freezer;
                deposit.innerHTML = room_suite.deposit;
                price.innerHTML = room_suite.price;

                document.getElementById(room_id).style.display = "none";

                let img = document.createElement("img");
                img.src = "/assets/homeimg/room-suite.jpg";
                let container = document.getElementById('column-' + room_id);
                container.appendChild(img);
            }

            history.back();
        })
    }
    )
}
