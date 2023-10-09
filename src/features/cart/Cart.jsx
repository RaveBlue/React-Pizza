import { Link } from "react-router-dom";
//import CartItem from "./CartItem";
//import Button from "../../ui/Button";
//mport LinkButton from "../..ui/LinkButton";
//import cart from "../cart";
import { useState } from "react";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const [cart, setCart] = useState(fakeCart);

  const clearCart = () => {
    setCart([]);
  };
  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <h2>Your cart, Raven</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity} - Total Price: $
            {item.totalPrice}
          </li>
        ))}
      </ul>

      <div>
        <Link to="/order/new">Order pizzas</Link>
        <button onClick={clearCart}>Clear cart</button>
        <div></div>
      </div>
    </div>
  );
}

export default Cart;
