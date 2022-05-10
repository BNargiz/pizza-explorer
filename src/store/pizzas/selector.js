export const selectListOfPizzas = (reduxState) => {
  const cloneArray = [...reduxState.pizzas.allPizzas];
  return cloneArray.sort((a, b) => b.bought - a.bought);
};

export const selectPizzasSoldByRestaurant = (restaurantId) => (reduxState) => {
  // your logic goes here - it will be slightly more complex than the previous exercise
  const restaurant = reduxState.restaurants.all.find(
    (r) => r.id === restaurantId
  );

  console.log("restaurant", restaurant);

  return restaurant.pizzas.map((pId) =>
    reduxState.pizzas.allPizzas.find((p) => p.id === pId)
  );
};
// allPizzas: [
//     {
//       id: 161235,
//       name: "Pizza Margherita",
//       description:
//         "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
//       bought: 5,
//       image:
//         "https://static01.nyt.com/images/2014/04/09/dining/09JPPIZZA2/09JPPIZZA2-articleLarge-v3.jpg",
//     },

// all: [
//     {
//       name: "Sotto Pizza",
//       id: 56642,
//       pizzas: [67283, 357311],
//     },
