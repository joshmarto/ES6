const firstDate = new Date();
const calculate = (num) => {
    new Promise((resolve, reject) => {
        console.log(num * num);
        resolve(num);
    }).then(num => {
        setTimeout(() => {
            console.log(Math.sqrt(num));
            console.log(findPrime(num));
            const lastDate = new Date();
            console.log(`${lastDate - firstDate} milliseconds`);
        }, num);
    }).catch(err => console.log(err));
}

function findPrime(num) {
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
            return n;
        } else {
            c++;
            continue;
        }
    }
}

calculate(9);
