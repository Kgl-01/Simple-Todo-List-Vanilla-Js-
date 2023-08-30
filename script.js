//Selecting all the html elements
const list = document.getElementById("list");
const form = document.getElementById("new-item-form");
const input = document.getElementById("item-input");

//adding eventListener when the form is submitted.

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //creating the new item
  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");

  //adding item to the list
  list.appendChild(item);

  //clearing the input field
  input.value = "";

  //setting up eventListener to delete the item when clicked
  item.addEventListener("click", () => {
    item.remove();
  });
});
