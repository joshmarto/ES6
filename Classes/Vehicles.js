class Vehicle {
    constructor(make, model, year, weight) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.needsMaintenance = false;
        this.tripsSinceMaintenance = 0;
    }
    Repair() {
        this.tripsSinceMaintenance = 0;
        this.needsMaintenance = false;
        console.log(`${this.model} repaired`);
    }
}

class Cars extends Vehicle {
    constructor(make, model, year, weight) {
        super(make, model, year, weight);
        this.isDriving = false;
    }
    Drive() {
        this.isDriving = true;
        this.tripsSinceMaintenance += 1;
        if (this.tripsSinceMaintenance > 100) {
            this.needsMaintenance = true;
            console.log("Maintenance required");
        }
        return "Driving...";
    }
    Stop() {
        this.isDriving = false;
    }
}

class Plane extends Vehicle {
    constructor(make, model, year, weight) {
        super(make, model, year, weight);
        this.isFlying = false;
    }
    Flying() {
        this.isFlying = true;
        this.tripsSinceMaintenance += 1;
        if (this.tripsSinceMaintenance > 100) {
            this.needsMaintenance = true;
            console.log("Maintenance required");
        }
        return !this.needsMaintenance;
    }
    Landing() {
        this.isDriving = false;
    }
}

const M3 = new Cars("Mercedes Benz", "M3", 2019, 235);
for (let i = 0; i < 100; i++) {
    M3.Drive();
    M3.Stop();
}
console.log("Trips since maintence: " + M3.tripsSinceMaintenance);
M3.Drive();
M3.Repair();

const airForce1 = new Plane("USA Goverment", "AF1", 2021, 750);
console.log("");
console.log("Air Force 1");
for (let i = 0; i < 100; i++) {
    airForce1.Flying();
    airForce1.Landing();
}
console.log("Flights since maintence: " + airForce1.tripsSinceMaintenance);
console.log("Does Air Force 1 can flight: " + airForce1.Flying());
airForce1.Repair();
console.log("Does Air Force 1 can flight: " + airForce1.Flying());
