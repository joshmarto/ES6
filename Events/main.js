// Events
/* 
   - Any event that takes place in the DOM
   - Can be user-generated or by an API
   - Many types of events
   - Event contains properties and methods
   - addEventListener function takes in the event
     to listen for, and a second argument to be
     called whenever the described event fires.
   - addEventListener("click", function(){
     logic insed function;
   })
*/

const clickDiv = document.getElementById("clicky");
const clickableButton = document.querySelector("button");

clickableButton.addEventListener("click", function(event) {
  console.log("Clicked");
});

clickableButton.addEventListener("focus", function() {
  console.log(event);
});

clickableButton.addEventListener("focusout", function() {
  console.log("Lost focus");
});

clickDiv.addEventListener("click", logEvent)

function logEvent(event){ // When call this method there is no need of call as a regular function. There is no need of pass parameters since it takes as only parameter the event on itself.
  // This function is still not supported by ES6. The syntax to write it must be in ES5.
  console.log(event.type);
}

function clickable(event){
  clickableButton.innerText = "Do not click";
  clickableButton.style.backgroundColor = "white";
  clickableButton.style.color = "black";
  clickableButton.removeEventListener("click", logEvent);
  console.log(event.type);
}
