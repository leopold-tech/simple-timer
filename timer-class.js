class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onFinish = callbacks.onFinish;
        }

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }

    start = () => {
        if (this.onStart) {
            this.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.interval);
    }

    // Bcoz remainingTime(time) is a setter, rhs of this.remainingTime is automatically provided as arguement of time  
    tick = () => {
        // const remainingTime = this.remainingTime;
        // this.remainingTime = remainingTime - 1;
        if (this.remainingTime <= 0) {
            this.pause();
            if (this.onFinish) {
                this.onFinish();
            }
        } else{
            this.remainingTime = this.remainingTime - 1;
            if (this.onTick) {
                this.onTick();
            }
        }
    }

    // Gets value for rhs of tick()
    get remainingTime() {
        return parseFloat(this.durationInput.value);
    }

    // Sets value for lhs of tick()
    set remainingTime(time) {
        this.durationInput.value = time;
    }
}