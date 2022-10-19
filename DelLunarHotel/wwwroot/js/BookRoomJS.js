const page1 = document.querySelector("main .bookroom .page-1");
const page2 = document.querySelector("main .bookroom .page-2");
const page3 = document.querySelector("main .bookroom .page-3");
const page4 = document.querySelector("main .bookroom .page-4");
const page5 = document.querySelector("main .bookroom .page-5");

const step1 = document.querySelector("main .steps-bar .step-1");
const step2 = document.querySelector("main .steps-bar .step-2");
const step3 = document.querySelector("main .steps-bar .step-3");
const step4 = document.querySelector("main .steps-bar .step-4");

const buttonPageThirdNext = document.querySelector(".page-3 .page-3-next");
const buttonPageFourthNext = document.querySelector(".page-4 .page-4-next");
const buttonPageFifthPay = document.querySelector("#pagefifthpay");
var tiLe = [0, 1, 1.2, 1.5, 1.8];


/*----------------------Start- Chọn số người ở----------------*/
const btnChooseNumberOfGuest = document.querySelectorAll(".choose-number-of-guest .nbog-button");
var checkedChooseNumberOfGuest = 1;

//Khởi tạo số người ở mặc định
document.querySelector(".choose-number-of-guest .guest-1").classList.add("checked-choose-number-of-guest");

function checkNumberGuest(newCheckNumer) {
    if (newCheckNumer != checkedChooseNumberOfGuest) {
        const curCheck = document.querySelector(".choose-number-of-guest .guest-" + checkedChooseNumberOfGuest);
        const newCheck = document.querySelector(".choose-number-of-guest .guest-" + newCheckNumer);
        curCheck.classList.remove("checked-choose-number-of-guest");
        newCheck.classList.add("checked-choose-number-of-guest");
        checkedChooseNumberOfGuest = newCheckNumer;
    }
}
btnChooseNumberOfGuest.forEach(function (b) {
    b.addEventListener('click', function (e) {
        checkNumberGuest(e.target.innerHTML);
    })
})
/*-----------------End- Chọn số người ở--------------------------*/

function tinhTienPhong(In, Out, Gia, Songuoi) {
    const start = new Date(In);
    const end = new Date(Out);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return (diffDays * (1)) * Gia * tiLe[Songuoi * 1];
}

function tinhTienDoAn(Gia, SoLuong) {
    return (Gia * 1) * SoLuong;
}

function addDotPrice(giaTien) {
    let giaTienAfter = "";
    let len = giaTien.length;
    for (let j = 1; j <= len; j++) {
        giaTienAfter = giaTien[len - j] + giaTienAfter;
        if (j % 3 == 0 && j != len) {
            giaTienAfter = "." + giaTienAfter;
        }
    }
    return giaTienAfter;
}

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.firstChild;
}

//Khởi tạo step-bar
step1.querySelector(".bullet").classList.add("current-step-bullet");
step1.querySelector("p").classList.add("current-step-text");
step1.querySelector(".bullet").querySelector("span").style.zIndex = 0;

//Cách hiển thị của các trang
const defaultdisplay = ["flex", "block", "block", "block", "block"];

//Lưu vết user
const visitedPage = [true, false, false, false, false];

