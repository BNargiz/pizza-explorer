import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectListOfPizzas } from "../store/pizzas/selector";
import { selectRestaurantsThatSellPizza } from "../store/restaurants/selector";
import { selectUser } from "../store/user/selector";
import { toggleFavorites } from "../store/user/slice";

export const PizzaList = () => {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectListOfPizzas);
  const dispatch = useDispatch();
  const [getPizza, setPizza] = useState("");
  const sellsPizza = useSelector(selectRestaurantsThatSellPizza(getPizza));
  console.log(sellsPizza);

  return (
    <div>
      <h1>Welcome back: {user.name}</h1>
      There are: {pizzas.length} pizzas in total.
      <ul style={{ listStyle: "none" }}>
        {pizzas.map((p) => (
          <li key={p.id}>
            Pizza name: <h4>{p.name}</h4>
            <button onClick={() => dispatch(toggleFavorites(p.id))}>
              {user.favorites.includes(p.id) ? "♡" : "♥"}
            </button>
            <p>Description: {p.description}</p>
            <span>Bought: {p.bought} times!</span>
          </li>
        ))}
      </ul>
      <h2>
        Who sells:
        <select
          value={getPizza}
          onChange={(e) => setPizza(parseInt(e.target.value))}
        >
          {" "}
          {pizzas.map((pizza) => (
            <option key={pizza.id} value={pizza.id}>
              {pizza.name}
            </option>
          ))}
        </select>
      </h2>
      <ul>
        {sellsPizza.map((r) => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
};
