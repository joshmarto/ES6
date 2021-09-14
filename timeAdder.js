function timeAdder(value1, label1, value2, label2) {
    function convert(time, label) {
        switch (label) {
            case "seconds":
                return time;
            case "minutes":
                return time * 60;
            case "hours":
                return time * 3600;
            case "days":
                return time * 86400;
            case "second":
                return 1;
            case "minute":
                return 60;
            case "hour":
                return 3600;
            case "day":
                return 84600;
            default:
                console.log("Label invalid");
        }
    }
    const result = (time) => {
        if (time >= 84600) {
            time /= 84600;
            return [time, "days"];
        } else if (time >= 3600) {
            time /= 3600
            return [time, "hours"];
        } else if (time >= 60) {
            time /= 60
            return [time, "minutes"];
        }
    }
    const time1 = convert(value1, label1);
    const time2 = convert(value2, label2);
    return result(time1 + time2);
}

console.log(timeAdder(1, "day", 4, "hours"));