function swappage(a, b) {
    if (a == 5) {
        visitedPage[4] = false;
        const bar = document.querySelector("main .steps-bar .step-4 .bullet");
        bar.classList.remove("active");
    }
    const pageFrom = document.querySelector("main .bookroom .page-" + a);
    const pageTo = document.querySelector("main .bookroom .page-" + b);

    pageFrom.style.display = "none";
    pageTo.style.display = defaultdisplay[b - 1];
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function swapstep(a, b) {
    const stepFrom = document.querySelector("main .steps-bar .step-" + a);
    const stepTo = document.querySelector("main .steps-bar .step-" + b);

    stepFrom.querySelector(".bullet").classList.remove("current-step-bullet");
    stepFrom.querySelector(".bullet").querySelector("span").style.zIndex = -5;
    stepFrom.querySelector("p").classList.remove("current-step-text");
    stepTo.querySelector(".bullet").classList.add("current-step-bullet");
    stepTo.querySelector(".bullet").querySelector("span").style.zIndex = 0;
    stepTo.querySelector("p").classList.add("current-step-text");
}

function fillbar(a) {
    const bar = document.querySelector("main .steps-bar .step-" + a + " .bullet");
    bar.classList.add("active");
}

//-------------------Start - Check user đã đăng nhập chưa--------------------------------
function CheckUser_InSession() {
    var xhr_getuserbyss_reload = new XMLHttpRequest();
    var url_getuserbyss_reload = "https://localhost:5001/Home/GetUserBySS";
    xhr_getuserbyss_reload.open("POST", url_getuserbyss_reload, true);
    xhr_getuserbyss_reload.timeout = 50000;
    xhr_getuserbyss_reload.onreadystatechange = function () {
        if (xhr_getuserbyss_reload.readyState == 4 && xhr_getuserbyss_reload.status == 200) {
            var userInSession_Check = JSON.parse(xhr_getuserbyss_reload.response);
            if (userInSession_Check != null) {
                isUser = true;
            }
            else {
                isUser = false;
            }
        }
    }
    xhr_getuserbyss_reload.send();
}

var isUser;
CheckUser_InSession();

//-----------------End - Check user đã đăng nhập chưa---------------------------


//-----------Start- Thêm sự kiện chuyển trang cho bullet trên step-bar----------
const steps = document.querySelectorAll("main .steps-bar .step");
for (let i = 0; i < steps.length; i++) {
    steps[i].style.cursor = "pointer";
    steps[i].addEventListener("click", function (e) {
        const pages = document.querySelectorAll("main .bookroom .slidepage");
        let pageTo = 1 * (e.target.querySelector("span").innerHTML) + 1;
        let pageFrom;
        for (let j = 0; j < pages.length; j++) {
            if (getComputedStyle(pages[j]).display != "none") {
                pageFrom = j + 1;
            }
        }
        if (visitedPage[pageTo - 1] == true && pageTo != pageFrom) {
            swappage(pageFrom, pageTo);
            if (pageFrom == 1) {
                swapstep(1, pageTo - 1);
            }
            else {
                swapstep(pageFrom - 1, pageTo - 1);
            }
        }
    })
}
//------------End- Thêm sự kiện chuyển trang cho bullet trên step-bar------------------

//------------Start- Confirm filter clicked------------------
function validFilterDate(a, b) {
    var dateA = new Date(a);
    var dateB = new Date(b);
    if (dateA.getFullYear() * 1 > dateB.getFullYear() * 1) {
        return false;
    }
    else {
        if (dateA.getFullYear() * 1 == dateB.getFullYear() * 1) {
            if (dateA.getMonth() * 1 > dateB.getMonth() * 1) {
                return false;
            }
            else {
                if (dateA.getMonth() * 1 == dateB.getMonth() * 1) {
                    if (dateA.getDate() * 1 >= dateB.getDate() * 1) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
                else {
                    return true;
                }
            }
        }
        else {
            return true;
        }
    }
}

function addEventForLastChildButtonStepPage2(newRoom) {
    
    const newStepBtn = newRoom.querySelector(".content .field .buttonStep");

    const subButton = newStepBtn.querySelector(".subtractVal");
    const addButton = newStepBtn.querySelector(".addVal");

    subButton.addEventListener('click', function (e) {
        const parE = e.target.parentElement;
        let val = (parE.querySelector("span").innerHTML) * 1;
        if (val > 1) {
            val -= 1;
            parE.querySelector("span").innerHTML = val;
        }
    });
    addButton.addEventListener('click', function (e) {
        const parE = e.target.parentElement;

        const maxVal = parE.getAttribute("maxVal") * 1;

        let val = (parE.querySelector("span").innerHTML) * 1;
        
        if (val < maxVal) {
            val += 1;
            parE.querySelector("span").innerHTML = val;
        }
    });
}

function addEventForLastChildRemovePage2(newRoom) {
    const newRemoveBtn = newRoom.querySelector(".content .field .page-2-remove-room");
    newRemoveBtn.addEventListener("click", function (e) {
        document.querySelector("main .bookroom .page-2").removeChild(e.target.parentElement.parentElement.parentElement);
    });
}

function removeRoomTypeJustChoose(e) {
    document.querySelector(".page-1 .page .result ul").removeChild(e.parentElement.parentElement.parentElement);
    dontHaveRoomForRequest();
}

function addEventForBookNow() {
    const buttonChooseRoom = document.querySelectorAll(".page-1 .page .result .room .btnchooseroom");
    buttonChooseRoom.forEach(function (b) {
        b.addEventListener("click", function (e) {
            const checkInDay = b.getAttribute("checkin");
            const checkOutDay = b.getAttribute("checkout");
            const soNguoiO = b.getAttribute("songuoio");
            const slMax = b.getAttribute("soluong");
            const maLoaiPhong = b.getAttribute("maloaiphong");

            const roomElement = b.parentElement.parentElement;
            const imgSrc = roomElement.querySelector("img").getAttribute("src");
            const tenPhong = roomElement.querySelector("p.name").innerHTML;
            const kichThuoc = roomElement.querySelectorAll("p.desc")[0].innerHTML;
            const price = roomElement.querySelector("p.price").innerHTML;

            let re = "<div class='room' maloaiphong='" + maLoaiPhong + "'>" +
                "<img src='" + imgSrc + "' alt='" + maLoaiPhong + " room image'>" +
                "<div class='content'>" +
                "<div class='field'>" +
                "<div class='room-type'>" +
                "<p class='value left'>" + tenPhong + "</p>" +
                "<p class='label left'><span>" + soNguoiO + "</span> người, " + kichThuoc + "</p>" +
                "</div>" +
                "<button class='page-2-remove-room'>Remove</button>" +
                "</div>" +
                "<div class='field'>" +
                " <div class='check'>" +
                "<p class='label left'>Check in</p>" +
                "<p class='value left'>" + checkInDay + "</p>" +
                "</div >" +
                "<img class='arrow' src='/assets/arrow.png'>" +
                "<div class='check'>" +
                "<p class='label right'>Check out</p>" +
                "<p class='value right'>" + checkOutDay + "</p>" +
                "</div>" +
                "</div>" +
                "<div class='field'>" +
                "<p class='label left'>Giá</p>" +
                "<p class='price right'>" + price + "</p>" +
                "</div>" +
                "<div class='field'>" +
                "<p class='label left'>Số lượng:</p>" +
                "<div class='buttonStep right' maxVal='" + slMax + "'>" +
                "<button class='subtractVal'>-</button>" +
                "<span>1</span>" +
                "<button class='addVal'>+</button>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</div>";

            const buttonAddAnother = document.querySelector(".page-2 .addanother");
            document.querySelector(".page-2").insertBefore(createElementFromHTML(re), buttonAddAnother);

            const listRoom = document.querySelectorAll(".page-2 .room");
            const newRoom = listRoom[listRoom.length - 1];

            addEventForLastChildRemovePage2(newRoom);
            addEventForLastChildButtonStepPage2(newRoom);
            removeRoomTypeJustChoose(e.target);

            swappage(1, 2);
            visitedPage[1] = true;
        });

        
    })
}

function checkRoomTypeWithCICOFromPageTwo(maLoaiPhong, soNguoiO, checkIn, checkOut) {
    const listPageTwoRoom = document.querySelectorAll(".page-2 .room");
    if (listPageTwoRoom.length == 0) {
        return true;
    }
    else {
        let kt = true;
        listPageTwoRoom.forEach(function (rp2) {
            const rp2MaLoaiPhong = rp2.getAttribute("maloaiphong").toString();
            const rp2SoNguoiO = rp2.querySelector(".content .field .room-type .label span").innerHTML.toString();
            const rp2CI = rp2.querySelector(".content .field .check .value.left").innerHTML.toString();
            const rp2CO = rp2.querySelector(".content .field .check .value.right").innerHTML.toString();

            if (maLoaiPhong == rp2MaLoaiPhong && soNguoiO == rp2SoNguoiO && checkIn == rp2CI && checkOut == rp2CO) {
                kt = false;
            }
        })
        if (kt) {
            return true;
        }
        else {
            return false;
        }
    }
    
}

function dontHaveRoomForRequest() {
    if (document.querySelectorAll(".page-1 .page .result ul li").length == 0) {
        document.querySelector(".page-1 .page .result ul").innerHTML = "<li><p style='font-size: 24px; font-weight: 400;'>Xin lỗi! Không có phòng nào trống theo yêu cầu.</p></li>"
        document.querySelector(".page-1 .page .result ul").classList.remove("grid");
        document.querySelector(".page-1 .page .result ul").classList.add("nogrid");
    }
}

const btnConfirmFilter = document.querySelector("#btnConfirmFilter");
btnConfirmFilter.addEventListener('click', () => {
    document.querySelector(".page-1 .page .result ul").innerHTML = "";
    let checkinDay = document.getElementById("checkin_day_in_filter").value;
    let checkoutDay = document.getElementById("checkout_day_in_filter").value;
    let numberPeople = checkedChooseNumberOfGuest;
    if (validFilterDate(checkinDay, checkoutDay)) {
        document.getElementById("invalid-filter").innerHTML = "";
        let form = new FormData();
        form.append("checkinDay", checkinDay);
        form.append("checkoutDay", checkoutDay);
        form.append("numberPeople", numberPeople);
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/DatPhong/ReadFilter";
        xhr.open("POST", url, true);
        xhr.timeout = 50000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const data = JSON.parse(xhr.response);
                let re = "";
                if (data.length == 0) {
                    dontHaveRoomForRequest();
                }
                else {
                    document.querySelector(".page-1 .page .result ul").classList.remove("nogrid");
                    document.querySelector(".page-1 .page .result ul").classList.add("grid");

                    for (let i = 0; i < data.length; i++) {
                        if (checkRoomTypeWithCICOFromPageTwo(data[i]["idLoaiPhong"].toString(), data[i]["numberPeople"].toString(), data[i]["checkinDay"].toString(), data[i]["checkoutDay"].toString())) {

                            let giaTienAfter = addDotPrice(data[i]["giaTien"].toString());
                            re += "<li>" +
                                "<div class='room'>" +
                                "<img src='" + data[i]["linkIMG"] + "' alt='image'>" +
                                "<p class ='name'>" + data[i]["tenLoaiPhong"] + "</p >" +
                                "<p class ='desc'>" + data[i]["kichThuocPhong"] + "</p >" +
                                "<p class ='desc'>" + data[i]["mayLanh"] + " máy lạnh</p >" +
                                "<p class ='desc'>" + data[i]["tuLanh"] + " tủ lạnh</p >" +
                                "<p class ='price'>" + giaTienAfter + " VND/đêm</p >" +
                                "<div class ='btns'>" +
                                "<a href='/Home/Room'>Chi tiết</a>" +
                                "<button class ='btnchooseroom' maloaiphong='" + data[i]["idLoaiPhong"] + "' soluong='" + data[i]["sl"] + "' checkin='" + data[i]["checkinDay"] + "' checkout='" + data[i]["checkoutDay"] + "' songuoio='" + data[i]["numberPeople"] + "'>ĐẶT NGAY</button>" +
                                "</div>" +
                                "</div>" +
                                "</li>";

                        }
                    }
                    document.querySelector(".page-1 .page .result ul").innerHTML = re;
                    addEventForBookNow();
                    dontHaveRoomForRequest();
                }
            }
        }
        xhr.send(form);
    }
    else {
        document.getElementById("invalid-filter").innerHTML = "Ngày checkin phải nhỏ hơn ngày checkout";
    }
})
//------------End- Confirm filter clicked------------------

