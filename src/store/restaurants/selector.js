export const selectListOfRestaurants = (reduxState) => {
  const cloneArray = [...reduxState.restaurants.all];
  return cloneArray.sort((a, b) => a.name.localeCompare(b.name));
};

export const selectRestaurantsWithPizzas = (reduxState) => {
  const { restaurants, pizzas } = reduxState;

  const resWithPizzas = restaurants.all.map((restaurant) => {
    const replacePizzas = restaurant.pizzas.map((pizzaId) =>
      pizzas.allPizzas.find((pizza) => pizza.id === pizzaId)
    );

    return { ...restaurant, pizzas: replacePizzas };
  });
  console.log(resWithPizzas);
  return resWithPizzas;
};

export const selectRestaurantsThatSellPizza = (pizzaId) => (reduxState) => {
  return reduxState.restaurants.all.filter((rest) =>
    rest.pizzas.includes(pizzaId)
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
