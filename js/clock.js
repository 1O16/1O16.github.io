const clock = document.querySelector("#clock");
const calender = document.querySelector("#calender");
const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');

function getClock() {
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();
    const day = week[today.getDay()];
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");
    calender.innerText = `${month + 1}월 ${date}일 ${day}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);