//Page 2 next button và add another room button


const buttonAddAnother = document.querySelector(".page-2 .addanother");
buttonAddAnother.addEventListener("click", function () {
    swappage(2, 1);
});

function addEventForBookFood() {
    const lst = document.querySelectorAll("main .bookroom .page-3 .page-3-room-container .room");
    const select_food_page_container = document.getElementById("select_food_page_container");
    lst.forEach(function (r) {
        const addFoodButton = r.querySelector(".content .field .addfood");
        addFoodButton.addEventListener('click', function () {
            select_food_page_container.classList.add('show');
            select_food_page_container.setAttribute('maphongcall', r.getAttribute("stt"));
        });
    });
}

function addEventForNewButtonStepFood(newFood) {
    const newStepBtn = newFood.querySelector(".buttonStep");

    const subButton = newStepBtn.querySelector(".subtractVal");
    const addButton = newStepBtn.querySelector(".addVal");

    subButton.addEventListener('click', function (e) {
        const parE = e.target.parentElement;
        let val = (parE.querySelector("span").innerHTML) * 1;
        if (val > 1) {
            val -= 1;
            parE.querySelector("span").innerHTML = val;
        }
        else {
            if (val == 1) {
                const listFoodContainThisItem = parE.parentElement.parentElement;
                listFoodContainThisItem.removeChild(parE.parentElement);
                const listFoodItem = listFoodContainThisItem.querySelectorAll(".list-food-item");
                if (listFoodItem.length != 0) {
                    let count = 1;
                    listFoodItem.forEach(function (lfi) {
                        lfi.querySelector("p.label span").innerHTML = count;
                        count++;
                    });
                }
            }
        }
        
    });
    addButton.addEventListener('click', function (e) {
        const parE = e.target.parentElement;
        let val = (parE.querySelector("span").innerHTML) * 1;
        val += 1;
        parE.querySelector("span").innerHTML = val;
    });
}
function addEventSelectFood() {
    const chooseFoodButton = document.querySelectorAll("main .bookroom .page-3 .select-food-page-container .select-food-page .info-food-list .food-item-in-list");
    chooseFoodButton.forEach(function (cfb) {
        cfb.addEventListener('click', (c) => {
            const maDA = c.target.getAttribute('madoan');
            const tenDA = c.target.querySelector(".food-item-name").innerHTML;
            const foodContainer = document.querySelectorAll("main .bookroom .page-3 .page-3-room-container .room");
            for (let i = 0; i < foodContainer.length; i++) {
                if (foodContainer[i].getAttribute('stt') == document.getElementById("select_food_page_container").getAttribute('maphongcall')) {
                    const curListFood = foodContainer[i].querySelectorAll(".list-food-item");
                    let kt = true;
                    curListFood.forEach(function (clf) {
                        if (clf.getAttribute('madoan') == maDA) {
                            kt = false;
                            let val = (clf.querySelector(".buttonStep span").innerHTML)*1 + 1;
                            clf.querySelector(".buttonStep span").innerHTML = val;
                            const select_food_pop = document.getElementById("select_food_page_container");
                            select_food_pop.classList.remove('show');
                        }
                    });
                    if (kt) {
                        const countFood = foodContainer[i].querySelectorAll(".list-food-item").length;
                        let foodItem = "<div class='list-food-item' madoan='" + maDA + "'>" +
                            "<p class='label left'><span>" + (countFood + 1) + "</span>. " + tenDA + "</p>" +
                            "<div class='buttonStep right'>" +
                            "<button class='subtractVal'>-</button>" +
                            "<span>1</span>" +
                            "<button class='addVal'>+</button>" +
                            "</div>" +
                            "</div>";
                        const anchorFoodToInsert = foodContainer[i].querySelector(".content .list-food > span");
                        foodContainer[i].querySelector(".content .list-food").insertBefore(createElementFromHTML(foodItem), anchorFoodToInsert);

                        const listFood = foodContainer[i].querySelectorAll(".content .list-food .list-food-item");
                        const newFood = listFood[listFood.length - 1];
                        addEventForNewButtonStepFood(newFood);

                        const select_food_pop = document.getElementById("select_food_page_container");
                        select_food_pop.classList.remove('show');
                    }
                }
            }
        })
    })
}
function renderPageThird() {
    const lst = document.querySelectorAll("main .bookroom .page-2 .room");
    let rePage3 = "";
    let sttRoom = 1*1;
    lst.forEach(function (r) {
        const imgSrc = r.querySelector("img").getAttribute("src");
        const roomName = r.querySelector(".content .field .room-type .value").innerHTML;
        const desRoom = r.querySelector(".content .field .room-type .label").innerHTML;
        const _in = r.querySelector(".content .field .check .value.left").innerHTML;
        const _out = r.querySelector(".content .field .check .value.right").innerHTML;
        const sl = r.querySelector(".content .field .buttonStep span").innerHTML;
        const maLoaiPhong = r.getAttribute('maloaiphong');

        for (let i = 0; i < sl * 1; i++) {
            rePage3 += "<div class='room' maloaiphong='" + maLoaiPhong + "' stt='" + sttRoom +"'>" +
                "<img src='" + imgSrc + "' alt='image'>" +
                "<div class='content'>" +
                "<div class='field'>" +
                "<div class='room-type'>" +
                "<p class='value left'>" + roomName + "</p>" +
                "<p class='label left'>" + desRoom.toString() + "</p>" +
                " </div>" +
                " </div>" +
                "<div class='field'>" +
                " <div class='check'>" +
                " <p class='label left'>Check in</p>" +
                "<p class='value left'>" + _in + "</p>" +
                "</div>" +
                " <img class='arrow' src='/assets/arrow.png'>" +
                "<div class='check'>" +
                "<p class='label right'>Check out</p>" +
                " <p class='value right'>" + _out + "</p>" +
                "</div>" +
                "</div>" +
                "<div class='list-food'>" +
                "<p class='name left'>Đồ ăn</p>" +
                "<span></span>" +
                "</div>" +
                "<div class='field'>" +
                "<button class='addfood'>Thêm đồ ăn</button>" +
                "</div>" +
                "</div>" +
                "</div>";
            sttRoom++;
        }
    });
    document.querySelector("main .bookroom .page-3 .page-3-room-container").innerHTML = rePage3;
    addEventForBookFood();
    addEventSelectFood();
}
const buttonPageTwoNext = document.querySelector(".page-2 .page-2-next");
buttonPageTwoNext.addEventListener("click", function () {
    const lst = document.querySelectorAll("main .bookroom .page-2 .room");
    if (lst.length > 0) {
        document.querySelector("main .bookroom .page-3 .page-3-room-container").innerHTML = "";

        let formPageTwo = new FormData();
        lst.forEach(function (r) {
            const _in = r.querySelector(".content .field .check .value.left").innerHTML;
            const _out = r.querySelector(".content .field .check .value.right").innerHTML;
            const soNguoi = r.querySelector(".content .field .room-type .label span").innerHTML;
            const sl = r.querySelector(".content .field .buttonStep span").innerHTML;
            const maLoaiPhong = r.getAttribute('maloaiphong');
            formPageTwo.append("checkIn[]", _in);
            formPageTwo.append("checkOut[]", _out);
            formPageTwo.append("soNguoiO[]", soNguoi);
            formPageTwo.append("soLuong[]", sl);
            formPageTwo.append("maLoaiPhong[]", maLoaiPhong);
        });
        let xhr_checkPageTwo = new XMLHttpRequest();
        var url_checkPageTwo = "https://localhost:5001/DatPhong/checkValidBook";
        xhr_checkPageTwo.open("POST", url_checkPageTwo, true);
        xhr_checkPageTwo.timeout = 50000;

        xhr_checkPageTwo.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (xhr_checkPageTwo.responseText == "VALID") {
                    renderPageThird();
                    swappage(2, 3);
                    swapstep(1, 2);
                    visitedPage[2] = true;
                    fillbar(1);
                }
                else {
                    alert("Có lẽ một số phòng đã được đặt trước vui lòng chọn lại.");
                }
            }
        }
        xhr_checkPageTwo.send(formPageTwo);
    }
    else {
        alert("Vui lòng chọn phòng bạn muốn đặt");
    }
});


