document.addEventListener("DOMContentLoaded", playGame);

function playGame() {
    const place1 = document.getElementById("space1");
    const place2 = document.getElementById("space2");
    const place3 = document.getElementById("space3");
    const place4 = document.getElementById("space4");
    const place5 = document.getElementById("space5");
    const place6 = document.getElementById("space6");
    const place7 = document.getElementById("space7");
    const place8 = document.getElementById("space8");
    const place9 = document.getElementById("space9");
    const button = document.getElementById("btn-reset");
    let counter = 0;
    let timer = 0;

    function AddEventListeners() {
        place1.addEventListener("click", fill1);
        place2.addEventListener("click", fill2);
        place3.addEventListener("click", fill3);
        place4.addEventListener("click", fill4);
        place5.addEventListener("click", fill5);
        place6.addEventListener("click", fill6);
        place7.addEventListener("click", fill7);
        place8.addEventListener("click", fill8);
        place9.addEventListener("click", fill9);
    }
    function RemoveEventListeners() {
        place1.removeEventListener("click", fill1);
        place2.removeEventListener("click", fill2);
        place3.removeEventListener("click", fill3);
        place4.removeEventListener("click", fill4);
        place5.removeEventListener("click", fill5);
        place6.removeEventListener("click", fill6);
        place7.removeEventListener("click", fill7);
        place8.removeEventListener("click", fill8);
        place9.removeEventListener("click", fill9);
    }
    AddEventListeners();
    button.addEventListener("click", reset);

    function fill1() {
        field(place1);
    }
    function fill2() {
        field(place2);
    }
    function fill3() {
        field(place3);
    }
    function fill4() {
        field(place4);
    }
    function fill5() {
        field(place5);
    }
    function fill6() {
        field(place6);
    }
    function fill7() {
        field(place7);
    }
    function fill8() {
        field(place8);
    }
    function fill9() {
        field(place9);
    }

    function field(space) {
        counter += 1;
        if (counter % 2 === 0) {
            space.innerHTML = "<b style='font-size: 60px;'>O</b>";
            clearTimeout(timer);
            timer = setTimeout(() => {
                game("O");
            }, 500);
        } else {
            space.innerHTML = "<b style='font-size: 60px; color: red;'>X</b>";
            clearTimeout(timer);
            timer = setTimeout(() => {
                game("X");
            }, 500);
        }
        if (counter === 9) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                alert("Cats game!");
                RemoveEventListeners();
            }, 500);
        }
    }

    function game(form) {
        if (place1.innerText === form & place2.innerText === form & place3.innerText === form) {
            alert(form + " has won!");
            RemoveEventListeners();
        } else if (place4.innerText === form & place5.innerText === form & place6.innerText === form) {
            alert(form + " has won!");
            RemoveEventListeners();
        } else if (place7.innerText === form & place8.innerText === form & place9.innerText === form) {
            alert(form + " has won!");
            RemoveEventListeners();
        } else if (place1.innerText === form & place4.innerText === form & place7.innerText === form) {
            alert(form + " has won!");
            RemoveEventListeners();
        } else if (place2.innerText === form & place5.innerText === form & place8.innerText === form) {
            alert(form + " has won!");
            RemoveEventListeners();
        } else if (place3.innerText === form & place6.innerText === form & place9.innerText === form) {
            alert(form + " has won!");
            RemoveEventListeners();
        } else if (place1.innerText === form & place5.innerText === form & place9.innerText === form) {
            alert(form + " has won!");
            RemoveEventListeners();
        } else if (place3.innerText === form & place5.innerText === form & place7.innerText === form) {
            alert(form + " has won!");
            RemoveEventListeners();
        }
    }

    function reset() {
        counter = 0;
        timer = 0;
        place1.innerHTML = " ";
        place2.innerHTML = " ";
        place3.innerHTML = " ";
        place4.innerHTML = " ";
        place5.innerHTML = " ";
        place6.innerHTML = " ";
        place7.innerHTML = " ";
        place8.innerHTML = " ";
        place9.innerHTML = " ";
        AddEventListeners();
    }
}
