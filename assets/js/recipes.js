// ICED Coffee
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
    const heading = document.createElement("div");
    heading.innerHTML = iceCoffeeName;
    iceDiv.appendChild(heading);

    // const iceCoffeeIngredients = data[i].ingredients;
    // const iceIngDiv = document.getElementById("coldDiv");
    // const heading = document.createElement("div");
    // heading.innerHTML
    // const iceCoffeeImg = document.createElement("img");
    // iceCoffeeImg.src = coldDiv.image;
    // coldDiv.appendChild(iceCoffeeImg);
  }
}
icedCoffee.addEventListener("click", getColdData);

// fetch("https://api.sampleapis.com/coffee/iced")
//   .then((resp) => json())
//   .then((data) => console.log(data));

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
    const heading = document.createElement("div");
    heading.innerHTML = hotCoffeeName;
    hotDiv.appendChild(heading);
  }
}
hotCoffee.addEventListener("click", getHotData);

var hotDrink = document.createElement("div");
// hotDrink.appendChild(hotCoffee);
// ice.innerHTML = results[i].getHotData;

// // function displayHotData(data) {
// const hotCoffee = data.drinks[0];
// const hotDiv = document.getElementById("hot");
// // }
