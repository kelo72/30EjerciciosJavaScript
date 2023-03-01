const secondHands = document.querySelector('.sec');
const mintsHands = document.querySelector('.min');
const hourHands = document.querySelector('.hour');

function setDate(){
    
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHands.style.transform = `rotate(${secondsDegrees}deg)`;

    const mints = now.getMinutes();
    const mintsDegrees = ((mints / 60) * 360) + 90;
    mintsHands.style.transform = `rotate(${mintsDegrees}deg)`;
    
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHands.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000)
