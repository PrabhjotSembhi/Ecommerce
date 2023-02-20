import { useEffect } from "react";
import { createContext, useState } from "react";


const addCartItem =(cartItems,productToAdd) => {

  const exsistingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )

  if (exsistingCartItem) {
    return cartItems.map((cartItem) =>
    cartItem.id === productToAdd.id
    ? {...cartItem, quantity: cartItem.quantity + 1}
    : cartItem
    )
  }

  return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContext = createContext({
    cartOpened:false,
    setCartOpened: () => {},
    cartItems:[],
    addItemToCart: () => {}
})

export const CardProvider = ({children}) =>{
    const [cartOpened, setCartOpened] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)

    useEffect(()=>{
      const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
      setCartCount(newCartCount)



      
    }, [cartItems])



    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const value = { cartOpened, setCartOpened, addItemToCart, cartItems,cartCount};

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}