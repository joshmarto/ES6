// Set up of HTML code
const bodyBase = `
    <h1>List of things to do</h1>
        <h4>Your easy app to remmember the things you need to do.</h4>
        <div style="text-align: center; padding-left: 35%; padding-right: 35%;">
            <div id="login">
                <button class="btn btn-info" id="signUp">Sign Up</button><br><br>
                <button class="btn btn-primary" id="logIn">Log In</button>
            </div>
        </div>
        <div id="form-signUp">
            <div class="form">
                <div style="text-align: right;">
                    <button class="btn btn-danger" onclick="mainHide();"><b>X</b></button>
                </div>
                <div style="display: flex;">
                    <div>
                        <label>First name</label>&nbsp<br>
                        <label>Last name</label>&nbsp<br>
                        <label>Email</label>&nbsp<br>
                        <label>Password</label>&nbsp
                    </div>
                    <div>
                        <input type="text" id="firstName-f"/><br>
                        <input type="text" id="lastName-f"/><br>
                        <input type="text" placeholder="something@example.com" id="email-f"/><br>
                        <input type="password" id="password-f"/><br>
                        <input type="submit" name="submit" value="Sign In" class="btn btn-primary" id="btn-signUp"/>
                    </div>
                </div>
            </div>
        </div>
        <div id="form-logIn">
            <div class="form">
                <div style="text-align: right;">
                     <button class="btn btn-danger" onclick="mainHide();"><b>X</b></button>
                </div>
                <div style="display: flex;">
                    <div>
                        <label>Email</label><br>
                        <label>Password</label>
                    </div>
                    <div>
                        <input type="text" placeholder="something@example.com" id="username-in"/>
                        <input type="password" id="password-in"/><br>
                        <input type="submit" name="submit" value="Sign In" class="btn btn-primary" id="btn-signIn"/>
                    </div>
                </div>
            </div>
        </div>
        <div style="padding-left: 35%; padding-right: 35%;">
            <div id="dashboard">
                <div style="display: flex; justify-content: center;">
                    <div style="text-align: left;">
                        <button class="btn btn-light" id="settings"><img src="settings.png" alt="settings" width="25px" height="auto" /></button>
                        &nbsp
                    </div>
                    <div>
                        &nbsp&nbsp&nbsp
                    </div>
                    <div style="text-align: right;">
                        &nbsp
                        <button class="btn btn-info" id="createList">Add "To do" list</button>
                    </div>
                </div>
                <h5 id="greet">Welcome!</h5>
                <div id="base-currentLists">
                    <ul id="currentLists">
                    </ul>
                </div>
                <div style="text-align: right;">
                    <button class="btn btn-warning" id="signOut">Sign Out</button>
                </div>
            </div>
        </div>
        <div style="text-align: center; padding-left: 35%; padding-right: 35%;">
            <div id="actualList">
                <div id="actualList-n">
                    <div id="actualList-l"></div>
                </div>
                <div style="text-align: right;">
                    <button class="btn btn-info" id="saveCurrentList">Save list</button>
                    <p id="currentListId" style="display: none;"></p>
                </div>
            </div>
        </div>
        <div style="text-align: center; padding-left: 30%; padding-right: 30%;">
            <div id="newList">
                <h4>New List</h4>
                <div style="text-align: right;">
                    <button class="btn btn-danger" id="cnl"><b>X</b></button>
                </div>
                <p id="user" style="display: none;"></p>
                <div style="display: flex;">
                    <div>
                        <label>Name: </label><br>
                        <label>Activity:</label>&nbsp&nbsp
                    </div>
                    <div id="creatingNewList">
                        <input type="text" id="listName" /><br>
                        <input type="text" id="task" /><br>
                        <ul id="toDo" style="text-align: left;"></ul>
                    </div>
                </div>
                <input type="submit" class="btn btn-success" value="Create list" id="saveList" />
            </div>
        </div>
        <script src="main.js"></script>
`;
const body = document.querySelector("body");
body.innerHTML = bodyBase;

