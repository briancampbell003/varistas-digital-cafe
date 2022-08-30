// Iced Coffee
var icedCoffee = document.querySelector("#ice");
var icedIndex = 0;

function getColdData() {
  const coldURL = "https://api.sampleapis.com/coffee/iced";
  fetch(coldURL)
    .then((resp) => resp.json())
    .then((data) => displayIceData(data));
}
function displayIceData(data) {
  console.log(data);

  console.log(data[icedIndex].title);
  // Empty Ice coffee old info
  const iceDiv = document.getElementById("coldDiv");
  iceDiv.innerHTML = "";

  // Display Ice coffee title
  const iceCoffeeName = data[icedIndex].title;
  const headingIceTitle = document.createElement("div");
  headingIceTitle.innerHTML = iceCoffeeName;
  iceDiv.appendChild(headingIceTitle);
  // Display Ice Coffee Ingredients
  const iceCoffeeIngredients = data[icedIndex].ingredients;
  const headingIceIngredients = document.createElement("h1");
  headingIceIngredients.innerHTML = iceCoffeeIngredients;
  iceDiv.appendChild(headingIceIngredients);
  // Display Ice COffee Images
  const coffeeIceImg = data[icedIndex].image;
  const headingIceImages = document.createElement("div");
  headingIceImages.innerHTML = coffeeIceImg;
  headingIceImages.innerHTML = '<img src="' + coffeeIceImg + '">';
  iceDiv.appendChild(headingIceImages);

  icedIndex++;
}

icedCoffee.addEventListener("click", getColdData);

//Hot Coffee
var hotCoffee = document.querySelector("#hot");
var hotIndex = 0;

function getHotData() {
  const hotURL = "https://api.sampleapis.com/coffee/hot";
  fetch(hotURL)
    .then((resp) => resp.json())
    .then((data) => displayHotData(data));
}
function displayHotData(data) {
  console.log(data);

  console.log(data[hotIndex].title);

  // Empty Hot coffee old info
  const warmDiv = document.getElementById("hotDiv");
  warmDiv.innerHTML = "";

  // Display Hot Coffee Title
  const hotCoffeeName = data[hotIndex].title;
  const headingHotTitle = document.createElement("div");
  headingHotTitle.innerHTML = hotCoffeeName;
  warmDiv.appendChild(headingHotTitle);

  // Display Hot Coffee Ingredients
  const hotCoffeeIngredients = data[hotIndex].ingredients;
  const headingHotIngredients = document.createElement("h1");
  headingHotIngredients.innerHTML = hotCoffeeIngredients;
  warmDiv.appendChild(headingHotIngredients);

  // Display COffee Images
  const coffeeHotImg = data[hotIndex].image;
  const headingHotImages = document.createElement("div");
  headingHotImages.innerHTML = '<img src="' + coffeeHotImg + '">';
  warmDiv.appendChild(headingHotImages);
  hotIndex++;
}

hotCoffee.addEventListener("click", getHotData);
