import { useState } from "react";
import { useSelector } from "react-redux";
import { selectPizzasSoldByRestaurant } from "../store/pizzas/selector";
import { selectRestaurantsWithPizzas } from "../store/restaurants/selector";

export const RestaurantList = () => {
  const restaurants = useSelector(selectRestaurantsWithPizzas);
  const [getRestaurant, setRestaurant] = useState(restaurants[0].id);
  const selectPizza = useSelector(selectPizzasSoldByRestaurant(getRestaurant));
  console.log(selectPizza);

  return (
    <div>
      <h1>Restaurants</h1>
      <h2>
        Who does
        <select
          value={getRestaurant}
          onChange={(e) => setRestaurant(parseInt(e.target.value))}
        >
          {" "}
          {restaurants.map((rest) => (
            <option key={rest.id} value={rest.id}>
              {rest.name}
            </option>
          ))}
        </select>
        sell
      </h2>
      <ul>
        {selectPizza.map((r) => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
      {/* <ul>
        {restaurants.map((rest) => (
          <li key={rest.id} style={{ listStyle: "none" }}>
            {rest.name}
            <ul>
              {rest.pizzas.map((p) => (
                <li>{p.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
