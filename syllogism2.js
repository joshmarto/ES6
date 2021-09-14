function isMortal(man = "Socrates", men = ["Arthur", "Brian", "Steve", "Socrates", "Andrew"]) {
    if (typeof man !== 'string') {
        man = "Socrates";
    }
    if (typeof men !== 'object') {
        men = ["Arthur", "Brian", "Steve", "Socrates", "Andrew"];
    }
    console.log("All men are mortal");
    if (men.includes(man)) {
        const isMan = true;
        console.log(man + " is a man");
        if (isMan) {
            console.log("Therefore, " + man + " is mortal.");
            return isMan;
        } else {
            return isMan;
        }
    }
}
isMortal(true, "Hello");


//------SEPARATION------
const flavor = false;
const flavors = ["cheese", "lemon"];

function cakeFlavor(isFlavor = false, flavors = ["chocolate", "vanilla"]) {
    console.log("This cakes is either " + flavors[0] + " or " + flavors[1]);
    if (isFlavor) {
        console.log("This cake is " + flavors[0]);
        return flavors[0];
    } else {
        console.log("This cake is not " + flavors[0]);
        console.log("Therefore, this cake is " + flavors[1]);
        return flavors[1];
    }
}
cakeFlavor();
// cakeFlavor(flavor, flavors)
