// Classes - a sort of special function
// Classes are NOT hoisted

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greetings() {
        return ("Classes R kewl");
    }
    static sayHey() {
        console.log("Hey!!!");
    }
}

// Super keyword calls functions on an object's parent class

class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    testGreeting() {
        console.log(super.greetings()); // Super invoques parent's class
    }
    sayGreeting() {
        const parentString = super.greetings();
        console.log(`${this.name} thinks ${parentString}`);
    }
}

const barb = new Employee("Barb", 27, "Developer");
console.log(barb);
barb.testGreeting();
barb.sayGreeting();

class Customer extends Person {
    constructor({ name = "customer", age = "n/a", contactMethod }) {
        super(name, age);
        this.contactMethod = contactMethod;
        this.accountCredit = null;
    }
    addCredit(amount) {
        this.accountCredit += amount;
    }
    reduceCredit(amount) {
        this.accountCredit -= amount;
    }
    static sayHi() { // Static methods can be called just with classes, not instances of them
        console.log("Hi! :D");
    }
    static sayNames(c1, c2) {
        console.log(`${c1.name}, ${c2.name}`);
    }
    static sayCustomersNames(...customers) {
        for (const c of customers) {
            console.log(c.name);
        }
    }
    static transferCredit(source, target) {
        const amount = source.accountCredit;
        target.accountCredit += amount;
        source.accountCredit -= amount;
    }
}

const customer1 = new Customer({ contactMethod: "Email" });
console.log(customer1);
console.log(`Account credit ${customer1.accountCredit}`);
customer1.addCredit(100);
console.log(`Account credit ${customer1.accountCredit}`);
customer1.reduceCredit(50);
console.log(`Account credit ${customer1.accountCredit}`);

const customer2 = new Customer({ name: "Jane Doe", contactMethod: "Mobile phone" });
console.log(`${customer2.name}'s account credit ${customer2.accountCredit}`);
customer2.addCredit(25);

const customer3 = new Customer({ name: "Ashley", contactMethod: "email" });

Customer.sayHi();
Customer.sayHey();

Customer.sayNames(customer1, customer2);
Customer.sayCustomersNames(customer1, customer2, customer3);

Customer.transferCredit(customer2, customer1);
console.log(`${customer1.name}'s account credit ${customer1.accountCredit}`);
console.log(`${customer2.name}'s account credit ${customer2.accountCredit}`);

class FamilyMember {
    constructor(lastname, firstname, relationship) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.relationship = relationship;
    }
    sayFamilyName() {
        console.log(`We are the ${this.lastname}s`);
    }
}

class FamilyGroup {
    constructor(parents = [], children = []) {
        this.parents = parents;
        this.children = children;
    }
    addMember(member) {
        this.children.push(member);
    }
}

class Parent extends Family {
    constructor(lastname, firstname) {
        super(lastname);
        this.firstname = firstname;
    }
}

class Child extends Family {
    constructor(lastname, firstname) {
        super(lastname);
        this.firstname = firstname;
    }
}

const dad = new FamilyMember("Smith", "George", "Father");
const mom = new FamilyMember("Smith", "Patty", "Mother");
const jimmy = new FamilyMember("Smith", "Jimy", "Son");
const annie = new FamilyMember("Smith", "Annie", "Daughter");
const theSmiths = new FamilyGroup([dad, mom]);

annie.sayFamilyName();
console.log(theSmiths);
console.log("-------------ADDING MORE MEMBERS...---------------");
theSmiths.addMember(jimmy);
theSmiths.addMember(annie);
console.log(theSmiths);

const smithFamily = {
    1: ["Smith", "Bill", "father"],
    2: ["Smith", "Catherine", "mother"],
    3: ["Smith", "Annie", "daughter"],
    4: ["Smith", "Will", "son"]
}

const wilsonFamily = {
    1: ["Wilson", "Billy Bob", "father"],
    2: ["Wilson", "Joey Joe", "son"],
}

const createFamilyGroup = (famArray) => {
    const famGroup = new FamilyGroup();
    for (const prop of famArray) {
        if (prop.relationship === "father" || prop.relationship === "mother") {
            famGroup.parents.push(prop);
        } else {
            famGroup.children.push(prop);
        }
    }
    return famGroup;
}

const createFamily = (famObj) => {
    const newFamGroup = new FamilyGroup();
    for (const prop in famObj) {
        const [last, first, relationship] = famObj[prop];
        const newMember = new FamilyMember(last, first, relationship);
        if (relationship === "father" || relationship === "mother") {
            newFamGroup.parents.push(newMember);
        } else {
            newFamGroup.children.push(newMember);
        }
    }
    return newFamGroup;
}

const Smiths = createFamily(smithFamily);
console.log(Smiths);
const theWilsons = createFamily(wilsonFamily);
console.log(theWilsons);
