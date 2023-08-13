const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");

const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart() {
        console.log("Timer has begun")
    }, 
    onTick() {
        console.log("Ticking is happening")
    }, 
    onFinish() {
        console.log("Timer has finished")
    }
});