buttonPageThirdNext.addEventListener("click", function () {
    const lstRoom = document.querySelectorAll("main .bookroom .page-3 .page-3-room-container .room");
    if (lstRoom.length > 0) {   
        swappage(3, 4);
        swapstep(2, 3);
        visitedPage[3] = true;
        fillbar(2);
        disbleform();
    }
})

var formDatPhong;
function nextToStepFourth() {
    formDatPhong = new FormData();
    const listRoomPage3 = document.querySelectorAll(".bookroom .page-3 .page-3-room-container .room");
    listRoomPage3.forEach(function (lrp3) {
        const maLoaiPhong = lrp3.getAttribute("maloaiphong");
        const soNguoiO = lrp3.querySelector(".content .field .room-type .label span").innerHTML * 1;
        const CI = lrp3.querySelector(".content .field .check .value.left").innerHTML;
        const CO = lrp3.querySelector(".content .field .check .value.right").innerHTML;
        const dsItem = lrp3.querySelectorAll(".content .list-food .list-food-item");
        let dsDoAn = "";
        dsItem.forEach(function (dsi) {
            let soLuong = dsi.querySelector(".buttonStep span").innerHTML * 1;
            let maDA = dsi.getAttribute('madoan');
            dsDoAn += maDA + "..." + soLuong + "###";
        });
        formDatPhong.append("maLoaiPhong[]", maLoaiPhong);
        formDatPhong.append("soNguoiO[]", soNguoiO);
        formDatPhong.append("CI[]", CI);
        formDatPhong.append("CO[]", CO);
        formDatPhong.append("dsDoAn[]", dsDoAn);
    });
    let xhr_tinhtien = new XMLHttpRequest();
    let xhr_url_tinhtien = "https://localhost:5001/DatPhong/calculateForBook";
    xhr_tinhtien.open("POST", xhr_url_tinhtien, true);
    xhr_tinhtien.timeout = 50000;
    xhr_tinhtien.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(xhr_tinhtien.response);
            document.getElementById("cccd-receipt").innerHTML = data["inforKH"]["cccd"];
            document.getElementById("name-receipt").innerHTML = data["inforKH"]["email"];
            document.getElementById("email-receipt").innerHTML = data["inforKH"]["hoten"];
            document.getElementById("date-receipt").innerHTML = data["billDate"];
            document.querySelector(".page-5 .receipt-field .receipt-table-field table tbody").innerHTML = data["tBody"];
            document.querySelector(".page-5 .receipt-field .receipt-table-field table tfoot").innerHTML = data["tFoot"];
            swappage(4, 5);
            swapstep(3, 4);
            visitedPage[4] = true;
            fillbar(3);
        }
    }
    xhr_tinhtien.send(formDatPhong);
}

