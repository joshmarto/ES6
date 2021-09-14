const firstTime = new Date();

const calculate = (num, cb) => {
    console.log(num * num);
    cb(num, squareRoot);
}

const squareRoot = (num, cb) => {
    setTimeout(() => {
        console.log(Math.sqrt(num));
        cb(num, findPrime);
    }, num);
}

const findPrime = (num) => {
    let c = 1;
    while (true) {
        let digits = 0;
        const n = num - c;
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                digits++;
            }
        }
        if (digits === 2) {
            console.log(n);
            const lastTime = new Date();
            console.log(`${lastTime - firstTime} milliseconds`);
            return n;
        } else {
            c++;
            continue;
        }
    }
}

const execution = (num, cb1, cb2, cb3) => {
    cb1(num, function (x) {
        cb2(num, function (y) {
            cb3(num, function () {
                console.log(cb3(result));
            });
        });
    });
}

const num = 9;
execution(num, calculate, squareRoot, findPrime);
