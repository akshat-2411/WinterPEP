import React, { useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Update quantity if the item already exists
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add new item to the cart
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    // Update totals
    setTotalCount((prevCount) => prevCount + 1);
    setTotalPrice((prevPrice) => prevPrice + item.price);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === id);
      if (!existingItem) return prevCart; // If item not found, return the cart as is

      if (existingItem.quantity > 1) {
        // Reduce the quantity if more than 1
        return prevCart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        // Remove the item if the quantity is 1
        return prevCart.filter((cartItem) => cartItem.id !== id);
      }
    });

    // Update totals
    setTotalCount((prevCount) => prevCount - 1);
    setTotalPrice((prevPrice) => prevPrice - cart.find((item) => item.id === id).price);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Items:</h2>
        {cart.length === 0 ? (
          <p>The cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h3>Total Items: {totalCount}</h3>
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
      <div>
        <h2>Add Items:</h2>
        <button
          onClick={() =>
            addItemToCart({ id: 1, name: "Apple", price: 1.5 })
          }
        >
          Add Apple ($1.5)
        </button>
        <button
          onClick={() =>
            addItemToCart({ id: 2, name: "Banana", price: 0.9 })
          }
        >
          Add Banana ($0.9)
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
