import { useEffect } from "react";
import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const exsistingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (exsistingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};


const removeItem = (cartItems, productToRemove) => {
  const removeitemm = (cartItem, index) => {
    return cartItem.id !== productToRemove.id;
  };

  return cartItems.filter(removeitemm);
};

const increaseQuantity = (cartItems, productToIncrease) =>{

  const product = cartItems.find(
    (cartItem) => cartItem.id === productToIncrease.id
  );

  product.quantity++

  return [...cartItems, {...productToIncrease}]
}

export const CartContext = createContext({
  cartOpened: false,
  setCartOpened: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CardProvider = ({ children }) => {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [quantity, setIncreasedQuantity] = useState(0)
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  console.log(cartItems);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeCartItem = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove));
  };

  const increaseQuantity2 = ( productToIncrease ) =>{
    setCartItems(increaseQuantity(cartItems, productToIncrease))
  }

  const value = {
    cartOpened,
    setCartOpened,
    addItemToCart,
    cartItems,
    cartCount,
    removeCartItem,
    increaseQuantity2
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
