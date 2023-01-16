let hours = 0;
let minuts = 0;
let seconds = 0;
let miliSecond = 0;
let startStop = false;

let hour = document.getElementById('hour');
let min = document.getElementById('min')
let sec = document.getElementById('sec');
let milSec = document.getElementById('milSec');

hour.innerHTML = hours
min.innerHTML = minuts
sec.innerHTML = seconds
milSec.innerHTML = miliSecond


const reset = () => {
    hours = 0;
    minuts = 0;
    seconds = 0;
    miliSecond = 0;

    hour.innerHTML = hours
    min.innerHTML = minuts
    sec.innerHTML = seconds
    milSec.innerHTML = miliSecond
}
const pause = () => {
    startStop = false;
}
const play = () => {
    startStop = true;
    stopwatch()
}
function stopwatch() {
    if (startStop === true) {
        miliSecond = miliSecond + 1;
        milSec.innerHTML = miliSecond;
        if (miliSecond === 60) {
            miliSecond = 0;
            seconds = seconds + 1;
            sec.innerHTML = seconds
        }
        if (seconds === 60) {
            seconds = 0;
            minuts = minuts + 1;
            min.innerHTML = seconds
        }
        if (minuts === 60) {
            minuts = 0;
            hours = hours + 1;
            hour.innerHTML = hours
        }
        setTimeout(() => {
            stopwatch()
        }, 10);
    }
}