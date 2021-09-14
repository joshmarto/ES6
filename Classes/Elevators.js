class Elevator {
    constructor(mRange, uRange) {
        this.rangeL = mRange;
        this.rangeH = uRange;
        this.level = 0;
        this.call = 0;
        this.time = 0;
    }
    open() {
        console.log("Open doors");
    }
    close() {
        console.log("Close doors");
    }
    Options() {
        if (this.level == 10) {
            console.log("Down");
        }
        else if (this.level > 1 & this.level < 10) {
            console.log("Up or Down");
        }
        else if (this.level <= 0) {
            console.log("Up");
        }
    }
    Call(newLevel) {
        this.time = 0;
        const dif = Math.abs(this.level - newLevel);
        this.time += dif;
        console.log(`Call from ${newLevel} level. Time ${dif} seconds`);
        open();
        this.level = newLevel;
        this.Options();
    }
    move(newLevel) {
        close();
        if (newLevel >= this.rangeL & newLevel <= this.rangeH) {
            const dif = Math.abs(this.level - newLevel);
            this.time += dif;
            this.level = newLevel;
            console.log(`Move to ${this.level} level. ${dif} seconds.`);
            open();
            close();
        }
        else {
            console.log("Move out of range");
        }
    }
    stop() {
        console.log(`Emergency stop in level ${this.level}`);
    }
}

function test() {
    console.log("Still working...");
}

const elevatorA = new Elevator(-1, 9);
const elevatorB = new Elevator(1, 10);
let stop = false;

while (!stop) {
    console.log("Choose the elevator (A or B)");
    const elevator = prompt("Choose the elevator (A or B)");
    console.clear();
    if (elevator == "A") {
        console.log("Enter the level of call");
        let level = prompt("Enter the level of call");
        elevatorA.Call(level);
        console.log("Enter the level of destiny");
        level = prompt("Enter the level of destiny");
        elevatorA.move(level);
        setTimeout(function () {
            console.clear();
        }, 3000);
        continue;
    }
    else if (elevator == "B") {
        console.log("Enter the level of call");
        let level = prompt("Enter the level of call");
        elevatorB.Call(level);
        console.log("Enter the level of destiny");
        level = prompt("Enter the level of destiny");
        elevatorB.move(level);
        setTimeout(function () {
            console.clear();
        }, 3000);
        continue;
    }
    else if (elevator == "CLOSE") {
        stop = true;
        break;
    }
    else {
        console.clear();
        console.log("Invalid option. Tyr again.");
        setTimeout(function () {
            console.clear();
        }, 3000);
        continue;
    }
}
