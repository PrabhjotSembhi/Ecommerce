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

export const CartDropdownContext = createContext({
    cartOpened:false,
    setCartOpened: () => {},
    cartItems:[],
    addItemToCart: () => {}
})

export const CardDropdownProvider = ({children}) =>{
    const [cartOpened, setCartOpened] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const value = { cartOpened, setCartOpened, addItemToCart, cartItems};

    return(
        <CartDropdownContext.Provider value={value}>
            {children}
        </CartDropdownContext.Provider>
    )

}