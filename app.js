//Event listener for API Call. Returns Array
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const beer = data[0];
      const name = beer.name;
      const suggestedFoodPairing = beer.food_pairing[0];
      const beerImage = beer.image_url;
      const beerDescription = beer.description;
      const style = beer.tagline;
      console.log(data);
    });
});
