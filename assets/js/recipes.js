// Iced Coffee
var icedCoffee = document.querySelector("#ice");

function getColdData() {
  const coldURL = "https://api.sampleapis.com/coffee/iced";
  fetch(coldURL)
    .then((resp) => resp.json())
    .then((data) => displayIceData(data));
}
function displayIceData(data) {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].title);
    // Display coffee title
    const iceCoffeeName = data[i].title;
    const iceDiv = document.getElementById("coldDiv");
    const headingIceTitle = document.createElement("div");
    headingIceTitle.innerHTML = iceCoffeeName;
    iceDiv.appendChild(headingIceTitle);
    // Display Coffee Ingredients
    const iceCoffeeIngredients = data[i].ingredients;
    const iceIngDiv = document.getElementById("coldDiv");
    const headingIceIngredients = document.createElement("h1");
    headingIceIngredients.innerHTML = iceCoffeeIngredients;
    iceIngDiv.appendChild(headingIceIngredients);
    // Display COffee Images
    const coffeeIceImg = data[i].image;
    const iceImageDiv = document.getElementById("coldDiv");
    const headingIceImages = document.createElement("img");
    headingIceImages.innerHTML = coffeeIceImg;
    iceImageDiv.appendChild(headingIceImages);
    document.body.style.backgroundImage = "ColdURL('" + coldDiv.image + "')";
  }
}

icedCoffee.addEventListener("click", getColdData);

//Hot Coffee
var hotCoffee = document.querySelector("#hot");

function getHotData() {
  const hotURL = "https://api.sampleapis.com/coffee/hot";
  fetch(hotURL)
    .then((resp) => resp.json())
    .then((data) => displayHotData(data));
}
function displayHotData(data) {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].title);
    const hotCoffeeName = data[i].title;
    const hotDiv = document.getElementById("hotDiv");
    const headingHotTitle = document.createElement("div");
    headingHotTitle.innerHTML = hotCoffeeName;
    hotDiv.appendChild(headingHotTitle);
    // Display Coffee Ingredients
    const hotCoffeeIngredients = data[i].ingredients;
    const hotIngDiv = document.getElementById("hotDiv");
    const headingHotIngredients = document.createElement("h1");
    headingHotIngredients.innerHTML = hotCoffeeIngredients;
    hotIngDiv.appendChild(headingHotIngredients);
    // Display COffee Images
    const coffeeImg = data[i].image;
    const hotImageDiv = document.getElementById("hotDiv");
    const headingImage = document.createElement("img");
    headingImages.innerHTML = coffeeImg;
    hotImageDiv.appendChild(headingImage);
    document.body.style.backgroundImage = "hotURL('" + hotDiv.image + "')";
  }
}

hotCoffee.addEventListener("click", getHotData);