buttonPageFourthNext.addEventListener("click", function (e) {
    CheckUser_InSession();
    if (isUser) {
        nextToStepFourth();
    }
    else {
        var usercccd_registryform = document.getElementById("usercccd_require_step3").value;
        var userfirstname_registryform = document.getElementById("userfname_require_step3").value;
        var userlastname_registryform = document.getElementById("userlname_require_step3").value;
        var userdatebirth_registryform = document.getElementById("userdatebirth_require_step3").value;
        var usergender_registryform = document.getElementById("usergender_require_step3").value;
        var useremail_registryform = document.getElementById("useremail_require_step3").value;
        var usertele_registryform = document.getElementById("usertele_require_step3").value;
        if (usercccd_registryform == "" || userfirstname_registryform == "" || userlastname_registryform == ""
            || useremail_registryform == "") {
            document.getElementById("errorform").innerHTML = "Vui lòng nhập đầy đủ các thông tin bắt buộc!";
        }
        else {
            var form_dknew = new FormData();
            form_dknew.append("usercccd_registryform", usercccd_registryform);
            form_dknew.append("userfirstname_registryform", userfirstname_registryform);
            form_dknew.append("userlastname_registryform", userlastname_registryform);
            form_dknew.append("userdatebirth_registryform", userdatebirth_registryform);
            form_dknew.append("usergender_registryform", usergender_registryform);
            form_dknew.append("useremail_registryform", useremail_registryform);
            form_dknew.append("usertele_registryform", usertele_registryform);
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
                                document.getElementById("user_name").innerHTML = userInSession["ten"];
                                document.getElementById("user_name").style.display = "block";
                                btndangnhaponpage.style.display = "none";
                            }
                        }
                        /* Mới sửa*/
                        nextToStepFourth();
                        /*Mới sửa*/
                        xhr_getuserbyss_dk.send();
                    }
                    else if (this.responseText == "false") {
                        document.getElementById("errorform").innerHTML = "Đăng ký không thành công! Có thể tài khoản này đã tồn tại! Vui lòng đăng nhập!";
                    }
                }
            }
            xhr_dk.send(form_dknew);
        }
    }
})
buttonPageFifthPay.addEventListener('click', function () {
    let xhr_book_room = new XMLHttpRequest();
    let url_book_room = "https://localhost:5001/DatPhong/BookListRoom";
    xhr_book_room.open("POST", url_book_room, true);
    xhr_book_room.timeout = 50000;
    xhr_book_room.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var isSuccess = this.response;
            if (isSuccess == "OK") {
                window.location.replace("https://localhost:5001/DatPhong/BookResult?result=OK");
            }
            else if (isSuccess == "FAIL") {
                window.location.replace("https://localhost:5001/DatPhong/BookResult?result=FAIL");
            }
        }
    }
    xhr_book_room.send(formDatPhong);
});

addEventForBookNow();

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