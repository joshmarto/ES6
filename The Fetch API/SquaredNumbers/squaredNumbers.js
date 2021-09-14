document.addEventListener("DOMContentLoad", setUp);

function setUp(){
    const button = document.getElementById("btn-square");
    button.addEventListener("click", square);
}

function square(){
    let num = prompt("Enter to number to squared");
    const div = document.getElementById("result");
    const res = document.createElement("h4");
    res.innerHTML = `${num * num}`;
    res.style.color = "#E74C3C";
    div.appendChild(res);
}
