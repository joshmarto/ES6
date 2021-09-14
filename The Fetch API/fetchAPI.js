// API Rest
/*
  - Returns a promise
*/

const myDiv = document.getElementById("planet");
const myButton = document.getElementById("button");
const mySecondButton = document.getElementById("otherButton");
const highlighter = document.getElementById("highlighter");

myButton.addEventListener("click", getPlanet);
mySecondButton.addEventListener("click", getPlanets);
highlighter.addEventListener("click", showUnpopulated);

function getPlanet() {
    console.log("Clicked");
    const randomNum = Math.floor(Math.random() * 10) + 1;
    fetch(`https://swapi.dev/api/planets/${randomNum}/`)
        .then(data => data.json())
        .then(d => populatePlanet(d))
        .catch(err => console.log(err));
}

//function populatePlanet({ name }) {
//    const newParagraph = document.createElement("p");
//    newParagraph.innerText = name;
//    myDiv.appendChild(newParagraph);
//}

function populatePlanet(planetObj, index) {
    const { name, climate, terrain, population, orbital_period } = planetObj;
    //const myPlanetDiv = document.createElement("div");
    //const planetPara = `
    //    <h4>${name}</h4>
    //    <p>
    //        ${name} has a climate that is ${climate}. The terrain is
    //        ${terrain}, with a population of ${population}. Then orbital
    //        period is ${orbital_period} days.
    //    </p>
    //`;
    //myPlanetDiv.innerHTML = planetPara;
    //myDiv.appendChild(myPlanetDiv);
    let pop;
    if (population > 0 && population <= 1000000) {
        pop = "low";
    } else if (population > 1000000 && population < 1000000000) {
        pop = "medium";
    } else if (population > 1000000000) {
        pop = "high";
    } else {
        pop = "unknown";
    }
    const planetDiv = `
        <div class="planet" data-planetID="${index}" data-population="${population}" data-typePopulation="${pop}">
            <h4>${name}</h4>
            <p>
                ${name} has a climate that is ${climate}. The terrain is
                ${terrain}, with a population of ${population === "unknown" ? population : parseInt(population).toLocaleString()}.
                Then orbital period is ${orbital_period} days.
            </p>
        </div>
    `;
    myDiv.insertAdjacentHTML("beforeend", planetDiv);
}

function getPlanets() {
    fetch(`https://swapi.dev/api/planets/`)
        .then(data => data.json())
        .then(planets => processPlanets(planets.results))
        .catch(err => console.log(err));
}

function processPlanets(planetsArray) {
    for ([index, prop] of planetsArray.entries()) {
        populatePlanet(prop, index);
    }
}

const allPlanets = document.getElementsByClassName("planet"); // List which updates about changes
function showUnpopulated() {
    for (let prop of allPlanets) {
        if (prop.dataset.population === "unknown") {
            prop.classList.toggle("highlighted");
        }
    }
}

function getNextPlanets() {
    fetch(`https://swapi.dev/api/planets/`)
        .then(data => data.json())
        .then(planets => {
            const { next } = planets;
            // RegEx
            const newURL = next.replace(/^http:\/\//i, "https://");
            return fetch(newURL);
        })
        .then(morePlanets => console.log(morePlanets))
        .catch(err => console.log(err));
}


// Population selector
const selector = document.getElementById("selector");

selector.addEventListener("change", highlight);

function highlight(e) {
    const { value } = e.target;
    console.log(value);
    for (let prop of allPlanets) {
        prop.style.backgroundColor = "teal";
        if (prop.dataset.typepopulation === value) {
            prop.style.backgroundColor = "green";
        }
    }
}
