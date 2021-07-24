setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


function setClock() {

    let currentDate = new Date();
    let secondsRatio = currentDate.getSeconds() / 60;
    let minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    let hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);

}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();



function showTime() {

    const today = new Date();
    let dayList = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi",];

    let date = addZero(today.getDate());
    let month = addZero(today.getMonth() + 1);
    let year = addZero(today.getFullYear());
    let day = today.getDay();


    let currentTime = `  ${date}.${month}.${year}   -   ${dayList[day]} `;


    console.log(currentTime);
    document.getElementById("myClock").innerHTML = currentTime;

    setInterval(showTime, 1000);

};

function addZero(num) {
    return num < 10 ? `0${num}` : num;
};

showTime();