//-Виберіть блок Target
// -Здайте div всередині цього блоку
// -Додайте йому 3 класи "Ctrl Shift Delete" за допомогою властивості className
// -Додайте класс через метод add
// -Видаліть клас "Delete"
// -Примініть метод toggle на клас "Command"

const target = document.getElementById("target");
const newDiv = document.createElement("div");
newDiv.innerHTML = "This is new div";
document.getElementById("target").appendChild(newDiv);

const addButton = document.createElement("button");
addButton.innerHTML = "Click me for adding classes";
target.appendChild(addButton);
addButton.onclick = function addClasses() {
  const newClasses = newDiv.classList;
  newClasses.add("ctrl", "shift", "delete");
};

const removeButton = document.createElement("button");
removeButton.innerHTML = "Click me for removing class";
target.appendChild(removeButton);
removeButton.onclick = function removeClass() {
  const newClasses = newDiv.classList;
  newClasses.remove("delete");
};

const toggleButton = document.createElement("button");
toggleButton.innerHTML = "Click me for toggling class";
target.appendChild(toggleButton);
toggleButton.onclick = function toggleClass() {
  const newClasses = newDiv.classList;
  newClasses.toggle("command");
};