// main function
const list = document.querySelector('ul');
const btnLogIn = document.getElementById("logIn");
const btnSignUp = document.getElementById("signUp");
let countUser = 0;
let preList = [];
let listsOfUser = [];

btnSignUp.addEventListener("click", showSignUp);
btnLogIn.addEventListener("click", showLogIn);

document.addEventListener("DOMContentLoaded", mainHide);
document.addEventListener("DOMContentLoaded", setUp);

function mainHide() {
    const signUp = document.getElementById("form-signUp");
    const logIn = document.getElementById("form-logIn");
    const cont = document.getElementById("login");
    const dashboard = document.getElementById("dashboard");
    const actualList = document.getElementById("actualList");
    const newList = document.getElementById("newList");
    const firstName = document.getElementById("firstName-f");
    const lastName = document.getElementById("lastName-f");
    const email = document.getElementById("email-f");
    const password = document.getElementById("password-f");
    const username = document.getElementById("username-in");
    const passcode = document.getElementById("password-in");
    signUp.style.display = "none";
    logIn.style.display = "none";
    dashboard.style.display = "none";
    actualList.style.display = "none";
    newList.style.display = "none";
    cont.style.display = "block";
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
    username.value = "";
    passcode.value = "";
}

function setUp() {
    const submitSignUp = document.getElementById("btn-signUp");
    const submitSignIn = document.getElementById("btn-signIn");
    const submitSignOut = document.getElementById("signOut");
    const addList = document.getElementById("createList");
    const CancelNewList = document.getElementById("cnl");
    const task = document.getElementById("task");
    const newlist = document.getElementById("saveList");
    const settings = document.getElementById("settings");
    const saveCurrent = document.getElementById("saveCurrentList");
    submitSignUp.addEventListener("click", signUp);
    submitSignIn.addEventListener("click", signIn);
    submitSignOut.addEventListener("click", signOut);
    addList.addEventListener("click", newList);
    CancelNewList.addEventListener("click", cancelNewList);
    task.addEventListener("keydown", addTask);
    newlist.addEventListener("click", createList);
    settings.addEventListener("click", userSettings);
    saveCurrent.addEventListener("click", saveList);
    preList = [];
}

function showSignUp() {
    const selfContainer = document.getElementById("login");
    selfContainer.style.display = "none";
    const signUp = document.getElementById("form-signUp");
    signUp.style.display = "block";
    const button = document.getElementById("btn-signUp");
    button.value = "Sign Up";
    const email = document.getElementById("email-f");
    email.disabled = false;
    document.getElementById("firstName-f").focus();
}

function showLogIn() {
    const selfContainer = document.getElementById("login");
    selfContainer.style.display = "none";
    const logIn = document.getElementById("form-logIn");
    logIn.style.display = "block";
    document.getElementById("username-in").focus();
}

function signUp() {
    const firstName = document.getElementById("firstName-f").value;
    const lastName = document.getElementById("lastName-f").value;
    const email = document.getElementById("email-f").value;
    const password = document.getElementById("password-f").value;
    if (firstName) {
        if (lastName) {
            if (email) {
                if (password) {
                    if (email.includes("@") & email.includes(".")) {
                        const text = document.getElementById("btn-signUp").value;
                        if (text === "Save") {
                            let user = [firstName, lastName, email, password];
                            user.push(listsOfUser);
                            localStorage.setItem(email, user);
                            console.log(email + ", saved successfully!");
                        } else if (text === "Sign Up") {
                            const user = [firstName, lastName, email, password];
                            localStorage.setItem(email, user);
                            console.log(email + ", saved successfully!");
                        }
                        const item = localStorage.getItem(email).split(",");
                        console.log(item);
                        let timer = 0;
                        timer = setTimeout(() => {
                            document.getElementById("firstName-f").value = "";
                            document.getElementById("lastName-f").value = "";
                            document.getElementById("email-f").value = "";
                            document.getElementById("password-f").value = "";
                            /*localStorage.removeItem(email);
                            console.log("Item deleted");*/
                        }, 750);
                        const signUp = document.getElementById("form-signUp");
                        const dashboard = document.getElementById("dashboard");
                        const greet = document.getElementById("greet");
                        signUp.style.display = "none";
                        const newGreet = "Welcome " + localStorage.getItem(email).split(",")[0] + " " + localStorage.getItem(email).split(",")[1] + "!";
                        document.getElementById("user").value = localStorage.getItem(email).split(",")[2];
                        greet.innerText = newGreet;
                        dashboard.style.display = "block";
                        loadLists();
                    }
                }
            }
        }
    }
    listsOfUser = [];
}

