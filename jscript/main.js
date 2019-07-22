let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}
if (!localStorage.getItem("name")) {
  /* allows us to store data in the browser and later retrieve it*/
  setUserName(); /*setItem() function to create and store a data item called 'name'*/
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}
myButton.onclick = function() {
  setUserName();
};
