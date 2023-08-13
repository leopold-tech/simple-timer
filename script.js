const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const circle = document.querySelector("circle");

//Circumference of circle = 2*PI*r
let circumference = 2 * Math.PI * circle.getAttribute("r");
circle.setAttribute("stroke-dasharray", circumference);

let duration;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart(totalDuration) {
        duration = totalDuration;
    }, 
    onTick(remainingTime) {
        circle.setAttribute("stroke-dashoffset", circumference * remainingTime / duration - circumference);
    }, 
    onFinish() {
        console.log("Timer has finished")
    }
});