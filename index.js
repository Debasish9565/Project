// Retrieve stored to-do list items from local storage on page load
window.onload = function () {
  var savedList = localStorage.getItem("todoList");
  if (savedList) {
    document.getElementById("myUL").innerHTML = savedList;
    addCloseButtonListeners(); // Add event listeners to close buttons
  }
};

// Update the local storage with the current to-do list items
function updateLocalStorage() {
  var list = document.getElementById("myUL").innerHTML;
  localStorage.setItem("todoList", list);
}

// Create a new list item when clicking on the "Add" button or pressing Enter key
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  updateLocalStorage(); // Update local storage
  addCloseButtonListeners(); // Add event listeners to close buttons
}
// Function to check if the Enter key is pressed and add a new to-do item
function checkEnter(event) {
  if (event.keyCode === 13) {
    // 13 is the keycode for Enter key
    newElement();
  }
}
// Add event listeners to the close buttons
function addCloseButtonListeners() {
  var closeButtons = document.getElementsByClassName("close");
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function () {
      var div = this.parentElement;
      div.remove(); // Remove the list item from the DOM
      updateLocalStorage(); // Update local storage
    });
  }
}

// Add an event listener to the window object to save the to-do list items before the page is unloaded
window.addEventListener("beforeunload", function () {
  updateLocalStorage();
});

// Click on a list item to mark it as checked or unchecked
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
      updateLocalStorage(); // Update local storage
    }
  },
  false
);

// Dark mode toggle function
function darkfunction() {
  var element = document.body;
  element.classList.toggle("dark");
  element.classList.toggle("body-dark-mode");
}

// Add event listeners to the close buttons on page load
addCloseButtonListeners();
