const men = ["Arthur", "Brian", "Steve", "Socrates", "Andrew"];
const man = "Socrates";
console.log("All men are mortal");

if (men.includes(man)) {
    const isMan = true;
    console.log(man + " is a man");
    if (isMan) {
        console.log("Therefore, " + man + " is mortal.");
    }
}


//------SEPARATION------
const cakeFlavor = "vanilla";
const flavors = ["chocolate", "vanilla"];

if (flavors.includes(cakeFlavor)) {
    console.log("This cake is either vanilla or chocolate");
    if (cakeFlavor === "chocolate") {
        console.log("This cake is chocolate");
    } else {
        console.log("This cake is not chocolate");
    }
    console.log("Therefore, this cake is " + cakeFlavor);

}
