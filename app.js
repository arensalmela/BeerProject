//Event listener for API Call. Returns Array
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const name = data[0].name;
      const suggestedFoodPairing = data[0].food_pairing[0];
      const beerImage = data[0].image_url;
      console.log(name);
      console.log(suggestedFoodPairing);
    });
});
