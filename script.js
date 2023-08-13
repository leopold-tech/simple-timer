const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const circle = document.querySelector("circle");

//Circumference of circle = 2*PI*r
let circumference = 2 * Math.PI * circle.getAttribute("r");
circle.setAttribute("stroke-dasharray", circumference);

let currentOffset = 0;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart() {
        console.log("Timer has begun")
    }, 
    onTick() {
        circle.setAttribute("stroke-dashoffset", currentOffset);
        currentOffset = currentOffset - 1;
    }, 
    onFinish() {
        console.log("Timer has finished")
    }
});