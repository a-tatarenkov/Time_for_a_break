let containerSettings = document.querySelector(".container_setting");
let modalWrapp = document.querySelector(".modal");
let openSettings = document.querySelector(".open_settings");
let inputPromodo = document.querySelector(".input_promodo");
let inputShort = document.querySelector(".input_short");
let inputLong = document.querySelector(".input_long");
let promodoTime;
let shortTime;
let longTime;
let min;
let sec;
let t;
let minuts = document.querySelector(".minute-timer");
let second = document.querySelector(".second-timer");
let time1 = new Date();
let time2;
let nextMinuts;
let nextHours;
let hourTime = document.querySelector(".minute-time");
let minutTime = document.querySelector(".second-time")
let save = document.querySelector(".btn-save");
let timeWork = document.querySelector(".btn-work");
let timeLong = document.querySelector(".btn-long");
let timeShort = document.querySelector(".btn-short");
let notification = document.querySelector(".notification_input");
let notif = document.querySelector(".notification_input");
let idle = document.querySelector(".reminder");
let start = document.querySelector(".btn-start");
let stop = document.querySelector(".btn_stop");



openSettings.addEventListener("click", openMenuSettings);

function openMenuSettings() {
    containerSettings.classList.toggle("none");
    modalWrapp.classList.toggle("none");
}


document.querySelector(".unicode").addEventListener("click", hideСontainerSetting);

function hideСontainerSetting() {
    containerSettings.classList.toggle("none");
    modalWrapp.classList.toggle("none");
}

const changeThemes = document.querySelectorAll("[data-theme]");

let theme = document.querySelector(".check").addEventListener("click", changeTopic);

function changeTopic() {
    for (let i of changeThemes) {
        let keyTopic = i.classList.toggle("themeBody");
        localStorage.setItem("theme", JSON.stringify(keyTopic));
    }
}

let keyTopic = JSON.parse(localStorage.getItem("theme"));
if (keyTopic == true) {
    for (let i of changeThemes) {
        i.classList.toggle("themeBody")
    }
}

let selectMusic = document.querySelector(".currency");
console.log(selectMusic.value)

let arrSound = ["musics/bell.mp3", "musics/bird.mp3", "musics/relax.mp3", "musics/digital.mp3", "musics/beer.mp3", "musics/metronom.mp3", "musics/haaa.mp3"]
let audio = new Audio();

function musicFunction() {
    music = selectMusic.value;
    if (music === "bell") {
        audio.src = arrSound[0];
        audio.play();
    }
    if (music === "bird") {
        audio.src = arrSound[1];
        audio.play();
    }
    if (music === "relax") {
        audio.src = arrSound[2];
        audio.play();
    }
    if (music === "digital") {
        audio.src = arrSound[3];
        audio.play();
    }
    if (music === "beer") {
        audio.src = arrSound[4];
        audio.play();
    }
}

function playAlarm_notification() {
    audio.src = arrSound[5];
    audio.play();
}

function playAlarm() {
    music = JSON.parse(localStorage.getItem("melody"))
    if (music === null) {
        audio.src = arrSound[1];
        audio.play();
    }
    if (music === "bell") {
        audio.src = arrSound[0];
        audio.play();
    }
    if (music === "bird") {
        audio.src = arrSound[1];
        audio.play();
    }
    if (music === "relax") {
        audio.src = arrSound[2];
        audio.play();
    }
    if (music === "digital") {
        audio.src = arrSound[3];
        audio.play();
    }
    if (music === "beer") {
        audio.src = arrSound[4];
        audio.play();
    }
}

save.addEventListener("click", funcSave);
function funcSave() {
    promodoTime = inputPromodo.value;
    localStorage.setItem("work", JSON.stringify(promodoTime));

    shortTime = inputShort.value;
    localStorage.setItem("short", JSON.stringify(shortTime));

    longTime = inputLong.value;
    localStorage.setItem("long", JSON.stringify(longTime));

    music = selectMusic.value;
    localStorage.setItem("melody", JSON.stringify(music));

    notification = notif.value;
    localStorage.setItem("timeNotification", JSON.stringify(notification));

    idl = idle.value;
    localStorage.setItem("timeIdle", JSON.stringify(idl));

    hideСontainerSetting();
}

