const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const newYears = '1 Jan 2022';

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSecs = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSecs/3600 / 24);
    const hours = Math.floor(totalSecs / 3600) % 24;
    const minutes = Math.floor(totalSecs / 60) % 60;
    const seconds = Math.floor(totalSecs) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    //console.log(days, hours, minutes, seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`): time;
}


countdown()

setInterval(countdown, 1000);
