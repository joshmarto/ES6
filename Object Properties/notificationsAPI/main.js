const alarms = [];

function alarm(time, date) {
    return {
        time,
        date,
        getMonth() {
            const m = date.slice(5, 7);
            if (m === '01') {
                return 'Jan';
            } else if (m === '02') {
                return 'Feb';
            } else if (m === '03') {
                return 'Mar';
            } else if (m === '04') {
                return 'Apr';
            } else if (m === '05') {
                return 'May';
            } else if (m === '06') {
                return 'Jun';
            } else if (m === '07') {
                return 'Jul';
            } else if (m === '08') {
                return 'Aug';
            } else if (m === '09') {
                return 'Sep';
            } else if (m === '10') {
                return 'Oct';
            } else if (m === '11') {
                return 'Nov';
            } else if (m === '12') {
                return 'Dec';
            }
        },
        ["day"]: date.slice(8, 10),
        ["year"]: date.slice(0, 4),
        toString() {
            return `Alarm at ${time} on ${this.getMonth()} ${day}, ${year}`;
        },
    };
}

const addAlarm = document.getElementById("addAlarm");
addAlarm.addEventListener("click", showAddAlarm);
const closeAddAlarm = document.getElementById("closeAddAlarm");
closeAddAlarm.addEventListener("click", hideAddAlarm);
const submitAlarm = document.getElementById("submitAlarm");
submitAlarm.addEventListener("click", newAlarm);
document.addEventListener("DOMContentLoaded", showNotification);

function showAddAlarm() {
    const container = document.getElementById("inAlarm");
    container.style.display = "flex";
}

function hideAddAlarm() {
    const container = document.getElementById("inAlarm");
    container.style.display = "none";
}

function newAlarm() {
    const time = document.getElementById("timeAlarm").value;
    const date = document.getElementById("dateAlarm").value;
    console.log(`Alarm set up successfully on ${date} at ${time}`);
    const newAlarm = alarm(time, date);
    alarms.push(newAlarm);
    const cTime = calculateTime(newAlarm.year, date.slice(5,7), newAlarm.day, time);
    createNotification('Time is up', `Alarm`, cTime);
    showAlarms();
}

function createNotification(Body, title, time) {
    var options = {
        body: Body,
        icon: 'clock.png'
    }
    var noti = new Notification(title, options);
    setTimeout(noti.close.bind(noti), time);
}

function calculateTime(year, month, day, time) {
    month = month - 1;
    const hours = parseInt(time.slice(0,2));
    const minutes = parseInt(time.slice(3,5));

    const now = new Date();
    const alarm = new Date(year, month, day, hours, minutes);
    //console.log(`${alarm} - ${now} = ${alarm - now}`);
    const miliseconds = alarm - now;
    return miliseconds;
}

function showAlarms() {
    const container = document.getElementById("currentAlarms");
    container.style.display = "flex";
    container.innerHTML = "";
    let c = 0;
    for (let alarm of alarms) {
        const newAlarm = document.createElement("div");
        newAlarm.className = "container-sm alert-primary";
        newAlarm.id = `alarm${c+1}`;
        newAlarm.innerHTML = `
            <Label>Alarm at ${alarm.time} on ${alarm.getMonth()} ${alarm.day}, ${alarm.year}</Label><br>
            <Button class="btn btn-light" onclick="editAlarm(${c})">Edit</Button>
            <Button class="btn btn-danger" onclick="deleteAlarm(${c})">Delete</Button>
        `;
        container.appendChild(newAlarm);
        c++;
    }
}

function showNotification() {
    if (!('Notification' in window)) {
        console.log("This browser does not support notifications.");
    } else {
        Notification.requestPermission().then(p => handlePermission(p));
    }
}

function handlePermission(permission) {
    if (permission === 'denied') {
        console.log("No permission");
    } else if (permission === 'default') {
        console.log("Permission required");
    } else if (permission === "granted") {
        console.log("Permission approved");
        const notification = new Notification('Alarm', { body: 'This is your alarm', img: 'clock.png' });
    }
}

function checkNotificationPromise() {
    try {
        Notification.requestPermission().then();
    } catch (e) {
        console.log(e);
        return false;
    }
    return true;
}

function editAlarm(i) {
    const time = document.getElementById("timeAlarm");
    const date = document.getElementById("dateAlarm");
    const currentAlarm = alarms[i];
    time.value = currentAlarm.time;
    date.value = currentAlarm.date;
    const saveButton = document.createElement("button");
    saveButton.className = "btn btn-success";
    saveButton.innerHTML = "Save";
    const container = document.getElementById("inAlarm");
    container.appendChild(saveButton);
    saveButton.addEventListener("click", function () {
        const newTime = document.getElementById("timeAlarm").value;
        const newDate = document.getElementById("dateAlarm").value;
        const newAlarm = alarm(newTime, newDate);
        alarms.splice(i, 1, newAlarm);
        showAlarms();
        container.removeChild(saveButton);
    });
}

function deleteAlarm(i) {
    alarms.splice(i, 1);
    showAlarms();
}