function signIn() {
    const userName = document.getElementById("username-in").value;
    const password = document.getElementById("password-in").value;
    if (localStorage.getItem(userName) !== null) {
        console.log("Existing user");
        if (password === localStorage.getItem(userName).split(",")[3]) {
            console.log("Correct password");
            const dashboard = document.getElementById("dashboard");
            const main = document.getElementById("form-logIn");
            const greet = document.getElementById("greet");
            main.style.display = "none";
            const newGreet = "Welcome " + localStorage.getItem(userName).split(",")[0] + " " + localStorage.getItem(userName).split(",")[1] + "!";
            document.getElementById("user").value = localStorage.getItem(userName).split(",")[2];
            greet.innerText = newGreet;
            dashboard.style.display = "block";
            loadLists();
        } else {
            console.log("Wrong password");
            alert("Wrong password!");
        }
    } else {
        console.log("Unexisting user");
        alert("Email not registered");
    }
    listsOfUser = [];
}

function signOut() {
    mainHide();
}

function newList() {
    const selfContainer = document.getElementById("dashboard");
    const newList = document.getElementById("newList");
    selfContainer.style.display = "none";
    newList.style.display = "block";
    document.getElementById("listName").focus();
    preList = [];
}

function addTask(e) {
    if (e.keyCode === 13) {
        const tasks = document.getElementById("toDo");
        const newTask = document.getElementById("task");
        const newLi = document.createElement("li");
        newLi.innerHTML = newTask.value;
        tasks.appendChild(newLi);
        preList.push(newTask.value);
        preList.push(false);
        newTask.value = "";
    }
}

function createList() {
    const namelist = document.getElementById("listName").value;
    const userlist = document.getElementById("user").value;
    const keyList = userlist + "-" + namelist;
    let user = localStorage.getItem(userlist).split(",");
    user.push(keyList);
    
    document.getElementById("listName").value = "";
    const oldList = document.getElementById("toDo");
    const newList = document.createElement("ul");
    const reCreate = document.getElementById("creatingNewList");
    reCreate.removeChild(oldList);
    newList.id = "toDo";
    newList.style.textAlign = "left";
    reCreate.appendChild(newList);

    localStorage.setItem(keyList, preList);
    localStorage.setItem(userlist, user);
    console.log("New list saved");
    preList = [];

    const createdList = document.getElementById("newList");
    const dashboard = document.getElementById("dashboard");
    listLoad();
    createdList.style.display = "none";
    dashboard.style.display = "block";
}

function loadLists() {
    const userName = document.getElementById("username-in").value;
    const base = document.getElementById("base-currentLists");
    const uoList = document.getElementById("currentLists");
    base.removeChild(uoList);
    const uList = document.createElement("ul");
    uList.id = "currentLists";
    base.appendChild(uList);
    const userLists = localStorage.getItem(userName).split(",");
    preList = [];
    if (localStorage.getItem(userName).split(",").length > 4) {
        const quit = userName + "-";
        for (let x = 4; x < localStorage.getItem(userName).split(",").length; x++) {
            const newLi = document.createElement("li");
            const listname = userLists[x];
            const lname = listname.replace(quit, "");
            const parameter = "listLoad('" + lname + "', '" + userName + "');";
            newLi.innerHTML = '<a class="btn btn-link" onclick="' + parameter + '">' + lname + '</a>';
            uList.appendChild(newLi);
        }
    }
}

