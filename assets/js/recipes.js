// UNIVERSAL VARIABLES
const iceDiv = document.getElementById("coldDiv");
const warmDiv = document.getElementById("hotDiv");

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

  // warmDiv.removeClass("hide");
  // iceDiv.removeClass("hide");

  // Empty Ice coffee old info
  warmDiv.innerHTML = "";
  iceDiv.innerHTML = "";


  // Display Ice coffee title
  const iceCoffeeName = data[icedIndex].title;
  const headingIceTitle = document.createElement("div");
  headingIceTitle.innerHTML = iceCoffeeName;
  iceDiv.appendChild(headingIceTitle);
  headingIceTitle.setAttribute("style", "font-weight: bolder");

  // Display Ice Coffee Ingredients
  const iceCoffeeIngredients = data[icedIndex].ingredients;
  const headingIceIngredients = document.createElement("div");
  headingIceIngredients.innerHTML = "Ingredients: " + iceCoffeeIngredients;
  iceDiv.appendChild(headingIceIngredients);

  // Display Ice COffee Images
  const coffeeIceImg = data[icedIndex].image;
  const headingIceImages = document.createElement("div");
  headingIceImages.innerHTML = coffeeIceImg;
  headingIceImages.innerHTML = '<img src="' + coffeeIceImg + '">';
  iceDiv.appendChild(headingIceImages);
  headingIceImages.setAttribute("style", "width: 50%; height: 50%");

  // Display Ice Coffee Description
  const iceCoffeeDescription = data[icedIndex].description;
  const headingIceDescription = document.createElement("div");
  headingIceDescription.innerHTML = "Description: " + iceCoffeeDescription;
  iceDiv.appendChild(headingIceDescription);

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

  // warmDiv.removeClass("hide");
  // iceDiv.removeClass("hide");

  // Empty Hot coffee old info
  iceDiv.innerHTML = "";
  warmDiv.innerHTML = "";

  // Display Hot Coffee Title
  const hotCoffeeName = data[hotIndex].title;
  const headingHotTitle = document.createElement("div");
  headingHotTitle.innerHTML = hotCoffeeName;
  warmDiv.appendChild(headingHotTitle);
  headingHotTitle.setAttribute("style", "font-weight: bolder");

  // Display Hot Coffee Ingredients
  const hotCoffeeIngredients = data[hotIndex].ingredients;
  const headingHotIngredients = document.createElement("div");
  headingHotIngredients.innerHTML = "Ingredients: " + hotCoffeeIngredients;
  warmDiv.appendChild(headingHotIngredients);

  // Display COffee Images
  const coffeeHotImg = data[hotIndex].image;
  const headingHotImages = document.createElement("div");
  headingHotImages.innerHTML = '<img src="' + coffeeHotImg + '">';
  warmDiv.appendChild(headingHotImages);
  headingHotImages.setAttribute("style", "text-align: center, width: 50%; height: 50%");

   
  // Display Ice Coffee Description
  const hotCoffeeDescription = data[hotIndex].description;
  const headingHotDescription = document.createElement("div");
  headingHotDescription.innerHTML = "Description: " + hotCoffeeDescription;
  warmDiv.appendChild(headingHotDescription);

  hotIndex++;
}

hotCoffee.addEventListener("click", getHotData);

