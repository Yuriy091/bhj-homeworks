
let time;
let currentTime = 59;

countDown();
function countDown() {
    document.getElementById('timer').innerHTML = currentTime;
    currentTime--;

    if(currentTime < 0) {
        clearTimeout(time);
        alert('«Вы победили в конкурсе!»')
    }
    else {
        time = setTimeout(countDown, 1000);
    }
}