function listLoad(list, user) {
    const selfContainer = document.getElementById("dashboard");
    const newContainer = document.getElementById("actualList");
    const aList = document.getElementById("actualList-l");
    const keepList = document.getElementById("currentListId");
    let counter = 0;
    selfContainer.style.display = "none";
    newContainer.style.display = "block";

    listName = user + "-" + list;
    listItems = localStorage.getItem(listName).split(",");
    console.log(listItems);
    let newList = [];
    let statItems = [];
    for (x in listItems) {
        if (x % 2 === 0) {
            newList.push(listItems[x]);
        } else {
            if (listItems[x] === "false") {
                statItems.push(false);
            } else if (listItems[x] === "true"){
                statItems.push(true);
            }
        }
    }
    listItems = newList;
    keepList.innerText = listName;

    const label = document.createElement("label");
    const chargeList = document.createElement("ul");
    const button = document.createElement("button");
    const div = document.createElement("div");
    chargeList.style.textAlign = "left";
    div.style.textAlign = "right";
    button.className = "btn btn-info";
    button.value = "Save list";
    for (item in listItems) {
        console.log(listItems[item]);
        const newLi = document.createElement("li");
        const input = document.createElement("input");
        input.value = listItems[item];
        input.type = "checkbox";
        input.style.display = "block";
        if (statItems[item] === true) {
            newLi.innerHTML = `${listItems[item]} <input type="checkbox" id="li${counter}" checked="${statItems[item]}">`;
        } else {
            newLi.innerHTML = `${listItems[item]} <input type="checkbox" id="li${counter}">`;
        }
        counter++;
        chargeList.appendChild(newLi);
    }
    label.style.textAlign = "center";
    label.innerHTML = "<b>List name: " + list + "</b>";

    div.appendChild(button);
    aList.appendChild(label);
    aList.appendChild(chargeList);
}

function saveList() {
    const currentList = document.getElementById("actualList");
    const dashboard = document.getElementById("dashboard");
    const contList = document.getElementById("actualList-n");
    const prevList = document.getElementById("actualList-l");
    const newList = document.createElement("div");
    const listname = document.getElementById("currentListId").innerText;

    let listItems = localStorage.getItem(listname).split(",");
    let fixedList = [];
    for (x in listItems) {
        if (x % 2 == 0) {
            fixedList.push(listItems[x]);
        }
    }
    listItems = fixedList;
    console.log("Getting elements...");
    let newItems = [];
    for (i in listItems) {
        const li = document.getElementById(`li${i}`).checked;
        newItems.push(listItems[i]);
        newItems.push(li);
    }
    console.log(newItems);

    localStorage.setItem(listname, newItems);
    contList.removeChild(prevList);
    newList.id = "actualList-l";
    contList.appendChild(newList);

    currentList.style.display = "none";
    dashboard.style.display = "block";
}

function cancelNewList() {
    const container = document.getElementById("newList");
    const dashboard = document.getElementById("dashboard");
    container.style.display = "none";
    dashboard.style.display = "block";
    loadLists();
}

function userSettings() {
    const dashboard = document.getElementById("dashboard");
    const settings = document.getElementById("form-signUp");
    const button = document.getElementById("btn-signUp");
    const firstName = document.getElementById("firstName-f");
    const lastName = document.getElementById("lastName-f");
    const email = document.getElementById("email-f");
    const password = document.getElementById("password-f");
    const user = document.getElementById("user").value;
    const userList = localStorage.getItem(user).split(",");
    dashboard.style.display = "none";
    settings.style.display = "block";
    button.value = "Save";
    firstName.value = userList[0];
    lastName.value = userList[1];
    email.value = userList[2];
    password.value = userList[3];
    email.disabled = true;
    readLists(user);
}

function readLists(user) {
    listsOfUser = [];
    const userList = localStorage.getItem(user).split(",");
    const i = userList.length;
    if (i > 3) {
        for (x = 4; x < i; x++) {
            listsOfUser.push(userList[x]);
        }
    }
}