timeWork.addEventListener("click", startPromodo)

function startPromodo() {
    promodoTime = JSON.parse(localStorage.getItem("work"));
    timeShort.classList.remove("btn-auto");
    timeLong.classList.remove("btn-auto");
    timeWork.classList.add("btn-auto");
    min = promodoTime;
    sec = 0;
    minuts.innerHTML = promodoTime + `:`;
    console.log(`Время работы:` + promodoTime);
    time2 = new Date(+time1 + `${promodoTime}` * 6e4);
    nextMinuts = time2.getMinutes();
    nextHours = time2.getHours();
    hourTime.innerHTML = nextHours + `:`;
    minutTime.innerHTML = print(nextMinuts);
}

timeLong.addEventListener("click", startLong)


function startLong() {
    longTime = JSON.parse(localStorage.getItem("long"));
    timeShort.classList.remove("btn-auto");
    timeLong.classList.add("btn-auto");
    timeWork.classList.remove("btn-auto");
    min = longTime;
    sec = 0;
    minuts.innerHTML = longTime + `:`;
    console.log(`Время работы:` + longTime);
    time2 = new Date(+time1 + `${longTime}` * 6e4);
    nextMinuts = time2.getMinutes();
    nextHours = time2.getHours();
    hourTime.innerHTML = nextHours + `:`;
    minutTime.innerHTML = print(nextMinuts);
}

timeShort.addEventListener("click", startShort);


function startShort() {
    shortTime = JSON.parse(localStorage.getItem("short"));
    timeShort.classList.add("btn-auto");
    timeLong.classList.remove("btn-auto");
    timeWork.classList.remove("btn-auto");
    min = shortTime;
    sec = 0;
    minuts.innerHTML = shortTime + `:`;
    time2 = new Date(+time1 + `${shortTime}` * 6e4);
    console.log(`Время короткого:` + shortTime);
    nextMinuts = time2.getMinutes();
    nextHours = time2.getHours();
    hourTime.innerHTML = nextHours + `:`;
    minutTime.innerHTML = print(nextMinuts);
}


let myTimer;

start.addEventListener("click", funcStart);

function funcStart() {
        window.clearInterval(myTimer);
        myTimer = window.setInterval(startTime, 1000);
        start.disabled = true;
        start.classList.toggle("none");
        stop.classList.toggle("none");
}

stop.addEventListener("click", funcStop);
function funcStop(){
    clearInterval(myTimer);
    start.disabled = false;
    start.classList.toggle("none");
    stop.classList.toggle("none");
    inaction();
}

let secCircle = document.querySelector(".circle");

notification = JSON.parse(localStorage.getItem("timeNotification"));
let n = Number(notification);

function startTime() {
    if (min === n && sec === 0) {
        playAlarm_notification();
    }
    if (sec > 0) {
        sec--;
        second.innerHTML = print(sec);
        secCircle.style.strokeDasharray = `${sec * 1.666}, 100`;
    } else {
        sec = 59;
        min--;
        second.innerHTML = print(sec);
    }
    if (min >= 0) {
        minuts.innerHTML = print(min) + `:`;
    } else {
        min = 0;
        minuts.innerHTML = print(min) + `:`;
    }
    if (sec === 0 && min === 0) {
        window.clearInterval(myTimer);
        min = 0;
        sec = 0;
        second.innerHTML = sec;
        minuts.innerHTML = min;
        playAlarm();
        inaction();
    }
}

function print(e) {
    if (e <= 9) {
        return "0" + e;
    } else {
        return e;
    }
}

idl = JSON.parse(localStorage.getItem("timeIdle"));
let i = Number(idl);
let sumI = (i*60);
console.log(sumI)

function inaction() {
    let mytime = mytime1 = `${sumI}`;
    console.log(sumI)
    document.onmousemove = document.onkeydown = document.onscroll = function(){mytime = mytime1};
    setInterval(function(){
        console.log(mytime);
        mytime --;
        if(mytime <=0 )
            come_back();
    }, 1000);
}


function come_back() {
    audio.src = arrSound[6];
    audio.play();
}



