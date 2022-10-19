// Hiển thị màn hình chọn đồ ăn -- begin

const addfoodbtn = document.getElementsByClassName('addfood');
const select_food_page_container = document.getElementById("select_food_page_container");

for (let i=0 ;i<addfoodbtn.length; i++)
{
    addfoodbtn[i].addEventListener('click', () => {
        select_food_page_container.classList.add('show');
    })
}
const closebuttonfoodlist = document.getElementById("close-button-food-list");
closebuttonfoodlist.addEventListener('click', () => { select_food_page_container.classList.remove('show'); });

// Hiển thị màn hình chọn đồ ăn -- end