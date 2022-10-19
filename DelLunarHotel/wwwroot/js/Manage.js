// Menu buger - begin

$(document).ready(function (e) {
    $('#selection_field_qlp_menu_burger_id').hide();
    $('#selection_field_qlkh_menu_burger_id').hide();
    $('#option_qlp_menu_burger_id').click(function () {
        $('#selection_field_qlp_menu_burger_id').slideToggle(200);
    })
    $('#option_qlkh_menu_burger_id').click(function () {
        $('#selection_field_qlkh_menu_burger_id').slideToggle(200);
    })

    $(function () {
        $("#menu_burger_id").tabs({
            active: 1
        });
    });

    $('#dropdown_content_filter_book_hot_sdp_main_working_window_id').hide();
    $('#btn_book_hot_sdp_main_working_window').click(function () {
        $('#dropdown_content_filter_book_hot_sdp_main_working_window_id').slideToggle(200);
    })

    


    

    

    

    // Xử lý checkbox và bật tắt nút xóa của quản lý đồ ăn - begin
    var checkbox_checked_count_food_table_data_window_quanlydoan = 0;
    var checkbox_total_food_table_data_window_quanlydoan = $('.list_food_table_data_window_quanlydoan input.checkbox_check_list_food_table_data_window_quanlydoan').length;
    function turn_off_btn_delete_food_quanlydoan_window() {
        if (!btn_delete_many_food_window_quanlydoan.classList.contains('turn_off_btn')) {
            btn_delete_many_food_window_quanlydoan.classList.add('turn_off_btn');
        }
    }
    function turn_on_btn_delete_food_quanlydoan_window() {
        if (btn_delete_many_food_window_quanlydoan.classList.contains('turn_off_btn')) {
            btn_delete_many_food_window_quanlydoan.classList.remove('turn_off_btn');
        }
    }
    $("#checkbox_checkall_list_food_table_data_window_quanlydoan").click(function () {
        $('.list_food_table_data_window_quanlydoan input.checkbox_check_list_food_table_data_window_quanlydoan').prop('checked', $(this).prop('checked'));
        if ($(this).prop('checked')) {
            checkbox_checked_count_food_table_data_window_quanlydoan = checkbox_total_food_table_data_window_quanlydoan;
            turn_on_btn_delete_food_quanlydoan_window();
        }
        else {
            checkbox_checked_count_food_table_data_window_quanlydoan = 0;
            turn_off_btn_delete_roomtype_quanlyloaiphong_window();
        }
    });
    $(".list_food_table_data_window_quanlydoan input.checkbox_check_list_food_table_data_window_quanlydoan").click(function () {
        if (!$(this).prop("checked")) {
            $("#checkbox_checkall_list_food_table_data_window_quanlydoan").prop("checked", false);
            checkbox_checked_count_food_table_data_window_quanlydoan = checkbox_checked_count_food_table_data_window_quanlydoan - 1;
            if (checkbox_checked_count_food_table_data_window_quanlydoan == 0) {
                turn_off_btn_delete_food_quanlydoan_window();
            }
        }
        else {
            checkbox_checked_count_food_table_data_window_quanlydoan = checkbox_checked_count_food_table_data_window_quanlydoan + 1;
            if (checkbox_checked_count_food_table_data_window_quanlydoan != 0) {
                turn_on_btn_delete_food_quanlydoan_window();
            }
            if (checkbox_checked_count_food_table_data_window_quanlydoan == checkbox_total_food_table_data_window_quanlydoan) {
                $("#checkbox_checkall_list_food_table_data_window_quanlydoan").prop("checked", true);
            }
        }
    });
    // Xử lý checkbox và bật tắt nút xóa của quản lý đồ ăn - end
    var nhanphongpopup_green = document.getElementById("receive_room_window_green_container_id");
    var closenhanphongpopup_green = nhanphongpopup_green.querySelector("#header_close_receive_room_window_green_id");
    var cancelnhanphongpopup_green = nhanphongpopup_green.querySelector("#btn_cancel_receivephong_green");
    var receivenhanphongpopup_green = nhanphongpopup_green.querySelector("#btn_confirm_receivephong_green");
    var option_tab_thongtin_receive_room_green = nhanphongpopup_green.querySelector("#option_thongtin_receive_room_window_green_id");
    var option_tab_doan_receive_room_green = nhanphongpopup_green.querySelector("#option_doan_receive_room_window_green_id");
    var tab_thongtin_body_receive_room_green = nhanphongpopup_green.querySelector("#info_receive_room_window_green_id");
    var tab_doan_body_receive_room_green = nhanphongpopup_green.querySelector("#addfood_receive_room_window_green_id");
    var btn_cancel_doan_receive_room_green = nhanphongpopup_green.querySelector("#btn_cancel_addfood_green");
    var btn_save_doan_receive_room_green = nhanphongpopup_green.querySelector("#btn_confirm_addfood_green");
    var body_table_food_tabthongtin_nhanphongpopup_green = nhanphongpopup_green.querySelector(".food_order_table_green.tabthongtin tbody");
    var body_table_food_tabdoan_nhanphongpopup_green = nhanphongpopup_green.querySelector(".food_order_table_green.tabdoan tbody");
    var bangdoan_to_be_ordered_green = nhanphongpopup_green.querySelector("#ordering_food_table_receive_room_green_id tbody");
    function chon_tab_thongtin_receive_room_window_green() {
        option_tab_thongtin_receive_room_green.classList.add('chosen_tab');
        option_tab_doan_receive_room_green.classList.remove('chosen_tab');
        tab_thongtin_body_receive_room_green.classList.remove("hidden");
        tab_doan_body_receive_room_green.classList.add("hidden");
    }
    function chon_tab_doan_receive_room_window_green() {
        option_tab_doan_receive_room_green.classList.add('chosen_tab');
        option_tab_thongtin_receive_room_green.classList.remove('chosen_tab');
        tab_doan_body_receive_room_green.classList.remove("hidden");
        tab_thongtin_body_receive_room_green.classList.add("hidden");
        Load_Data_Food_Table_To_Order("receive_room_green");
    }
    var searchkhachhang_receive_room_green = nhanphongpopup_green.querySelector("#btn_confirm_khachchu_thongtindatphong_receive_room_window_green_id");

    

    var viewphongpopup_red = document.getElementById("view_room_window_red_container_id");
    var option_tab_thongtin_view_room_red = viewphongpopup_red.querySelector("#option_thongtin_view_room_window_red_id");
    var option_tab_doan_view_room_red = viewphongpopup_red.querySelector("#option_doan_view_room_window_red_id");
    var tab_thongtin_body_view_room_red = viewphongpopup_red.querySelector("#info_view_room_window_red_id");
    var tab_doan_body_view_room_red = viewphongpopup_red.querySelector("#addfood_view_room_window_red_id");
    var btn_cancel_doan_view_room_red = viewphongpopup_red.querySelector("#btn_cancel_addfood_red");
    var closeviewphongpopup_red = viewphongpopup_red.querySelector("#header_close_view_room_window_red_id");
    var saveviewphongpopup_red = viewphongpopup_red.querySelector("#btn_save_viewphong_red");
    var cancelviewphongpopup_red = viewphongpopup_red.querySelector("#btn_cancel_viewphong_red");
    var btn_save_doan_view_room_red = viewphongpopup_red.querySelector("#btn_confirm_addfood_red");
    var body_table_food_tabthongtin_viewphongpopup_red = viewphongpopup_red.querySelector(".food_order_table_red.tabthongtin tbody");
    var body_table_food_tabdoan_viewphongpopup_red = viewphongpopup_red.querySelector(".food_order_table_red.tabdoan tbody");
    var bangdoan_to_be_ordered_red = viewphongpopup_red.querySelector("#ordering_food_table_view_room_red_id tbody");
    function chon_tab_thongtin_view_room_window_red() {
        option_tab_thongtin_view_room_red.classList.add('chosen_tab');
        option_tab_doan_view_room_red.classList.remove('chosen_tab');
        tab_thongtin_body_view_room_red.classList.remove("hidden");
        tab_doan_body_view_room_red.classList.add("hidden");
    }
    function chon_tab_doan_view_room_window_red() {
        option_tab_doan_view_room_red.classList.add('chosen_tab');
        option_tab_thongtin_view_room_red.classList.remove('chosen_tab');
        tab_doan_body_view_room_red.classList.remove("hidden");
        tab_thongtin_body_view_room_red.classList.add("hidden");
        Load_Data_Food_Table_To_Order("view_room_red");
    }

    /*Thêm sử kiện thêm người ở cùng phòng (green) - begin*/
    Add_Event_List_Info_KhachOCung_Green();
    var list_info_khachocung_green = nhanphongpopup_green.querySelectorAll(".valid_khacho_info_data_green");
    var btn_add_info_customer_green = nhanphongpopup_green.querySelector(".thongtinkhacho_field_receive_room_window_green .btn_add_thongtinkhacho_info_green")
    var data_thongtinkhacho_field_receive_room_window_green = nhanphongpopup_green.querySelector(".data_thongtinkhacho_field_receive_room_window_green");
    btn_add_info_customer_green.onclick = function () {
        let tenkhacho_moi_green = nhanphongpopup_green.querySelector(".thongtinkhacho_field_receive_room_window_green .tenkhacho_enter_green");
        let cccdkhacho_moi_green = nhanphongpopup_green.querySelector(".thongtinkhacho_field_receive_room_window_green .cccdkhacho_enter_green");
        if (tenkhacho_moi_green.value != "" && cccdkhacho_moi_green.value != "") {
            $('<div class="valid_khacho_info_data_green">' +
                '<input class="tenkhacho_info_green" type="text" value = "' + tenkhacho_moi_green.value + '">' +
                '<input class="cccdkhacho_info_green" type="text" value = "' + cccdkhacho_moi_green.value + '">' +
                '<button class="btn_thongtinkhacho_info_green btn_remove_thongtinkhacho_info_green"><i ' +
                'class="fa fa-close"></i></button>' +
                '</div>').insertAfter(data_thongtinkhacho_field_receive_room_window_green.lastChild);
            tenkhacho_moi_green.value = "";
            cccdkhacho_moi_green.value = "";
            Add_Event_List_Info_KhachOCung_Green();
        }
    }
    function Add_Event_List_Info_KhachOCung_Green() {
        list_info_khachocung_green = nhanphongpopup_green.querySelectorAll(".valid_khacho_info_data_green");
        list_info_khachocung_green.forEach(function (info) {
            var btn_delete_info_khachocung_green = info.querySelector(".btn_remove_thongtinkhacho_info_green");
            btn_delete_info_khachocung_green.onclick = function () {
                info.remove();
                Add_Event_List_Info_KhachOCung_Green();
            }
        })
    }
    /*Thêm sử kiện thêm người ở cùng phòng (green) - end*/


    /*Thêm sử kiện thêm người ở cùng phòng (red) - begin*/
    Add_Event_List_Info_KhachOCung_Red();
    var list_info_khachocung_red = viewphongpopup_red.querySelectorAll(".valid_khacho_info_data_red");
    var btn_add_info_customer_red = viewphongpopup_red.querySelector(".thongtinkhacho_field_view_room_window_red .btn_add_thongtinkhacho_info_red")
    var data_thongtinkhacho_field_view_room_window_red = viewphongpopup_red.querySelector(".data_thongtinkhacho_field_view_room_window_red");
    btn_add_info_customer_red.onclick = function () {
        let tenkhacho_moi_red = viewphongpopup_red.querySelector(".thongtinkhacho_field_view_room_window_red .tenkhacho_enter_red");
        let cccdkhacho_moi_red = viewphongpopup_red.querySelector(".thongtinkhacho_field_view_room_window_red .cccdkhacho_enter_red");
        if (tenkhacho_moi_red.value != "" && cccdkhacho_moi_red.value != "") {
            $('<div class="valid_khacho_info_data_red">' +
                '<input class="tenkhacho_info_red" type="text" value = "' + tenkhacho_moi_red.value + '">' +
                '<input class="cccdkhacho_info_red" type="text" value = "' + cccdkhacho_moi_red.value + '">' +
                '<button class="btn_thongtinkhacho_info_red btn_remove_thongtinkhacho_info_red"><i ' +
                'class="fa fa-close"></i></button>' +
                '</div>').insertAfter(data_thongtinkhacho_field_view_room_window_red.lastChild);
            tenkhacho_moi_red.value = "";
            cccdkhacho_moi_red.value = "";
            Add_Event_List_Info_KhachOCung_Red();
        }
    }
    function Add_Event_List_Info_KhachOCung_Red() {
        list_info_khachocung_red = viewphongpopup_red.querySelectorAll(".valid_khacho_info_data_red");
        list_info_khachocung_red.forEach(function (info) {
            var btn_delete_info_khachocung_red = info.querySelector(".btn_remove_thongtinkhacho_info_red");
            btn_delete_info_khachocung_red.onclick = function () {
                info.remove();
                Add_Event_List_Info_KhachOCung_Red();
            }
        })
    }
    /*Thêm sử kiện thêm người ở cùng phòng (red) - end*/


    var nhanphongpopup_blue = document.getElementById("receive_room_window_blue_container_id");
    var closenhanphongpopup_blue = nhanphongpopup_blue.querySelector("#header_close_receive_room_window_blue_id");
    var cancelnhanphongpopup_blue = nhanphongpopup_blue.querySelector("#btn_cancel_receivephong_blue");
    var option_tab_thongtin_receive_room_blue = nhanphongpopup_blue.querySelector("#option_thongtin_receive_room_window_blue_id");
    var option_tab_doan_receive_room_blue = nhanphongpopup_blue.querySelector("#option_doan_receive_room_window_blue_id");
    var tab_thongtin_body_receive_room_blue = nhanphongpopup_blue.querySelector("#info_receive_room_window_blue_id");
    var tab_doan_body_receive_room_blue = nhanphongpopup_blue.querySelector("#addfood_receive_room_window_blue_id");
    var btn_save_doan_receive_room_blue = nhanphongpopup_blue.querySelector("#btn_confirm_addfood_blue");
    var btn_cancel_doan_receive_room_blue = nhanphongpopup_blue.querySelector("#btn_cancel_addfood_blue");
    var body_table_food_tabthongtin_nhanphongpopup_blue = nhanphongpopup_blue.querySelector(".food_order_table_blue.tabthongtin tbody");
    var body_table_food_tabdoan_nhanphongpopup_blue = nhanphongpopup_blue.querySelector(".food_order_table_blue.tabdoan tbody");
    var bangdoan_to_be_ordered_blue = nhanphongpopup_blue.querySelector("#ordering_food_table_receive_room_blue_id tbody");
    var receivenhanphongpopup_blue = nhanphongpopup_blue.querySelector("#btn_confirm_receivephong_blue");
    function chon_tab_thongtin_receive_room_window_blue() {
        option_tab_thongtin_receive_room_blue.classList.add('chosen_tab');
        option_tab_doan_receive_room_blue.classList.remove('chosen_tab');
        tab_thongtin_body_receive_room_blue.classList.remove("hidden");
        tab_doan_body_receive_room_blue.classList.add("hidden");
    }
    function chon_tab_doan_receive_room_window_blue() {
        option_tab_doan_receive_room_blue.classList.add('chosen_tab');
        option_tab_thongtin_receive_room_blue.classList.remove('chosen_tab');
        tab_doan_body_receive_room_blue.classList.remove("hidden");
        tab_thongtin_body_receive_room_blue.classList.add("hidden");
        Load_Data_Food_Table_To_Order("receive_room_blue");
    }

    /*Thêm sử kiện thêm người ở cùng phòng (blue) - begin*/
    Add_Event_List_Info_KhachOCung_Blue();
    var list_info_khachocung_blue = nhanphongpopup_blue.querySelectorAll(".valid_khacho_info_data_blue");
    var btn_add_info_customer_blue = nhanphongpopup_blue.querySelector(".thongtinkhacho_field_receive_room_window_blue .btn_add_thongtinkhacho_info_blue")
    var data_thongtinkhacho_field_receive_room_window_blue = nhanphongpopup_blue.querySelector(".data_thongtinkhacho_field_receive_room_window_blue");
    btn_add_info_customer_blue.onclick = function () {
        let tenkhacho_moi_blue = nhanphongpopup_blue.querySelector(".thongtinkhacho_field_receive_room_window_blue .tenkhacho_enter_blue");
        let cccdkhacho_moi_blue = nhanphongpopup_blue.querySelector(".thongtinkhacho_field_receive_room_window_blue .cccdkhacho_enter_blue");
        if (tenkhacho_moi_blue.value != "" && cccdkhacho_moi_blue.value != "") {
            $('<div class="valid_khacho_info_data_blue">' +
                '<input class="tenkhacho_info_blue" type="text" value = "' + tenkhacho_moi_blue.value + '">' +
                '<input class="cccdkhacho_info_blue" type="text" value = "' + cccdkhacho_moi_blue.value + '">' +
                '<button class="btn_thongtinkhacho_info_blue btn_remove_thongtinkhacho_info_blue"><i ' +
                'class="fa fa-close"></i></button>' +
                '</div>').insertAfter(data_thongtinkhacho_field_receive_room_window_blue.lastChild);
            tenkhacho_moi_blue.value = "";
            cccdkhacho_moi_blue.value = "";
            Add_Event_List_Info_KhachOCung_Blue();
        }
    }
    function Add_Event_List_Info_KhachOCung_Blue() {
        list_info_khachocung_blue = nhanphongpopup_blue.querySelectorAll(".valid_khacho_info_data_blue");
        list_info_khachocung_blue.forEach(function (info) {
            var btn_delete_info_khachocung_blue = info.querySelector(".btn_remove_thongtinkhacho_info_blue");
            btn_delete_info_khachocung_blue.onclick = function () {
                info.remove();
                Add_Event_List_Info_KhachOCung_Blue();
            }
        })
    }
    /*Thêm sử kiện thêm người ở cùng phòng (blue) - end*/


    var searchkhachhang_receive_room_blue = nhanphongpopup_blue.querySelector("#btn_confirm_khachchu_thongtindatphong_receive_room_window_blue_id");
    var input_cccd_khachchu_receive_room_blue = nhanphongpopup_blue.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_blue_id");
    var input_cccd_khachdat_receive_room_blue = nhanphongpopup_blue.querySelector("#idkhachdat_data_thongtindatphong_receive_room_window_blue_id");
    input_cccd_khachchu_receive_room_blue.onkeyup = function () {
        input_cccd_khachdat_receive_room_blue.value = input_cccd_khachchu_receive_room_blue.value
    };

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

    function getDifferenceInDays(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60 * 60 * 24);
    }

    function getToDay() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' +dd;
        return today;
    }

    function getIDDatPhong_Ex(cn) {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        id = cn + yyyy + mm + dd + "---";
        return id;
    }

    function getToDayTime() {
        let currentdate = new Date();
        let datetime = String(currentdate.getDate()).padStart(2, '0') + "/"
            + String((currentdate.getMonth() + 1)).padStart(2, '0') + "/"
            + String(currentdate.getFullYear()).padStart(2, '0') + " "
            + String(currentdate.getHours()).padStart(2, '0') + ":"
            + String(currentdate.getMinutes()).padStart(2, '0');
        return datetime;
    }

    function getTomorrow() {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        let dd = String(tomorrow.getDate()).padStart(2, '0');
        let mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = tomorrow.getFullYear();

        tomorrow = yyyy + '-' + mm + '-' + dd;
        return tomorrow;
    }

    function formatDay(date) {
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = date.getFullYear();
        return dd + "/" + mm + "/" + yyyy;
    }

    function formatDayTime(datetime) {
        let dt = datetime.split(" ");
        let day = dt[0].split("-");
        return day[2] + "/" + day[1] + "/" + day[0] + " " + dt[1];
    }

    var list_option_menu_burger = document.querySelectorAll('.working_window_by_option');

    function Update_Fixed_Status_Room(e) {
        let maphong = e.target.getAttribute("maphong");
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/UpdateStatusFixedForRoom?maphong=" + maphong;
        xhr.open("POST", url, true);
        xhr.timeout = 50000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = this.responseText;
                if (result == "Success") {
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Cập nhật tình trạng phòng thành công!";
                    notification_status_iud_data_popup.classList.add('show');
                    e.target.classList.remove("available_room");
                    e.target.classList.add("fixed_room");
                    e.target.querySelector(".room_info_status_field .room_status_in_list").innerHTML = "Sửa chữa";
                    e.target.querySelector(".room_status_icon p").innerHTML = "sửa chữa";
                    e.target.querySelector(".room_detail_field .room_number_people_in_list").innerHTML = '<i class="fa fa-calendar"></i> 0 day';
                }
                else {
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Xảy ra lỗi! Cập nhật tình trạng phòng thất bại!";
                    notification_status_iud_data_popup.classList.add('show');
                }
            }
        }
        xhr.send();
    }

    function Update_Ready_Status_Room(e) {
        let maphong = e.target.getAttribute("maphong");
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/UpdateStatusReadyForRoom?maphong=" + maphong;
        xhr.open("POST", url, true);
        xhr.timeout = 50000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = this.responseText;
                var re = result.split("_");
                if (re[0] == "available") {
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Cập nhật tình trạng phòng thành công!";
                    notification_status_iud_data_popup.classList.add('show');
                    if (e.target.classList.contains("fixed_room"))
                        e.target.classList.remove("fixed_room");
                    else if (e.target.classList.contains("returned_room"))
                        e.target.classList.remove("returned_room");
                    e.target.classList.add("available_room");
                    e.target.querySelector(".room_info_status_field .room_status_in_list").innerHTML = "Trống";
                    e.target.querySelector(".room_status_icon p").innerHTML = "Phòng trống";
                    if (re[1] == "N") {
                        e.target.querySelector(".room_detail_field .room_number_people_in_list").innerHTML = '<i class="fa fa-calendar"></i> ' + re[1] + ' day';
                    }
                    else {
                        let ndo = new Date(re[1])
                        let date = new Date(Date.now());
                        date.setHours(0, 0, 0, 0);
                        let soNgay = getDifferenceInDays(date, ndo);
                        e.target.querySelector(".room_detail_field .room_number_people_in_list").innerHTML = '<i class="fa fa-calendar"></i> ' + soNgay + ' day';
                    }
                }
                else {
                    let ndo = new Date(re[1]);
                    let nrd = new Date(re[2]);
                    let soNgay = getDifferenceInDays(ndo, nrd);
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Cập nhật tình trạng phòng thành công!";
                    notification_status_iud_data_popup.classList.add('show');
                    if (e.target.classList.contains("fixed_room"))
                        e.target.classList.remove("fixed_room");
                    else if (e.target.classList.contains("returned_room"))
                        e.target.classList.remove("returned_room");
                    e.target.classList.add("booked_room");
                    e.target.querySelector(".room_info_status_field .room_status_in_list").innerHTML = "Đã đặt";
                    e.target.querySelector(".room_detail_field .room_number_people_in_list").innerHTML = '<i class="fa fa-calendar"></i> ' + soNgay + ' day';
                    e.target.querySelector(".room_status_icon p").innerHTML = re[0];
                }
            }
        }
        xhr.send();
    }

    function Query_Customer_For_Booked_Room(idkhachhang) {
        if (idkhachhang != "") {
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/QueryKhachHangByID?makh=" + idkhachhang;
            xhr.open("POST", url, true);
            xhr.timeout = 50000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let result = this.response;
                    if (result != "null") {
                        let data_thongtinkhachhang = JSON.parse(result);
                        thongtinkhachhangpopup.querySelector("#cccdkhachhang_info_thongtinkhachhang_window_id").value = data_thongtinkhachhang[0]["idKhachHang"];
                        thongtinkhachhangpopup.querySelector("#gioitinhkhachhang_info_thongtinkhachhang_window_id").value = data_thongtinkhachhang[0]["gioiTinh"];
                        thongtinkhachhangpopup.querySelector("#hokhachhang_info_thongtinkhachhang_window_id").value = data_thongtinkhachhang[0]["ho"];
                        thongtinkhachhangpopup.querySelector("#tenkhachhang_info_thongtinkhachhang_window_id").value =  data_thongtinkhachhang[0]["ten"];
                        thongtinkhachhangpopup.querySelector("#emailkhachhang_info_thongtinkhachhang_window_id").value = data_thongtinkhachhang[0]["email"];
                        thongtinkhachhangpopup.querySelector("#sdtkhachhang_info_thongtinkhachhang_window_id").value = data_thongtinkhachhang[0]["sdt"];
                        thongtinkhachhangpopup.querySelector("#ngaysinhkhachhang_info_thongtinkhachhang_window_id").value = data_thongtinkhachhang[0]["ngaySinh"];
                        thongtinkhachhangpopup.querySelector("#loaikhkhachhang_info_thongtinkhachhang_window_id").value = data_thongtinkhachhang[1]["tenLoaiKH"];
                        thongtinkhachhangpopup.querySelector(".data_loaikh_thongtinkhachhhang_info_field").style.display = "flex";
                        if (!thongtinkhachhangpopup.classList.contains('query_customer')) {
                            thongtinkhachhangpopup.classList.add('query_customer')
                        }
                        if (thongtinkhachhangpopup.classList.contains('create_customer')) {
                            thongtinkhachhangpopup.classList.remove('create_customer')
                        }
                        thongtinkhachhangpopup.classList.add('show');
                    }
                    else {
                        thongtinkhachhangpopup.querySelector("#cccdkhachhang_info_thongtinkhachhang_window_id").value = idkhachhang;
                        thongtinkhachhangpopup.querySelector("#gioitinhkhachhang_info_thongtinkhachhang_window_id").value = "";
                        thongtinkhachhangpopup.querySelector("#hokhachhang_info_thongtinkhachhang_window_id").value = "";
                        thongtinkhachhangpopup.querySelector("#tenkhachhang_info_thongtinkhachhang_window_id").value = "";
                        thongtinkhachhangpopup.querySelector("#emailkhachhang_info_thongtinkhachhang_window_id").value = "";
                        thongtinkhachhangpopup.querySelector("#sdtkhachhang_info_thongtinkhachhang_window_id").value = "";
                        thongtinkhachhangpopup.querySelector("#ngaysinhkhachhang_info_thongtinkhachhang_window_id").value = "";
                        thongtinkhachhangpopup.querySelector(".data_loaikh_thongtinkhachhhang_info_field").style.display = "none";
                        if (thongtinkhachhangpopup.classList.contains('query_customer')) {
                            thongtinkhachhangpopup.classList.remove('query_customer')
                        }
                        if (!thongtinkhachhangpopup.classList.contains('create_customer')) {
                            thongtinkhachhangpopup.classList.add('create_customer')
                        }
                        thongtinkhachhangpopup.classList.add('show');
                    }
                }
            }
            xhr.send();
        }
    }

    function Save_Customer_Info_For_Booked_Room(str) {
        let idkhachhang = "";
        if (str == "receive_room_green") {
            idkhachhang = nhanphongpopup_green.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_green_id").value;
        }
        else if (str == "receive_room_blue") {
            idkhachhang = nhanphongpopup_blue.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_blue_id").value;
        }
        else if (str == "search_khtt_receipt") {
            idkhachhang = taomoihoadonpopup.querySelector("#cccd_khachthanhtoan_add_receipt_window").value;
        }
        let idkhachhang_new = thongtinkhachhangpopup.querySelector("#cccdkhachhang_info_thongtinkhachhang_window_id").value;
        let gioitinhkhachhang_new = thongtinkhachhangpopup.querySelector("#gioitinhkhachhang_info_thongtinkhachhang_window_id").value;
        let hokhachhang_new = thongtinkhachhangpopup.querySelector("#hokhachhang_info_thongtinkhachhang_window_id").value;
        let tenkhachhang_new = thongtinkhachhangpopup.querySelector("#tenkhachhang_info_thongtinkhachhang_window_id").value;
        let emailkhachhang_new = thongtinkhachhangpopup.querySelector("#emailkhachhang_info_thongtinkhachhang_window_id").value;
        let sdtkhachhang_new = thongtinkhachhangpopup.querySelector("#sdtkhachhang_info_thongtinkhachhang_window_id").value;
        let ngaysinhkhachhang_new = thongtinkhachhangpopup.querySelector("#ngaysinhkhachhang_info_thongtinkhachhang_window_id").value;
        let form_cs = new FormData();
        form_cs.append("idkhachhang", idkhachhang);
        form_cs.append("idkhachhang_new", idkhachhang_new);
        form_cs.append("gioitinhkhachhang_new", gioitinhkhachhang_new);
        form_cs.append("hokhachhang_new", hokhachhang_new);
        form_cs.append("tenkhachhang_new", tenkhachhang_new);
        form_cs.append("emailkhachhang_new", emailkhachhang_new);
        form_cs.append("sdtkhachhang_new", sdtkhachhang_new);
        form_cs.append("ngaysinhkhachhang_new", ngaysinhkhachhang_new);
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/Save_Customer_Info_For_Booked_Room";
        xhr.open("POST", url, true);
        xhr.timeout = 50000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = this.responseText;
                if (result != "Fail") {
                    thongtinkhachhangpopup.classList.remove('show');
                    if (str == "receive_room_green") {
                        nhanphongpopup_green.querySelector("#tenkhachchu_data_thongtindatphong_receive_room_window_green_id").value = result;
                        nhanphongpopup_green.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_green_id").value = idkhachhang_new;
                    }
                    else if (str == "receive_room_blue") {
                        nhanphongpopup_blue.querySelector("#tenkhachchu_data_thongtindatphong_receive_room_window_blue_id").value = result;
                        nhanphongpopup_blue.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_blue_id").value = idkhachhang_new;
                    }
                    else if (str == "search_khtt_receipt") {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Chọn khách hàng thành công!";
                        notification_status_iud_data_popup.classList.add('show');
                    }
                }
                else {
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Cập nhật thông tin thất bại! Vui lòng thử lại!";
                    notification_status_iud_data_popup.classList.add('show');
                }
            }
        }
        xhr.send(form_cs);
    }

    function Create_Customer_Info_For_Booked_Room(str) {
        let idkhachhang_new = thongtinkhachhangpopup.querySelector("#cccdkhachhang_info_thongtinkhachhang_window_id").value;
        let gioitinhkhachhang_new = thongtinkhachhangpopup.querySelector("#gioitinhkhachhang_info_thongtinkhachhang_window_id").value;
        let hokhachhang_new = thongtinkhachhangpopup.querySelector("#hokhachhang_info_thongtinkhachhang_window_id").value;
        let tenkhachhang_new = thongtinkhachhangpopup.querySelector("#tenkhachhang_info_thongtinkhachhang_window_id").value;
        let emailkhachhang_new = thongtinkhachhangpopup.querySelector("#emailkhachhang_info_thongtinkhachhang_window_id").value;
        let sdtkhachhang_new = thongtinkhachhangpopup.querySelector("#sdtkhachhang_info_thongtinkhachhang_window_id").value;
        let ngaysinhkhachhang_new = thongtinkhachhangpopup.querySelector("#ngaysinhkhachhang_info_thongtinkhachhang_window_id").value;
        if (idkhachhang_new != "" && gioitinhkhachhang_new != "" && hokhachhang_new != "" && tenkhachhang_new != "" && emailkhachhang_new != "" && ngaysinhkhachhang_new != "") {
            let form_cs = new FormData();
            form_cs.append("idkhachhang_new", idkhachhang_new);
            form_cs.append("gioitinhkhachhang_new", gioitinhkhachhang_new);
            form_cs.append("hokhachhang_new", hokhachhang_new);
            form_cs.append("tenkhachhang_new", tenkhachhang_new);
            form_cs.append("emailkhachhang_new", emailkhachhang_new);
            form_cs.append("sdtkhachhang_new", sdtkhachhang_new);
            form_cs.append("ngaysinhkhachhang_new", ngaysinhkhachhang_new);
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/Create_Customer_Info_For_Booked_Room";
            xhr.open("POST", url, true);
            xhr.timeout = 50000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let result = this.responseText;
                    if (result != "Fail") {
                        thongtinkhachhangpopup.classList.remove('show');
                        if (str == "receive_room_green") {
                            nhanphongpopup_green.querySelector("#tenkhachchu_data_thongtindatphong_receive_room_window_green_id").value = result;
                            nhanphongpopup_green.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_green_id").value = idkhachhang_new;
                        }
                        else if (str == "receive_room_blue") {
                            nhanphongpopup_blue.querySelector("#tenkhachchu_data_thongtindatphong_receive_room_window_blue_id").value = result;
                            nhanphongpopup_blue.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_blue_id").value = idkhachhang_new;
                        }
                        else if (str == "search_khtt_receipt") {
                            notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Thêm mới và chọn khách hàng thành công!";
                            notification_status_iud_data_popup.classList.add('show');
                        }
                    }
                    else {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Tạo mới thông tin thất bại! Vui lòng thử lại!";
                        notification_status_iud_data_popup.classList.add('show');
                    }
                }
            }
            xhr.send(form_cs);
        }
        else {
            notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Vui lòng điền đầy đủ thông tin!";
            notification_status_iud_data_popup.classList.add('show');
        }
    }



    function Order_Food_For_Room(str) {
        if (str == "receive_room_green") {
            let maphong = nhanphongpopup_green.getAttribute("maphong");
            let ngaydeno = nhanphongpopup_green.getAttribute("ngaydeno");
            let madatphong = nhanphongpopup_green.getAttribute("iddatphong");
            let dsdoan_order = nhanphongpopup_green.querySelectorAll("#ordering_food_table_receive_room_green_id tbody tr");
            let chuoi_doan_order = "";
            if (dsdoan_order.length > 0) {
                dsdoan_order.forEach(function (food) {
                    let madoan = food.getAttribute("madoan");
                    let soluong = food.querySelector(".count_each_food_ordering_food_table_receive_room_green").value;
                    if (soluong != 0) {
                        chuoi_doan_order = chuoi_doan_order + madoan + "-" + soluong + " ";
                    }
                })
                chuoi_doan_order = chuoi_doan_order.slice(0, chuoi_doan_order.length - 1);
                if (chuoi_doan_order != '') {
                    let form_cs = new FormData();
                    form_cs.append("maphong", maphong);
                    form_cs.append("madatphong", madatphong);
                    form_cs.append("ngaydeno", ngaydeno);
                    form_cs.append("chuoi_doan_order", chuoi_doan_order);
                    let xhr = new XMLHttpRequest();
                    let url = "https://localhost:5001/QuanLy/Order_Food_For_Room";
                    xhr.open("POST", url, true);
                    xhr.timeout = 50000;
                    xhr.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            let status = this.responseText;
                            if (status == "OK") {
                                notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Nhận phòng và đặt đồ ăn thành công!";
                                notification_status_iud_data_popup.classList.add('show');
                            }
                            else {
                                notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Nhận phòng thành công và đặt đồ ăn thất bại!";
                                notification_status_iud_data_popup.classList.add('show');
                            }
                        }
                    }
                    xhr.send(form_cs);
                }
                else {
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Nhận phòng thành công!";
                    notification_status_iud_data_popup.classList.add('show');
                }
            }
            else {
                notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Nhận phòng thành công!";
                notification_status_iud_data_popup.classList.add('show');
            }
        }
        else if (str == "view_room_red") {
            let maphong = viewphongpopup_red.getAttribute("maphong");
            let ngaydeno = viewphongpopup_red.getAttribute("ngaydeno");
            let madatphong = viewphongpopup_red.getAttribute("iddatphong");
            let dsdoan_order = viewphongpopup_red.querySelectorAll("#ordering_food_table_view_room_red_id tbody tr");
            let chuoi_doan_order = "";
            if (dsdoan_order.length > 0) {
                dsdoan_order.forEach(function (food) {
                    let madoan = food.getAttribute("madoan");
                    let soluong = food.querySelector(".count_each_food_ordering_food_table_view_room_red").value;
                    if (soluong != 0) {
                        chuoi_doan_order = chuoi_doan_order + madoan + "-" + soluong + " ";
                    }
                })
                chuoi_doan_order = chuoi_doan_order.slice(0, chuoi_doan_order.length - 1);
                if (chuoi_doan_order != '') {
                    let form_cs = new FormData();
                    form_cs.append("maphong", maphong);
                    form_cs.append("madatphong", madatphong);
                    form_cs.append("ngaydeno", ngaydeno);
                    form_cs.append("chuoi_doan_order", chuoi_doan_order);
                    let xhr = new XMLHttpRequest();
                    let url = "https://localhost:5001/QuanLy/Order_Food_For_Room";
                    xhr.open("POST", url, true);
                    xhr.timeout = 50000;
                    xhr.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            let status = this.responseText;
                            if (status == "OK") {
                                notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Cập nhật phòng và đặt đồ ăn thành công!";
                                notification_status_iud_data_popup.classList.add('show');
                            }
                            else {
                                notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Cập nhật phòng thành công và đặt đồ ăn thất bại!";
                                notification_status_iud_data_popup.classList.add('show');
                            }
                        }
                    }
                    xhr.send(form_cs);
                }
                else {
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Cập nhật phòng thành công!";
                    notification_status_iud_data_popup.classList.add('show');
                }
            }
            else {
                notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Cập nhật phòng thành công!";
                notification_status_iud_data_popup.classList.add('show');
            }
        }
        else if (str == "receive_room_blue") {
            let maphong = nhanphongpopup_blue.getAttribute("maphong");
            let ngaydeno = nhanphongpopup_blue.getAttribute("ngaydeno");
            let madatphong = nhanphongpopup_blue.getAttribute("iddatphong");
            let dsdoan_order = nhanphongpopup_blue.querySelectorAll("#ordering_food_table_receive_room_blue_id tbody tr");
            let chuoi_doan_order = "";
            if (dsdoan_order.length > 0) {
                dsdoan_order.forEach(function (food) {
                    let madoan = food.getAttribute("madoan");
                    let soluong = food.querySelector(".count_each_food_ordering_food_table_receive_room_blue").value;
                    if (soluong != 0) {
                        chuoi_doan_order = chuoi_doan_order + madoan + "-" + soluong + " ";
                    }
                })
                chuoi_doan_order = chuoi_doan_order.slice(0, chuoi_doan_order.length - 1);
                if (chuoi_doan_order != '') {
                    let form_cs = new FormData();
                    form_cs.append("maphong", maphong);
                    form_cs.append("madatphong", madatphong);
                    form_cs.append("ngaydeno", ngaydeno);
                    form_cs.append("chuoi_doan_order", chuoi_doan_order);
                    let xhr = new XMLHttpRequest();
                    let url = "https://localhost:5001/QuanLy/Order_Food_For_Room";
                    xhr.open("POST", url, true);
                    xhr.timeout = 50000;
                    xhr.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            let status = this.responseText;
                            if (status == "OK") {
                                notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Đặt phòng và đồ ăn thành công!\n Mã đặt phòng của bạn là: " + madatphong;
                                notification_status_iud_data_popup.classList.add('show');
                            }
                            else {
                                notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Đặt phòng thành công và đặt đồ ăn thất bại!\n Mã đặt phòng của bạn là: " + madatphong;
                                notification_status_iud_data_popup.classList.add('show');
                            }
                        }
                    }
                    xhr.send(form_cs);
                }
                else {
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Đặt phòng thành công!\n Mã đặt phòng của bạn là: " + madatphong;
                    notification_status_iud_data_popup.classList.add('show');
                }
            }
            else {
                notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Đặt phòng thành công!\n Mã đặt phòng của bạn là: " + madatphong;
                notification_status_iud_data_popup.classList.add('show');
            }
        }
    }

    function CheckIn_For_Booked_Room(e) {
        let checkin_Time = nhanphongpopup_green.querySelector("#checkin_data_thongtindatphong_receive_room_window_green_id").value;
        let ngayRoiDi = nhanphongpopup_green.querySelector("#ngayroidi_data_thongtindatphong_receive_room_window_green_id").value;
        let ngayDenO = nhanphongpopup_green.querySelector("#ngaydeno_data_thongtindatphong_receive_room_window_green_id").value;
        let list_info_khachocung = nhanphongpopup_green.querySelectorAll(".data_thongtinkhacho_field_receive_room_window_green .valid_khacho_info_data_green input");
        let info = "";
        for (let i = 0; i < list_info_khachocung.length; i = i + 2) {
            info = info + list_info_khachocung[i].value + " - ";
            info = info + list_info_khachocung[i+1].value + "\n";
        }
        let songuoio_info = list_info_khachocung.length / 2;
        let idkhachhangchu = nhanphongpopup_green.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_green_id").value;
        let idkhachhangdat = nhanphongpopup_green.querySelector("#idkhachdat_data_thongtindatphong_receive_room_window_green_id").value;
        let maphong = nhanphongpopup_green.getAttribute("maphong");
        let madatphong = nhanphongpopup_green.getAttribute("iddatphong");
        if (idkhachhangchu != "") {
            let form_cs = new FormData();
            form_cs.append("checkin_Time", checkin_Time);
            form_cs.append("ngayRoiDi", ngayRoiDi);
            form_cs.append("ngayDenO", ngayDenO);
            form_cs.append("idkhachhangchu", idkhachhangchu);
            form_cs.append("thongtin_nguoio", info);
            form_cs.append("idkhachhangdat", idkhachhangdat);
            form_cs.append("maphong", maphong);
            form_cs.append("madatphong", madatphong);
            form_cs.append("songuoio_info", songuoio_info);
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/CheckIn_For_Booked_Room";
            xhr.open("POST", url, true);
            xhr.timeout = 50000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let status_CheckIn_NhanPhong_DelLunar = this.responseText;
                    if (status_CheckIn_NhanPhong_DelLunar != "Fail") {
                        Change_Status_Occupied_For_Booked_Room(e, status_CheckIn_NhanPhong_DelLunar);
                        nhanphongpopup_green.classList.remove('show');
                        Order_Food_For_Room("receive_room_green");
                    }
                }
            }
            xhr.send(form_cs);
        }
    }

    function Book_and_CheckIn_Room_Now(e) {
        let checkin_Time = nhanphongpopup_blue.querySelector("#checkin_data_thongtindatphong_receive_room_window_blue_id").value;
        let ngayRoiDi = nhanphongpopup_blue.querySelector("#ngayroidi_data_thongtindatphong_receive_room_window_blue_id").value;
        let ngayDenO = nhanphongpopup_blue.querySelector("#ngaydeno_data_thongtindatphong_receive_room_window_blue_id").value;
        let list_info_khachocung = nhanphongpopup_blue.querySelectorAll(".data_thongtinkhacho_field_receive_room_window_blue .valid_khacho_info_data_blue input");
        let info = "";
        for (let i = 0; i < list_info_khachocung.length; i = i + 2) {
            info = info + list_info_khachocung[i].value + " - ";
            info = info + list_info_khachocung[i + 1].value + "\n";
        }
        let songuoio_info = list_info_khachocung.length / 2;
        let idkhachhangchu = nhanphongpopup_blue.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_blue_id").value;
        let idkhachhangdat = nhanphongpopup_blue.querySelector("#idkhachdat_data_thongtindatphong_receive_room_window_blue_id").value;
        let maphong = nhanphongpopup_blue.getAttribute("maphong");
        let chinhanh = nhanphongpopup_blue.getAttribute("chinhanh");
        let thoigiandat = nhanphongpopup_blue.querySelector("#thoigiandat_data_thongtindatphong_receive_room_window_blue_id").value;
        if (idkhachhangchu != "") {
            let form_cs = new FormData();
            form_cs.append("checkin_Time", checkin_Time);
            form_cs.append("ngayRoiDi", ngayRoiDi);
            form_cs.append("ngayDenO", ngayDenO);
            form_cs.append("idkhachhangchu", idkhachhangchu);
            form_cs.append("thongtin_nguoio", info);
            form_cs.append("idkhachhangdat", idkhachhangdat);
            form_cs.append("maphong", maphong);
            form_cs.append("thoigiandat", thoigiandat);
            form_cs.append("songuoio_info", songuoio_info);
            form_cs.append("chinhanh", chinhanh);
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/Book_and_CheckIn_Room_Now";
            xhr.open("POST", url, true);
            xhr.timeout = 50000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let status_CheckIn_NhanPhong_DelLunar = this.responseText;
                    let data_NhanPhong_DelLunar = status_CheckIn_NhanPhong_DelLunar.split("_");
                    if (data_NhanPhong_DelLunar[0] == "Success") {
                        nhanphongpopup_blue.setAttribute("iddatphong", data_NhanPhong_DelLunar[1]);
                        let soNgay = getDifferenceInDays(new Date(data_NhanPhong_DelLunar[3]), new Date(nhanphongpopup_blue.getAttribute("ngaydeno")))
                        Change_Status_Occupied_For_Available_Room(e, data_NhanPhong_DelLunar[2], soNgay);
                        nhanphongpopup_blue.classList.remove('show');
                        Order_Food_For_Room("receive_room_blue");
                    }
                    else if (data_NhanPhong_DelLunar[0] == "Fail") {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Nhận phòng thất bại!";
                        notification_status_iud_data_popup.classList.add('show');
                    }
                }
            }
            xhr.send(form_cs);
        }
    }

    function Update_Info_Service_For_Occupied_Room(e) {
        let ngayRoiDi = viewphongpopup_red.querySelector("#ngayroidi_data_thongtindatphong_view_room_window_red_id").value;
        let ngayDenO = viewphongpopup_red.querySelector("#ngaydeno_data_thongtindatphong_view_room_window_red_id").value;
        let list_info_khachocung = viewphongpopup_red.querySelectorAll(".data_thongtinkhacho_field_view_room_window_red .valid_khacho_info_data_red input");
        let info = "";
        for (let i = 0; i < list_info_khachocung.length; i = i + 2) {
            info = info + list_info_khachocung[i].value + " - ";
            info = info + list_info_khachocung[i + 1].value + "\n";
        }
        let songuoio_info = list_info_khachocung.length / 2;
        let maphong = viewphongpopup_red.getAttribute("maphong");
        let madatphong = viewphongpopup_red.getAttribute("iddatphong");
        if (true) {
            let form_cs = new FormData();
            form_cs.append("ngayRoiDi", ngayRoiDi);
            form_cs.append("ngayDenO", ngayDenO);
            form_cs.append("thongtin_nguoio", info);
            form_cs.append("maphong", maphong);
            form_cs.append("madatphong", madatphong);
            form_cs.append("songuoio_info", songuoio_info);
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/Update_Info_Service_For_Occupied_Room";
            xhr.open("POST", url, true);
            xhr.timeout = 50000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let status_Update_Service_For_Room_DelLunar = this.responseText;
                    if (status_Update_Service_For_Room_DelLunar == "OK") {
                        viewphongpopup_red.classList.remove('show');
                        Order_Food_For_Room("view_room_red");
                    }
                }
            }
            xhr.send(form_cs);
        }
    }

    function Change_Status_Occupied_For_Booked_Room(e, name) {
        if (e.target.classList.contains("booked_room")) {
            e.target.classList.remove("booked_room");
            e.target.classList.add("occupied_room");
            e.target.querySelector(".room_info_status_field .room_status_in_list").innerHTML = "Đã nhận";
            e.target.querySelector(".room_status_icon p").innerHTML = name;
        }
    }

    function Change_Status_Occupied_For_Available_Room(e, name, soNgay) {
        if (e.target.classList.contains("available_room")) {
            e.target.classList.remove("available_room");
            e.target.classList.add("occupied_room");
            e.target.querySelector(".room_info_status_field .room_status_in_list").innerHTML = "Đã nhận";
            e.target.querySelector(".room_status_icon p").innerHTML = name;
            e.target.querySelector(".room_number_people_in_list").innerHTML = '<i class="fa fa-calendar"></i> ' + soNgay + ' day</div >';
        }
    }

    function Add_Event_Add_Food_To_Order(str) {
        if (str == "receive_room_green") {
            let dsdoan = nhanphongpopup_green.querySelectorAll("#addfood_receive_room_window_green_id .list_food_table_receive_room_green tbody tr");
            dsdoan.forEach(function (food) {
                food.querySelector(".btn_add_food_into_order_list_green").onclick = function () {
                    let madoan = food.getAttribute("madoan");
                    let giadoan = food.getAttribute("giadoan");
                    let tendoan = food.getAttribute("tendoan");
                    let dsdoan_to_order = bangdoan_to_be_ordered_green.querySelectorAll("tr");
                    let tontai = 0;
                    dsdoan_to_order.forEach(function (row) {
                        if (row.getAttribute("madoan") == madoan) {
                            row.querySelector(".count_each_food_ordering_food_table_receive_room_green").value = Number(Number(row.querySelector(".count_each_food_ordering_food_table_receive_room_green").value) + 1);
                            tontai = 1;
                        }
                    })
                    if (tontai == 0) {
                        $('<tr madoan = ' + madoan + '>' +
                            '<td class="stt_ordering_food_table_receive_room_green">' + (dsdoan_to_order.length + 1) + '</td>' +
                            '<td class="name_ordering_food_table_receive_room_green">' + tendoan + '</td>' +
                            '<td class="count_ordering_food_table_receive_room_green">' +
                            '<input class="count_each_food_ordering_food_table_receive_room_green" type="number" min=0 value=1></td>' +
                            '<td class="price_ordering_food_table_receive_room_green">' + giadoan + '</td> </tr>').insertAfter(bangdoan_to_be_ordered_green.lastChild)
                        nhanphongpopup_green.querySelectorAll("input.count_each_food_ordering_food_table_receive_room_green").forEach(function (i) {
                            i.onchange = function () {
                                if (i.value == 0) {
                                    i.parentElement.parentElement.remove();
                                    let stt = 0;
                                    dsdoan_to_order = bangdoan_to_be_ordered_green.querySelectorAll("tr");
                                    dsdoan_to_order.forEach(function (row) {
                                        stt = stt + 1;
                                        row.querySelector(".stt_ordering_food_table_receive_room_green").innerHTML = stt;
                                    })
                                }
                            }
                        })
                    }
                }
            })
        }
        else if (str == "view_room_red") {
            let dsdoan = viewphongpopup_red.querySelectorAll("#addfood_view_room_window_red_id .list_food_table_view_room_red tbody tr");
            dsdoan.forEach(function (food) {
                food.querySelector(".btn_add_food_into_order_list_red").onclick = function () {
                    let madoan = food.getAttribute("madoan");
                    let giadoan = food.getAttribute("giadoan");
                    let tendoan = food.getAttribute("tendoan");
                    let dsdoan_to_order = bangdoan_to_be_ordered_red.querySelectorAll("tr");
                    let tontai = 0;
                    dsdoan_to_order.forEach(function (row) {
                        if (row.getAttribute("madoan") == madoan) {
                            row.querySelector(".count_each_food_ordering_food_table_view_room_red").value = Number(Number(row.querySelector(".count_each_food_ordering_food_table_view_room_red").value) + 1);
                            tontai = 1;
                        }
                    })
                    if (tontai == 0) {
                        $('<tr madoan = ' + madoan + '>' +
                            '<td class="stt_ordering_food_table_view_room_red">' + (dsdoan_to_order.length + 1) + '</td>' +
                            '<td class="name_ordering_food_table_view_room_red">' + tendoan + '</td>' +
                            '<td class="count_ordering_food_table_view_room_red">' +
                            '<input class="count_each_food_ordering_food_table_view_room_red" type="number" min=0 value=1></td>' +
                            '<td class="price_ordering_food_table_view_room_red">' + giadoan + '</td> </tr>').insertAfter(bangdoan_to_be_ordered_red.lastChild)
                        viewphongpopup_red.querySelectorAll("input.count_each_food_ordering_food_table_view_room_red").forEach(function (i) {
                            i.onchange = function () {
                                if (i.value == 0) {
                                    i.parentElement.parentElement.remove();
                                    let stt = 0;
                                    dsdoan_to_order = bangdoan_to_be_ordered_red.querySelectorAll("tr");
                                    dsdoan_to_order.forEach(function (row) {
                                        stt = stt + 1;
                                        row.querySelector(".stt_ordering_food_table_view_room_red").innerHTML = stt;
                                    })
                                }
                            }
                        })
                    }
                }
            })
        }
        else if (str == "receive_room_blue") {
            let dsdoan = nhanphongpopup_blue.querySelectorAll("#addfood_receive_room_window_blue_id .list_food_table_receive_room_blue tbody tr");
            dsdoan.forEach(function (food) {
                food.querySelector(".btn_add_food_into_order_list_blue").onclick = function () {
                    let madoan = food.getAttribute("madoan");
                    let giadoan = food.getAttribute("giadoan");
                    let tendoan = food.getAttribute("tendoan");
                    let dsdoan_to_order = bangdoan_to_be_ordered_blue.querySelectorAll("tr");
                    let tontai = 0;
                    dsdoan_to_order.forEach(function (row) {
                        if (row.getAttribute("madoan") == madoan) {
                            row.querySelector(".count_each_food_ordering_food_table_receive_room_blue").value = Number(Number(row.querySelector(".count_each_food_ordering_food_table_receive_room_blue").value) + 1);
                            tontai = 1;
                        }
                    })
                    if (tontai == 0) {
                        $('<tr madoan = ' + madoan + '>' +
                            '<td class="stt_ordering_food_table_receive_room_blue">' + (dsdoan_to_order.length + 1) + '</td>' +
                            '<td class="name_ordering_food_table_receive_room_blue">' + tendoan + '</td>' +
                            '<td class="count_ordering_food_table_receive_room_blue">' +
                            '<input class="count_each_food_ordering_food_table_receive_room_blue" type="number" min=0 value=1></td>' +
                            '<td class="price_ordering_food_table_receive_room_blue">' + giadoan + '</td> </tr>').insertAfter(bangdoan_to_be_ordered_blue.lastChild)
                        nhanphongpopup_blue.querySelectorAll("input.count_each_food_ordering_food_table_receive_room_blue").forEach(function (i) {
                            i.onchange = function () {
                                if (i.value == 0) {
                                    i.parentElement.parentElement.remove();
                                    let stt = 0;
                                    dsdoan_to_order = bangdoan_to_be_ordered_blue.querySelectorAll("tr");
                                    dsdoan_to_order.forEach(function (row) {
                                        stt = stt + 1;
                                        row.querySelector(".stt_ordering_food_table_receive_room_blue").innerHTML = stt;
                                    })
                                }
                            }
                        })
                    }
                }
            })
        }
    }

    function Load_Data_Food_Table_To_Order(str) {
        let data = "";
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/GetDataFood";
        xhr.open("POST", url, true);
        xhr.timeout = 50000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = this.response;
                result = JSON.parse(result);
                if (result.length > 0) {
                    for (let i = 0; i < result.length; i++) {
                        data = data + '<tr madoan = ' + result[i]["idDoAn"] + ' giadoan = ' + result[i]["gia"] + ' tendoan = "' + result[i]["tenDoAn"] + '">' +
                            '<td class="stt_list_food_table_@which_table">' + (i + 1)+ '</td>' +
                            '<td class="name_list_food_table_@which_table">' + result[i]["tenDoAn"] + '</td>' +
                            '<td class="btn_add_list_food_table_@which_table">' +
                            '<button class="@btn_add_for_which">' +
                            '<i class="fa fa-plus" style="font-size: 0.8rem;"></i>' +
                            '</button> </td> </tr>';
                    }
                    if (str == "receive_room_green") {
                        data = data.replace(/@which_table/g, str);
                        data = data.replace(/@btn_add_for_which/g, "btn_add_food_into_order_list_green");
                        nhanphongpopup_green.querySelector("#addfood_receive_room_window_green_id .list_food_table_receive_room_green tbody").innerHTML = data;
                        Add_Event_Add_Food_To_Order("receive_room_green");
                    }
                    else if (str == "view_room_red") {
                        data = data.replace(/@which_table/g, str);
                        data = data.replace(/@btn_add_for_which/g, "btn_add_food_into_order_list_red");
                        viewphongpopup_red.querySelector("#addfood_view_room_window_red_id .list_food_table_view_room_red tbody").innerHTML = data;
                        Add_Event_Add_Food_To_Order("view_room_red");
                    }
                    else if (str == "receive_room_blue") {
                        data = data.replace(/@which_table/g, str);
                        data = data.replace(/@btn_add_for_which/g, "btn_add_food_into_order_list_blue");
                        nhanphongpopup_blue.querySelector("#addfood_receive_room_window_blue_id .list_food_table_receive_room_blue tbody").innerHTML = data;
                        Add_Event_Add_Food_To_Order("receive_room_blue");
                    }
                }
            }
        }
        xhr.send();
    }

    function Load_Data_For_Booked_Room(e) {
        let maphong = e.target.getAttribute('maphong');
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/GetInfoBookedRoom?maphong=" + maphong;
        xhr.open("POST", url, true);
        xhr.timeout = 50000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = this.responseText;
                result = JSON.parse(result);
                if (result.length > 0) {
                    let CheckIn_Time = getToDayTime();
                    nhanphongpopup_green.querySelector("#checkin_data_thongtindatphong_receive_room_window_green_id").value = CheckIn_Time;
                    nhanphongpopup_green.querySelector(".header_name_receive_room_window_green span").innerHTML = result[0]["soPhong"];
                    nhanphongpopup_green.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_green_id").value = "";
                    nhanphongpopup_green.querySelector("#tenkhachchu_data_thongtindatphong_receive_room_window_green_id").value = "";
                    nhanphongpopup_green.querySelector("#loaiphong_data_thongtinphong_receive_room_window_green_id").value = result[0]["tenLoaiPhong"];
                    nhanphongpopup_green.querySelector("#songuoio_data_thongtinphong_receive_room_window_green_id").value = result[0]["soNguoiO"];
                    nhanphongpopup_green.querySelector("#giatien_data_thongtinphong_receive_room_window_green_id").value = result[0]["giaTien"];
                    nhanphongpopup_green.querySelector("#tang_data_thongtinphong_receive_room_window_green_id").value = result[0]["tang"];
                    nhanphongpopup_green.querySelector("#sogiuong_data_thongtinphong_receive_room_window_green_id").value = result[0]["soGiuong"];
                    nhanphongpopup_green.querySelector("#iddatphong_data_thongtindatphong_receive_room_window_green_id").value = result[0]["idDatPhong"];
                    nhanphongpopup_green.querySelector("#idkhachdat_data_thongtindatphong_receive_room_window_green_id").value = result[0]["idKhachDat"];
                    nhanphongpopup_green.querySelector("#thoigiandat_data_thongtindatphong_receive_room_window_green_id").value = result[0]["thoiGianDat"];
                    nhanphongpopup_green.querySelector("#ngaydeno_data_thongtindatphong_receive_room_window_green_id").value = result[0]["ngayDenO"];
                    nhanphongpopup_green.querySelector("#ngayroidi_data_thongtindatphong_receive_room_window_green_id").value = result[0]["ngayRoiDi"];
                    nhanphongpopup_green.querySelector("#ngayroidi_data_thongtindatphong_receive_room_window_green_id").min = result[0]["ngayRoiDi"];
                    if (result[0]["ngayRoiDiMax"] != "vohan")
                        nhanphongpopup_green.querySelector("#ngayroidi_data_thongtindatphong_receive_room_window_green_id").max = result[0]["ngayRoiDiMax"];
                    else nhanphongpopup_green.querySelector("#ngayroidi_data_thongtindatphong_receive_room_window_green_id").removeAttribute("max");
                    if (result.length > 1) {
                        let tongtien = 0;
                        for (let i = 1; i < result.length; i++) {
                            tongtien = tongtien + result[i]["gia"] * result[i]["soLuong"];
                            $(' <tr> ' +
                                ' <td>' + i + '</td> ' +
                                ' <td>' + result[i]["tenDoAn"] + '</td> ' +
                                ' <td>' + result[i]["thoiGianDat"] + '</td> ' +
                                ' <td>' + result[i]["soLuong"] + '</td> ' +
                                ' <td>' + result[i]["gia"] + '</td> ' +
                                ' <td>' + result[i]["gia"] * result[i]["soLuong"] + '</td> ' +
                                ' </tr> ').insertAfter(body_table_food_tabthongtin_nhanphongpopup_green.lastChild);
                            $(' <tr> ' +
                                ' <td>' + i + '</td> ' +
                                ' <td>' + result[i]["tenDoAn"] + '</td> ' +
                                ' <td>' + result[i]["thoiGianDat"] + '</td> ' +
                                ' <td>' + result[i]["soLuong"] + '</td> ' +
                                ' <td>' + result[i]["gia"] + '</td> ' +
                                ' <td>' + result[i]["gia"] * result[i]["soLuong"] + '</td> ' +
                                ' </tr> ').insertAfter(body_table_food_tabdoan_nhanphongpopup_green.lastChild);
                        }
                        nhanphongpopup_green.querySelector(".part_info_receive_room_window_green .food_order_table_green #sum_price_food_order_green").innerHTML = "Tổng tiền (VNĐ): " + tongtien + " VNĐ";
                        nhanphongpopup_green.querySelector(".part_addfood_receive_room_window_green .food_order_table_green #sum_price_food_order_green").innerHTML = "Tổng tiền (VNĐ): " + tongtien + " VNĐ";
                    }
                    else {
                        nhanphongpopup_green.querySelector(".part_info_receive_room_window_green .food_order_table_green #sum_price_food_order_green").innerHTML = "Tổng tiền (VNĐ): 0 VNĐ";
                        nhanphongpopup_green.querySelector(".part_addfood_receive_room_window_green .food_order_table_green #sum_price_food_order_green").innerHTML = "Tổng tiền (VNĐ): 0 VNĐ";
                    }
                    nhanphongpopup_green.setAttribute("maphong", maphong);
                    nhanphongpopup_green.setAttribute("iddatphong", result[0]["idDatPhong"]);
                    nhanphongpopup_green.setAttribute("ngaydeno", result[0]["ngayDenO"]);
                    nhanphongpopup_green.classList.add('show');
                    chon_tab_thongtin_receive_room_window_green();
                }
            }
        }
        xhr.send();
    }

    function Load_Data_For_Occupied_Room(e) {
        let maphong = e.target.getAttribute('maphong');
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/GetInfoOccupiedRoom?maphong=" + maphong;
        xhr.open("POST", url, true);
        xhr.timeout = 50000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = this.responseText;
                result = JSON.parse(result);
                if (result.length > 0) {
                    viewphongpopup_red.querySelector("#checkin_data_thongtindatphong_view_room_window_red_id").value = result[0]["checkIn"];
                    viewphongpopup_red.querySelector(".header_name_view_room_window_red span").innerHTML = result[0]["soPhong"];
                    viewphongpopup_red.querySelector("#idkhachchu_data_thongtindatphong_view_room_window_red_id").value = result[0]["idKhachChu"];
                    viewphongpopup_red.querySelector("#tenkhachchu_data_thongtindatphong_view_room_window_red_id").value = result[0]["hoKhachChu"] + " " + result[0]["tenKhachChu"];
                    viewphongpopup_red.querySelector("#loaiphong_data_thongtinphong_view_room_window_red_id").value = result[0]["tenLoaiPhong"];
                    viewphongpopup_red.querySelector("#songuoio_data_thongtinphong_view_room_window_red_id").value = result[0]["soNguoiO"];
                    viewphongpopup_red.querySelector("#giatien_data_thongtinphong_view_room_window_red_id").value = result[0]["giaTien"];
                    viewphongpopup_red.querySelector("#tang_data_thongtinphong_view_room_window_red_id").value = result[0]["tang"];
                    viewphongpopup_red.querySelector("#sogiuong_data_thongtinphong_view_room_window_red_id").value = result[0]["soGiuong"];
                    viewphongpopup_red.querySelector("#iddatphong_data_thongtindatphong_view_room_window_red_id").value = result[0]["idDatPhong"];
                    viewphongpopup_red.querySelector("#idkhachdat_data_thongtindatphong_view_room_window_red_id").value = result[0]["idKhachDat"];
                    viewphongpopup_red.querySelector("#thoigiandat_data_thongtindatphong_view_room_window_red_id").value = result[0]["thoiGianDat"];
                    viewphongpopup_red.querySelector("#ngaydeno_data_thongtindatphong_view_room_window_red_id").value = result[0]["ngayDenO"];
                    viewphongpopup_red.querySelector("#ngayroidi_data_thongtindatphong_view_room_window_red_id").value = result[0]["ngayRoiDi"];
                    viewphongpopup_red.querySelector("#ngayroidi_data_thongtindatphong_view_room_window_red_id").min = result[0]["ngayRoiDi"];
                    let str_thongtinkhacho = result[0]["thongTinKhachO"];
                    if (str_thongtinkhacho != '') {
                        let data_thongtinkhacho = str_thongtinkhacho.split("\n");
                        for (let i = 0; i < data_thongtinkhacho.length - 1; i++) {
                            let cccd_ten_data_thongtinkhacho = data_thongtinkhacho[i].split(' - ');
                            $('<div class="valid_khacho_info_data_red">' +
                                '<input class="tenkhacho_info_red" type="text" value = "' + cccd_ten_data_thongtinkhacho[0] + '">' +
                                '<input class="cccdkhacho_info_red" type="text" value = "' + cccd_ten_data_thongtinkhacho[1] + '">' +
                                '<button class="btn_thongtinkhacho_info_red btn_remove_thongtinkhacho_info_red"><i ' +
                                'class="fa fa-close"></i></button>' +
                                '</div>').insertAfter(data_thongtinkhacho_field_view_room_window_red.lastChild);
                        }
                        Add_Event_List_Info_KhachOCung_Red();
                    }
                    if (result[0]["ngayRoiDiMax"] != "vohan")
                        viewphongpopup_red.querySelector("#ngayroidi_data_thongtindatphong_view_room_window_red_id").max = result[0]["ngayRoiDiMax"];
                    else viewphongpopup_red.querySelector("#ngayroidi_data_thongtindatphong_view_room_window_red_id").removeAttribute("max");
                    if (result.length > 1) {
                        let tongtien = 0;
                        for (let i = 1; i < result.length; i++) {
                            tongtien = tongtien + result[i]["gia"] * result[i]["soLuong"];
                            $(' <tr> ' +
                                ' <td>' + i + '</td> ' +
                                ' <td>' + result[i]["tenDoAn"] + '</td> ' +
                                ' <td>' + result[i]["thoiGianDat"] + '</td> ' +
                                ' <td>' + result[i]["soLuong"] + '</td> ' +
                                ' <td>' + result[i]["gia"] + '</td> ' +
                                ' <td>' + result[i]["gia"] * result[i]["soLuong"] + '</td> ' +
                                ' </tr> ').insertAfter(body_table_food_tabthongtin_viewphongpopup_red.lastChild);
                            $(' <tr> ' +
                                ' <td>' + i + '</td> ' +
                                ' <td>' + result[i]["tenDoAn"] + '</td> ' +
                                ' <td>' + result[i]["thoiGianDat"] + '</td> ' +
                                ' <td>' + result[i]["soLuong"] + '</td> ' +
                                ' <td>' + result[i]["gia"] + '</td> ' +
                                ' <td>' + result[i]["gia"] * result[i]["soLuong"] + '</td> ' +
                                ' </tr> ').insertAfter(body_table_food_tabdoan_viewphongpopup_red.lastChild);
                        }
                        viewphongpopup_red.querySelector(".part_info_view_room_window_red .food_order_table_red #sum_price_food_order_red").innerHTML = "Tổng tiền (VNĐ): " + tongtien + " VNĐ";
                        viewphongpopup_red.querySelector(".part_addfood_view_room_window_red .food_order_table_red #sum_price_food_order_red").innerHTML = "Tổng tiền (VNĐ): " + tongtien + " VNĐ";
                    }
                    else {
                        viewphongpopup_red.querySelector(".part_info_view_room_window_red .food_order_table_red #sum_price_food_order_red").innerHTML = "Tổng tiền (VNĐ): 0 VNĐ";
                        viewphongpopup_red.querySelector(".part_addfood_view_room_window_red .food_order_table_red #sum_price_food_order_red").innerHTML = "Tổng tiền (VNĐ): 0 VNĐ";
                    }
                    viewphongpopup_red.setAttribute("maphong", maphong);
                    viewphongpopup_red.setAttribute("iddatphong", result[0]["idDatPhong"]);
                    viewphongpopup_red.setAttribute("ngaydeno", result[0]["ngayDenO"]);
                    viewphongpopup_red.classList.add('show');
                    chon_tab_thongtin_view_room_window_red();
                }
            }
        }
        xhr.send();
    }

    function Load_Data_For_Available_Room_To_Order(e) {
        let maphong = e.target.getAttribute('maphong');
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/GetInfoBookToOrder?maphong=" + maphong;
        xhr.open("POST", url, true);
        xhr.timeout = 50000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = this.responseText;
                result = JSON.parse(result);
                if (result.length > 0) {
                    let CheckIn_Time = getToDayTime();
                    nhanphongpopup_blue.querySelector("#checkin_data_thongtindatphong_receive_room_window_blue_id").value = CheckIn_Time;
                    nhanphongpopup_blue.querySelector(".header_name_receive_room_window_blue span").innerHTML = result[0]["soPhong"];
                    nhanphongpopup_blue.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_blue_id").value = "";
                    nhanphongpopup_blue.querySelector("#tenkhachchu_data_thongtindatphong_receive_room_window_blue_id").value = "";
                    nhanphongpopup_blue.querySelector("#loaiphong_data_thongtinphong_receive_room_window_blue_id").value = result[0]["tenLoaiPhong"];
                    nhanphongpopup_blue.querySelector("#songuoio_data_thongtinphong_receive_room_window_blue_id").value = result[0]["soNguoiO"];
                    nhanphongpopup_blue.querySelector("#giatien_data_thongtinphong_receive_room_window_blue_id").value = result[0]["giaTien"];
                    nhanphongpopup_blue.querySelector("#tang_data_thongtinphong_receive_room_window_blue_id").value = result[0]["tang"];
                    nhanphongpopup_blue.querySelector("#sogiuong_data_thongtinphong_receive_room_window_blue_id").value = result[0]["soGiuong"];
                    nhanphongpopup_blue.querySelector("#idkhachdat_data_thongtindatphong_receive_room_window_blue_id").value = "";
                    nhanphongpopup_blue.querySelector("#thoigiandat_data_thongtindatphong_receive_room_window_blue_id").value = CheckIn_Time;
                    nhanphongpopup_blue.querySelector("#iddatphong_data_thongtindatphong_receive_room_window_blue_id").value = getIDDatPhong_Ex(result[0]["idChiNhanh"]);
                    nhanphongpopup_blue.querySelector("#ngaydeno_data_thongtindatphong_receive_room_window_blue_id").value = getToDay();
                    nhanphongpopup_blue.querySelector("#ngayroidi_data_thongtindatphong_receive_room_window_blue_id").value = getTomorrow();
                    nhanphongpopup_blue.querySelector("#ngayroidi_data_thongtindatphong_receive_room_window_blue_id").min = getTomorrow();
                    if (result[0]["ngayRoiDiMax"] != "vohan")
                        nhanphongpopup_blue.querySelector("#ngayroidi_data_thongtindatphong_receive_room_window_blue_id").max = result[0]["ngayRoiDiMax"];
                    else nhanphongpopup_blue.querySelector("#ngayroidi_data_thongtindatphong_receive_room_window_blue_id").removeAttribute("max");
                    nhanphongpopup_blue.setAttribute("maphong", maphong);
                    nhanphongpopup_blue.setAttribute("ngaydeno", getToDay());
                    nhanphongpopup_blue.setAttribute("chinhanh", result[0]["idChiNhanh"]);
                    nhanphongpopup_blue.classList.add('show');
                    chon_tab_thongtin_receive_room_window_blue();
                    nhanphongpopup_blue.querySelector(".part_info_receive_room_window_blue .food_order_table_blue #sum_price_food_order_blue").innerHTML = "Tổng tiền (VNĐ): 0 VNĐ";
                    nhanphongpopup_blue.querySelector(".part_addfood_receive_room_window_blue .food_order_table_blue #sum_price_food_order_blue").innerHTML = "Tổng tiền (VNĐ): 0 VNĐ";
                }
            }
        }
        xhr.send();
    }

    function Add_Event_For_Data_SDP() {
        var list_room_sdp = sdp_main_working_window.querySelectorAll(".room_in_list");
        list_room_sdp.forEach(function (room) {
            room.addEventListener("click", (e) => {
                if (e.target.classList.contains("booked_room")) {
                    bangdoan_to_be_ordered_green.innerHTML = ' ';
                    data_thongtinkhacho_field_receive_room_window_green.innerHTML = ' ';
                    body_table_food_tabthongtin_nhanphongpopup_green.innerHTML = ' ';
                    body_table_food_tabdoan_nhanphongpopup_green.innerHTML = ' ';
                    Load_Data_For_Booked_Room(e);
                    closenhanphongpopup_green.onclick = function () {
                        nhanphongpopup_green.classList.remove('show');
                    };
                    cancelnhanphongpopup_green.onclick = function () {
                        nhanphongpopup_green.classList.remove('show');
                    };
                    receivenhanphongpopup_green.onclick = function () {
                        CheckIn_For_Booked_Room(e);
                    }
                    option_tab_thongtin_receive_room_green.onclick = chon_tab_thongtin_receive_room_window_green;
                    option_tab_doan_receive_room_green.onclick = chon_tab_doan_receive_room_window_green;
                    btn_cancel_doan_receive_room_green.onclick = function () {
                        bangdoan_to_be_ordered_green.innerHTML = ' ';
                    }
                    btn_save_doan_receive_room_green.onclick = chon_tab_thongtin_receive_room_window_green;
                    searchkhachhang_receive_room_green.onclick = () => {
                        let idkhachhang = nhanphongpopup_green.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_green_id").value;
                        Query_Customer_For_Booked_Room(idkhachhang);
                        closethongtinkhachhangpopup.onclick = function () {
                            thongtinkhachhangpopup.classList.remove('show');
                        };
                        cancelthongtinkhachhangpopup.onclick = function () {
                            thongtinkhachhangpopup.classList.remove('show');
                        };
                        savethongtinkhachhangpopup.onclick = function () {
                            Save_Customer_Info_For_Booked_Room("receive_room_green");
                        };
                        createthongtinkhachhangpopup.onclick = function () {
                            Create_Customer_Info_For_Booked_Room("receive_room_green");
                        };
                    };
                }
                else if (e.target.classList.contains("occupied_room")) {
                    bangdoan_to_be_ordered_red.innerHTML = ' ';
                    data_thongtinkhacho_field_view_room_window_red.innerHTML = ' ';
                    body_table_food_tabthongtin_viewphongpopup_red.innerHTML = ' ';
                    body_table_food_tabdoan_viewphongpopup_red.innerHTML = ' ';
                    Load_Data_For_Occupied_Room(e);
                    closeviewphongpopup_red.onclick = function () {
                        viewphongpopup_red.classList.remove('show');
                    };
                    cancelviewphongpopup_red.onclick = function () {
                        viewphongpopup_red.classList.remove('show');
                    };
                    saveviewphongpopup_red.onclick = function () {
                        Update_Info_Service_For_Occupied_Room(e);
                    }
                    option_tab_thongtin_view_room_red.onclick = chon_tab_thongtin_view_room_window_red;
                    option_tab_doan_view_room_red.onclick = chon_tab_doan_view_room_window_red;
                    btn_cancel_doan_view_room_red.onclick = function () {
                        bangdoan_to_be_ordered_red.innerHTML = ' ';
                    };
                    btn_save_doan_view_room_red.onclick = chon_tab_thongtin_view_room_window_red;
                }
                else if (e.target.classList.contains("fixed_room")) {
                    var readynotificationpopup_black = document.getElementById("notification_window_black_container_id");
                    var confirmreadynotificationpopup_black = readynotificationpopup_black.querySelector("#btn_ready_notification_window_black");
                    var closereadynotificationpopup_black = readynotificationpopup_black.querySelector("#header_close_notification_window_black_id");
                    var cancelreadynotificationpopup_black = readynotificationpopup_black.querySelector("#btn_cancel_notification_window_black");
                    readynotificationpopup_black.classList.add('show');
                    confirmreadynotificationpopup_black.onclick = function () {
                        readynotificationpopup_black.classList.remove('show');
                        Update_Ready_Status_Room(e);
                    }
                    closereadynotificationpopup_black.onclick = function () {
                        readynotificationpopup_black.classList.remove('show');
                    };
                    cancelreadynotificationpopup_black.onclick = function () {
                        readynotificationpopup_black.classList.remove('show');
                    };
                }
                else if (e.target.classList.contains("returned_room")) {
                    var readynotificationpopup_gray = document.getElementById("notification_window_gray_container_id");
                    var closereadynotificationpopup_gray = readynotificationpopup_gray.querySelector("#header_close_notification_window_gray_id");
                    var cancelreadynotificationpopup_gray = readynotificationpopup_gray.querySelector("#btn_cancel_notification_window_gray");
                    var confirmreadynotificationpopup_gray = readynotificationpopup_gray.querySelector("#btn_ready_notification_window_gray");

                    readynotificationpopup_gray.classList.add('show');
                    confirmreadynotificationpopup_gray.onclick = function () {
                        readynotificationpopup_gray.classList.remove('show');
                        Update_Ready_Status_Room(e);
                    };
                    closereadynotificationpopup_gray.onclick = function () {
                        readynotificationpopup_gray.classList.remove('show');
                    };
                    cancelreadynotificationpopup_gray.onclick = function () {
                        readynotificationpopup_gray.classList.remove('show');
                    };
                }
                else if (e.target.classList.contains("available_room")) {
                    var funcnotificationpopup_blue = document.getElementById("notification_window_blue_container_id");
                    var closefuncnotificationpopup_blue = funcnotificationpopup_blue.querySelector("#header_close_notification_window_blue_id");
                    var btn_fix_room_funcnotificationpopup_blue = funcnotificationpopup_blue.querySelector("#btn_fix_room_notification_window_blue");
                    var btn_order_room_funcnotificationpopup_blue = funcnotificationpopup_blue.querySelector("#btn_order_room_notification_window_blue");
                    funcnotificationpopup_blue.classList.add('show');
                    btn_fix_room_funcnotificationpopup_blue.onclick = function () {
                        funcnotificationpopup_blue.classList.remove('show');
                        Update_Fixed_Status_Room(e);
                    };
                    closefuncnotificationpopup_blue.onclick = function () {
                        funcnotificationpopup_blue.classList.remove('show');
                    };
                    btn_order_room_funcnotificationpopup_blue.onclick = function () {
                        funcnotificationpopup_blue.classList.remove('show');
                        bangdoan_to_be_ordered_blue.innerHTML = ' ';
                        data_thongtinkhacho_field_receive_room_window_blue.innerHTML = ' ';
                        body_table_food_tabthongtin_nhanphongpopup_blue.innerHTML = ' ';
                        body_table_food_tabdoan_nhanphongpopup_blue.innerHTML = ' ';
                        Load_Data_For_Available_Room_To_Order(e);
                        closenhanphongpopup_blue.onclick = function () {
                            nhanphongpopup_blue.classList.remove('show');
                        };
                        cancelnhanphongpopup_blue.onclick = function () {
                            nhanphongpopup_blue.classList.remove('show');
                        };
                        receivenhanphongpopup_blue.onclick = function () {
                            Book_and_CheckIn_Room_Now(e);
                        }
                        option_tab_thongtin_receive_room_blue.onclick = chon_tab_thongtin_receive_room_window_blue;
                        option_tab_doan_receive_room_blue.onclick = chon_tab_doan_receive_room_window_blue;
                        btn_cancel_doan_receive_room_blue.onclick = function () {
                            bangdoan_to_be_ordered_blue.innerHTML = ' ';
                        }
                        btn_save_doan_receive_room_blue.onclick = chon_tab_thongtin_receive_room_window_blue;
                        searchkhachhang_receive_room_blue.onclick = () => {
                            let idkhachhang = nhanphongpopup_blue.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_blue_id").value;
                            Query_Customer_For_Booked_Room(idkhachhang);
                            closethongtinkhachhangpopup.onclick = function () {
                                thongtinkhachhangpopup.classList.remove('show');
                            };
                            cancelthongtinkhachhangpopup.onclick = function () {
                                thongtinkhachhangpopup.classList.remove('show');
                            };
                            savethongtinkhachhangpopup.onclick = function () {
                                Save_Customer_Info_For_Booked_Room("receive_room_blue");
                            };
                            createthongtinkhachhangpopup.onclick = function () {
                                Create_Customer_Info_For_Booked_Room("receive_room_blue");
                            };
                        };
                    }
                }
            })
        })
    }

    function Load_Data_For_SDP() {
        let bracnch_name = sdp_main_working_window.querySelector(".branch_name").getAttribute("value");
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/GetPhongForSDP?branch=" + bracnch_name;
        xhr.open("POST", url, true);
        xhr.timeout = 50000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = '';
                const data = JSON.parse(this.response);
                let cur_floor = data[0]["tang"];
                result = '<div class="floor_container">' +
                    '<div class="floor_name">Tầng <span class="order_floor">' + cur_floor + '</span></div>' +
                    '<div class="list_room_of_floor">';
                for (let i = 0; i < data.length; i++) {
                    if (data[i]["tang"] != cur_floor) {
                        cur_floor = data[i]["tang"];
                        result = result + '</div> </div>' + '<div class="floor_container">' +
                            '<div class="floor_name">Tầng <span class="order_floor">' + cur_floor + '</span></div>' +
                            '<div class="list_room_of_floor">';
                    }
                    if (data[i]["tang"] == cur_floor) {
                        if (data[i]["trangThaiPhong"] == 0) {
                            result = result + '<div class="room_in_list available_room" maphong = ' + data[i]["idPhong"] + '>' +
                                '<div class="room_info_status_field">' +
                                '<div class="room_name_in_list">Phòng ' + data[i]["soPhong"] + '</div>' +
                                '<div class="room_status_in_list">Trống</div>' +
                                '</div>' +
                                '<div class="room_status_icon">' +
                                '<img class="status_icon">' +
                                '<p>Phòng trống</p>' +
                                '</div>' +
                                '<div class="room_detail_field">' +
                                '<div class="room_type_in_list">' + data[i]["idLoaiPhong"] + ' - ' + data[i]["soNguoiO"] + ' người</div>' +
                                '<div class="room_number_people_in_list"><i class="fa fa-calendar"></i> N day</div>' +
                                '</div>' +
                                '</div>';
                        }
                        else if (data[i]["trangThaiPhong"] == 2) {
                            result = result + '<div class="room_in_list fixed_room" maphong = ' + data[i]["idPhong"] + '>' +
                                '<div class="room_info_status_field">' +
                                '<div class="room_name_in_list">Phòng ' + data[i]["soPhong"] + '</div>' +
                                '<div class="room_status_in_list">Sửa chữa</div>' +
                                '</div>' +
                                '<div class="room_status_icon">' +
                                '<img class="status_icon">' +
                                '<p>Sửa chữa</p>' +
                                '</div>' +
                                '<div class="room_detail_field">' +
                                '<div class="room_type_in_list">' + data[i]["idLoaiPhong"] + ' - ' + data[i]["soNguoiO"] + ' người</div>' +
                                '<div class="room_number_people_in_list"><i class="fa fa-calendar"></i> 0 day</div>' +
                                '</div>' +
                                '</div>';
                        }
                        else if (data[i]["trangThaiPhong"] == 1) {
                            let ndo = new Date(data[i]["ngayDenO"]);
                            let nrd = new Date(data[i]["ngayRoiDi"]);
                            let date = new Date(Date.now());
                            ndo.setHours(0, 0, 0, 0);
                            nrd.setHours(0, 0, 0, 0);
                            date.setHours(0, 0, 0, 0);
                            if (ndo.getTime() <= date.getTime() && nrd.getTime() >= date.getTime() && data[i]["checkIn"] != '') {
                                let soNgay = getDifferenceInDays(date, nrd);
                                result = result + '<div class="room_in_list occupied_room" maphong = ' + data[i]["idPhong"] + '>' +
                                    '<div class="room_info_status_field">' +
                                    '<div class="room_name_in_list">Phòng ' + data[i]["soPhong"] + '</div>' +
                                    '<div class="room_status_in_list">Đã nhận</div>' +
                                    '</div>' +
                                    '<div class="room_status_icon">' +
                                    '<img class="status_icon">' +
                                    '<p>' + data[i]["tenKH"] + '</p>' +
                                    '</div>' +
                                    '<div class="room_detail_field">' +
                                    '<div class="room_type_in_list">' + data[i]["idLoaiPhong"] + ' - ' + data[i]["soNguoiO"] + ' người</div>' +
                                    '<div class="room_number_people_in_list"><i class="fa fa-calendar"></i> ' + soNgay + ' day</div>' +
                                    '</div>' +
                                    '</div>';
                            }
                            else if (ndo.getTime() > date.getTime() && data[i]["checkIn"] == '')
                            {
                                let soNgay = getDifferenceInDays(date, ndo);
                                result = result + '<div class="room_in_list available_room" maphong = ' + data[i]["idPhong"] + '>' +
                                    '<div class="room_info_status_field">' +
                                    '<div class="room_name_in_list">Phòng ' + data[i]["soPhong"] + '</div>' +
                                    '<div class="room_status_in_list">Trống</div>' +
                                    '</div>' +
                                    '<div class="room_status_icon">' +
                                    '<img class="status_icon">' +
                                    '<p>Phòng trống</p>' +
                                    '</div>' +
                                    '<div class="room_detail_field">' +
                                    '<div class="room_type_in_list">' + data[i]["idLoaiPhong"] + ' - ' + data[i]["soNguoiO"] + ' người</div>' +
                                    '<div class="room_number_people_in_list"><i class="fa fa-calendar"></i> ' + soNgay + ' day</div>' +
                                    '</div>' +
                                    '</div>';
                            }
                            else if (ndo.getTime() <= date.getTime() && nrd.getTime() >= date.getTime() && data[i]["checkIn"] == '') {
                                let soNgay = getDifferenceInDays(date.getTime(), nrd.getTime());
                                result = result + '<div class="room_in_list booked_room" maphong = ' + data[i]["idPhong"] + '>' +
                                    '<div class="room_info_status_field">' +
                                    '<div class="room_name_in_list">Phòng ' + data[i]["soPhong"] + '</div>' +
                                    '<div class="room_status_in_list">Đã đặt</div>' +
                                    '</div>' +
                                    '<div class="room_status_icon">' +
                                    '<img class="status_icon">' +
                                    '<p>' + data[i]["tenKH"] + '</p>' +
                                    '</div>' +
                                    '<div class="room_detail_field">' +
                                    '<div class="room_type_in_list">' + data[i]["idLoaiPhong"] + ' - ' + data[i]["soNguoiO"] + ' người</div>' +
                                    '<div class="room_number_people_in_list"><i class="fa fa-calendar"></i> ' + soNgay + ' day</div>' +
                                    '</div>' +
                                    '</div>';
                            }
                        }
                        else if (data[i]["trangThaiPhong"] == 3) {
                            result = result + '<div class="room_in_list returned_room" maphong = ' + data[i]["idPhong"] + '>' +
                                '<div class="room_info_status_field">' +
                                '<div class="room_name_in_list">Phòng ' + data[i]["soPhong"] + '</div>' +
                                '<div class="room_status_in_list">Đã trả</div>' +
                                '</div>' +
                                '<div class="room_status_icon">' +
                                '<img class="status_icon">' +
                                '<p>Dọn dẹp</p>' +
                                '</div>' +
                                '<div class="room_detail_field">' +
                                '<div class="room_type_in_list">' + data[i]["idLoaiPhong"] + ' - ' + data[i]["soNguoiO"] + ' người</div>' +
                                '<div class="room_number_people_in_list"><i class="fa fa-calendar"></i> 0 day</div>' +
                                '</div>' +
                                '</div>';
                        }
                    }
                }
                result = result + '</div> </div>';
                sdp_main_working_window.querySelector(".data_window_sodophong").innerHTML = result;
                Add_Event_For_Data_SDP();
            }
        }
        xhr.send();
    }

    // Sự kiện trong màn hình làm việc của Sơ đồ phòng - begin
    var sdp_main_working_window = document.getElementById("sdp_main_working_window_id");
    var sdp_selection_menu = document.getElementById("sdp_selection_name_icon_id");
    sdp_selection_menu.onclick = function () {
        list_option_menu_burger.forEach(function (b) {
            if (b !== sdp_main_working_window && b.classList.contains('show')) {
                b.classList.remove('show');
            }
        })
        if (!sdp_main_working_window.classList.contains('show')) {
            sdp_main_working_window.classList.add('show');
        }
        Load_Data_For_SDP();
    }
    var filter_book_hot_sdp = sdp_main_working_window.querySelector("#filter_book_hot_sdp_main_working_window_id");
    filter_book_hot_sdp.querySelector("#thoigiano_filter_book_hot_sdp_main_working_window_id").value = getToDay();
    filter_book_hot_sdp.querySelector("#thoigianroidi_filter_book_hot_sdp_main_working_window_id").min = getTomorrow();
    filter_book_hot_sdp.querySelector("#thoigianroidi_filter_book_hot_sdp_main_working_window_id").value = getTomorrow();
    function Load_Data_For_SDP_By_Filter(data) {
        let result = '';
        if (data.length > 0) {
            let cur_floor = data[0]["tang"];
            result = '<div class="floor_container">' +
                '<div class="floor_name">Tầng <span class="order_floor">' + cur_floor + '</span></div>' +
                '<div class="list_room_of_floor">';
            for (let i = 0; i < data.length; i++) {
                if (data[i]["tang"] != cur_floor) {
                    cur_floor = data[i]["tang"];
                    result = result + '</div> </div>' + '<div class="floor_container">' +
                        '<div class="floor_name">Tầng <span class="order_floor">' + cur_floor + '</span></div>' +
                        '<div class="list_room_of_floor">';
                }
                if (data[i]["tang"] == cur_floor) {
                    if (data[i]["trangThaiPhong"] == 0) {
                        result = result + '<div class="room_in_list available_room" maphong = ' + data[i]["idPhong"] + '>' +
                            '<div class="room_info_status_field">' +
                            '<div class="room_name_in_list">Phòng ' + data[i]["soPhong"] + '</div>' +
                            '<div class="room_status_in_list">Trống</div>' +
                            '</div>' +
                            '<div class="room_status_icon">' +
                            '<img class="status_icon">' +
                            '<p>Phòng trống</p>' +
                            '</div>' +
                            '<div class="room_detail_field">' +
                            '<div class="room_type_in_list">' + data[i]["idLoaiPhong"] + ' - ' + data[i]["soNguoiO"] + ' người</div>' +
                            '<div class="room_number_people_in_list"><i class="fa fa-calendar"></i> N day</div>' +
                            '</div>' +
                            '</div>';
                    }
                    else if (data[i]["trangThaiPhong"] == 1) {
                        let ndo = new Date(data[i]["ngayDenO"]);
                        let date = new Date(Date.now());
                        date.setHours(0, 0, 0, 0);
                        let soNgay = getDifferenceInDays(date, ndo);
                        result = result + '<div class="room_in_list available_room" maphong = ' + data[i]["idPhong"] + '>' +
                            '<div class="room_info_status_field">' +
                            '<div class="room_name_in_list">Phòng ' + data[i]["soPhong"] + '</div>' +
                            '<div class="room_status_in_list">Trống</div>' +
                            '</div>' +
                            '<div class="room_status_icon">' +
                            '<img class="status_icon">' +
                            '<p>Phòng trống</p>' +
                            '</div>' +
                            '<div class="room_detail_field">' +
                            '<div class="room_type_in_list">' + data[i]["idLoaiPhong"] + ' - ' + data[i]["soNguoiO"] + ' người</div>' +
                            '<div class="room_number_people_in_list"><i class="fa fa-calendar"></i> ' + soNgay + ' day</div>' +
                            '</div>' +
                            '</div>';
                    }
                }
            }
            result = result + '</div> </div>';
            sdp_main_working_window.querySelector(".data_window_sodophong").innerHTML = result;
            Add_Event_For_Data_SDP();
        }
        else {
            result = "<div>Không tìm thấy phòng phù hợp!</div>";
            sdp_main_working_window.querySelector(".data_window_sodophong").innerHTML = result;
        }
    }
    $(filter_book_hot_sdp).submit(function (e) {
        e.preventDefault(); // prevent actual form submit
        var form = $(this);
        var url = form.attr('action'); //get submit url [replace url here if desired]
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(), // serializes form input
            success: function (data) {
                Load_Data_For_SDP_By_Filter(data);
                $('#dropdown_content_filter_book_hot_sdp_main_working_window_id').slideToggle(200);
            }
        });
    });
    // Sự kiện trong màn hình làm việc của Sơ đồ phòng - end

    function CheckIn_For_CTDP(ctdp) {
        let checkin_Time = nhanphongpopup_green.querySelector("#checkin_data_thongtindatphong_receive_room_window_green_id").value;
        let ngayRoiDi = nhanphongpopup_green.querySelector("#ngayroidi_data_thongtindatphong_receive_room_window_green_id").value;
        let ngayDenO = nhanphongpopup_green.querySelector("#ngaydeno_data_thongtindatphong_receive_room_window_green_id").value;
        let list_info_khachocung = nhanphongpopup_green.querySelectorAll(".data_thongtinkhacho_field_receive_room_window_green .valid_khacho_info_data_green input");
        let info = "";
        for (let i = 0; i < list_info_khachocung.length; i = i + 2) {
            info = info + list_info_khachocung[i].value + " - ";
            info = info + list_info_khachocung[i + 1].value + "\n";
        }
        let songuoio_info = list_info_khachocung.length / 2;
        let idkhachhangchu = nhanphongpopup_green.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_green_id").value;
        let idkhachhangdat = nhanphongpopup_green.querySelector("#idkhachdat_data_thongtindatphong_receive_room_window_green_id").value;
        let maphong = nhanphongpopup_green.getAttribute("maphong");
        let madatphong = nhanphongpopup_green.getAttribute("iddatphong");
        if (idkhachhangchu != "") {
            let form_cs = new FormData();
            form_cs.append("checkin_Time", checkin_Time);
            form_cs.append("ngayRoiDi", ngayRoiDi);
            form_cs.append("ngayDenO", ngayDenO);
            form_cs.append("idkhachhangchu", idkhachhangchu);
            form_cs.append("thongtin_nguoio", info);
            form_cs.append("idkhachhangdat", idkhachhangdat);
            form_cs.append("maphong", maphong);
            form_cs.append("madatphong", madatphong);
            form_cs.append("songuoio_info", songuoio_info);
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/CheckIn_For_Booked_Room";
            xhr.open("POST", url, true);
            xhr.timeout = 50000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let status_CheckIn_NhanPhong_DelLunar = this.responseText;
                    if (status_CheckIn_NhanPhong_DelLunar != "Fail") {
                        nhanphongpopup_green.classList.remove('show');
                        ctdp.remove();
                        Add_Event_For_Data_DSDatPhong();
                        Order_Food_For_Room("receive_room_green");
                    }
                }
            }
            xhr.send(form_cs);
        }
    }

    function Load_Data_For_CTDP(ctdp) {
        let madatphong = ctdp.getAttribute("madatphong");
        let maphong = ctdp.getAttribute("maphong");
        let ngaydeno = ctdp.getAttribute("ngaydeno");
        let form_cs = new FormData();
        form_cs.append("maphong", maphong);
        form_cs.append("madatphong", madatphong);
        form_cs.append("ngaydeno", ngaydeno);
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/Load_Data_For_CTDP";
        xhr.open("POST", url, true);
        xhr.timeout = 50000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = this.responseText;
                result = JSON.parse(result);
                if (result.length > 0) {
                    let CheckIn_Time = getToDayTime();
                    nhanphongpopup_green.querySelector("#checkin_data_thongtindatphong_receive_room_window_green_id").value = CheckIn_Time;
                    nhanphongpopup_green.querySelector(".header_name_receive_room_window_green span").innerHTML = result[0]["soPhong"];
                    nhanphongpopup_green.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_green_id").value = "";
                    nhanphongpopup_green.querySelector("#tenkhachchu_data_thongtindatphong_receive_room_window_green_id").value = "";
                    nhanphongpopup_green.querySelector("#loaiphong_data_thongtinphong_receive_room_window_green_id").value = result[0]["tenLoaiPhong"];
                    nhanphongpopup_green.querySelector("#songuoio_data_thongtinphong_receive_room_window_green_id").value = result[0]["soNguoiO"];
                    nhanphongpopup_green.querySelector("#giatien_data_thongtinphong_receive_room_window_green_id").value = result[0]["giaTien"];
                    nhanphongpopup_green.querySelector("#tang_data_thongtinphong_receive_room_window_green_id").value = result[0]["tang"];
                    nhanphongpopup_green.querySelector("#sogiuong_data_thongtinphong_receive_room_window_green_id").value = result[0]["soGiuong"];
                    nhanphongpopup_green.querySelector("#iddatphong_data_thongtindatphong_receive_room_window_green_id").value = result[0]["idDatPhong"];
                    nhanphongpopup_green.querySelector("#idkhachdat_data_thongtindatphong_receive_room_window_green_id").value = result[0]["idKhachDat"];
                    nhanphongpopup_green.querySelector("#thoigiandat_data_thongtindatphong_receive_room_window_green_id").value = result[0]["thoiGianDat"];
                    nhanphongpopup_green.querySelector("#ngaydeno_data_thongtindatphong_receive_room_window_green_id").value = result[0]["ngayDenO"];
                    nhanphongpopup_green.querySelector("#ngayroidi_data_thongtindatphong_receive_room_window_green_id").value = result[0]["ngayRoiDi"];
                    nhanphongpopup_green.querySelector("#ngayroidi_data_thongtindatphong_receive_room_window_green_id").min = result[0]["ngayRoiDi"];
                    if (result[0]["ngayRoiDiMax"] != "vohan")
                        nhanphongpopup_green.querySelector("#ngayroidi_data_thongtindatphong_receive_room_window_green_id").max = result[0]["ngayRoiDiMax"];
                    else nhanphongpopup_green.querySelector("#ngayroidi_data_thongtindatphong_receive_room_window_green_id").removeAttribute("max");
                    if (result.length > 1) {
                        let tongtien = 0;
                        for (let i = 1; i < result.length; i++) {
                            tongtien = tongtien + result[i]["gia"] * result[i]["soLuong"];
                            $(' <tr> ' +
                                ' <td>' + i + '</td> ' +
                                ' <td>' + result[i]["tenDoAn"] + '</td> ' +
                                ' <td>' + result[i]["thoiGianDat"] + '</td> ' +
                                ' <td>' + result[i]["soLuong"] + '</td> ' +
                                ' <td>' + result[i]["gia"] + '</td> ' +
                                ' <td>' + result[i]["gia"] * result[i]["soLuong"] + '</td> ' +
                                ' </tr> ').insertAfter(body_table_food_tabthongtin_nhanphongpopup_green.lastChild);
                            $(' <tr> ' +
                                ' <td>' + i + '</td> ' +
                                ' <td>' + result[i]["tenDoAn"] + '</td> ' +
                                ' <td>' + result[i]["thoiGianDat"] + '</td> ' +
                                ' <td>' + result[i]["soLuong"] + '</td> ' +
                                ' <td>' + result[i]["gia"] + '</td> ' +
                                ' <td>' + result[i]["gia"] * result[i]["soLuong"] + '</td> ' +
                                ' </tr> ').insertAfter(body_table_food_tabdoan_nhanphongpopup_green.lastChild);
                        }
                        nhanphongpopup_green.querySelector(".part_info_receive_room_window_green .food_order_table_green #sum_price_food_order_green").innerHTML = "Tổng tiền (VNĐ): " + tongtien + " VNĐ";
                        nhanphongpopup_green.querySelector(".part_addfood_receive_room_window_green .food_order_table_green #sum_price_food_order_green").innerHTML = "Tổng tiền (VNĐ): " + tongtien + " VNĐ";
                    }
                    else {
                        nhanphongpopup_green.querySelector(".part_info_receive_room_window_green .food_order_table_green #sum_price_food_order_green").innerHTML = "Tổng tiền (VNĐ): 0 VNĐ";
                        nhanphongpopup_green.querySelector(".part_addfood_receive_room_window_green .food_order_table_green #sum_price_food_order_green").innerHTML = "Tổng tiền (VNĐ): 0 VNĐ";
                    }
                    nhanphongpopup_green.setAttribute("maphong", maphong);
                    nhanphongpopup_green.setAttribute("iddatphong", result[0]["idDatPhong"]);
                    nhanphongpopup_green.setAttribute("ngaydeno", result[0]["ngayDenO"]);
                    nhanphongpopup_green.classList.add('show');
                    chon_tab_thongtin_receive_room_window_green();
                }
            }
        }
        xhr.send(form_cs);
    }

    function Add_Event_For_Data_DSDatPhong() {
        var list_chitietdatphong_dsdatphong_main_working_window = dsdatphong_main_working_window.querySelectorAll(".data_window_dsdatphong .list_book_room_table_data_window_dsdatphong tbody tr");
        list_chitietdatphong_dsdatphong_main_working_window.forEach(function (ctdp) {
            let btn_nhanphong = ctdp.querySelector(".nhanphong_btn_list_book_room_table_data_window_dsdatphong .btn_nhanphong_list_book_room_table_data_window_dsdatphong");
            btn_nhanphong.onclick = function (e) {
                bangdoan_to_be_ordered_green.innerHTML = ' ';
                data_thongtinkhacho_field_receive_room_window_green.innerHTML = ' ';
                body_table_food_tabthongtin_nhanphongpopup_green.innerHTML = ' ';
                body_table_food_tabdoan_nhanphongpopup_green.innerHTML = ' ';
                Load_Data_For_CTDP(ctdp);

                closenhanphongpopup_green.onclick = function () {
                    nhanphongpopup_green.classList.remove('show');
                };
                cancelnhanphongpopup_green.onclick = function () {
                    nhanphongpopup_green.classList.remove('show');
                };
                receivenhanphongpopup_green.onclick = function () {
                    CheckIn_For_CTDP(ctdp);
                }
                option_tab_thongtin_receive_room_green.onclick = chon_tab_thongtin_receive_room_window_green;
                option_tab_doan_receive_room_green.onclick = chon_tab_doan_receive_room_window_green;
                btn_cancel_doan_receive_room_green.onclick = function () {
                    bangdoan_to_be_ordered_green.innerHTML = ' ';
                }
                btn_save_doan_receive_room_green.onclick = chon_tab_thongtin_receive_room_window_green;
                searchkhachhang_receive_room_green.onclick = () => {
                    let idkhachhang = nhanphongpopup_green.querySelector("#idkhachchu_data_thongtindatphong_receive_room_window_green_id").value;
                    Query_Customer_For_Booked_Room(idkhachhang);
                    closethongtinkhachhangpopup.onclick = function () {
                        thongtinkhachhangpopup.classList.remove('show');
                    };
                    cancelthongtinkhachhangpopup.onclick = function () {
                        thongtinkhachhangpopup.classList.remove('show');
                    };
                    savethongtinkhachhangpopup.onclick = function () {
                        Save_Customer_Info_For_Booked_Room("receive_room_green");
                    };
                    createthongtinkhachhangpopup.onclick = function () {
                        Create_Customer_Info_For_Booked_Room("receive_room_green");
                    };
                };
            }
        });
    }

    function Load_Data_For_DSDatPhong() {
        let bracnch_name = dsdatphong_main_working_window.querySelector(".branch_name").getAttribute("value");
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/Load_Data_For_DSDatPhong?branch=" + bracnch_name;
        xhr.open("POST", url, true);
        xhr.timeout = 500000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = "";
                let data_dsdp = JSON.parse(this.response);
                if (data_dsdp.length > 0) {
                    for (let i = 0; i < data_dsdp.length; i++) {
                        let ndo = new Date(data_dsdp[i]["ngayDenO"]);
                        let ndo_show = formatDay(ndo);
                        let nrd = new Date(data_dsdp[i]["ngayRoiDi"]);
                        let nrd_show = formatDay(nrd);
                        let homnay = new Date(Date.now());
                        homnay.setHours(0, 0, 0, 0);
                        ndo.setHours(0, 0, 0, 0);
                        nrd.setHours(0, 0, 0, 0);
                        let idDatPhong = data_dsdp[i]["idDatPhong"];
                        if (ndo.getTime() <= homnay.getTime() && nrd.getTime() >= homnay.getTime()) {
                            result = result + '<tr madatphong = ' + idDatPhong + ' maphong = ' + data_dsdp[i]["idPhong"] + ' ngaydeno = ' + data_dsdp[i]["ngayDenO"] + '>' +
                                '<td class="madatphong_list_book_room_table_data_window_dsdatphong">' + idDatPhong.substring(0, idDatPhong.length - 3) + "_" + idDatPhong.substring(idDatPhong.length - 3, idDatPhong.length) + '</td>' +
                                '<td class="idphong_list_book_room_table_data_window_dsdatphong">' + data_dsdp[i]["idPhong"] + '</td>' +
                                '<td class="idkhachdat_list_book_room_table_data_window_dsdatphong">' + data_dsdp[i]["idKhachDat"] + '</td>' +
                                '<td class="tungay_list_book_room_table_data_window_dsdatphong">' + ndo_show + '</td>' +
                                '<td class="denngay_list_book_room_table_data_window_dsdatphong">' + nrd_show + '</td>' +
                                '<td class="tiencoc_list_book_room_table_data_window_dsdatphong">' + data_dsdp[i]["soTienDaThanhToan"] + '</td>' +
                                '<td class="nhanphong_btn_list_book_room_table_data_window_dsdatphong">' +
                                '<button class="btn_nhanphong_list_book_room_table_data_window_dsdatphong">' +
                                'Nhận phòng' +
                                '</button>' +
                                '</td>' +
                                '</tr>';
                        }
                        else if (ndo.getTime() > homnay.getTime() && nrd.getTime() > homnay.getTime()) {
                            result = result + '<tr>' +
                                '<td class="madatphong_list_book_room_table_data_window_dsdatphong">' + idDatPhong.substring(0, idDatPhong.length - 3) + "_" + idDatPhong.substring(idDatPhong.length - 3, idDatPhong.length) + '</td>' +
                                '<td class="idphong_list_book_room_table_data_window_dsdatphong">' + data_dsdp[i]["idPhong"] + '</td>' +
                                '<td class="idkhachdat_list_book_room_table_data_window_dsdatphong">' + data_dsdp[i]["idKhachDat"] + '</td>' +
                                '<td class="tungay_list_book_room_table_data_window_dsdatphong">' + ndo_show + '</td>' +
                                '<td class="denngay_list_book_room_table_data_window_dsdatphong">' + nrd_show + '</td>' +
                                '<td class="tiencoc_list_book_room_table_data_window_dsdatphong">' + data_dsdp[i]["soTienDaThanhToan"] + '</td>' +
                                '<td class="nhanphong_btn_list_book_room_table_data_window_dsdatphong">' +
                                '<button class="btn_nhanphong_list_book_room_table_data_window_dsdatphong disable_receive">' +
                                'Nhận phòng' +
                                '</button>' +
                                '</td>' +
                                '</tr>';
                        }
                    }
                    dsdatphong_main_working_window.querySelector(".data_window_dsdatphong .list_book_room_table_data_window_dsdatphong tbody").innerHTML = result;
                    Add_Event_For_Data_DSDatPhong();
                }
                else {
                    dsdatphong_main_working_window.querySelector(".data_window_dsdatphong .list_book_room_table_data_window_dsdatphong tbody").innerHTML = "<tr> <td colspan='7'>Không có đơn đặt phòng nào</tr>";
                }
            }
        }
        xhr.send();
    }

    
    // Sự kiện trong màn hình làm việc của Danh sách đặt phòng - begin
    var dsdatphong_main_working_window = document.getElementById("dsdatphong_main_working_window_id");
    var dsdatphong_selection_menu = document.getElementById("dsdatphong_selection_name_icon_id");
    dsdatphong_selection_menu.onclick = function () {
        list_option_menu_burger.forEach(function (b) {
            if (b !== dsdatphong_main_working_window && b.classList.contains('show')) {
                b.classList.remove('show');
            }
        })
        if (!dsdatphong_main_working_window.classList.contains('show')) {
            dsdatphong_main_working_window.classList.add('show');
        }
        Load_Data_For_DSDatPhong();
    }
    dsdatphong_main_working_window.querySelector("#btn_book_redirect_dsdatphong_main_working_window").onclick = function () {
        window.open("https://localhost:5001/DatPhong/ChooseBranch", '_blank').focus();
    }
    var filter_dsdatphong_info_dsdp = dsdatphong_main_working_window.querySelector("#filter_dsdatphong_info");
    filter_dsdatphong_info_dsdp.querySelector("#date_booking_room_filter_dsdatphong_info").value = getToDay();
    function Load_Data_For_DSDatPhong_By_Filter(data_dsdp) {
        let result = '';
        if (data_dsdp.length > 0) {
            for (let i = 0; i < data_dsdp.length; i++) {
                let ndo = new Date(data_dsdp[i]["ngayDenO"]);
                let ndo_show = formatDay(ndo);
                let nrd = new Date(data_dsdp[i]["ngayRoiDi"]);
                let nrd_show = formatDay(nrd);
                let homnay = new Date(Date.now());
                let idDatPhong = data_dsdp[i]["idDatPhong"];
                if (ndo.getTime() <= homnay.getTime() && nrd.getTime() >= homnay.getTime()) {
                    result = result + '<tr madatphong = ' + idDatPhong + ' maphong = ' + data_dsdp[i]["idPhong"] + ' ngaydeno = ' + data_dsdp[i]["ngayDenO"] + '>' +
                        '<td class="madatphong_list_book_room_table_data_window_dsdatphong">' + idDatPhong.substring(0, idDatPhong.length - 3) + "_" + idDatPhong.substring(idDatPhong.length - 3, idDatPhong.length) + '</td>' +
                        '<td class="idphong_list_book_room_table_data_window_dsdatphong">' + data_dsdp[i]["idPhong"] + '</td>' +
                        '<td class="idkhachdat_list_book_room_table_data_window_dsdatphong">' + data_dsdp[i]["idKhachDat"] + '</td>' +
                        '<td class="tungay_list_book_room_table_data_window_dsdatphong">' + ndo_show + '</td>' +
                        '<td class="denngay_list_book_room_table_data_window_dsdatphong">' + nrd_show + '</td>' +
                        '<td class="tiencoc_list_book_room_table_data_window_dsdatphong">' + data_dsdp[i]["soTienDaThanhToan"] + '</td>' +
                        '<td class="nhanphong_btn_list_book_room_table_data_window_dsdatphong">' +
                        '<button class="btn_nhanphong_list_book_room_table_data_window_dsdatphong">' +
                        'Nhận phòng' +
                        '</button>' +
                        '</td>' +
                        '</tr>';
                }
                else if (ndo.getTime() > homnay.getTime() && nrd.getTime() > homnay.getTime()) {
                    result = result + '<tr>' +
                        '<td class="madatphong_list_book_room_table_data_window_dsdatphong">' + idDatPhong.substring(0, idDatPhong.length - 3) + "_" + idDatPhong.substring(idDatPhong.length - 3, idDatPhong.length) + '</td>' +
                        '<td class="idphong_list_book_room_table_data_window_dsdatphong">' + data_dsdp[i]["idPhong"] + '</td>' +
                        '<td class="idkhachdat_list_book_room_table_data_window_dsdatphong">' + data_dsdp[i]["idKhachDat"] + '</td>' +
                        '<td class="tungay_list_book_room_table_data_window_dsdatphong">' + ndo_show + '</td>' +
                        '<td class="denngay_list_book_room_table_data_window_dsdatphong">' + nrd_show + '</td>' +
                        '<td class="tiencoc_list_book_room_table_data_window_dsdatphong">' + data_dsdp[i]["soTienDaThanhToan"] + '</td>' +
                        '<td class="nhanphong_btn_list_book_room_table_data_window_dsdatphong">' +
                        '<button class="btn_nhanphong_list_book_room_table_data_window_dsdatphong disable_receive">' +
                        'Nhận phòng' +
                        '</button>' +
                        '</td>' +
                        '</tr>';
                }
            }
            dsdatphong_main_working_window.querySelector(".data_window_dsdatphong .list_book_room_table_data_window_dsdatphong tbody").innerHTML = result;
            Add_Event_For_Data_DSDatPhong();
        }
        else {
            dsdatphong_main_working_window.querySelector(".data_window_dsdatphong .list_book_room_table_data_window_dsdatphong tbody").innerHTML = "<tr> <td colspan='7'>Không có đơn đặt phòng nào</tr>";
        }
    }
    $(filter_dsdatphong_info_dsdp).submit(function (e) {
        e.preventDefault(); // prevent actual form submit
        var form = $(this);
        var url = form.attr('action'); //get submit url [replace url here if desired]
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(), // serializes form input
            success: function (data) {
                Load_Data_For_DSDatPhong_By_Filter(data);
            }
        });
    });
    // Sự kiện trong màn hình làm việc của Danh sách đặt phòng - end

    function print_export_receipt_file(content) {
        let date_receipt = content.querySelector("#receipt_date_receipt_export_print_popup_window_id").innerHTML;
        let branch_receipt = content.querySelector("#branch_name_receipt_export_print_popup_window_id").innerHTML;
        let number_receipt = content.querySelector("#number_receipt_receipt_export_print_popup_window_id").innerHTML;
        if (branch_receipt == "Hồ Chí Minh") {
            branch_receipt = "HCM";
        }
        else if (branch_receipt = "Hà Nội") {
            branch_receipt = "HN"
        }
        let dmy_receipt = date_receipt.split("/");
        date_receipt = dmy_receipt.join('');
        let file_name = branch_receipt + "_" + date_receipt + "_" + number_receipt + ".pdf";
        html2pdf().from(content).save(file_name);
    }

    function Load_Data_For_Old_Receipt_To_Print(hoadon) {
        let mahoadon = hoadon.getAttribute("mahoadon");
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/Get_Data_HoaDon_By_MaHoaDon?mahoadon=" + mahoadon;
        xhr.open("POST", url, true);
        xhr.timeout = 50000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let about_hoadon = this.response;
                about_hoadon = JSON.parse(about_hoadon);
                if (about_hoadon.length > 0) {
                    if (about_hoadon[0]["idChiNhanh"] == "HCM") {
                        receiptprintpopup.querySelector("#branch_name_receipt_export_print_popup_window_id").innerHTML = "Hồ Chí Minh";
                    }
                    else if (about_hoadon[0]["idChiNhanh"] == "HN") {
                        receiptprintpopup.querySelector("#branch_name_receipt_export_print_popup_window_id").innerHTML = "Hà Nội";
                    }
                    receiptprintpopup.querySelector("#receipt_date_receipt_export_print_popup_window_id").innerHTML = about_hoadon[0]["thoiGianXuat"];
                    receiptprintpopup.querySelector("#khachthanhtoan_name_receipt_export_print_popup_window_id").innerHTML = about_hoadon[0]["tenKH"];
                    receiptprintpopup.querySelector("#thungan_name_receipt_export_print_popup_window_id").innerHTML = about_hoadon[0]["tenNV"];
                    receiptprintpopup.querySelector("#number_receipt_receipt_export_print_popup_window_id").innerHTML = mahoadon.substring(mahoadon.length - 3, mahoadon.length);
                    let xhr_ds = new XMLHttpRequest();
                    let url_ds = "https://localhost:5001/QuanLy/Load_HoaDonPhong_By_MaHoaDon?mahoadon=" + mahoadon;
                    xhr_ds.open("POST", url_ds, true);
                    xhr_ds.timeout = 50000;
                    xhr_ds.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            let dshoadonphong = JSON.parse(this.response);
                            if (dshoadonphong.length > 0) {
                                let tongtienphong = 0;
                                let tongtiendoan = 0;
                                let chietkhaudoan = 0;
                                let chietkhauphong = 0;
                                let phithem = 0;
                                let tongtra = 0;
                                for (let i = 0; i < dshoadonphong.length; i++) {
                                    let form_hdp = new FormData();
                                    form_hdp.append("maphong", dshoadonphong[i]["idPhong"]);
                                    form_hdp.append("madatphong", dshoadonphong[i]["idDatPhong"]);
                                    form_hdp.append("ngaydeno", dshoadonphong[i]["ngayDenO"]);
                                    let xhr_hdp = new XMLHttpRequest();
                                    let url_hdp = "https://localhost:5001/QuanLy/Load_Detail_Old_HoaDonPhong";
                                    xhr_hdp.open("POST", url_hdp, true);
                                    xhr_hdp.timeout = 50000;
                                    xhr_hdp.onreadystatechange = function () {
                                        if (this.readyState == 4 && this.status == 200) {
                                            let infoOldHoaDon = JSON.parse(this.response);
                                            if (infoOldHoaDon.length > 0) {
                                                tongtienphong = tongtienphong + infoOldHoaDon[0]["tienPhong"];
                                                chietkhauphong = tongtienphong * (about_hoadon[0]["chietkhauphong"]/100);
                                                phithem = phithem + infoOldHoaDon[0]["phiThem"];
                                                $('<tr class = "IsRoomCheckOut">' +
                                                    '<td class="stt_receipt_detail_table_content_receipt_export_print_popup_window">Phòng ' + infoOldHoaDon[0]["idPhong"].substring(infoOldHoaDon[0]["idPhong"].length - 4, infoOldHoaDon[0]["idPhong"].length) + '</td>' +
                                                    '<td class="service_receipt_detail_table_content_receipt_export_print_popup_window">' + infoOldHoaDon[0]["tenLoaiPhong"] + ', ' + infoOldHoaDon[0]["soNguoiOQD"] + ' Người</td>' +
                                                    '<td class="checkin_receipt_detail_table_content_receipt_export_print_popup_window">' + infoOldHoaDon[0]["ngayDenO"] + '</td>' +
                                                    '<td class="checkout_receipt_detail_table_content_receipt_export_print_popup_window">' + infoOldHoaDon[0]["ngayRoiDi"] + '</td>' +
                                                    '<td class="count_receipt_detail_table_content_receipt_export_print_popup_window">1</td>' +
                                                    '<td class="price_receipt_detail_table_content_receipt_export_print_popup_window">' + addDotPrice(String(infoOldHoaDon[0]["giaPhong"])) + '</td>' +
                                                    '</tr>').insertAfter(body_table_receipt_receiptprintpopup.lastChild);
                                            }
                                            if (infoOldHoaDon.length > 2) {
                                                tongtiendoan = tongtiendoan + infoOldHoaDon[infoOldHoaDon.length - 1]["tongTienDoAn"];
                                                chietkhaudoan = tongtiendoan * (about_hoadon[0]["chietkhaudoan"]/100);
                                                for (let j = 1; j < infoOldHoaDon.length - 2; j++) {
                                                    $('<tr>' +
                                                        '<td class="data_food_none_border stt_receipt_detail_table_content_receipt_export_print_popup_window"></td>' +
                                                        '<td class="service_receipt_detail_table_content_receipt_export_print_popup_window">' + infoOldHoaDon[j]["tenDoAn"] + '</td>' +
                                                        '<td class="thoigiandat_receipt_detail_table_content_receipt_export_print_popup_window" colspan = "2">' + infoOldHoaDon[j]["thoiGianDat"] + '</td>' +
                                                        '<td class="count_receipt_detail_table_content_receipt_export_print_popup_window">' + infoOldHoaDon[j]["soLuong"] + '</td>' +
                                                        '<td class="price_receipt_detail_table_content_receipt_export_print_popup_window">' + addDotPrice(String(infoOldHoaDon[j]["gia"] * infoOldHoaDon[j]["soLuong"])) + '</td>' +
                                                        '</tr>').insertAfter(body_table_receipt_receiptprintpopup.lastChild);
                                                }
                                            }
                                            tongtra = tongtienphong + tongtiendoan - chietkhauphong - chietkhaudoan + phithem;
                                            receiptprintpopup.querySelector(".cal_price_content_receipt_export_print_popup_window div").innerHTML = '<div class="cal_price_detail_content_receipt_export_print_popup_window">' +
                                                '<p>Giá phòng:</p>' +
                                                '<p>' + addDotPrice(String(tongtienphong)) + ' VNĐ</p>' +
                                                '</div>' +
                                                '<div class="cal_price_detail_content_receipt_export_print_popup_window">' +
                                                '<p>Giá đồ ăn:</p>' +
                                                '<p>' + addDotPrice(String(tongtiendoan)) + ' VNĐ</p>' +
                                                '</div>' +
                                                '<div class="cal_price_detail_content_receipt_export_print_popup_window">' +
                                                '<p>Giảm giá phòng:</p>' +
                                                '<p>' + addDotPrice(String(chietkhauphong)) + ' VNĐ</p>' +
                                                '</div>' +
                                                '<div class="cal_price_detail_content_receipt_export_print_popup_window">' +
                                                '<p>Giảm giá đồ ăn:</p>' +
                                                '<p>' + addDotPrice(String(chietkhaudoan)) + ' VNĐ</p>' +
                                                '</div>' +
                                                '<div class="cal_price_detail_content_receipt_export_print_popup_window">' +
                                                '<p>Phí phát sinh:</p>' +
                                                '<p>' + addDotPrice(String(phithem)) + ' VNĐ</p>' +
                                                '</div>' +
                                                '<div class="cal_price_detail_content_receipt_export_print_popup_window">' +
                                                '<p>Phải trả:</p>' +
                                                '<p>' + addDotPrice(String(tongtra)) + ' VNĐ</p>' +
                                                '</div>';
                                            receiptprintpopup.classList.add('show');
                                        }
                                    }
                                    xhr_hdp.send(form_hdp);
                                }
                            }
                        }
                    }
                    xhr_ds.send();
                }
            }
        }
        xhr.send();
    }


    function Add_Event_For_DSHoaDon() {
        var list_receipt_dshoadon_main_working_window = dshoadon_main_working_window.querySelectorAll(".data_window_dshoadon .list_receipt_table_data_window_dshoadon tbody tr");
        list_receipt_dshoadon_main_working_window.forEach(function (receipt) {
            var btn_print_receipt_data_window_dshoadon = receipt.querySelector(".print_btn_list_receipt_table_data_window_dshoadon .btn_print_list_receipt_table_data_window_dshoadon");
            btn_print_receipt_data_window_dshoadon.onclick = function (e) {
                body_table_receipt_receiptprintpopup.innerHTML = " ";
                Load_Data_For_Old_Receipt_To_Print(receipt);
                cancelreceiptprintpopup.onclick = function () {
                    receiptprintpopup.classList.remove('show');
                }
                printreceiptprintpopup.onclick = function () {
                    var contentprint_receiptprintpopup = receiptprintpopup.querySelector("#content_receipt_export_print_popup_window_id");
                    print_export_receipt_file(contentprint_receiptprintpopup);
                    receiptprintpopup.classList.remove('show');
                    taomoihoadonpopup.classList.remove('show');
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Xuất hóa đơn thành công!";
                    notification_status_iud_data_popup.classList.add('show');
                }
            }
        });
    }

    function Load_Data_For_DSHoaDon() {
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/Load_Data_For_DSHoaDon";
        xhr.open("POST", url, true);
        xhr.timeout = 500000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = "";
                let data_dshd = JSON.parse(this.response);
                if (data_dshd.length > 0) {
                    for (let i = 0; i < data_dshd.length; i++) {
                        let idHoaDon = data_dshd[i]["idHoaDon"];
                        let thoigianxuat = formatDayTime(data_dshd[i]["thoiGianXuat"]);
                        let httt = "";
                        if (data_dshd[i]["loaiThanhToan"] == 1) {
                            httt = "Online";
                        }
                        result = result + '<tr mahoadon = ' + idHoaDon + '>' +
                            '<td class="mahoadon_list_receipt_table_data_window_dshoadon">' + idHoaDon.substring(0, idHoaDon.length - 3) + "_" + idHoaDon.substring(idHoaDon.length - 3, idHoaDon.length) + '</td>' +
                            '<td class="idkhachthanhtoan_list_receipt_table_data_window_dshoadon">' + data_dshd[i]["idKhachThanhToan"] + '</td>' +
                            '<td class="nhanvienthanhtoan_list_receipt_table_data_window_dshoadon">' + data_dshd[i]["tenNhanVien"] + '</td>' +
                            '<td class="thoigianxuat_list_receipt_table_data_window_dshoadon">' + thoigianxuat + '</td>' +
                            '<td class="hinhthucthanhtoan_list_receipt_table_data_window_dshoadon">' + httt + '</td>' +
                            '<td class="tongsotien_list_receipt_table_data_window_dshoadon">' + data_dshd[i]["tongSoTien"] + '</td>' +
                            '<td class="print_btn_list_receipt_table_data_window_dshoadon">' +
                            '<button class="btn_print_list_receipt_table_data_window_dshoadon">' +
                            '<i class="fa fa-print" style="font-size:1rem"></i>' +
                            '</button>' +
                            '</td>' +
                            '</tr>';
                    }
                    dshoadon_main_working_window.querySelector(".data_window_dshoadon .list_receipt_table_data_window_dshoadon tbody").innerHTML = result;
                    Add_Event_For_DSHoaDon();
                }
                else {
                    dshoadon_main_working_window.querySelector(".data_window_dshoadon .list_receipt_table_data_window_dshoadon tbody").innerHTML = "<tr> <td colspan='7'>Không có đơn đặt phòng nào</tr>";
                }
            }
        }
        xhr.send();
    }


    function Load_Data_For_Create_Receipt() {
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/Load_Data_Create_Receipt";
        xhr.open("POST", url, true);
        xhr.timeout = 500000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let data_receipt = JSON.parse(this.response);
                if (data_receipt["idChiNhanh"] == "HCM") {
                    taomoihoadonpopup.querySelector("#chinhanh_data_field_in_thongtinhoadon_info_body_add_receipt_window_popup").value = "Hồ Chí Minh";
                }
                else if (data_receipt["idChiNhanh"] == "HN") {
                    taomoihoadonpopup.querySelector("#chinhanh_data_field_in_thongtinhoadon_info_body_add_receipt_window_popup").value = "Hà Nội";
                }
                taomoihoadonpopup.querySelector("#ngayhoadon_data_field_in_thongtinhoadon_info_body_add_receipt_window_popup").value = getToDay();
                taomoihoadonpopup.querySelector("#nhanvienthungan_data_field_in_thongtinhoadon_info_body_add_receipt_window_popup").value = data_receipt["ho"] + " " + data_receipt["ten"];
                taomoihoadonpopup.querySelector("#nhanvienthungan_data_field_in_thongtinhoadon_info_body_add_receipt_window_popup").setAttribute("idnv", data_receipt["idNhanVien"]);
                taomoihoadonpopup.classList.add('show');
            }
        }
        xhr.send();
    }

    function Load_Data_For_Room_To_CheckOut() {
        let maphong = taomoihoadonpopup.querySelector("#idphong_need_paid_id").value;
        let dacheckin = "NO";
        body_table_add_receipt_taomoihoadonpopup.querySelectorAll(".IsRoom").forEach(function (room) {
            if (room.getAttribute("maphong") == maphong) {
                dacheckin = "YES";
            }
        })
        if (dacheckin == "NO") {
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/GetInfoOccupiedRoom?maphong=" + maphong;
            xhr.open("POST", url, true);
            xhr.timeout = 50000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let result = this.responseText;
                    result = JSON.parse(result);
                    if (result.length > 0) {
                        viewphongreadytocheckoutpopup.querySelector("#checkin_data_thongtindatphong_toreturn_room_window_receipt_id").value = result[0]["checkIn"];
                        viewphongreadytocheckoutpopup.querySelector(".header_name_toreturn_room_window_receipt span").innerHTML = result[0]["soPhong"];
                        viewphongreadytocheckoutpopup.querySelector("#idkhachchu_data_thongtindatphong_toreturn_room_window_receipt_id").value = result[0]["idKhachChu"];
                        viewphongreadytocheckoutpopup.querySelector("#tenkhachchu_data_thongtindatphong_toreturn_room_window_receipt_id").value = result[0]["hoKhachChu"] + " " + result[0]["tenKhachChu"];
                        viewphongreadytocheckoutpopup.querySelector("#loaiphong_data_thongtinphong_toreturn_room_window_receipt_id").value = result[0]["tenLoaiPhong"];
                        viewphongreadytocheckoutpopup.querySelector("#songuoio_data_thongtinphong_toreturn_room_window_receipt_id").value = result[0]["soNguoiO"];
                        viewphongreadytocheckoutpopup.querySelector("#giatien_data_thongtinphong_toreturn_room_window_receipt_id").value = result[0]["giaTien"];
                        viewphongreadytocheckoutpopup.querySelector("#tang_data_thongtinphong_toreturn_room_window_receipt_id").value = result[0]["tang"];
                        viewphongreadytocheckoutpopup.querySelector("#sogiuong_data_thongtinphong_toreturn_room_window_receipt_id").value = result[0]["soGiuong"];
                        viewphongreadytocheckoutpopup.querySelector("#iddatphong_data_thongtindatphong_toreturn_room_window_receipt_id").value = result[0]["idDatPhong"];
                        viewphongreadytocheckoutpopup.querySelector("#idkhachdat_data_thongtindatphong_toreturn_room_window_receipt_id").value = result[0]["idKhachDat"];
                        viewphongreadytocheckoutpopup.querySelector("#thoigiandat_data_thongtindatphong_toreturn_room_window_receipt_id").value = result[0]["thoiGianDat"];
                        viewphongreadytocheckoutpopup.querySelector("#ngaydeno_data_thongtindatphong_toreturn_room_window_receipt_id").value = result[0]["ngayDenO"];
                        viewphongreadytocheckoutpopup.querySelector("#ngayroidi_data_thongtindatphong_toreturn_room_window_receipt_id").value = result[0]["ngayRoiDi"];
                        viewphongreadytocheckoutpopup.querySelector("#checkout_data_thongtindatphong_toreturn_room_window_receipt_id").value = getToDayTime();
                        viewphongreadytocheckoutpopup.querySelector("#thongtinkhacho_data_thongtindatphong_toreturn_room_window_receipt_id").value = result[0]["thongTinKhachO"];
                        if (result.length > 1) {
                            let tongtien = 0;
                            for (let i = 1; i < result.length; i++) {
                                tongtien = tongtien + result[i]["gia"] * result[i]["soLuong"];
                                $(' <tr> ' +
                                    ' <td>' + i + '</td> ' +
                                    ' <td>' + result[i]["tenDoAn"] + '</td> ' +
                                    ' <td>' + result[i]["thoiGianDat"] + '</td> ' +
                                    ' <td>' + result[i]["soLuong"] + '</td> ' +
                                    ' <td>' + addDotPrice(String(result[i]["gia"])) + '</td> ' +
                                    ' <td>' + addDotPrice(String(result[i]["gia"] * result[i]["soLuong"])) + '</td> ' +
                                    ' </tr> ').insertAfter(body_table_food_tabthongtin_viewphongreadytocheckoutpopup.lastChild);
                            }
                            viewphongreadytocheckoutpopup.querySelector(".part_info_toreturn_room_window_receipt .food_order_table_toreturn_receipt #sum_price_food_order_toreturn_receipt").innerHTML = "Tổng tiền (VNĐ): " + addDotPrice(String(tongtien)) + " VNĐ";
                        }
                        else {
                            viewphongreadytocheckoutpopup.querySelector(".part_info_toreturn_room_window_receipt .food_order_table_toreturn_receipt #sum_price_food_order_toreturn_receipt").innerHTML = "Tổng tiền (VNĐ): 0 VNĐ";
                        }
                        viewphongreadytocheckoutpopup.setAttribute("maphong", maphong);
                        viewphongreadytocheckoutpopup.setAttribute("iddatphong", result[0]["idDatPhong"]);
                        viewphongreadytocheckoutpopup.setAttribute("ngaydeno", result[0]["ngayDenO"]);
                        viewphongreadytocheckoutpopup.classList.add('show');
                    }
                    else {
                        taomoihoadonpopup.querySelector("#error_nf_check_idphong_need_paid_id").innerHTML = "Không có phòng nào hợp lệ!";
                    }
                }
            }
            xhr.send();
        }
        else if (dacheckin = "YES") {
            taomoihoadonpopup.querySelector("#error_nf_check_idphong_need_paid_id").innerHTML = "Phòng đã được thêm vào bảng rồi!"
            taomoihoadonpopup.querySelector("#idphong_need_paid_id").value = "";
        }
    }

    function Render_Data_CheckOut_Room_To_Receipt_Table() {
        let maphong = viewphongreadytocheckoutpopup.getAttribute("maphong");
        let madatphong = viewphongreadytocheckoutpopup.getAttribute("iddatphong");
        let ngaydeno = viewphongreadytocheckoutpopup.getAttribute("ngaydeno");
        let form_cs = new FormData();
        form_cs.append("maphong", maphong);
        form_cs.append("madatphong", madatphong);
        form_cs.append("ngaydeno", ngaydeno);
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/Load_Data_For_CTDP";
        xhr.open("POST", url, true);
        xhr.timeout = 50000;
        let tongtien = 0;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = this.responseText;
                result = JSON.parse(result);
                if (result.length > 0) {
                    tongtien = tongtien + result[0]["giaTien"];
                    $('<tr class = "IsRoom" maphong = ' + result[0]["idPhong"] + ' madatphong = ' + result[0]["idDatPhong"] + ' ngaydeno = ' + result[0]["ngayDenO"] + '>' +
                        '<td class="stt_receipt_table_field_in_add_receipt_window_popup">Phòng ' + String(result[0]["tang"]).padStart(2, '0') + String(result[0]["soPhong"]).padStart(2, '0')  + '</td>'+
                        '<td class="service_receipt_table_field_in_add_receipt_window_popup">' + result[0]["tenLoaiPhong"] + ', ' + result[0]["soNguoiO"] + ' Người</td>'+
                        '<td class="checkin_receipt_table_field_in_add_receipt_window_popup">' + result[0]["ngayDenO"] + '</td>'+
                        '<td class="checkout_receipt_table_field_in_add_receipt_window_popup">' + result[0]["ngayRoiDi"] + '</td>'+
                        '<td class="count_receipt_table_field_in_add_receipt_window_popup">1</td>'+
                        '<td class="price_receipt_table_field_in_add_receipt_window_popup">' + addDotPrice(String(result[0]["giaTien"])) + '</td>'+
                        '</tr>').insertAfter(body_table_add_receipt_taomoihoadonpopup.lastChild);
                    if (result.length > 1) {
                        for (let i = 1; i < result.length; i++) {
                            tongtien = tongtien + result[i]["gia"] * result[i]["soLuong"];
                            $('<tr>'+
                                '<td class="data_food_none_border stt_receipt_table_field_in_add_receipt_window_popup"></td>'+
                                '<td class="service_receipt_table_field_in_add_receipt_window_popup">' + result[i]["tenDoAn"] + '</td>'+
                                '<td class=".thoigiandat_receipt_table_field_in_add_receipt_window_popup" colspan = "2">' + result[i]["thoiGianDat"] + '</td>'+
                                '<td class="count_receipt_table_field_in_add_receipt_window_popup">' + result[i]["soLuong"] + '</td>'+
                                '<td class="price_receipt_table_field_in_add_receipt_window_popup">' + addDotPrice(String(result[i]["gia"])) + '</td>'+
                            '</tr>').insertAfter(body_table_add_receipt_taomoihoadonpopup.lastChild);
                        }
                    }
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Đã thêm phòng!";
                    notification_status_iud_data_popup.classList.add('show');
                    taomoihoadonpopup.querySelector("#idphong_need_paid_id").value = "";
                    viewphongreadytocheckoutpopup.classList.remove('show');
                    let tongtien_taomoihoadonpopup = taomoihoadonpopup.querySelector("#total_price_all_receipt");
                    let tongtien_old_taomoihoadonpopup = tongtien_taomoihoadonpopup.getAttribute("tongtienhoadon_hientai");
                    tongtien_old_taomoihoadonpopup = (tongtien_old_taomoihoadonpopup == null) ? 0 : tongtien_old_taomoihoadonpopup;
                    let tongtien_new_taomoihoadonpopup = tongtien + Number(tongtien_old_taomoihoadonpopup);
                    tongtien_taomoihoadonpopup.innerHTML = 'Tổng số tiền: ' + addDotPrice(String(tongtien_new_taomoihoadonpopup)) + ' VNĐ';
                    tongtien_taomoihoadonpopup.removeAttribute("tongtienhoadon_hientai");
                    tongtien_taomoihoadonpopup.setAttribute("tongtienhoadon_hientai", tongtien_new_taomoihoadonpopup);
                }
                else {
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Đã xảy ra lỗi!";
                    notification_status_iud_data_popup.classList.add('show');
                    taomoihoadonpopup.querySelector("#total_price_all_receipt").innerHTML = 'Tổng số tiền: 0 VNĐ'
                }
            }
        }
        xhr.send(form_cs);
    }

    function Render_Data_CheckOut_Room_And_Receipt_To_Print() {
        receiptprintpopup.querySelector(".cal_price_content_receipt_export_print_popup_window div").innerHTML = '<div class="cal_price_detail_content_receipt_export_print_popup_window">' +
            '<p> Tổng giá gốc:</p >' +
            '<p id="tonggiagoc_cal_price_detail_content_receipt_export_print_popup_window">0 VNĐ</p>' +
            '</div >' +
            '<div class="cal_price_detail_content_receipt_export_print_popup_window">' +
            '<p>Giảm giá phòng:</p>' +
            '<p id="giamgiaphong_cal_price_detail_content_receipt_export_print_popup_window">0 VNĐ</p>' +
            '</div>' +
            '<div class="cal_price_detail_content_receipt_export_print_popup_window">' +
            '<p>Giảm giá đồ ăn:</p>' +
            '<p id="giamgiadoan_cal_price_detail_content_receipt_export_print_popup_window">0 VNĐ</p>' +
            '</div>' +
            '<div class="cal_price_detail_content_receipt_export_print_popup_window">' +
            '<p>Phí quá số người ở:</p>' +
            '<p id="phiquasno_cal_price_detail_content_receipt_export_print_popup_window">0 VNĐ</p>' +
            '</div>' +
            '<div class="cal_price_detail_content_receipt_export_print_popup_window">' +
            '<p>Phí Check In/Out:</p>' +
            '<p id="phicico_cal_price_detail_content_receipt_export_print_popup_window">0 VNĐ</p>' +
            '</div>' +
            '<div class="cal_price_detail_content_receipt_export_print_popup_window">' +
            '<p>Đã trả:</p>' +
            '<p id="datra_cal_price_detail_content_receipt_export_print_popup_window">0 VNĐ</p>' +
            '</div>' +
            '<div class="cal_price_detail_content_receipt_export_print_popup_window phaithu_cost">' +
            '<p>Phải thu (VNĐ):</p>' +
            '<p id="phaithu_cal_price_detail_content_receipt_export_print_popup_window">0 VNĐ</p>' +
            '</div>';
        let dsphongcheckout = body_table_add_receipt_taomoihoadonpopup.querySelectorAll("tr.IsRoom");
        let idkhachthanhtoan = taomoihoadonpopup.querySelector("#cccd_khachthanhtoan_add_receipt_window").value;
        let idnhanvienthanhtoan = taomoihoadonpopup.querySelector("#nhanvienthungan_data_field_in_thongtinhoadon_info_body_add_receipt_window_popup").getAttribute("idnv");
        let idhoadon = "";
        let maphong = "";
        let madatphong = "";
        let ngaydeno = "";
        let tongtiendichvu = 0;
        let tiendatra = 0;
        let phicico = 0;
        let phiqsn = 0;
        let phaithu = 0;
        let giamgiaphong = 0;
        let giamgiadoan = 0;
        let khachhangthanhtoan = "";
        let chietkhauphong = "";
        let chietkhaudoan = "";
        let checkoutTime = getToDayTime();
        if (dsphongcheckout.length > 0 && idkhachthanhtoan != "") {
            let form_taohoadon = new FormData();
            form_taohoadon.append("idnhanvienthanhtoan", idnhanvienthanhtoan);
            form_taohoadon.append("idkhachthanhtoan", idkhachthanhtoan);
            form_taohoadon.append("checkoutTime", checkoutTime);
            let xhr_taohoadon = new XMLHttpRequest();
            let url_taohoadon = "https://localhost:5001/QuanLy/Tao_HoaDon_CheckOut";
            xhr_taohoadon.open("POST", url_taohoadon, true);
            xhr_taohoadon.timeout = 50000;
            xhr_taohoadon.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    idhoadon = this.responseText;
                    receiptprintpopup.querySelector("#number_receipt_receipt_export_print_popup_window_id").innerHTML = idhoadon.substring(idhoadon.length - 3, idhoadon.length);
                    let xhr_chietkhau = new XMLHttpRequest();
                    let url_chietkhau = "https://localhost:5001/QuanLy/GetKhachHangVoiChietKhau?idKhachHang=" + idkhachthanhtoan;
                    xhr_chietkhau.open("POST", url_chietkhau, true);
                    xhr_chietkhau.timeout = 50000;
                    xhr_chietkhau.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            khachhangthanhtoan = this.responseText;
                            khachhangthanhtoan = JSON.parse(khachhangthanhtoan);
                            chietkhauphong = khachhangthanhtoan["chietKhauPhong"];
                            chietkhaudoan = khachhangthanhtoan["chietKhauDoAn"];
                            receiptprintpopup.querySelector("#khachthanhtoan_name_receipt_export_print_popup_window_id").innerHTML = "Khách hàng: " + khachhangthanhtoan["hoTenKhachHang"];
                            for (let i = 0; i < dsphongcheckout.length; i++) {
                                maphong = dsphongcheckout[i].getAttribute("maphong");
                                madatphong = dsphongcheckout[i].getAttribute("madatphong");
                                ngaydeno = dsphongcheckout[i].getAttribute("ngaydeno");

                                let form_checkout = new FormData();
                                form_checkout.append("maphong", maphong);
                                form_checkout.append("madatphong", madatphong);
                                form_checkout.append("ngaydeno", ngaydeno);
                                form_checkout.append("checkoutTime", checkoutTime);
                                form_checkout.append("idhoadon", idhoadon);
                                form_checkout.append("chietkhauphong", chietkhauphong);
                                form_checkout.append("chietkhaudoan", chietkhaudoan);
                                let xhr_checkout = new XMLHttpRequest();
                                let url_checkout = "https://localhost:5001/QuanLy/CheckOut_For_Occupied_Room";
                                xhr_checkout.open("POST", url_checkout, true);
                                xhr_checkout.timeout = 50000;
                                xhr_checkout.onreadystatechange = function () {
                                    if (this.readyState == 4 && this.status == 200) {
                                        let result = this.responseText;
                                        result = JSON.parse(result);
                                        if (result.length > 0) {
                                            tongtiendichvu = tongtiendichvu + result[result.length - 1]["tongTienDoAn"] + result[result.length - 1]["tienPhong"];
                                            tiendatra = tiendatra + result[0]["soTienDaThanhToan"] + result[result.length - 1]["tongTienDoAnDaThanhToan"];
                                            phicico = phicico + result[result.length - 1]["phiCheckInSom"] + result[result.length - 1]["phiCheckOutTre"];
                                            phiqsn = phiqsn + result[result.length - 1]["phiOQuaSoNguoi"];
                                            giamgiaphong = giamgiaphong + result[result.length - 1]["tienPhong"] * (khachhangthanhtoan["chietKhauPhong"]/100);
                                            giamgiadoan = giamgiadoan + result[result.length - 1]["tongTienDoAnPhaiTra"] * (khachhangthanhtoan["chietKhauDoAn"] / 100);
                                            phaithu = phiqsn + tongtiendichvu + phicico - tiendatra - giamgiadoan - giamgiaphong;
                                            $('<tr class = "IsRoomCheckOut" maphong = ' + result[0]["idPhong"] + ' madatphong = ' + result[0]["idDatPhong"] + ' ngaydeno = ' + result[0]["ngayDenO"] + '>' +
                                                '<td class="stt_receipt_detail_table_content_receipt_export_print_popup_window">Phòng ' + String(result[0]["tang"]).padStart(2, '0') + String(result[0]["soPhong"]).padStart(2, '0') + '</td>' +
                                                '<td class="service_receipt_detail_table_content_receipt_export_print_popup_window">' + result[0]["tenLoaiPhong"] + ', ' + result[0]["soNguoiO"] + ' Người</td>' +
                                                '<td class="checkin_receipt_detail_table_content_receipt_export_print_popup_window">' + result[0]["ngayDenO"] + '</td>' +
                                                '<td class="checkout_receipt_detail_table_content_receipt_export_print_popup_window">' + result[0]["ngayRoiDi"] + '</td>' +
                                                '<td class="count_receipt_detail_table_content_receipt_export_print_popup_window">1</td>' +
                                                '<td class="price_receipt_detail_table_content_receipt_export_print_popup_window">' + addDotPrice(String(result[result.length - 1]["giaPhong"])) + '</td>' +
                                                '</tr>').insertAfter(body_table_receipt_receiptprintpopup.lastChild);
                                            if (result.length > 2) {
                                                for (let j = 1; j < result.length - 1; j++) {
                                                    $('<tr>' +
                                                        '<td class="data_food_none_border stt_receipt_detail_table_content_receipt_export_print_popup_window"></td>' +
                                                        '<td class="service_receipt_detail_table_content_receipt_export_print_popup_window">' + result[j]["tenDoAn"] + '</td>' +
                                                        '<td class="thoigiandat_receipt_detail_table_content_receipt_export_print_popup_window" colspan = "2">' + result[j]["thoiGianDat"] + '</td>' +
                                                        '<td class="count_receipt_detail_table_content_receipt_export_print_popup_window">' + result[j]["soLuong"] + '</td>' +
                                                        '<td class="price_receipt_detail_table_content_receipt_export_print_popup_window">' + addDotPrice(String(result[j]["gia"] * result[j]["soLuong"])) + '</td>' +
                                                        '</tr>').insertAfter(body_table_receipt_receiptprintpopup.lastChild);
                                                }
                                            }
                                            receiptprintpopup.querySelector("#tonggiagoc_cal_price_detail_content_receipt_export_print_popup_window").innerHTML = addDotPrice(String(tongtiendichvu)) + " VNĐ";
                                            receiptprintpopup.querySelector("#giamgiaphong_cal_price_detail_content_receipt_export_print_popup_window").innerHTML = addDotPrice(String(giamgiaphong)) + " VNĐ";
                                            receiptprintpopup.querySelector("#giamgiadoan_cal_price_detail_content_receipt_export_print_popup_window").innerHTML = addDotPrice(String(giamgiadoan)) + " VNĐ";
                                            receiptprintpopup.querySelector("#phiquasno_cal_price_detail_content_receipt_export_print_popup_window").innerHTML = addDotPrice(String(phiqsn)) + " VNĐ";
                                            receiptprintpopup.querySelector("#phicico_cal_price_detail_content_receipt_export_print_popup_window").innerHTML = addDotPrice(String(phicico)) + " VNĐ";
                                            receiptprintpopup.querySelector("#datra_cal_price_detail_content_receipt_export_print_popup_window").innerHTML = addDotPrice(String(tiendatra)) + " VNĐ";
                                            receiptprintpopup.querySelector("#phaithu_cal_price_detail_content_receipt_export_print_popup_window").innerHTML = addDotPrice(String(phaithu)) + " VNĐ";
                                            receiptprintpopup.classList.add('show');
                                            Load_Data_For_DSHoaDon();
                                        }
                                    }
                                }
                                xhr_checkout.send(form_checkout);
                            }
                        }
                    }
                    xhr_chietkhau.send();
                }
            }
            xhr_taohoadon.send(form_taohoadon);
            let name_thungan = taomoihoadonpopup.querySelector("#nhanvienthungan_data_field_in_thongtinhoadon_info_body_add_receipt_window_popup").value;
            let branch_name_receipt = taomoihoadonpopup.querySelector("#chinhanh_data_field_in_thongtinhoadon_info_body_add_receipt_window_popup").value;
            receiptprintpopup.querySelector("#thungan_name_receipt_export_print_popup_window_id").innerHTML = "Thu ngân: " + name_thungan;
            receiptprintpopup.querySelector("#branch_name_receipt_export_print_popup_window_id").innerHTML = branch_name_receipt;
            receiptprintpopup.querySelector("#receipt_date_receipt_export_print_popup_window_id").innerHTML = formatDay(new Date(getToDay()));
        }
    }

    // Sự kiện trong màn hình làm việc của Danh sách hóa đơn - begin
    var dshoadon_main_working_window = document.getElementById("dshoadon_main_working_window_id");
    var dshoandon_selection_menu = document.getElementById("dshoadon_selection_name_icon_id");
    dshoandon_selection_menu.onclick = function () {
        list_option_menu_burger.forEach(function (b) {
            if (b !== dshoadon_main_working_window && b.classList.contains('show')) {
                b.classList.remove('show');
            }
        })
        if (!dshoadon_main_working_window.classList.contains('show')) {
            dshoadon_main_working_window.classList.add('show');
        }
        Load_Data_For_DSHoaDon();
    }
    
    var receiptprintpopup = dshoadon_main_working_window.querySelector("#receipt_export_print_popup_window_container_id");
    var cancelreceiptprintpopup = receiptprintpopup.querySelector("#btn_cancel_receipt_export_print_popup_window_container");
    var printreceiptprintpopup = receiptprintpopup.querySelector("#btn_print_receipt_export_print_popup_window_container");
    var body_table_receipt_receiptprintpopup = receiptprintpopup.querySelector(".receipt_detail_table_content_receipt_export_print_popup_window tbody");


    var viewphongreadytocheckoutpopup = document.getElementById("toreturn_room_window_receipt_container_id");
    var closeviewphongreadytocheckoutpopup = viewphongreadytocheckoutpopup.querySelector("#header_close_toreturn_room_window_receipt_id");
    var cancelviewphongreadytocheckoutpopup = viewphongreadytocheckoutpopup.querySelector("#btn_cancel_checkout_toreturn_receipt");
    var confirmviewphongreadytocheckoutpopup = viewphongreadytocheckoutpopup.querySelector("#btn_confirm_checkout_toreturn_receipt");
    var body_table_food_tabthongtin_viewphongreadytocheckoutpopup = viewphongreadytocheckoutpopup.querySelector(".food_order_table_toreturn_receipt tbody");



    var notificationconfirmcheckoutandexportrc = document.getElementById("notification_confirm_checkout_and_exportrc_window_container_id");
    var closenotificationconfirmcheckoutandexportrc = notificationconfirmcheckoutandexportrc.querySelector("#header_close_notification_confirm_checkout_and_exportrc_window_id");
    var cancelnotificationconfirmcheckoutandexportrc = notificationconfirmcheckoutandexportrc.querySelector("#btn_cancel_notification_confirm_checkout_and_exportrc_window");
    var confirmnotificationconfirmcheckoutandexportrc = notificationconfirmcheckoutandexportrc.querySelector("#btn_confirm_notification_confirm_checkout_and_exportrc_window");




    var btn_create_new_receipt_dshoadon_main_working_window = dshoadon_main_working_window.querySelector("#btn_create_new_receipt_dshoadon_main_working_window");
    var taomoihoadonpopup = document.getElementById("add_receipt_window_popup_container_id");
    var closetaomoihoadonpopup = taomoihoadonpopup.querySelector("#header_close_add_receipt_window_popup_id");
    var canceltaomoihoadonpopup = taomoihoadonpopup.querySelector("#btn_cancel_add_receipt_window");
    var expporttaomoihoadonpopup = taomoihoadonpopup.querySelector("#btn_export_add_receipt_window");
    var searchkhachthanhtoan_add_receipt_popup = taomoihoadonpopup.querySelector("#btn_confirm_khachthanhtoan_add_receipt_window_id");
    var checkidphongoccupied_add_receipt_popup = taomoihoadonpopup.querySelector("#check_idphong_need_paid_id");
    var body_table_add_receipt_taomoihoadonpopup = taomoihoadonpopup.querySelector(".receipt_table_in_info_body_add_receipt_window_popup tbody");
    btn_create_new_receipt_dshoadon_main_working_window.onclick = function () {
        body_table_add_receipt_taomoihoadonpopup.innerHTML = ' ';
        taomoihoadonpopup.querySelector("#cccd_khachthanhtoan_add_receipt_window").value = "";
        taomoihoadonpopup.querySelector("#idphong_need_paid_id").value = "";
        taomoihoadonpopup.querySelector("#total_price_all_receipt").innerHTML = "Tổng số tiền: 0 VNĐ";
        Load_Data_For_Create_Receipt();

        closetaomoihoadonpopup.onclick = function () {
            taomoihoadonpopup.classList.remove('show');
        };
        canceltaomoihoadonpopup.onclick = function () {
            taomoihoadonpopup.classList.remove('show');
        };
        let idphong_need_return_to_receipt = taomoihoadonpopup.querySelector("#idphong_need_paid_id");
        idphong_need_return_to_receipt.onkeyup = function () {
            taomoihoadonpopup.querySelector("#error_nf_check_idphong_need_paid_id").innerHTML = "";
        }
        expporttaomoihoadonpopup.onclick = function () {
            notificationconfirmcheckoutandexportrc.classList.add('show');
            closenotificationconfirmcheckoutandexportrc.onclick = function () {
                notificationconfirmcheckoutandexportrc.classList.remove('show');
            }
            cancelnotificationconfirmcheckoutandexportrc.onclick = function () {
                notificationconfirmcheckoutandexportrc.classList.remove('show');
            }
            confirmnotificationconfirmcheckoutandexportrc.onclick = function () {
                notificationconfirmcheckoutandexportrc.classList.remove('show');
                body_table_receipt_receiptprintpopup.innerHTML = " ";
                Render_Data_CheckOut_Room_And_Receipt_To_Print();
                cancelreceiptprintpopup.onclick = function () {
                    receiptprintpopup.classList.remove('show');
                }
                printreceiptprintpopup.onclick = function () {
                    var contentprint_receiptprintpopup = receiptprintpopup.querySelector("#content_receipt_export_print_popup_window_id");
                    print_export_receipt_file(contentprint_receiptprintpopup);
                    receiptprintpopup.classList.remove('show');
                    taomoihoadonpopup.classList.remove('show');
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Xuất hóa đơn thành công!";
                    notification_status_iud_data_popup.classList.add('show');
                }
            }
        };
        searchkhachthanhtoan_add_receipt_popup.onclick = function () {
            let idkhachhangthanhtoan = taomoihoadonpopup.querySelector("#cccd_khachthanhtoan_add_receipt_window").value;
            Query_Customer_For_Booked_Room(idkhachhangthanhtoan);
            closethongtinkhachhangpopup.onclick = function () {
                thongtinkhachhangpopup.classList.remove('show');
            };
            cancelthongtinkhachhangpopup.onclick = function () {
                thongtinkhachhangpopup.classList.remove('show');
            };
            savethongtinkhachhangpopup.onclick = function () {
                Save_Customer_Info_For_Booked_Room("search_khtt_receipt");
            };
            createthongtinkhachhangpopup.onclick = function () {
                Create_Customer_Info_For_Booked_Room("search_khtt_receipt");
            };
        }
        checkidphongoccupied_add_receipt_popup.onclick = function () {
            body_table_food_tabthongtin_viewphongreadytocheckoutpopup.innerHTML = ' ';
            Load_Data_For_Room_To_CheckOut();
            closeviewphongreadytocheckoutpopup.onclick = function () {
                viewphongreadytocheckoutpopup.classList.remove('show');
            }
            cancelviewphongreadytocheckoutpopup.onclick = function () {
                viewphongreadytocheckoutpopup.classList.remove('show');
            }
            confirmviewphongreadytocheckoutpopup.onclick = function () {
                Render_Data_CheckOut_Room_To_Receipt_Table();
            }
        }
    };

    var filter_dshoadon_info_dshd = dshoadon_main_working_window.querySelector("#filter_dshoadon_info");
    filter_dshoadon_info_dshd.querySelector("#date_of_receipt_filter_dshoadon_info").value = getToDay();
    function Load_Data_For_DSHoaDon_By_Filter(data_dshd) {
        if (data_dshd.length > 0) {
            let result = "";
            for (let i = 0; i < data_dshd.length; i++) {
                let idHoaDon = data_dshd[i]["idHoaDon"];
                let thoigianxuat = formatDayTime(data_dshd[i]["thoiGianXuat"]);
                let httt = "";
                if (data_dshd[i]["loaiThanhToan"] == 1) {
                    httt = "Online";
                }
                result = result + '<tr mahoadon = ' + idHoaDon + '>' +
                    '<td class="mahoadon_list_receipt_table_data_window_dshoadon">' + idHoaDon.substring(0, idHoaDon.length - 3) + "_" + idHoaDon.substring(idHoaDon.length - 3, idHoaDon.length) + '</td>' +
                    '<td class="idkhachthanhtoan_list_receipt_table_data_window_dshoadon">' + data_dshd[i]["idKhachThanhToan"] + '</td>' +
                    '<td class="nhanvienthanhtoan_list_receipt_table_data_window_dshoadon">' + data_dshd[i]["tenNhanVien"] + '</td>' +
                    '<td class="thoigianxuat_list_receipt_table_data_window_dshoadon">' + thoigianxuat + '</td>' +
                    '<td class="hinhthucthanhtoan_list_receipt_table_data_window_dshoadon">' + httt + '</td>' +
                    '<td class="tongsotien_list_receipt_table_data_window_dshoadon">' + data_dshd[i]["tongSoTien"] + '</td>' +
                    '<td class="print_btn_list_receipt_table_data_window_dshoadon">' +
                    '<button class="btn_print_list_receipt_table_data_window_dshoadon">' +
                    '<i class="fa fa-print" style="font-size:1rem"></i>' +
                    '</button>' +
                    '</td>' +
                    '</tr>';
            }
            dshoadon_main_working_window.querySelector(".data_window_dshoadon .list_receipt_table_data_window_dshoadon tbody").innerHTML = result;
            Add_Event_For_DSHoaDon();
        }
        else {
            dshoadon_main_working_window.querySelector(".data_window_dshoadon .list_receipt_table_data_window_dshoadon tbody").innerHTML = "<tr> <td colspan='7'>Không có đơn đặt phòng nào</tr>";
        }
    }
    $(filter_dshoadon_info_dshd).submit(function (e) {
        e.preventDefault(); // prevent actual form submit
        var form = $(this);
        var url = form.attr('action'); //get submit url [replace url here if desired]
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(), // serializes form input
            success: function (data) {
                Load_Data_For_DSHoaDon_By_Filter(data);
            }
        });
    });


    // Sự kiện trong màn hình làm việc của Danh sách hóa đơn - end

    // Sự kiện trong màn hình làm việc của Danh sách khách hàng - begin

    function Load_Data_For_Detail_KhacHang(customer) {
        let makhachhang = customer.getAttribute("makhachhang");
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/Load_Data_For_Detail_KhacHang?makhachhang=" + makhachhang;
        xhr.open("POST", url, true);
        xhr.timeout = 500000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let data_kh = JSON.parse(this.response);
                if (data_kh != "") {
                    edit_customer_profile_popup.removeAttribute("makhachhangcu");
                    edit_customer_profile_popup.setAttribute("makhachhangcu", makhachhang);
                    edit_customer_profile_popup.querySelector("#makhachhang_info_body_edit_customer_profile_window_popup_id").value = data_kh["idKhachHang"];
                    edit_customer_profile_popup.querySelector("#gioitinh_info_body_edit_customer_profile_window_popup_id").value = data_kh["gioiTinh"];
                    edit_customer_profile_popup.querySelector("#hokhachhang_info_body_edit_customer_profile_window_popup_id").value = data_kh["hoKhachHang"];
                    edit_customer_profile_popup.querySelector("#tenkhachhang_info_body_edit_customer_profile_window_popup_id").value = data_kh["tenKhachHang"];
                    edit_customer_profile_popup.querySelector("#emailkhachhang_info_body_edit_customer_profile_window_popup_id").value = data_kh["email"];
                    edit_customer_profile_popup.querySelector("#sdtkhachhang_info_body_edit_customer_profile_window_popup_id").value = data_kh["sdt"];
                    edit_customer_profile_popup.querySelector("#ngaysinh_info_body_edit_customer_profile_window_popup_id").value = data_kh["ngaySinh"];
                    edit_customer_profile_popup.querySelector("#ngaydangky_info_body_edit_customer_profile_window_popup_id").value = data_kh["ngayDangKy"];
                    edit_customer_profile_popup.querySelector("#tongtien_info_body_edit_customer_profile_window_popup_id").value = data_kh["tongTien"];
                    edit_customer_profile_popup.querySelector("#matkhau_info_body_edit_customer_profile_window_popup_id").value = data_kh["matKhau"];
                    edit_customer_profile_popup.querySelector("#confirmmatkhau_info_body_edit_customer_profile_window_popup_id").value = data_kh["matKhau"];
                    edit_customer_profile_popup.querySelector("#loaikh_info_body_edit_customer_profile_window_popup_id").value = data_kh["tenLoaiKH"];
                    edit_customer_profile_popup.classList.add('show');
                }
                else {
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Không tìm thấy khách hàng!";
                    notification_status_iud_data_popup.classList.add('show');
                }
            }
        }
        xhr.send();
    }

    function Update_Change_Detail_KhachHangInFo() {
        let idkhachhang_cu = edit_customer_profile_popup.getAttribute("makhachhangcu");
        let idkhachhang_new = edit_customer_profile_popup.querySelector("#makhachhang_info_body_edit_customer_profile_window_popup_id").value;
        let gioitinhkhachhang_new = edit_customer_profile_popup.querySelector("#gioitinh_info_body_edit_customer_profile_window_popup_id").value;
        let hokhachhang_new = edit_customer_profile_popup.querySelector("#hokhachhang_info_body_edit_customer_profile_window_popup_id").value;
        let tenkhachhang_new = edit_customer_profile_popup.querySelector("#tenkhachhang_info_body_edit_customer_profile_window_popup_id").value;
        let emailkhachhang_new = edit_customer_profile_popup.querySelector("#emailkhachhang_info_body_edit_customer_profile_window_popup_id").value;
        let sdtkhachhang_new = edit_customer_profile_popup.querySelector("#sdtkhachhang_info_body_edit_customer_profile_window_popup_id").value;
        let ngaysinhkhachhang_new = edit_customer_profile_popup.querySelector("#ngaysinh_info_body_edit_customer_profile_window_popup_id").value;
        let matkhaukhachhang_new = edit_customer_profile_popup.querySelector("#matkhau_info_body_edit_customer_profile_window_popup_id").value;
        let confirmmatkhaukhachhang_new = edit_customer_profile_popup.querySelector("#confirmmatkhau_info_body_edit_customer_profile_window_popup_id").value;
        if (matkhaukhachhang_new == confirmmatkhaukhachhang_new) {
            let form_cs = new FormData();
            form_cs.append("idkhachhang", idkhachhang_cu);
            form_cs.append("idkhachhang_new", idkhachhang_new);
            form_cs.append("gioitinhkhachhang_new", gioitinhkhachhang_new);
            form_cs.append("hokhachhang_new", hokhachhang_new);
            form_cs.append("tenkhachhang_new", tenkhachhang_new);
            form_cs.append("emailkhachhang_new", emailkhachhang_new);
            form_cs.append("sdtkhachhang_new", sdtkhachhang_new);
            form_cs.append("ngaysinhkhachhang_new", ngaysinhkhachhang_new);
            form_cs.append("matkhaukhachhang_new", matkhaukhachhang_new);
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/Update_Change_Detail_KhachHangInFo";
            xhr.open("POST", url, true);
            xhr.timeout = 500000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let result = this.responseText;
                    if (result == "Success") {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Cập nhật thông tin thành công!";
                        edit_customer_profile_popup.classList.remove('show');
                        notification_status_iud_data_popup.classList.add('show');
                        Load_Data_For_DSKhachHang();
                    }
                }
            }
            xhr.send(form_cs);
        }
        else {
            notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Mật khẩu không trùng khớp!";
            notification_status_iud_data_popup.classList.add('show');
        }
    }

    function Add_Event_For_DSKhachHang() {
        // Xử lý checkbox và bật tắt nút xóa của danh sách khách hàng - begin
        var checkbox_checked_count_customer_table_data_window_dskhachhang = 0;
        var checkbox_total_customer_table_data_window_dskhachhang = $('.list_customer_table_data_window_dskhachhang input.checkbox_check_list_customer_table_data_window_dskhachhang').length;
        function turn_off_btn_delete_customer_dskhachhang_window() {
            if (!btn_delete_many_customer_window_dskhachhang.classList.contains('turn_off_btn')) {
                btn_delete_many_customer_window_dskhachhang.classList.add('turn_off_btn');
            }
        }
        function turn_on_btn_delete_customer_dskhachhang_window() {
            if (btn_delete_many_customer_window_dskhachhang.classList.contains('turn_off_btn')) {
                btn_delete_many_customer_window_dskhachhang.classList.remove('turn_off_btn');
            }
        }
        if ($("#checkbox_checkall_list_customer_table_data_window_dskhachhang").prop("checked")) {
            $('.list_customer_table_data_window_dskhachhang input.checkbox_check_list_customer_table_data_window_dskhachhang').prop('checked', true);
            turn_on_btn_delete_customer_dskhachhang_window();
        }
        else if (!$("#checkbox_checkall_list_customer_table_data_window_dskhachhang").prop("checked")) {
            $('.list_customer_table_data_window_dskhachhang input.checkbox_check_list_customer_table_data_window_dskhachhang').prop('checked', false);
            turn_off_btn_delete_customer_dskhachhang_window();
        }
        $("#checkbox_checkall_list_customer_table_data_window_dskhachhang").click(function () {
            $('.list_customer_table_data_window_dskhachhang input.checkbox_check_list_customer_table_data_window_dskhachhang').prop('checked', $(this).prop('checked'));
            if ($(this).prop('checked')) {
                checkbox_checked_count_customer_table_data_window_dskhachhang = checkbox_total_customer_table_data_window_dskhachhang;
                turn_on_btn_delete_customer_dskhachhang_window();
            }
            else {
                checkbox_checked_count_customer_table_data_window_dskhachhang = 0;
                turn_off_btn_delete_customer_dskhachhang_window();
            }
        });
        $(".list_customer_table_data_window_dskhachhang input.checkbox_check_list_customer_table_data_window_dskhachhang").click(function () {
            if (!$(this).prop("checked")) {
                $("#checkbox_checkall_list_customer_table_data_window_dskhachhang").prop("checked", false);
                checkbox_checked_count_customer_table_data_window_dskhachhang = checkbox_checked_count_customer_table_data_window_dskhachhang - 1;
                if (checkbox_checked_count_customer_table_data_window_dskhachhang == 0) {
                    turn_off_btn_delete_customer_dskhachhang_window();
                }
            }
            else {
                checkbox_checked_count_customer_table_data_window_dskhachhang = checkbox_checked_count_customer_table_data_window_dskhachhang + 1;
                if (checkbox_checked_count_customer_table_data_window_dskhachhang != 0) {
                    turn_on_btn_delete_customer_dskhachhang_window();
                }
                if (checkbox_checked_count_customer_table_data_window_dskhachhang == checkbox_total_customer_table_data_window_dskhachhang) {
                    $("#checkbox_checkall_list_customer_table_data_window_dskhachhang").prop("checked", true);
                }
            }
        });
        // Xử lý checkbox và bật tắt nút xóa của danh sách khách hàng - end
        var list_khachhhang_dskhachhang_main_working_window = dskhachhang_main_working_window.querySelectorAll(".data_window_dskhachhang .list_customer_table_data_window_dskhachhang tbody tr");
        list_khachhhang_dskhachhang_main_working_window.forEach(function (customer) {
            var btn_edit_customer = customer.querySelector(".function_edit_delete_list_customer_table_data_window_dskhachhang .btn_edit_list_customer_table_data_window_dskhachhang");
            btn_edit_customer.onclick = function (e) {
                Load_Data_For_Detail_KhacHang(customer)
                close_edit_customer_profile_popup.onclick = function () {
                    edit_customer_profile_popup.classList.remove('show');
                }
                cancel_edit_customer_profile_popup.onclick = function () {
                    edit_customer_profile_popup.classList.remove('show');
                }
                confirm_save_edit_customer_profile_popup.onclick = function () {
                    Update_Change_Detail_KhachHangInFo();
                }
            }
        });
    }


    function Load_Data_For_DSKhachHang() {
        filter_dskhachhang_info_dskh.querySelector("#enter_customer_code_filter_dskhachhang_info").value = "";
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/Load_Data_For_DSKhachHang";
        xhr.open("POST", url, true);
        xhr.timeout = 500000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = "";
                let data_dskh = JSON.parse(this.response);
                if (data_dskh.length > 0) {
                    for (let i = 0; i < data_dskh.length; i++) {
                        result = result + '<tr makhachhang = ' + data_dskh[i]["idKhachHang"] + '>' +
                            '<td class="check_list_customer_table_data_window_dskhachhang"><input type="checkbox" class="checkbox_check_list_customer_table_data_window_dskhachhang"></td>' +
                            '<td class="makhachhang_list_customer_table_data_window_dskhachhang">' + data_dskh[i]["idKhachHang"] + '</td>' +
                            '<td class="hoten_list_customer_table_data_window_dskhachhang">' + data_dskh[i]["tenKhachHang"] + '</td>' +
                            '<td class="gioitinh_list_customer_table_data_window_dskhachhang">' + ((data_dskh[i]["gioiTinh"] == 1) ? "Nam" : "Nữ") + '</td>' +
                                '<td class="ngaysinh_list_customer_table_data_window_dskhachhang">' + formatDay(new Date(data_dskh[i]["ngaySinh"])) + '</td>' +
                                '<td class="sodienthoai_list_customer_table_data_window_dskhachhang">' + ((data_dskh[i]["sdt"] == "") ? "Không" : data_dskh[i]["sdt"]) + '</td>' +
                                '<td class="email_list_customer_table_data_window_dskhachhang">' + data_dskh[i]["email"] + '</td>' +
                                '<td class="function_edit_delete_list_customer_table_data_window_dskhachhang">' +
                                '<button class="btn_edit_list_customer_table_data_window_dskhachhang"><i class="fa fa-edit" style="font-size:1rem"></i></button>' +
                                '</td>' +
                        '</tr>';
                    }
                    body_table_khachhang_dskhachhang_main_working_window.innerHTML = result;
                    Add_Event_For_DSKhachHang();
                }
                else {
                    body_table_khachhang_dskhachhang_main_working_window.innerHTML = "<tr> <td colspan='8'>Không có khách hàng nào để hiển thị!</tr>";;
                }
            }
        }
        xhr.send();
    }

    var dskhachhang_main_working_window = document.getElementById("dskhachhang_main_working_window_id");
    var body_table_khachhang_dskhachhang_main_working_window = dskhachhang_main_working_window.querySelector(".data_window_dskhachhang .list_customer_table_data_window_dskhachhang tbody");
    var dskhachhang_selection_menu = document.getElementById("dskhachhang_selection_name_icon_id");
    dskhachhang_selection_menu.onclick = function () {
        list_option_menu_burger.forEach(function (b) {
            if (b !== dskhachhang_main_working_window && b.classList.contains('show')) {
                b.classList.remove('show');
            }
        })
        if (!dskhachhang_main_working_window.classList.contains('show')) {
            dskhachhang_main_working_window.classList.add('show');
        }
        Load_Data_For_DSKhachHang();
    }
    var edit_customer_profile_popup = dskhachhang_main_working_window.querySelector("#edit_customer_profile_window_popup_container_id");
    var close_edit_customer_profile_popup = edit_customer_profile_popup.querySelector("#header_close_edit_customer_profile_window_popup_id");
    var cancel_edit_customer_profile_popup = edit_customer_profile_popup.querySelector("#btn_cancel_edit_customer_profile_window_popup");
    var confirm_save_edit_customer_profile_popup = edit_customer_profile_popup.querySelector("#btn_save_edit_customer_profile_window_popup");
    //edit_customer_profile_popup.querySelector("#confirmmatkhau_info_body_edit_customer_profile_window_popup_id").onkeyup = function () {
    //    if (edit_customer_profile_popup.querySelector("#matkhau_info_body_edit_customer_profile_window_popup_id").value != edit_customer_profile_popup.querySelector("#confirmmatkhau_info_body_edit_customer_profile_window_popup_id").value) {
    //        edit_customer_profile_popup.querySelector("#confirmmatkhau_info_body_edit_customer_profile_window_popup_id").style.border = "0.1rem solid #9E0909";
    //    }
    //    else {
    //        edit_customer_profile_popup.querySelector("#confirmmatkhau_info_body_edit_customer_profile_window_popup_id").style.border = "0.1rem solid black";
    //    }
    //}



    var btn_delete_many_customer_window_dskhachhang = dskhachhang_main_working_window.querySelector("#btn_delete_many_list_customer_table_data_window_dskhachhang_id");
    var notification_confirm_delete_customer_popup = dskhachhang_main_working_window.querySelector("#notification_confirm_delete_customer_window_container_id");
    btn_delete_many_customer_window_dskhachhang.onclick = function () {
        notification_confirm_delete_customer_popup.classList.add('show');
        var close_notification_confirm_delete_customer_popup = notification_confirm_delete_customer_popup.querySelector("#header_close_notification_confirm_delete_customer_window_id");
        var cancel_notification_confirm_delete_customer_popup = notification_confirm_delete_customer_popup.querySelector("#btn_cancel_notification_delete_customer_window");
        close_notification_confirm_delete_customer_popup.onclick = function () {
            notification_confirm_delete_customer_popup.classList.remove('show');
        }
        cancel_notification_confirm_delete_customer_popup.onclick = function () {
            notification_confirm_delete_customer_popup.classList.remove('show');
        }
    }

    var filter_dskhachhang_info_dskh = dskhachhang_main_working_window.querySelector("#filter_dskhachhang_info");
    function Load_Data_For_DSKhachHang_By_Filter(data_dskh) {
        if (data_dskh.length > 0) {
            let result = "";
            for (let i = 0; i < data_dskh.length; i++) {
                result = result + '<tr makhachhang = ' + data_dskh[i]["idKhachHang"] + '>' +
                    '<td class="check_list_customer_table_data_window_dskhachhang"><input type="checkbox" class="checkbox_check_list_customer_table_data_window_dskhachhang"></td>' +
                    '<td class="makhachhang_list_customer_table_data_window_dskhachhang">' + data_dskh[i]["idKhachHang"] + '</td>' +
                    '<td class="hoten_list_customer_table_data_window_dskhachhang">' + data_dskh[i]["tenKhachHang"] + '</td>' +
                    '<td class="gioitinh_list_customer_table_data_window_dskhachhang">' + ((data_dskh[i]["gioiTinh"] == 1) ? "Nam" : "Nữ") + '</td>' +
                    '<td class="ngaysinh_list_customer_table_data_window_dskhachhang">' + formatDay(new Date(data_dskh[i]["ngaySinh"])) + '</td>' +
                    '<td class="sodienthoai_list_customer_table_data_window_dskhachhang">' + ((data_dskh[i]["sdt"] == "") ? "Không" : data_dskh[i]["sdt"]) + '</td>' +
                    '<td class="email_list_customer_table_data_window_dskhachhang">' + data_dskh[i]["email"] + '</td>' +
                    '<td class="function_edit_delete_list_customer_table_data_window_dskhachhang">' +
                    '<button class="btn_edit_list_customer_table_data_window_dskhachhang"><i class="fa fa-edit" style="font-size:1rem"></i></button>' +
                    '</td>' +
                    '</tr>';
            }
            body_table_khachhang_dskhachhang_main_working_window.innerHTML = result;
            Add_Event_For_DSKhachHang();
        }
        else {
            body_table_khachhang_dskhachhang_main_working_window.innerHTML = "<tr> <td colspan='8'>Không có khách hàng nào bạn cần tìm</tr>";
        }
    }
    $(filter_dskhachhang_info_dskh).submit(function (e) {
        e.preventDefault(); // prevent actual form submit
        var form = $(this);
        var url = form.attr('action'); //get submit url [replace url here if desired]
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(), // serializes form input
            success: function (data) {
                Load_Data_For_DSKhachHang_By_Filter(data);
            }
        });
    });
    // Sự kiện trong màn hình làm việc của Danh sách khách hàng - end


    // Sự kiện trong màn hình làm việc của Quản lý nhân viên - begin

    function Update_Change_Detail_NhanVienInFo() {
        let idnhanvien_cu = edit_staff_profile_popup.getAttribute("manhanviencu");
        let idnhanvien_new = edit_staff_profile_popup.querySelector("#cccd_data_info_edit_staff_profile_popup_window").value;
        let gioitinhnhanvien_new = edit_staff_profile_popup.querySelector("#gioitinh_data_info_edit_staff_profile_popup_window").value;
        let tennhanvien_new = edit_staff_profile_popup.querySelector("#hoten_data_info_edit_staff_profile_popup_window").value;
        let emailnhanvien_new = edit_staff_profile_popup.querySelector("#email_data_info_edit_staff_profile_popup_window").value;
        let sdtnhanvien_new = edit_staff_profile_popup.querySelector("#sdt_data_info_edit_staff_profile_popup_window").value;
        let ngaysinhnhanvien_new = edit_staff_profile_popup.querySelector("#ngaysinh_data_info_edit_staff_profile_popup_window").value;
        let matkhaunhanvien_new = edit_staff_profile_popup.querySelector("#matkhau_data_info_edit_staff_profile_popup_window").value;
        let machucvunhanvien_new = edit_staff_profile_popup.querySelector("#chucvu_data_info_edit_staff_profile_popup_window").value;
        let machinhanhnhanvien_new = edit_staff_profile_popup.querySelector("#chinhanh_data_info_edit_staff_profile_popup_window").value;
        if (tennhanvien_new != "" && idnhanvien_new != "" && ngaysinhnhanvien_new != "" && matkhaunhanvien_new != "") {
            let form_cs = new FormData();
            form_cs.append("idnhanvien", idnhanvien_cu);
            form_cs.append("idnhanvien_new", idnhanvien_new);
            form_cs.append("gioitinhnhanvien_new", gioitinhnhanvien_new);
            form_cs.append("tennhanvien_new", tennhanvien_new);
            form_cs.append("emailnhanvien_new", emailnhanvien_new);
            form_cs.append("ngaysinhnhanvien_new", ngaysinhnhanvien_new);
            form_cs.append("sdtnhanvien_new", sdtnhanvien_new);
            form_cs.append("matkhaunhanvien_new", matkhaunhanvien_new);
            form_cs.append("machucvunhanvien_new", machucvunhanvien_new);
            form_cs.append("machinhanhnhanvien_new", machinhanhnhanvien_new);
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/Update_Change_Detail_NhanVienInFo";
            xhr.open("POST", url, true);
            xhr.timeout = 500000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let result = this.responseText;
                    if (result == "Success") {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Cập nhật thông tin thành công!";
                        edit_staff_profile_popup.classList.remove('show');
                        edit_staff_profile_popup.classList.remove('admin_role_edit_staff');
                        notification_status_iud_data_popup.classList.add('show');
                        Load_Data_For_DSNhanVien();
                    }
                    else {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Cập nhật thông tin thất bại!";
                        notification_status_iud_data_popup.classList.add('show');
                    }
                }
            }
            xhr.send(form_cs);
        }
        else {
            notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Vui lòng nhập đầy đủ thông tin!";
            notification_status_iud_data_popup.classList.add('show');
        }
    }


    function Load_Data_For_Detail_NhanVien(staff) {
        let xhr_cncv = new XMLHttpRequest();
        let url_cncv = "https://localhost:5001/QuanLy/Load_Info_For_PopUp_Edit_NhanVien";
        xhr_cncv.open("POST", url_cncv, true);
        xhr_cncv.timeout = 500000;
        xhr_cncv.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let cncv = JSON.parse(this.response);
                let count = cncv[cncv.length - 1]["sl_chinhanh"];
                let option_cn = "";
                for (let j = 0; j <= count; j++) {
                    option_cn = option_cn + '<option value = ' + cncv[j]["idChiNhanh"] + '>' + cncv[j]["idChiNhanh"] + '</option>';
                }
                edit_staff_profile_popup.querySelector("#chinhanh_data_info_edit_staff_profile_popup_window").innerHTML = option_cn;
                let option_cv = "";
                for (let k = count + 1; k < cncv.length - 1; k++) {
                    option_cv = option_cv + '<option value = ' + cncv[k]["idChucVu"] + '>' + cncv[k]["tenChucVu"] + '</option>';
                }
                edit_staff_profile_popup.querySelector("#chucvu_data_info_edit_staff_profile_popup_window").innerHTML = option_cv;

                let manhanvien = staff.getAttribute("manhanvien");
                let xhr = new XMLHttpRequest();
                let url = "https://localhost:5001/QuanLy/Load_Data_For_Detail_NhanVien?manhanvien=" + manhanvien;
                xhr.open("POST", url, true);
                xhr.timeout = 500000;
                xhr.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        let data_nv = JSON.parse(this.response);
                        if (data_nv != "") {
                            edit_staff_profile_popup.removeAttribute("manhanviencu");
                            edit_staff_profile_popup.setAttribute("manhanviencu", manhanvien);
                            edit_staff_profile_popup.querySelector("#hoten_data_info_edit_staff_profile_popup_window").value = data_nv["tenNhanVien"];
                            edit_staff_profile_popup.querySelector("#cccd_data_info_edit_staff_profile_popup_window").value = data_nv["idNhanVien"];
                            edit_staff_profile_popup.querySelector("#sdt_data_info_edit_staff_profile_popup_window").value = data_nv["sdt"];
                            edit_staff_profile_popup.querySelector("#ngaysinh_data_info_edit_staff_profile_popup_window").value = data_nv["ngaySinh"];
                            edit_staff_profile_popup.querySelector("#email_data_info_edit_staff_profile_popup_window").value = data_nv["email"];
                            edit_staff_profile_popup.querySelector("#chucvu_data_info_edit_staff_profile_popup_window").value = data_nv["idChucVu"];
                            edit_staff_profile_popup.querySelector("#chinhanh_data_info_edit_staff_profile_popup_window").value = data_nv["idChiNhanh"];
                            edit_staff_profile_popup.querySelector("#ngayvaolam_data_info_edit_staff_profile_popup_window").value = data_nv["ngayVaoLam"];
                            edit_staff_profile_popup.querySelector("#gioitinh_data_info_edit_staff_profile_popup_window").value = data_nv["gioiTinh"];
                            edit_staff_profile_popup.querySelector("#matkhau_data_info_edit_staff_profile_popup_window").value = data_nv["matKhau"];
                            edit_staff_profile_popup.classList.add('show');
                            edit_staff_profile_popup.classList.add('admin_role_edit_staff');
                        }
                        else {
                            notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Không tìm thấy nhân viên!";
                            notification_status_iud_data_popup.classList.add('show');
                        }
                    }
                }
                xhr.send();
            }
        }
        xhr_cncv.send();
    }


    function Add_Event_For_DSNhanVien() {
        // Xử lý checkbox và bật tắt nút xóa của quản lý nhân viên - begin
        var checkbox_checked_count_staff_table_data_window_quanlynhanvien = 0;
        var checkbox_total_staff_table_data_window_quanlynhanvien = $('.list_staff_table_data_window_quanlynhanvien input.checkbox_check_list_staff_table_data_window_quanlynhanvien').length;
        function turn_off_btn_delete_staff_quanlynhanvien_window() {
            if (!btn_delete_many_staff_window_quanlynhanvien.classList.contains('turn_off_btn')) {
                btn_delete_many_staff_window_quanlynhanvien.classList.add('turn_off_btn');
            }
        }
        function turn_on_btn_delete_staff_quanlynhanvien_window() {
            if (btn_delete_many_staff_window_quanlynhanvien.classList.contains('turn_off_btn')) {
                btn_delete_many_staff_window_quanlynhanvien.classList.remove('turn_off_btn');
            }
        }
        if ($("#checkbox_checkall_list_staff_table_data_window_quanlynhanvien").prop("checked")) {
            $('.list_staff_table_data_window_quanlynhanvien input.checkbox_check_list_staff_table_data_window_quanlynhanvien').prop('checked', true);
            turn_on_btn_delete_staff_quanlynhanvien_window();
        }
        else if (!$("#checkbox_checkall_list_staff_table_data_window_quanlynhanvien").prop("checked")) {
            $('.list_staff_table_data_window_quanlynhanvien input.checkbox_check_list_staff_table_data_window_quanlynhanvien').prop('checked', false);
            turn_off_btn_delete_staff_quanlynhanvien_window();
        }
        $("#checkbox_checkall_list_staff_table_data_window_quanlynhanvien").click(function () {
            $('.list_staff_table_data_window_quanlynhanvien input.checkbox_check_list_staff_table_data_window_quanlynhanvien').prop('checked', $(this).prop('checked'));
            if ($(this).prop('checked')) {
                checkbox_checked_count_staff_table_data_window_quanlynhanvien = checkbox_total_staff_table_data_window_quanlynhanvien;
                turn_on_btn_delete_staff_quanlynhanvien_window();
            }
            else {
                checkbox_checked_count_staff_table_data_window_quanlynhanvien = 0;
                turn_off_btn_delete_staff_quanlynhanvien_window();
            }
        });
        $(".list_staff_table_data_window_quanlynhanvien input.checkbox_check_list_staff_table_data_window_quanlynhanvien").click(function () {
            if (!$(this).prop("checked")) {
                $("#checkbox_checkall_list_staff_table_data_window_quanlynhanvien").prop("checked", false);
                checkbox_checked_count_staff_table_data_window_quanlynhanvien = checkbox_checked_count_staff_table_data_window_quanlynhanvien - 1;
                if (checkbox_checked_count_staff_table_data_window_quanlynhanvien == 0) {
                    turn_off_btn_delete_staff_quanlynhanvien_window();
                }
            }
            else {
                checkbox_checked_count_staff_table_data_window_quanlynhanvien = checkbox_checked_count_staff_table_data_window_quanlynhanvien + 1;
                if (checkbox_checked_count_staff_table_data_window_quanlynhanvien != 0) {
                    turn_on_btn_delete_staff_quanlynhanvien_window();
                }
                if (checkbox_checked_count_staff_table_data_window_quanlynhanvien == checkbox_total_staff_table_data_window_quanlynhanvien) {
                    $("#checkbox_checkall_list_staff_table_data_window_quanlynhanvien").prop("checked", true);
                }
            }
        });
    // Xử lý checkbox và bật tắt nút xóa của quản lý nhân viên - end
        var list_nhanvien_quanlynhanvien_main_working_window = quanlynhanvien_main_working_window.querySelectorAll(".data_window_quanlynhanvien .list_staff_table_data_window_quanlynhanvien tbody tr");
        list_nhanvien_quanlynhanvien_main_working_window.forEach(function (staff) {
            var btn_edit_staff = staff.querySelector(".function_edit_delete_list_staff_table_data_window_quanlynhanvien .btn_edit_list_staff_table_data_window_quanlynhanvien");
            btn_edit_staff.onclick = function (e) {
                Load_Data_For_Detail_NhanVien(staff);
                close_edit_staff_profile_popup.onclick = function () {
                    edit_staff_profile_popup.classList.remove('show');
                    edit_staff_profile_popup.classList.remove('admin_role_edit_staff');
                }
                cancel_edit_staff_profile_popup.onclick = function () {
                    edit_staff_profile_popup.classList.remove('show');
                    edit_staff_profile_popup.classList.remove('admin_role_edit_staff');
                }
                confirm_save_edit_staff_profile_popup.onclick = function () {
                    Update_Change_Detail_NhanVienInFo();
                }
            }
        });
    }

    function Load_Data_For_DSNhanVien() {
        filter_dsnhanvien_info_dsnv.querySelector("#enter_staff_code_filter_quanlynhanvien_info").value = "";
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/Load_Data_For_DSNhanVien";
        xhr.open("POST", url, true);
        xhr.timeout = 500000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = "";
                let data_dsnv = JSON.parse(this.response);
                if (data_dsnv.length > 0) {
                    for (let i = 0; i < data_dsnv.length; i++) {
                        result = result + '<tr manhanvien = ' + data_dsnv[i]["idNhanVien"] + '>' +
                            '<td class="check_list_staff_table_data_window_quanlynhanvien"><input type="checkbox" class="checkbox_check_list_staff_table_data_window_quanlynhanvien"></td>' +
                            '<td class="manhanvien_list_staff_table_data_window_quanlynhanvien">' + data_dsnv[i]["idNhanVien"] + '</td>' +
                            '<td class="hoten_list_staff_table_data_window_quanlynhanvien">' + data_dsnv[i]["tenNhanVien"] + '</td>' +
                            '<td class="ngaysinh_list_staff_table_data_window_quanlynhanvien">' + formatDay(new Date(data_dsnv[i]["ngaySinh"])) + '</td>' +
                            '<td class="sodienthoai_list_staff_table_data_window_quanlynhanvien">' + ((data_dsnv[i]["sdt"] == "") ? "Không" : data_dsnv[i]["sdt"]) + '</td>' +
                            '<td class="email_list_staff_table_data_window_quanlynhanvien">' + ((data_dsnv[i]["email"] == "") ? "Không" : data_dsnv[i]["email"]) + '</td>' +
                            '<td class="machucvu_list_staff_table_data_window_quanlynhanvien">' + data_dsnv[i]["tenChucVu"] + '</td>' +
                            '<td class="function_edit_delete_list_staff_table_data_window_quanlynhanvien">' +
                            '<button class="btn_edit_list_staff_table_data_window_quanlynhanvien"><i class="fa fa-edit" style="font-size:1rem"></i></button>' +
                            '</td>' +
                            '</tr>';
                    }
                    body_table_nhanvien_dsnhanvien_main_working_window.innerHTML = result;
                    Add_Event_For_DSNhanVien();
                }
                else {
                    body_table_nhanvien_dsnhanvien_main_working_window.innerHTML = "<tr> <td colspan='8'>Không có nhân viên nào để hiển thị</tr>";
                }
            }
        }
        xhr.send();
    }

    function Load_Data_For_Create_Staff_DSNhanVien() {
        let xhr_cncv = new XMLHttpRequest();
        let url_cncv = "https://localhost:5001/QuanLy/Load_Info_For_PopUp_Edit_NhanVien";
        xhr_cncv.open("POST", url_cncv, true);
        xhr_cncv.timeout = 500000;
        xhr_cncv.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let cncv = JSON.parse(this.response);
                let count = cncv[cncv.length - 1]["sl_chinhanh"];
                let option_cn = "";
                for (let j = 0; j <= count; j++) {
                    option_cn = option_cn + '<option value = ' + cncv[j]["idChiNhanh"] + '>' + cncv[j]["idChiNhanh"] + '</option>';
                }
                edit_staff_profile_popup.querySelector("#chinhanh_data_info_edit_staff_profile_popup_window").innerHTML = option_cn;
                let option_cv = "";
                for (let k = count + 1; k < cncv.length - 1; k++) {
                    option_cv = option_cv + '<option value = ' + cncv[k]["idChucVu"] + '>' + cncv[k]["tenChucVu"] + '</option>';
                }
                edit_staff_profile_popup.querySelector("#chucvu_data_info_edit_staff_profile_popup_window").innerHTML = option_cv;

                edit_staff_profile_popup.querySelector("#hoten_data_info_edit_staff_profile_popup_window").value = "";
                edit_staff_profile_popup.querySelector("#cccd_data_info_edit_staff_profile_popup_window").value = "";
                edit_staff_profile_popup.querySelector("#sdt_data_info_edit_staff_profile_popup_window").value = "";
                edit_staff_profile_popup.querySelector("#ngaysinh_data_info_edit_staff_profile_popup_window").value = "";
                edit_staff_profile_popup.querySelector("#email_data_info_edit_staff_profile_popup_window").value = "";
                edit_staff_profile_popup.querySelector("#ngayvaolam_data_info_edit_staff_profile_popup_window").value = getToDay();
                edit_staff_profile_popup.querySelector("#gioitinh_data_info_edit_staff_profile_popup_window").value = 1;
                edit_staff_profile_popup.querySelector("#matkhau_data_info_edit_staff_profile_popup_window").value = "";

                edit_staff_profile_popup.classList.add('show');
                edit_staff_profile_popup.classList.add('admin_role_create_staff');
            }
        }
        xhr_cncv.send();
    }

    function Create_New_Staff_For_DSNhanVien() {
        let idnhanvien_new = edit_staff_profile_popup.querySelector("#cccd_data_info_edit_staff_profile_popup_window").value;
        let gioitinhnhanvien_new = edit_staff_profile_popup.querySelector("#gioitinh_data_info_edit_staff_profile_popup_window").value;
        let tennhanvien_new = edit_staff_profile_popup.querySelector("#hoten_data_info_edit_staff_profile_popup_window").value;
        let emailnhanvien_new = edit_staff_profile_popup.querySelector("#email_data_info_edit_staff_profile_popup_window").value;
        let sdtnhanvien_new = edit_staff_profile_popup.querySelector("#sdt_data_info_edit_staff_profile_popup_window").value;
        let ngaysinhnhanvien_new = edit_staff_profile_popup.querySelector("#ngaysinh_data_info_edit_staff_profile_popup_window").value;
        let ngayvaolamnhanvien_new = edit_staff_profile_popup.querySelector("#ngayvaolam_data_info_edit_staff_profile_popup_window").value;
        let matkhaunhanvien_new = edit_staff_profile_popup.querySelector("#matkhau_data_info_edit_staff_profile_popup_window").value;
        let machucvunhanvien_new = edit_staff_profile_popup.querySelector("#chucvu_data_info_edit_staff_profile_popup_window").value;
        let machinhanhnhanvien_new = edit_staff_profile_popup.querySelector("#chinhanh_data_info_edit_staff_profile_popup_window").value;
        if (tennhanvien_new != "" && idnhanvien_new != "" && ngaysinhnhanvien_new != "" && matkhaunhanvien_new != "") {
            let form_cs = new FormData();
            form_cs.append("idnhanvien_new", idnhanvien_new);
            form_cs.append("gioitinhnhanvien_new", gioitinhnhanvien_new);
            form_cs.append("tennhanvien_new", tennhanvien_new);
            form_cs.append("emailnhanvien_new", emailnhanvien_new);
            form_cs.append("ngaysinhnhanvien_new", ngaysinhnhanvien_new);
            form_cs.append("ngayvaolamnhanvien_new", ngayvaolamnhanvien_new);
            form_cs.append("sdtnhanvien_new", sdtnhanvien_new);
            form_cs.append("matkhaunhanvien_new", matkhaunhanvien_new);
            form_cs.append("machucvunhanvien_new", machucvunhanvien_new);
            form_cs.append("machinhanhnhanvien_new", machinhanhnhanvien_new);
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/Create_New_Staff_For_DSNhanVien";
            xhr.open("POST", url, true);
            xhr.timeout = 500000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let result = this.responseText;
                    if (result == "Success") {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Thêm nhân viên mới thành công!";
                        notification_status_iud_data_popup.classList.add('show');
                        edit_staff_profile_popup.classList.remove('show');
                        edit_staff_profile_popup.classList.remove('admin_role_create_staff');
                        Load_Data_For_DSNhanVien();
                    }
                    else {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Thêm nhân viên mới thất bại!";
                        notification_status_iud_data_popup.classList.add('show');
                    }
                }
            }
            xhr.send(form_cs);
        }
        else {
            notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Vui lòng nhập đầy đủ thông tin!";
            notification_status_iud_data_popup.classList.add('show');
        }
    }

    var quanlynhanvien_main_working_window = document.getElementById("quanlynhanvien_main_working_window_id");
    var body_table_nhanvien_dsnhanvien_main_working_window = quanlynhanvien_main_working_window.querySelector(".data_window_quanlynhanvien .list_staff_table_data_window_quanlynhanvien tbody")
    var quanlynhanvien_admin_option_name_icon = document.getElementById("quanlynhanvien_admin_option_name_icon_id");
    quanlynhanvien_admin_option_name_icon.onclick = function () {
        list_option_menu_burger.forEach(function (b) {
            if (b !== quanlynhanvien_main_working_window && b.classList.contains('show')) {
                b.classList.remove('show');
            }
        })
        if (!quanlynhanvien_main_working_window.classList.contains('show')) {
            quanlynhanvien_main_working_window.classList.add('show');
        }
        Load_Data_For_DSNhanVien();
    }


    var edit_staff_profile_popup = quanlynhanvien_main_working_window.querySelector("#edit_staff_profile_popup_window_container_id");
    var close_edit_staff_profile_popup = edit_staff_profile_popup.querySelector("#header_close_edit_staff_profile_popup_window_id");
    var cancel_edit_staff_profile_popup = edit_staff_profile_popup.querySelector("#btn_cancel_edit_staff_profile_popup_window");
    var confirm_save_edit_staff_profile_popup = edit_staff_profile_popup.querySelector("#btn_save_edit_staff_profile_popup_window");
    var create_new_edit_staff_profile_popup = edit_staff_profile_popup.querySelector("#btn_create_new_staff_profile_popup_window");


    var btn_create_new_staff_quanlynhanvien_main_working_window = quanlynhanvien_main_working_window.querySelector("#btn_create_new_staff_quanlynhanvien_main_working_window");
    btn_create_new_staff_quanlynhanvien_main_working_window.onclick = function () {
        Load_Data_For_Create_Staff_DSNhanVien();
        close_edit_staff_profile_popup.onclick = function () {
            edit_staff_profile_popup.classList.remove('show');
            edit_staff_profile_popup.classList.remove('admin_role_create_staff');
        };
        cancel_edit_staff_profile_popup.onclick = function () {
            edit_staff_profile_popup.classList.remove('show');
            edit_staff_profile_popup.classList.remove('admin_role_create_staff');
        };
        create_new_edit_staff_profile_popup.onclick = function () {
            Create_New_Staff_For_DSNhanVien();
        }
    };
    var btn_delete_many_staff_window_quanlynhanvien = quanlynhanvien_main_working_window.querySelector("#btn_delete_many_list_staff_table_data_window_quanlynhanvien_id");
    var notification_confirm_delete_staff_popup = quanlynhanvien_main_working_window.querySelector("#notification_confirm_delete_staff_window_container_id");
    btn_delete_many_staff_window_quanlynhanvien.onclick = function () {
        notification_confirm_delete_staff_popup.classList.add('show');
        var close_notification_confirm_delete_staff_popup = notification_confirm_delete_staff_popup.querySelector("#header_close_notification_confirm_delete_staff_window_id");
        var cancel_notification_confirm_delete_staff_popup = notification_confirm_delete_staff_popup.querySelector("#btn_cancel_notification_delete_staff_window");
        close_notification_confirm_delete_staff_popup.onclick = function () {
            notification_confirm_delete_staff_popup.classList.remove('show');
        }
        cancel_notification_confirm_delete_staff_popup.onclick = function () {
            notification_confirm_delete_staff_popup.classList.remove('show');
        }
    }
    var filter_dsnhanvien_info_dsnv = quanlynhanvien_main_working_window.querySelector("#filter_quanlynhanvien_info");
    function Load_Data_For_DSKNhanVien_By_Filter(data_dsnv) {
        if (data_dsnv.length > 0) {
            let result = "";
            for (let i = 0; i < data_dsnv.length; i++) {
                result = result + '<tr manhanvien = ' + data_dsnv[i]["idNhanVien"] + '>' +
                    '<td class="check_list_staff_table_data_window_quanlynhanvien"><input type="checkbox" class="checkbox_check_list_staff_table_data_window_quanlynhanvien"></td>' +
                    '<td class="manhanvien_list_staff_table_data_window_quanlynhanvien">' + data_dsnv[i]["idNhanVien"] + '</td>' +
                    '<td class="hoten_list_staff_table_data_window_quanlynhanvien">' + data_dsnv[i]["tenNhanVien"] + '</td>' +
                    '<td class="ngaysinh_list_staff_table_data_window_quanlynhanvien">' + formatDay(new Date(data_dsnv[i]["ngaySinh"])) + '</td>' +
                    '<td class="sodienthoai_list_staff_table_data_window_quanlynhanvien">' + ((data_dsnv[i]["sdt"] == "") ? "Không" : data_dsnv[i]["sdt"]) + '</td>' +
                    '<td class="email_list_staff_table_data_window_quanlynhanvien">' + ((data_dsnv[i]["email"] == "") ? "Không" : data_dsnv[i]["email"]) + '</td>' +
                    '<td class="machucvu_list_staff_table_data_window_quanlynhanvien">' + data_dsnv[i]["tenChucVu"] + '</td>' +
                    '<td class="function_edit_delete_list_staff_table_data_window_quanlynhanvien">' +
                    '<button class="btn_edit_list_staff_table_data_window_quanlynhanvien"><i class="fa fa-edit" style="font-size:1rem"></i></button>' +
                    '</td>' +
                    '</tr>';
            }
            body_table_nhanvien_dsnhanvien_main_working_window.innerHTML = result;
            Add_Event_For_DSNhanVien();
        }
        else {
            body_table_nhanvien_dsnhanvien_main_working_window.innerHTML = "<tr> <td colspan='8'>Không có nhân viên nào bạn cần tìm!</tr>";
        }
    }
    $(filter_dsnhanvien_info_dsnv).submit(function (e) {
        e.preventDefault(); // prevent actual form submit
        var form = $(this);
        var url = form.attr('action'); //get submit url [replace url here if desired]
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(), // serializes form input
            success: function (data) {
                Load_Data_For_DSKNhanVien_By_Filter(data);
            }
        });
    });
    // Sự kiện trong màn hình làm việc của Quản lý nhân viên - end


    // Sự kiện trong màn hình làm việc của Quản lý phòng - begin

    function Create_New_Room_For_DSPhong() {
        let maphong_new = edit_room_info_popup.querySelector("#maphong_data_info_edit_room_info_popup_window").value;
        let tangphong_new = edit_room_info_popup.querySelector("#tang_data_info_edit_room_info_popup_window").value;
        let chinhanhphong_new = edit_room_info_popup.querySelector("#chinhanh_data_info_edit_room_info_popup_window").value;
        let songuoiophong_new = edit_room_info_popup.querySelector("#songuoio_data_info_edit_room_info_popup_window").value;
        let loaiphong_new = edit_room_info_popup.querySelector("#loaiphong_data_info_edit_room_info_popup_window").value;
        let sogiuongphong_new = edit_room_info_popup.querySelector("#sogiuong_data_info_edit_room_info_popup_window").value;
        let sophong_new = edit_room_info_popup.querySelector("#sophong_data_info_edit_room_info_popup_window").value;
        if (maphong_new != "" && tangphong_new != "" && chinhanhphong_new != "" && songuoiophong_new != "" && loaiphong_new != "" && sogiuongphong_new != "" && sophong_new != "") {
            let form_cs = new FormData();
            form_cs.append("maphong_new", maphong_new);
            form_cs.append("tangphong_new", tangphong_new);
            form_cs.append("chinhanhphong_new", chinhanhphong_new);
            form_cs.append("songuoiophong_new", songuoiophong_new);
            form_cs.append("loaiphong_new", loaiphong_new);
            form_cs.append("sogiuongphong_new", sogiuongphong_new);
            form_cs.append("sophong_new", String(sophong_new).padStart(2, "0"));
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/Create_New_Room_For_DSPhong";
            xhr.open("POST", url, true);
            xhr.timeout = 500000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let result = this.responseText;
                    if (result == "Success") {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Thêm phòng mới thành công!";
                        notification_status_iud_data_popup.classList.add('show');
                        edit_room_info_popup.classList.remove('show');
                        edit_room_info_popup.classList.remove('admin_role_create_room');
                        Load_Data_For_DSPhong();
                    }
                    else {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Thêm phòng mới thất bại!";
                        notification_status_iud_data_popup.classList.add('show');
                    }
                }
            }
            xhr.send(form_cs);
        }
        else {
            notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Vui lòng nhập đầy đủ thông tin!";
            notification_status_iud_data_popup.classList.add('show');
        }
    }

    function Load_Data_For_Create_Room_DSPhong() {
        let xhr_cnlp = new XMLHttpRequest();
        let url_cnlp = "https://localhost:5001/QuanLy/Load_Info_For_PopUp_Edit_Room";
        xhr_cnlp.open("POST", url_cnlp, true);
        xhr_cnlp.timeout = 500000;
        xhr_cnlp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let cnlp = JSON.parse(this.response);
                let count = cnlp[cnlp.length - 1]["sl_chinhanh"];
                let option_cn = "";
                for (let j = 0; j <= count; j++) {
                    option_cn = option_cn + '<option value = ' + cnlp[j]["idChiNhanh"] + '>' + cnlp[j]["idChiNhanh"] + '</option>';
                }
                edit_room_info_popup.querySelector("#chinhanh_data_info_edit_room_info_popup_window").innerHTML = option_cn;
                let option_lp = "";
                for (let k = count + 1; k < cnlp.length - 1; k++) {
                    option_lp = option_lp + '<option value = ' + cnlp[k]["idLoaiPhong"] + '>' + cnlp[k]["tenLoaiPhong"] + '</option>';
                }
                edit_room_info_popup.querySelector("#loaiphong_data_info_edit_room_info_popup_window").innerHTML = option_lp;

                edit_room_info_popup.querySelector("#maphong_data_info_edit_room_info_popup_window").value = "HCM0101";
                edit_room_info_popup.querySelector("#tang_data_info_edit_room_info_popup_window").value = 1;
                edit_room_info_popup.querySelector("#songuoio_data_info_edit_room_info_popup_window").value = 1;
                edit_room_info_popup.querySelector("#sophong_data_info_edit_room_info_popup_window").value = 1;
                edit_room_info_popup.querySelector("#sogiuong_data_info_edit_room_info_popup_window").value = 1;

                edit_room_info_popup.classList.add('show');
                edit_room_info_popup.classList.add('admin_role_create_room');
            }
        }
        xhr_cnlp.send();
    }

    function Update_Change_Detail_PhongInFo() {
        let maphong_cu = edit_room_info_popup.getAttribute("maphongcu");
        let maphong_new = edit_room_info_popup.querySelector("#maphong_data_info_edit_room_info_popup_window").value;
        let tangphong_new = edit_room_info_popup.querySelector("#tang_data_info_edit_room_info_popup_window").value;
        let chinhanhphong_new = edit_room_info_popup.querySelector("#chinhanh_data_info_edit_room_info_popup_window").value;
        let songuoiophong_new = edit_room_info_popup.querySelector("#songuoio_data_info_edit_room_info_popup_window").value;
        let loaiphong_new = edit_room_info_popup.querySelector("#loaiphong_data_info_edit_room_info_popup_window").value;
        let sogiuongphong_new = edit_room_info_popup.querySelector("#sogiuong_data_info_edit_room_info_popup_window").value;
        let sophong_new = edit_room_info_popup.querySelector("#sophong_data_info_edit_room_info_popup_window").value;
        if (maphong_new != "" && tangphong_new != "" && chinhanhphong_new != "" && songuoiophong_new != "" && loaiphong_new != "" && sogiuongphong_new != "" && sophong_new != "") {
            let form_cs = new FormData();
            form_cs.append("maphong", maphong_cu);
            form_cs.append("maphong_new", maphong_new);
            form_cs.append("tangphong_new", tangphong_new);
            form_cs.append("chinhanhphong_new", chinhanhphong_new);
            form_cs.append("songuoiophong_new", songuoiophong_new);
            form_cs.append("loaiphong_new", loaiphong_new);
            form_cs.append("sogiuongphong_new", sogiuongphong_new);
            form_cs.append("sophong_new", String(sophong_new).padStart(2, "0"));
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/Update_Change_Detail_PhongInFo";
            xhr.open("POST", url, true);
            xhr.timeout = 500000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let result = this.responseText;
                    if (result == "Success") {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Cập nhật thông tin thành công!";
                        edit_room_info_popup.classList.remove('show');
                        edit_room_info_popup.classList.remove('admin_role_edit_room');
                        notification_status_iud_data_popup.classList.add('show');
                        Load_Data_For_DSPhong();
                    }
                    else {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Cập nhật thông tin thất bại!";
                        notification_status_iud_data_popup.classList.add('show');
                    }
                }
            }
            xhr.send(form_cs);
        }
        else {
            notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Vui lòng nhập đầy đủ thông tin!";
            notification_status_iud_data_popup.classList.add('show');
        }
    }

    function Load_Data_For_Detail_Phong_DSPhong(room) {
        let xhr_cnlp = new XMLHttpRequest();
        let url_cnlp = "https://localhost:5001/QuanLy/Load_Info_For_PopUp_Edit_Room";
        xhr_cnlp.open("POST", url_cnlp, true);
        xhr_cnlp.timeout = 500000;
        xhr_cnlp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let cnlp = JSON.parse(this.response);
                let count = cnlp[cnlp.length - 1]["sl_chinhanh"];
                let option_cn = "";
                for (let j = 0; j <= count; j++) {
                    option_cn = option_cn + '<option value = ' + cnlp[j]["idChiNhanh"] + '>' + cnlp[j]["idChiNhanh"] + '</option>';
                }
                edit_room_info_popup.querySelector("#chinhanh_data_info_edit_room_info_popup_window").innerHTML = option_cn;
                let option_lp = "";
                for (let k = count + 1; k < cnlp.length - 1; k++) {
                    option_lp = option_lp + '<option value = ' + cnlp[k]["idLoaiPhong"] + '>' + cnlp[k]["tenLoaiPhong"] + '</option>';
                }
                edit_room_info_popup.querySelector("#loaiphong_data_info_edit_room_info_popup_window").innerHTML = option_lp;

                let maphong = room.getAttribute("maphong");
                let xhr = new XMLHttpRequest();
                let url = "https://localhost:5001/QuanLy/Load_Data_For_Detail_Phong?maphong=" + maphong;
                xhr.open("POST", url, true);
                xhr.timeout = 500000;
                xhr.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        let data_phong = JSON.parse(this.response);
                        if (data_phong != "") {
                            edit_room_info_popup.removeAttribute("maphongcu");
                            edit_room_info_popup.setAttribute("maphongcu", maphong);
                            edit_room_info_popup.querySelector("#maphong_data_info_edit_room_info_popup_window").value = data_phong["idPhong"];
                            edit_room_info_popup.querySelector("#tang_data_info_edit_room_info_popup_window").value = data_phong["tang"];
                            edit_room_info_popup.querySelector("#chinhanh_data_info_edit_room_info_popup_window").value = data_phong["idChiNhanh"];
                            edit_room_info_popup.querySelector("#songuoio_data_info_edit_room_info_popup_window").value = data_phong["soNguoiO"];
                            edit_room_info_popup.querySelector("#loaiphong_data_info_edit_room_info_popup_window").value = data_phong["idLoaiPhong"];
                            edit_room_info_popup.querySelector("#sogiuong_data_info_edit_room_info_popup_window").value = data_phong["soGiuong"];
                            edit_room_info_popup.querySelector("#sophong_data_info_edit_room_info_popup_window").value = data_phong["soPhong"];
                            edit_room_info_popup.classList.add('show');
                            edit_room_info_popup.classList.add('admin_role_edit_room');
                        }
                        else {
                            notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Không tìm thấy phòng!";
                            notification_status_iud_data_popup.classList.add('show');
                        }
                    }
                }
                xhr.send();
            }
        }
        xhr_cnlp.send();
    }

    function Add_Event_For_DSPhong() {
        // Xử lý checkbox và bật tắt nút xóa của quản lý phòng - begin
        var checkbox_checked_count_room_table_data_window_quanlyphong = 0;
        var checkbox_total_room_table_data_window_quanlyphong = $('.list_room_table_data_window_quanlyphong input.checkbox_check_list_room_table_data_window_quanlyphong').length;
        function turn_off_btn_delete_room_quanlyphong_window() {
            if (!btn_delete_many_room_window_quanlyphong.classList.contains('turn_off_btn')) {
                btn_delete_many_room_window_quanlyphong.classList.add('turn_off_btn');
            }
        }
        function turn_on_btn_delete_room_quanlyphong_window() {
            if (btn_delete_many_room_window_quanlyphong.classList.contains('turn_off_btn')) {
                btn_delete_many_room_window_quanlyphong.classList.remove('turn_off_btn');
            }
        }
        if ($("#checkbox_checkall_list_room_table_data_window_quanlyphong").prop("checked")) {
            $('.list_room_table_data_window_quanlyphong input.checkbox_check_list_room_table_data_window_quanlyphong').prop('checked', true);
            turn_on_btn_delete_room_quanlyphong_window();
        }
        else if (!$("#checkbox_checkall_list_room_table_data_window_quanlyphong").prop("checked")) {
            $('.list_room_table_data_window_quanlyphong input.checkbox_check_list_room_table_data_window_quanlyphong').prop('checked', false);
            turn_off_btn_delete_room_quanlyphong_window();
        }
        $("#checkbox_checkall_list_room_table_data_window_quanlyphong").click(function () {
            $('.list_room_table_data_window_quanlyphong input.checkbox_check_list_room_table_data_window_quanlyphong').prop('checked', $(this).prop('checked'));
            if ($(this).prop('checked')) {
                checkbox_checked_count_room_table_data_window_quanlyphong = checkbox_total_room_table_data_window_quanlyphong;
                turn_on_btn_delete_room_quanlyphong_window();
            }
            else {
                checkbox_checked_count_room_table_data_window_quanlyphong = 0;
                turn_off_btn_delete_room_quanlyphong_window();
            }
        });
        $(".list_room_table_data_window_quanlyphong input.checkbox_check_list_room_table_data_window_quanlyphong").click(function () {
            if (!$(this).prop("checked")) {
                $("#checkbox_checkall_list_room_table_data_window_quanlyphong").prop("checked", false);
                checkbox_checked_count_room_table_data_window_quanlyphong = checkbox_checked_count_room_table_data_window_quanlyphong - 1;
                if (checkbox_checked_count_room_table_data_window_quanlyphong == 0) {
                    turn_off_btn_delete_room_quanlyphong_window();
                }
            }
            else {
                checkbox_checked_count_room_table_data_window_quanlyphong = checkbox_checked_count_room_table_data_window_quanlyphong + 1;
                if (checkbox_checked_count_room_table_data_window_quanlyphong != 0) {
                    turn_on_btn_delete_room_quanlyphong_window();
                }
                if (checkbox_checked_count_room_table_data_window_quanlyphong == checkbox_total_room_table_data_window_quanlyphong) {
                    $("#checkbox_checkall_list_room_table_data_window_quanlyphong").prop("checked", true);
                }
            }
        });
    // Xử lý checkbox và bật tắt nút xóa của quản lý phòng - end
        var list_room_quanlyphong_main_working_window = quanlyphong_main_working_window.querySelectorAll(".data_window_quanlyphong .list_room_table_data_window_quanlyphong tbody tr");
        list_room_quanlyphong_main_working_window.forEach(function (room) {
            var btn_edit_room = room.querySelector(".function_edit_delete_list_room_table_data_window_quanlyphong .btn_edit_list_room_table_data_window_quanlyphong");
            btn_edit_room.onclick = function (e) {
                Load_Data_For_Detail_Phong_DSPhong(room);
                close_edit_room_info_popup.onclick = function () {
                    edit_room_info_popup.classList.remove('show');
                    edit_room_info_popup.classList.remove('admin_role_edit_room');
                }
                cancel_edit_room_info_popup.onclick = function () {
                    edit_room_info_popup.classList.remove('show');
                    edit_room_info_popup.classList.remove('admin_role_edit_room');
                }
                confirm_save_edit_room_info_popup.onclick = function () {
                    Update_Change_Detail_PhongInFo();
                }
            }
        });
    }

    function Load_Data_For_DSPhong() {
        filter_dsphong_info_dsphong.querySelector("#enter_room_code_filter_quanlyphong_info").value = "";
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/Load_Data_For_DSPhong";
        xhr.open("POST", url, true);
        xhr.timeout = 500000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = "";
                let data_dsphong = JSON.parse(this.response);
                if (data_dsphong.length > 0) {
                    for (let i = 0; i < data_dsphong.length; i++) {
                        result = result + '<tr maphong = ' + data_dsphong[i]["idPhong"] + '>' +
                            '<td class="check_list_room_table_data_window_quanlyphong"><input type="checkbox" class="checkbox_check_list_room_table_data_window_quanlyphong"></td>' +
                            '<td class="maphong_list_room_table_data_window_quanlyphong">' + data_dsphong[i]["idPhong"] + '</td>' +
                            '<td class="machinhanh_list_room_table_data_window_quanlyphong">' + data_dsphong[i]["idChiNhanh"] + '</td>' +
                            '<td class="maloaiphong_list_room_table_data_window_quanlyphong">' + data_dsphong[i]["tenLoaiPhong"] + '</td>' +
                            '<td class="sophong_list_room_table_data_window_quanlyphong">' + String(data_dsphong[i]["soPhong"]).padStart(2, '0') + '</td>' +
                            '<td class="songuoio_list_room_table_data_window_quanlyphong">' + data_dsphong[i]["soNguoiO"] + '</td>' +
                            '<td class="sogiuong_list_room_table_data_window_quanlyphong">' + data_dsphong[i]["soGiuong"] + '</td>' +
                            '<td class="function_edit_delete_list_room_table_data_window_quanlyphong">' +
                            '<button class="btn_edit_list_room_table_data_window_quanlyphong"><i class="fa fa-edit" style="font-size:1rem"></i></button>' +
                            '</td>' +
                            '</tr>';
                    }
                    body_table_phong_dsphong_main_working_window.innerHTML = result;
                    Add_Event_For_DSPhong();
                }
                else {
                    body_table_phong_dsphong_main_working_window.innerHTML = "<tr> <td colspan='6'>Không có phòng nào để hiển thị</tr>";
                }
            }
        }
        xhr.send();
    }

    var quanlyphong_main_working_window = document.getElementById("quanlyphong_main_working_window_id");
    var body_table_phong_dsphong_main_working_window = quanlyphong_main_working_window.querySelector(".data_window_quanlyphong .list_room_table_data_window_quanlyphong tbody")
    var quanlyphong_admin_option_name_icon = document.getElementById("quanlyphong_admin_option_name_icon_id");
    quanlyphong_admin_option_name_icon.onclick = function () {
        list_option_menu_burger.forEach(function (b) {
            if (b !== quanlyphong_main_working_window && b.classList.contains('show')) {
                b.classList.remove('show');
            }
        })
        if (!quanlyphong_main_working_window.classList.contains('show')) {
            quanlyphong_main_working_window.classList.add('show');
        }
        Load_Data_For_DSPhong();
    }

    var edit_room_info_popup = quanlyphong_main_working_window.querySelector("#edit_room_info_popup_window_container_id");
    var close_edit_room_info_popup = edit_room_info_popup.querySelector("#header_close_edit_room_info_popup_window_id");
    var cancel_edit_room_info_popup = edit_room_info_popup.querySelector("#btn_cancel_edit_room_info_popup_window");
    var confirm_save_edit_room_info_popup = edit_room_info_popup.querySelector("#btn_save_edit_room_info_popup_window");
    var create_new_edit_room_info_popup = edit_room_info_popup.querySelector("#btn_create_new_room_edit_room_info_popup_window");


    edit_room_info_popup.querySelector("#sophong_data_info_edit_room_info_popup_window").onchange = function () {
        let sophong_tohopthanhidphong = edit_room_info_popup.querySelector("#sophong_data_info_edit_room_info_popup_window").value;
        let sotang_tohopthanhidphong = edit_room_info_popup.querySelector("#tang_data_info_edit_room_info_popup_window").value;
        let chinhanh_tohopthanhidphong = edit_room_info_popup.querySelector("#chinhanh_data_info_edit_room_info_popup_window").value;
        let tohopthanhidphong = chinhanh_tohopthanhidphong + String(sotang_tohopthanhidphong).padStart(2, "0") + String(sophong_tohopthanhidphong).padStart(2, "0");
        edit_room_info_popup.querySelector("#maphong_data_info_edit_room_info_popup_window").value = tohopthanhidphong
    }
    edit_room_info_popup.querySelector("#sophong_data_info_edit_room_info_popup_window").onkeyup = function () {
        let sophong_tohopthanhidphong = edit_room_info_popup.querySelector("#sophong_data_info_edit_room_info_popup_window").value;
        let sotang_tohopthanhidphong = edit_room_info_popup.querySelector("#tang_data_info_edit_room_info_popup_window").value;
        let chinhanh_tohopthanhidphong = edit_room_info_popup.querySelector("#chinhanh_data_info_edit_room_info_popup_window").value;
        let tohopthanhidphong = chinhanh_tohopthanhidphong + String(sotang_tohopthanhidphong).padStart(2, "0") + String(sophong_tohopthanhidphong).padStart(2, "0");
        edit_room_info_popup.querySelector("#maphong_data_info_edit_room_info_popup_window").value = tohopthanhidphong
    }
    edit_room_info_popup.querySelector("#tang_data_info_edit_room_info_popup_window").onchange = function () {
        let sophong_tohopthanhidphong = edit_room_info_popup.querySelector("#sophong_data_info_edit_room_info_popup_window").value;
        let sotang_tohopthanhidphong = edit_room_info_popup.querySelector("#tang_data_info_edit_room_info_popup_window").value;
        let chinhanh_tohopthanhidphong = edit_room_info_popup.querySelector("#chinhanh_data_info_edit_room_info_popup_window").value;
        let tohopthanhidphong = chinhanh_tohopthanhidphong + String(sotang_tohopthanhidphong).padStart(2, "0") + String(sophong_tohopthanhidphong).padStart(2, "0");
        edit_room_info_popup.querySelector("#maphong_data_info_edit_room_info_popup_window").value = tohopthanhidphong
    }
    edit_room_info_popup.querySelector("#tang_data_info_edit_room_info_popup_window").onkeyup = function () {
        let sophong_tohopthanhidphong = edit_room_info_popup.querySelector("#sophong_data_info_edit_room_info_popup_window").value;
        let sotang_tohopthanhidphong = edit_room_info_popup.querySelector("#tang_data_info_edit_room_info_popup_window").value;
        let chinhanh_tohopthanhidphong = edit_room_info_popup.querySelector("#chinhanh_data_info_edit_room_info_popup_window").value;
        let tohopthanhidphong = chinhanh_tohopthanhidphong + String(sotang_tohopthanhidphong).padStart(2, "0") + String(sophong_tohopthanhidphong).padStart(2, "0");
        edit_room_info_popup.querySelector("#maphong_data_info_edit_room_info_popup_window").value = tohopthanhidphong
    }
    edit_room_info_popup.querySelector("#chinhanh_data_info_edit_room_info_popup_window").onchange = function () {
        let sophong_tohopthanhidphong = edit_room_info_popup.querySelector("#sophong_data_info_edit_room_info_popup_window").value;
        let sotang_tohopthanhidphong = edit_room_info_popup.querySelector("#tang_data_info_edit_room_info_popup_window").value;
        let chinhanh_tohopthanhidphong = edit_room_info_popup.querySelector("#chinhanh_data_info_edit_room_info_popup_window").value;
        let tohopthanhidphong = chinhanh_tohopthanhidphong + String(sotang_tohopthanhidphong).padStart(2, "0") + String(sophong_tohopthanhidphong).padStart(2, "0");
        edit_room_info_popup.querySelector("#maphong_data_info_edit_room_info_popup_window").value = tohopthanhidphong
    }

    
    var btn_create_new_room_quanlyphong_main_working_window = quanlyphong_main_working_window.querySelector("#btn_create_new_room_quanlyphong_main_working_window_id");
    btn_create_new_room_quanlyphong_main_working_window.onclick = function () {
        Load_Data_For_Create_Room_DSPhong();
        close_edit_room_info_popup.onclick = function () {
            edit_room_info_popup.classList.remove('show');
            edit_room_info_popup.classList.remove('admin_role_create_room');
        };
        cancel_edit_room_info_popup.onclick = function () {
            edit_room_info_popup.classList.remove('show');
            edit_room_info_popup.classList.remove('admin_role_create_room');
        };
        create_new_edit_room_info_popup.onclick = function () {
            Create_New_Room_For_DSPhong();
        }
    };
    var btn_delete_many_room_window_quanlyphong = quanlyphong_main_working_window.querySelector("#btn_delete_many_list_room_table_data_window_quanlyphong_id");
    var notification_confirm_delete_room_popup = quanlyphong_main_working_window.querySelector("#notification_confirm_delete_room_window_container_id");
    btn_delete_many_room_window_quanlyphong.onclick = function () {
        notification_confirm_delete_room_popup.classList.add('show');
        var close_notification_confirm_delete_room_popup = notification_confirm_delete_room_popup.querySelector("#header_close_notification_confirm_delete_room_window_id");
        var cancel_notification_confirm_delete_room_popup = notification_confirm_delete_room_popup.querySelector("#btn_cancel_notification_delete_room_window");
        close_notification_confirm_delete_room_popup.onclick = function () {
            notification_confirm_delete_room_popup.classList.remove('show');
        }
        cancel_notification_confirm_delete_room_popup.onclick = function () {
            notification_confirm_delete_room_popup.classList.remove('show');
        }
    }
    var filter_dsphong_info_dsphong = quanlyphong_main_working_window.querySelector("#filter_quanlyphong_info");
    function Load_Data_For_DSPhong_By_Filter(data_dsphong) {
        if (data_dsphong.length > 0) {
            result = "";
            for (let i = 0; i < data_dsphong.length; i++) {
                result = result + '<tr maphong = ' + data_dsphong[i]["idPhong"] + '>' +
                    '<td class="check_list_room_table_data_window_quanlyphong"><input type="checkbox" class="checkbox_check_list_room_table_data_window_quanlyphong"></td>' +
                    '<td class="maphong_list_room_table_data_window_quanlyphong">' + data_dsphong[i]["idPhong"] + '</td>' +
                    '<td class="machinhanh_list_room_table_data_window_quanlyphong">' + data_dsphong[i]["idChiNhanh"] + '</td>' +
                    '<td class="maloaiphong_list_room_table_data_window_quanlyphong">' + data_dsphong[i]["tenLoaiPhong"] + '</td>' +
                    '<td class="sophong_list_room_table_data_window_quanlyphong">' + String(data_dsphong[i]["soPhong"]).padStart(2, '0') + '</td>' +
                    '<td class="songuoio_list_room_table_data_window_quanlyphong">' + data_dsphong[i]["soNguoiO"] + '</td>' +
                    '<td class="sogiuong_list_room_table_data_window_quanlyphong">' + data_dsphong[i]["soGiuong"] + '</td>' +
                    '<td class="function_edit_delete_list_room_table_data_window_quanlyphong">' +
                    '<button class="btn_edit_list_room_table_data_window_quanlyphong"><i class="fa fa-edit" style="font-size:1rem"></i></button>' +
                    '</td>' +
                    '</tr>';
            }
            body_table_phong_dsphong_main_working_window.innerHTML = result;
            Add_Event_For_DSPhong();
        }
        else {
            body_table_phong_dsphong_main_working_window.innerHTML = "<tr> <td colspan='6'>Không có phòng nào bạn muốn tìm!</tr>";
        }
    }
    $(filter_dsphong_info_dsphong).submit(function (e) {
        e.preventDefault(); // prevent actual form submit
        var form = $(this);
        var url = form.attr('action'); //get submit url [replace url here if desired]
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(), // serializes form input
            success: function (data) {
                Load_Data_For_DSPhong_By_Filter(data);
            }
        });
    });
        // Sự kiện trong màn hình làm việc của Quản lý phòng - end



    // Sự kiện trong màn hình làm việc của Quản lý loại phòng - begin

    function Update_Change_Detail_LoaiPhongInFo() {
        let idloaiphong = edit_roomtype_info_popup.querySelector("#maloaiphong_data_info_edit_roomtype_info_popup_window").value;
        let tenloaiphong = edit_roomtype_info_popup.querySelector("#tenloaiphong_data_info_edit_roomtype_info_popup_window").value;
        let giatien = edit_roomtype_info_popup.querySelector("#giatien_data_info_edit_roomtype_info_popup_window").value;
        let giacoc = edit_roomtype_info_popup.querySelector("#giacoc_data_info_edit_roomtype_info_popup_window").value;
        let kichthuocphong = edit_roomtype_info_popup.querySelector("#kichthuocphong_data_info_edit_roomtype_info_popup_window").value;
        let tulanh = (edit_roomtype_info_popup.querySelector("#checkbox_tulanh_data_info_edit_roomtype_info_popup_window").checked == true) ? 1 : 0;
        let maylanh = (edit_roomtype_info_popup.querySelector("#checkbox_maylanh_data_info_edit_roomtype_info_popup_window").checked == true) ? 1: 0;
        let mota = edit_roomtype_info_popup.querySelector("#mota_data_info_edit_roomtype_info_popup_window").value;
        if (kichthuocphong != "" && tenloaiphong != "") {
            let form_cs = new FormData();
            form_cs.append("idloaiphong", idloaiphong);
            form_cs.append("tenloaiphong", tenloaiphong);
            form_cs.append("giatien", giatien);
            form_cs.append("giacoc", giacoc);
            form_cs.append("kichthuocphong", kichthuocphong);
            form_cs.append("tulanh", tulanh);
            form_cs.append("maylanh", maylanh);
            form_cs.append("mota", mota);
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/Update_Change_Detail_LoaiPhongInFo";
            xhr.open("POST", url, true);
            xhr.timeout = 500000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let result = this.responseText;
                    if (result == "Success") {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Cập nhật thông tin thành công!";
                        edit_roomtype_info_popup.classList.remove('show');
                        edit_roomtype_info_popup.classList.remove('admin_role_edit_roomtype');
                        notification_status_iud_data_popup.classList.add('show');
                        Load_Data_For_DSLoaiPhong();
                    }
                }
            }
            xhr.send(form_cs);
        }
        else {
            notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Vui lòng nhập thông tin cần thiết!";
            notification_status_iud_data_popup.classList.add('show');
        }
    }

    function Load_Data_Detail_RoomType_For_DSLoaiPhong(roomtype) {
        let maloaiphong = roomtype.getAttribute("maloaiphong");
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/Load_Data_Detail_RoomType_For_DSLoaiPhong?maloaiphong=" + maloaiphong;
        xhr.open("POST", url, true);
        xhr.timeout = 500000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let data_loaiphong = JSON.parse(this.response);
                if (data_loaiphong != "") {
                    edit_roomtype_info_popup.querySelector("#maloaiphong_data_info_edit_roomtype_info_popup_window").value = data_loaiphong["idLoaiPhong"];
                    edit_roomtype_info_popup.querySelector("#tenloaiphong_data_info_edit_roomtype_info_popup_window").value = data_loaiphong["tenLoaiPhong"];
                    edit_roomtype_info_popup.querySelector("#giatien_data_info_edit_roomtype_info_popup_window").value = data_loaiphong["giaTien"];
                    edit_roomtype_info_popup.querySelector("#giacoc_data_info_edit_roomtype_info_popup_window").value = data_loaiphong["giaCoc"];
                    edit_roomtype_info_popup.querySelector("#kichthuocphong_data_info_edit_roomtype_info_popup_window").value = data_loaiphong["kichThuocPhong"];
                    edit_roomtype_info_popup.querySelector("#checkbox_tulanh_data_info_edit_roomtype_info_popup_window").checked = (data_loaiphong["tuLanh"] == 1) ? true : false;
                    edit_roomtype_info_popup.querySelector("#checkbox_maylanh_data_info_edit_roomtype_info_popup_window").checked = (data_loaiphong["mayLanh"] == 1) ? true : false;
                    edit_roomtype_info_popup.querySelector("#mota_data_info_edit_roomtype_info_popup_window").value = data_loaiphong["moTa"];

                    edit_roomtype_info_popup.classList.add('show');
                    edit_roomtype_info_popup.classList.add('admin_role_edit_roomtype');
                }
                else {
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Không tìm thấy loại phòng!";
                    notification_status_iud_data_popup.classList.add('show');
                }
            }
        }
        xhr.send();
    }

    function Add_Event_For_DSLoaiPhong() {
        // Xử lý checkbox và bật tắt nút xóa của quản lý loại phòng - begin
        var checkbox_checked_count_roomtype_table_data_window_quanlyloaiphong = 0;
        var checkbox_total_roomtype_table_data_window_quanlyloaiphong = $('.list_roomtype_table_data_window_quanlyloaiphong input.checkbox_check_list_roomtype_table_data_window_quanlyloaiphong').length;
        function turn_off_btn_delete_roomtype_quanlyloaiphong_window() {
            if (!btn_delete_many_roomtype_window_quanlyloaiphong.classList.contains('turn_off_btn')) {
                btn_delete_many_roomtype_window_quanlyloaiphong.classList.add('turn_off_btn');
            }
        }
        function turn_on_btn_delete_roomtype_quanlyloaiphong_window() {
            if (btn_delete_many_roomtype_window_quanlyloaiphong.classList.contains('turn_off_btn')) {
                btn_delete_many_roomtype_window_quanlyloaiphong.classList.remove('turn_off_btn');
            }
        }
        if ($("#checkbox_checkall_list_roomtype_table_data_window_quanlyloaiphong").prop("checked")) {
            $('.list_roomtype_table_data_window_quanlyloaiphong input.checkbox_check_list_roomtype_table_data_window_quanlyloaiphong').prop('checked', true);
            turn_on_btn_delete_roomtype_quanlyloaiphong_window();
        }
        else if (!$("#checkbox_checkall_list_roomtype_table_data_window_quanlyloaiphong").prop("checked")) {
            $('.list_roomtype_table_data_window_quanlyloaiphong input.checkbox_check_list_roomtype_table_data_window_quanlyloaiphong').prop('checked', false);
            turn_off_btn_delete_roomtype_quanlyloaiphong_window();
        }
        $("#checkbox_checkall_list_roomtype_table_data_window_quanlyloaiphong").click(function () {
            $('.list_roomtype_table_data_window_quanlyloaiphong input.checkbox_check_list_roomtype_table_data_window_quanlyloaiphong').prop('checked', $(this).prop('checked'));
            if ($(this).prop('checked')) {
                checkbox_checked_count_roomtype_table_data_window_quanlyloaiphong = checkbox_total_roomtype_table_data_window_quanlyloaiphong;
                turn_on_btn_delete_roomtype_quanlyloaiphong_window();
            }
            else {
                checkbox_checked_count_roomtype_table_data_window_quanlyloaiphong = 0;
                turn_off_btn_delete_roomtype_quanlyloaiphong_window();
            }
        });
        $(".list_roomtype_table_data_window_quanlyloaiphong input.checkbox_check_list_roomtype_table_data_window_quanlyloaiphong").click(function () {
            if (!$(this).prop("checked")) {
                $("#checkbox_checkall_list_roomtype_table_data_window_quanlyloaiphong").prop("checked", false);
                checkbox_checked_count_roomtype_table_data_window_quanlyloaiphong = checkbox_checked_count_roomtype_table_data_window_quanlyloaiphong - 1;
                if (checkbox_checked_count_roomtype_table_data_window_quanlyloaiphong == 0) {
                    turn_off_btn_delete_roomtype_quanlyloaiphong_window();
                }
            }
            else {
                checkbox_checked_count_roomtype_table_data_window_quanlyloaiphong = checkbox_checked_count_roomtype_table_data_window_quanlyloaiphong + 1;
                if (checkbox_checked_count_roomtype_table_data_window_quanlyloaiphong != 0) {
                    turn_on_btn_delete_roomtype_quanlyloaiphong_window();
                }
                if (checkbox_checked_count_roomtype_table_data_window_quanlyloaiphong == checkbox_total_roomtype_table_data_window_quanlyloaiphong) {
                    $("#checkbox_checkall_list_roomtype_table_data_window_quanlyloaiphong").prop("checked", true);
                }
            }
        });
    // Xử lý checkbox và bật tắt nút xóa của quản lý loại phòng - end
        var list_roomtype_quanlyloaiphong_main_working_window = quanlyloaiphong_main_working_window.querySelectorAll(".data_window_quanlyloaiphong .list_roomtype_table_data_window_quanlyloaiphong tbody tr");
        list_roomtype_quanlyloaiphong_main_working_window.forEach(function (roomtype) {
            var btn_edit_roomtype = roomtype.querySelector(".function_edit_delete_list_roomtype_table_data_window_quanlyloaiphong .btn_edit_list_roomtype_table_data_window_quanlyloaiphong");
            btn_edit_roomtype.onclick = function (e) {
                Load_Data_Detail_RoomType_For_DSLoaiPhong(roomtype);
                close_edit_roomtype_info_popup.onclick = function () {
                    edit_roomtype_info_popup.classList.remove('show');
                    edit_roomtype_info_popup.classList.remove('admin_role_edit_roomtype');
                }
                cancel_edit_roomtype_info_popup.onclick = function () {
                    edit_roomtype_info_popup.classList.remove('show');
                    edit_roomtype_info_popup.classList.remove('admin_role_edit_roomtype');
                }
                confirm_save_edit_roomtype_info_popup.onclick = function () {
                    Update_Change_Detail_LoaiPhongInFo();
                }
            }
        });
    }

    function Load_Data_For_DSLoaiPhong() {
        /*filter_dsphong_info_dsphong.querySelector("#enter_room_code_filter_quanlyphong_info").value = "";*/
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/Load_Data_For_DSLoaiPhong";
        xhr.open("POST", url, true);
        xhr.timeout = 500000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = "";
                let data_dsloaiphong = JSON.parse(this.response);
                if (data_dsloaiphong.length > 0) {
                    for (let i = 0; i < data_dsloaiphong.length; i++) {
                        result = result + '<tr maloaiphong = ' + data_dsloaiphong[i]["idLoaiPhong"] + '>' +
                            '<td class="check_list_roomtype_table_data_window_quanlyloaiphong"><input type="checkbox" class="checkbox_check_list_roomtype_table_data_window_quanlyloaiphong"></td>' +
                            '<td class="maloaiphong_list_roomtype_table_data_window_quanlyloaiphong">' + data_dsloaiphong[i]["tenLoaiPhong"] + '</td>' +
                            '<td class="phantramquasonguoi_list_roomtype_table_data_window_quanlyloaiphong">' + data_dsloaiphong[i]["phanTram"] + '</td>' +
                            '<td class="tulanh_list_roomtype_table_data_window_quanlyloaiphong">' + data_dsloaiphong[i]["tuLanh"] + '</td>' +
                            '<td class="maylanh_list_roomtype_table_data_window_quanlyloaiphong">' + data_dsloaiphong[i]["mayLanh"] + '</td>' +
                            '<td class="giatien_list_roomtype_table_data_window_quanlyloaiphong">' + addDotPrice(String(data_dsloaiphong[i]["giaTien"])) + '</td>' +
                            '<td class="giacoc_list_roomtype_table_data_window_quanlyloaiphong">' + addDotPrice(String(data_dsloaiphong[i]["giaCoc"])) + '</td>' +
                            '<td class="function_edit_delete_list_roomtype_table_data_window_quanlyloaiphong">' +
                            '<button class="btn_edit_list_roomtype_table_data_window_quanlyloaiphong"><i class="fa fa-edit" style="font-size:1rem"></i></button>' +
                            '</td>' +
                            '</tr>';
                    }
                    body_table_loaiphong_dsloaiphong_main_working_window.innerHTML = result;
                    Add_Event_For_DSLoaiPhong();
                }
                else {
                    body_table_loaiphong_dsloaiphong_main_working_window.innerHTML = "<tr> <td colspan='6'>Không có phòng nào để hiển thị</tr>";
                }
            }
        }
        xhr.send();
    }

    var quanlyloaiphong_main_working_window = document.getElementById("quanlyloaiphong_main_working_window_id");
    var body_table_loaiphong_dsloaiphong_main_working_window = quanlyloaiphong_main_working_window.querySelector(".data_window_quanlyloaiphong .list_roomtype_table_data_window_quanlyloaiphong tbody")
    var quanlyloaiphong_admin_option_name_icon = document.getElementById("quanlyloaiphong_admin_option_name_icon_id");
    quanlyloaiphong_admin_option_name_icon.onclick = function () {
        list_option_menu_burger.forEach(function (b) {
            if (b !== quanlyloaiphong_main_working_window && b.classList.contains('show')) {
                b.classList.remove('show');
            }
        })
        if (!quanlyloaiphong_main_working_window.classList.contains('show')) {
            quanlyloaiphong_main_working_window.classList.add('show');
        }
        Load_Data_For_DSLoaiPhong();
    }
    var edit_roomtype_info_popup = quanlyloaiphong_main_working_window.querySelector("#edit_roomtype_info_popup_window_container_id");
    var close_edit_roomtype_info_popup = edit_roomtype_info_popup.querySelector("#header_close_edit_roomtype_info_popup_window_id");
    var cancel_edit_roomtype_info_popup = edit_roomtype_info_popup.querySelector("#btn_cancel_edit_roomtype_info_popup_window");
    var confirm_save_edit_roomtype_info_popup = edit_roomtype_info_popup.querySelector("#btn_save_edit_roomtype_info_popup_window");


    var btn_create_new_roomtype_quanlyloaiphong_main_working_window = quanlyloaiphong_main_working_window.querySelector("#btn_create_new_roomtype_quanlyloaiphong_main_working_window_id");
    btn_create_new_roomtype_quanlyloaiphong_main_working_window.onclick = function () {
        edit_roomtype_info_popup.classList.add('show');
        edit_roomtype_info_popup.classList.add('admin_role_create_roomtype');
        close_edit_roomtype_info_popup.onclick = function () {
            edit_roomtype_info_popup.classList.remove('show');
            edit_roomtype_info_popup.classList.remove('admin_role_create_roomtype');
        };
        cancel_edit_roomtype_info_popup.onclick = function () {
            edit_roomtype_info_popup.classList.remove('show');
            edit_roomtype_info_popup.classList.remove('admin_role_create_roomtype');
        };
    };

    var btn_delete_many_roomtype_window_quanlyloaiphong = quanlyloaiphong_main_working_window.querySelector("#btn_delete_many_list_roomtype_table_data_window_quanlyloaiphong_id");
    var notification_confirm_delete_roomtype_popup = quanlyloaiphong_main_working_window.querySelector("#notification_confirm_delete_roomtype_window_container_id");
    btn_delete_many_roomtype_window_quanlyloaiphong.onclick = function () {
        notification_confirm_delete_roomtype_popup.classList.add('show');
        var close_notification_confirm_delete_roomtype_popup = notification_confirm_delete_roomtype_popup.querySelector("#header_close_notification_confirm_delete_roomtype_window_id");
        var cancel_notification_confirm_delete_roomtype_popup = notification_confirm_delete_roomtype_popup.querySelector("#btn_cancel_notification_delete_roomtype_window");
        close_notification_confirm_delete_roomtype_popup.onclick = function () {
            notification_confirm_delete_roomtype_popup.classList.remove('show');
        }
        cancel_notification_confirm_delete_roomtype_popup.onclick = function () {
            notification_confirm_delete_roomtype_popup.classList.remove('show');
        }
    }
        // Sự kiện trong màn hình làm việc của Quản lý loại phòng - end
    // Sự kiện trong màn hình làm việc của Quản lý đồ ăn - begin

    function Delete_Food_For_DSDoAn() {
        let dsdoan_delete = quanlydoan_main_working_window.querySelectorAll("input.checkbox_check_list_food_table_data_window_quanlydoan:checked")
        let madoan_delete = "";
        dsdoan_delete.forEach(function (checkbox_doan) {
            let doan_can_xoa = checkbox_doan.parentElement.parentElement.getAttribute("madoan");
            madoan_delete = madoan_delete + doan_can_xoa + " ";
        })
        if (madoan_delete != "") {
            let form_cs = new FormData();
            form_cs.append("madoan_delete", madoan_delete);
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/Delete_Food_For_DSDoAn";
            xhr.open("POST", url, true);
            xhr.timeout = 500000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let result = this.responseText;
                    if (result == "Success") {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Xóa đồ ăn thành công!";
                        notification_status_iud_data_popup.classList.add('show');

                        notification_confirm_delete_food_popup.classList.remove('show');
                        Load_Data_For_DSDoAn();
                    }
                    else {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Xóa đồ ăn thất bại!";
                        notification_status_iud_data_popup.classList.add('show');
                    }
                }
            }
            xhr.send(form_cs);
        }
        else {
            notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Chọn đồ ăn cần xóa!";
            notification_status_iud_data_popup.classList.add('show');
        }
    }

    function Create_New_Food_For_DSDoAn() {
        let madoan_new = edit_food_info_popup.querySelector("#madoan_data_info_edit_food_info_popup_window_id").value;
        let tendoan_new = edit_food_info_popup.querySelector("#tendoan_data_info_edit_food_info_popup_window_id").value;
        let giadoan_new = edit_food_info_popup.querySelector("#giadoan_data_info_edit_food_info_popup_window_id").value;
        if (madoan_new != 0 && tendoan_new != "" && giadoan_new != 0) {
            let form_cs = new FormData();
            form_cs.append("madoan_new", madoan_new);
            form_cs.append("tendoan_new", tendoan_new);
            form_cs.append("giadoan_new", giadoan_new);
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/Create_New_Food_For_DSDoAn";
            xhr.open("POST", url, true);
            xhr.timeout = 500000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let result = this.responseText;
                    if (result == "Success") {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Thêm đồ ăn mới thành công!";
                        notification_status_iud_data_popup.classList.add('show');
                        edit_food_info_popup.classList.remove('show');
                        edit_food_info_popup.classList.remove('admin_role_create_food');
                        Load_Data_For_DSDoAn();
                    }
                    else {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Thêm đồ ăn mới thất bại!";
                        notification_status_iud_data_popup.classList.add('show');
                    }
                }
            }
            xhr.send(form_cs);
        }
        else {
            notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Vui lòng nhập đầy đủ thông tin!";
            notification_status_iud_data_popup.classList.add('show');
        }
    }

    function Load_Data_For_Create_Food_DSDoAn() {
        edit_food_info_popup.querySelector("#tendoan_data_info_edit_food_info_popup_window_id").value = "";
        edit_food_info_popup.querySelector("#giadoan_data_info_edit_food_info_popup_window_id").value = 0;
        let xhr_madoan = new XMLHttpRequest();
        let url_madoan = "https://localhost:5001/QuanLy/Load_Info_For_PopUp_Create_Food";
        xhr_madoan.open("POST", url_madoan, true);
        xhr_madoan.timeout = 500000;
        xhr_madoan.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let madoan = JSON.parse(this.response);
                madoan = Number(madoan);
                if (madoan != 0) {
                    edit_food_info_popup.querySelector("#madoan_data_info_edit_food_info_popup_window_id").value = madoan;
                    edit_food_info_popup.classList.add('show');
                    edit_food_info_popup.classList.add('admin_role_create_food');
                }
                else {
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Đã xảy ra lỗi! Vui lòng thử lại sau!";
                    notification_status_iud_data_popup.classList.add('show');
                }
            }
        }
        xhr_madoan.send();
    }

    function Update_Change_Detail_DoAnInFo() {
        let iddoan = edit_food_info_popup.querySelector("#madoan_data_info_edit_food_info_popup_window_id").value;
        let tendoan = edit_food_info_popup.querySelector("#tendoan_data_info_edit_food_info_popup_window_id").value;
        let gia = edit_food_info_popup.querySelector("#giadoan_data_info_edit_food_info_popup_window_id").value;
        if (tendoan != "" && gia != "") {
            let form_cs = new FormData();
            form_cs.append("iddoan", iddoan);
            form_cs.append("tendoan", tendoan);
            form_cs.append("gia", gia);
            let xhr = new XMLHttpRequest();
            let url = "https://localhost:5001/QuanLy/Update_Change_Detail_DoAnInFo";
            xhr.open("POST", url, true);
            xhr.timeout = 500000;
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let result = this.responseText;
                    if (result == "Success") {
                        notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Cập nhật thông tin thành công!";
                        edit_food_info_popup.classList.remove('show');
                        edit_food_info_popup.classList.remove('admin_role_edit_food');
                        notification_status_iud_data_popup.classList.add('show');
                        Load_Data_For_DSDoAn();
                    }
                }
            }
            xhr.send(form_cs);
        }
        else {
            notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Vui lòng nhập thông tin cần thiết!";
            notification_status_iud_data_popup.classList.add('show');
        }
    }

    function Load_Data_Detail_Food_For_DSDoAn(food) {
        let madoan = food.getAttribute("madoan");
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/Load_Data_Detail_Food_For_DSDoAn?madoan=" + madoan;
        xhr.open("POST", url, true);
        xhr.timeout = 500000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let data_doan = JSON.parse(this.response);
                if (data_doan != "") {
                    edit_food_info_popup.querySelector("#madoan_data_info_edit_food_info_popup_window_id").value = data_doan["idDoAn"];
                    edit_food_info_popup.querySelector("#tendoan_data_info_edit_food_info_popup_window_id").value = data_doan["tenDoAn"];
                    edit_food_info_popup.querySelector("#giadoan_data_info_edit_food_info_popup_window_id").value = data_doan["gia"];

                    edit_food_info_popup.classList.add('show');
                    edit_food_info_popup.classList.add('admin_role_edit_food');
                }
                else {
                    notification_status_iud_data_popup.querySelector(".content_notification_insert_update_delete_status_popup").innerHTML = "Không tìm thấy đồ ăn!";
                    notification_status_iud_data_popup.classList.add('show');
                }
            }
        }
        xhr.send();
    }

    function Add_Event_For_DSDoAn() {
        // Xử lý checkbox và bật tắt nút xóa của quản lý đồ ăn - begin
        var checkbox_checked_count_food_table_data_window_quanlydoan = 0;
        var checkbox_total_food_table_data_window_quanlydoan = $('.list_food_table_data_window_quanlydoan input.checkbox_check_list_food_table_data_window_quanlydoan').length;
        function turn_off_btn_delete_food_quanlydoan_window() {
            if (!btn_delete_many_food_window_quanlydoan.classList.contains('turn_off_btn')) {
                btn_delete_many_food_window_quanlydoan.classList.add('turn_off_btn');
            }
        }
        function turn_on_btn_delete_food_quanlydoan_window() {
            if (btn_delete_many_food_window_quanlydoan.classList.contains('turn_off_btn')) {
                btn_delete_many_food_window_quanlydoan.classList.remove('turn_off_btn');
            }
        }
        if ($("#checkbox_checkall_list_food_table_data_window_quanlydoan").prop("checked")) {
            $('.list_food_table_data_window_quanlydoan input.checkbox_check_list_food_table_data_window_quanlydoan').prop('checked', true);
            turn_on_btn_delete_food_quanlydoan_window();
        }
        else if (!$("#checkbox_checkall_list_food_table_data_window_quanlydoan").prop("checked")) {
            $('.list_food_table_data_window_quanlydoan input.checkbox_check_list_food_table_data_window_quanlydoan').prop('checked', false);
            turn_off_btn_delete_food_quanlydoan_window();
        }
        $("#checkbox_checkall_list_food_table_data_window_quanlydoan").click(function () {
            $('.list_food_table_data_window_quanlydoan input.checkbox_check_list_food_table_data_window_quanlydoan').prop('checked', $(this).prop('checked'));
            if ($(this).prop('checked')) {
                checkbox_checked_count_food_table_data_window_quanlydoan = checkbox_total_food_table_data_window_quanlydoan;
                turn_on_btn_delete_food_quanlydoan_window();
            }
            else {
                checkbox_checked_count_food_table_data_window_quanlydoan = 0;
                turn_off_btn_delete_roomtype_quanlyloaiphong_window();
            }
        });
        $(".list_food_table_data_window_quanlydoan input.checkbox_check_list_food_table_data_window_quanlydoan").click(function () {
            if (!$(this).prop("checked")) {
                $("#checkbox_checkall_list_food_table_data_window_quanlydoan").prop("checked", false);
                checkbox_checked_count_food_table_data_window_quanlydoan = checkbox_checked_count_food_table_data_window_quanlydoan - 1;
                if (checkbox_checked_count_food_table_data_window_quanlydoan == 0) {
                    turn_off_btn_delete_food_quanlydoan_window();
                }
            }
            else {
                checkbox_checked_count_food_table_data_window_quanlydoan = checkbox_checked_count_food_table_data_window_quanlydoan + 1;
                if (checkbox_checked_count_food_table_data_window_quanlydoan != 0) {
                    turn_on_btn_delete_food_quanlydoan_window();
                }
                if (checkbox_checked_count_food_table_data_window_quanlydoan == checkbox_total_food_table_data_window_quanlydoan) {
                    $("#checkbox_checkall_list_food_table_data_window_quanlydoan").prop("checked", true);
                }
            }
        });
    // Xử lý checkbox và bật tắt nút xóa của quản lý đồ ăn - end
        var list_food_quanlydoan_main_working_window = quanlydoan_main_working_window.querySelectorAll(".data_window_quanlydoan .list_food_table_data_window_quanlydoan tbody tr");
        list_food_quanlydoan_main_working_window.forEach(function (food) {
            var btn_edit_food = food.querySelector(".function_edit_delete_list_food_table_data_window_quanlydoan .btn_edit_list_food_table_data_window_quanlydoan");
            btn_edit_food.onclick = function (e) {
                Load_Data_Detail_Food_For_DSDoAn(food);
                close_edit_food_info_popup.onclick = function () {
                    edit_food_info_popup.classList.remove('show');
                    edit_food_info_popup.classList.remove('admin_role_edit_food');
                }
                cancel_edit_food_info_popup.onclick = function () {
                    edit_food_info_popup.classList.remove('show');
                    edit_food_info_popup.classList.remove('admin_role_edit_food');
                }
                confirm_save_edit_food_info_popup.onclick = function () {
                    Update_Change_Detail_DoAnInFo();
                }
            }
        });
    }

    function Load_Data_For_DSDoAn() {
        filter_dsdoan_info_dsdoan.querySelector("#enter_food_code_filter_quanlydoan_info").value = "";
        let xhr = new XMLHttpRequest();
        let url = "https://localhost:5001/QuanLy/Load_Data_For_DSDoAn";
        xhr.open("POST", url, true);
        xhr.timeout = 500000;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let result = "";
                let data_dsdoan = JSON.parse(this.response);
                if (data_dsdoan.length > 0) {
                    for (let i = 0; i < data_dsdoan.length; i++) {
                        result = result + '<tr madoan = ' + data_dsdoan[i]["idDoAn"] + '>' +
                            '<td class="check_list_food_table_data_window_quanlydoan"><input type="checkbox" class="checkbox_check_list_food_table_data_window_quanlydoan"></td>' +
                            '<td class="madoan_list_food_table_data_window_quanlydoan">' + data_dsdoan[i]["idDoAn"] + '</td>' +
                            '<td class="tendoan_list_food_table_data_window_quanlydoan">' + data_dsdoan[i]["tenDoAn"] + '</td>' +
                            '<td class="linkimg_list_food_table_data_window_quanlydoan">' + data_dsdoan[i]["linkIMG"] + '</td>' +
                            '<td class="giatien_list_food_table_data_window_quanlydoan">' + addDotPrice(String(data_dsdoan[i]["gia"])) + '</td>' +
                            '<td class="function_edit_delete_list_food_table_data_window_quanlydoan">' +
                            '<button class="btn_edit_list_food_table_data_window_quanlydoan"><i class="fa fa-edit" style="font-size:1rem"></i></button>' +
                            '</td>' +
                            '</tr>';
                    }
                    body_table_doan_dsdoan_main_working_window.innerHTML = result;
                    Add_Event_For_DSDoAn();
                }
                else {
                    body_table_doan_dsdoan_main_working_window.innerHTML = "<tr> <td colspan='6'>Không có đồ ăn nào để hiển thị</tr>";
                }
            }
        }
        xhr.send();
    }

    var quanlydoan_main_working_window = document.getElementById("quanlydoan_main_working_window_id");
    var body_table_doan_dsdoan_main_working_window = quanlydoan_main_working_window.querySelector(".data_window_quanlydoan .list_food_table_data_window_quanlydoan tbody")
    var quanlydoan_admin_option_name_icon = document.getElementById("quanlydoan_admin_option_name_icon_id");
    quanlydoan_admin_option_name_icon.onclick = function () {
        list_option_menu_burger.forEach(function (b) {
            if (b !== quanlydoan_main_working_window && b.classList.contains('show')) {
                b.classList.remove('show');
            }
        })
        if (!quanlydoan_main_working_window.classList.contains('show')) {
            quanlydoan_main_working_window.classList.add('show');
        }
        Load_Data_For_DSDoAn();
    }
    var edit_food_info_popup = quanlydoan_main_working_window.querySelector("#edit_food_info_popup_window_container_id");
    var close_edit_food_info_popup = edit_food_info_popup.querySelector("#header_close_edit_food_info_popup_window_id");
    var cancel_edit_food_info_popup = edit_food_info_popup.querySelector("#btn_cancel_edit_food_info_popup_window");
    var confirm_save_edit_food_info_popup = edit_food_info_popup.querySelector("#btn_save_edit_food_info_popup_window");
    var create_new_edit_food_info_popup = edit_food_info_popup.querySelector("#btn_create_new_food_edit_food_info_popup_window");
    
    var btn_create_new_food_quanlydoan_main_working_window = quanlydoan_main_working_window.querySelector("#btn_create_new_food_quanlydoan_main_working_window_id");
    btn_create_new_food_quanlydoan_main_working_window.onclick = function () {
        Load_Data_For_Create_Food_DSDoAn()
        close_edit_food_info_popup.onclick = function () {
            edit_food_info_popup.classList.remove('show');
            edit_food_info_popup.classList.remove('admin_role_create_food');
        };
        cancel_edit_food_info_popup.onclick = function () {
            edit_food_info_popup.classList.remove('show');
            edit_food_info_popup.classList.remove('admin_role_create_food');
        };
        create_new_edit_food_info_popup.onclick = function () {
            Create_New_Food_For_DSDoAn();
        }
    };
    var btn_delete_many_food_window_quanlydoan = quanlydoan_main_working_window.querySelector("#btn_delete_many_list_food_table_data_window_quanlydoan_id");
    var notification_confirm_delete_food_popup = quanlydoan_main_working_window.querySelector("#notification_confirm_delete_food_window_container_id");
    var close_notification_confirm_delete_food_popup = notification_confirm_delete_food_popup.querySelector("#header_close_notification_confirm_delete_food_window_id");
    var cancel_notification_confirm_delete_food_popup = notification_confirm_delete_food_popup.querySelector("#btn_cancel_notification_delete_food_window");
    var confirm_delete_notification_confirm_delete_food_popup = notification_confirm_delete_food_popup.querySelector("#btn_confirm_notification_delete_food_window");
    btn_delete_many_food_window_quanlydoan.onclick = function () {
        notification_confirm_delete_food_popup.classList.add('show');
        close_notification_confirm_delete_food_popup.onclick = function () {
            notification_confirm_delete_food_popup.classList.remove('show');
        }
        cancel_notification_confirm_delete_food_popup.onclick = function () {
            notification_confirm_delete_food_popup.classList.remove('show');
        }
        confirm_delete_notification_confirm_delete_food_popup.onclick = function () {
            Delete_Food_For_DSDoAn();
        }
    }
    var filter_dsdoan_info_dsdoan = quanlydoan_main_working_window.querySelector("#filter_quanlydoan_info");
    function Load_Data_For_DSDoAn_By_Filter(data_dsdoan) {
        if (data_dsdoan.length > 0) {
            result = "";
            for (let i = 0; i < data_dsdoan.length; i++) {
                result = result + '<tr madoan = ' + data_dsdoan[i]["idDoAn"] + '>' +
                    '<td class="check_list_food_table_data_window_quanlydoan"><input type="checkbox" class="checkbox_check_list_food_table_data_window_quanlydoan"></td>' +
                    '<td class="madoan_list_food_table_data_window_quanlydoan">' + data_dsdoan[i]["idDoAn"] + '</td>' +
                    '<td class="tendoan_list_food_table_data_window_quanlydoan">' + data_dsdoan[i]["tenDoAn"] + '</td>' +
                    '<td class="linkimg_list_food_table_data_window_quanlydoan">' + data_dsdoan[i]["linkIMG"] + '</td>' +
                    '<td class="giatien_list_food_table_data_window_quanlydoan">' + addDotPrice(String(data_dsdoan[i]["gia"])) + '</td>' +
                    '<td class="function_edit_delete_list_food_table_data_window_quanlydoan">' +
                    '<button class="btn_edit_list_food_table_data_window_quanlydoan"><i class="fa fa-edit" style="font-size:1rem"></i></button>' +
                    '</td>' +
                    '</tr>';
            }
            body_table_doan_dsdoan_main_working_window.innerHTML = result;
            Add_Event_For_DSDoAn();
        }
        else {
            body_table_doan_dsdoan_main_working_window.innerHTML = "<tr> <td colspan='6'>Không có đồ ăn nào bạn muốn tìm</tr>";
        }
    }
    $(filter_dsdoan_info_dsdoan).submit(function (e) {
        e.preventDefault(); // prevent actual form submit
        var form = $(this);
        var url = form.attr('action'); //get submit url [replace url here if desired]
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(), // serializes form input
            success: function (data) {
                Load_Data_For_DSDoAn_By_Filter(data);
            }
        });
    });
        // Sự kiện trong màn hình làm việc của Quản lý đồ ăn - end

    // Sự kiện trong màn hình làm việc của Quản lý tính lương - begin
    var quanlytinhluong_main_working_window = document.getElementById("quanlytinhluong_main_working_window_id");
    var quanlytinhluong_admin_option_name_icon = document.getElementById("quanlytinhluong_admin_option_name_icon_id");
    quanlytinhluong_admin_option_name_icon.onclick = function () {
        list_option_menu_burger.forEach(function (b) {
            if (b !== quanlytinhluong_main_working_window && b.classList.contains('show')) {
                b.classList.remove('show');
            }
        })
        if (!quanlytinhluong_main_working_window.classList.contains('show')) {
            quanlytinhluong_main_working_window.classList.add('show');
        }
        quanlytinhluong_main_working_window.querySelector("#content_payroll_report_data_window_quanlytinhluong_id").innerHTML = '<div style = "text-align: center; font-size: 1.5rem;">Tính năng sắp ra mắt <i class="fa fa-rocket" style = "font-size: 1.5rem;"></i></div>'
    }
    //function print_payroll_export_file(content) {
    //    let date_payroll_export = content.querySelector("#salary_table_content_payroll_report_data_window_quanlytinhluong_id caption span").innerHTML;
    //    let dmy_payroll_export = date_payroll_export.split("/");
    //    date_payroll_export = dmy_payroll_export.join('_');
    //    let file_name = "BangLuong_DelLunar_" + date_payroll_export + ".pdf";
    //    html2pdf().from(content).save(file_name);
    //}
    //var btn_print_payroll_report = quanlytinhluong_main_working_window.querySelector("#btn_export_payroll_report_filter_quanlytinhluong_info_id");
    //btn_print_payroll_report.onclick = function () {
    //    var content_payroll_report = quanlytinhluong_main_working_window.querySelector("#content_payroll_report_data_window_quanlytinhluong_id");
    //    print_payroll_export_file(content_payroll_report);
    //}
        // Sự kiện trong màn hình làm việc của Quản lý tính lương - end

    // Sự kiện trong màn hình làm việc của Quản lý doanh thu - begin
    var quanlyDoanhThu_main_working_window = document.getElementById("quanlyDoanhThu_main_working_window_id");
    var quanlyDoanhThu_admin_option_name_icon = document.getElementById("quanlyDoanhThu_admin_option_name_icon_id");
    quanlyDoanhThu_admin_option_name_icon.onclick = function () {
        list_option_menu_burger.forEach(function (b) {
            if (b !== quanlyDoanhThu_main_working_window && b.classList.contains('show')) {
                b.classList.remove('show');
            }
        })
        if (!quanlyDoanhThu_main_working_window.classList.contains('show')) {
            quanlyDoanhThu_main_working_window.classList.add('show');
        }
        quanlyDoanhThu_main_working_window.querySelector("#content_turnover_report_data_window_quanlyDoanhThu_id").innerHTML = '<div style = "text-align: center; font-size: 1.5rem;">Tính năng sắp ra mắt <i class="fa fa-rocket" style = "font-size: 1.5rem;"></i></div>'
    }
    function print_turnover_export_file(content) {
        let date_turnover_export = content.querySelector("#title_content_turnover_report_data_window_quanlyDoanhThu span").innerHTML;
        let dmy_turnover_export = date_turnover_export.split("/");
        date_turnover_export = dmy_turnover_export.join('_');
        let file_name = "DoanhThu_DelLunar_" + date_turnover_export + ".pdf";
        html2pdf().from(content).save(file_name);
    }
    var btn_print_turnover_report = quanlyDoanhThu_main_working_window.querySelector("#btn_print_turnover_report_filter_quanlyDoanhThu_info_id");
    btn_print_turnover_report.onclick = function () {
        var content_turnover_report = quanlyDoanhThu_main_working_window.querySelector("#content_turnover_report_data_window_quanlyDoanhThu_id");
        print_turnover_export_file(content_turnover_report);
    }
        // Sự kiện trong màn hình làm việc của Quản lý doanh thu - end
})