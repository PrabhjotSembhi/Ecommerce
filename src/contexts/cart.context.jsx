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


const removeItem = (cartItems, productToRemove) => {
  
 /* const itemToRemove = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  ) */

  const removeitemm =(cartItem, index) => {
    return cartItem.id !== productToRemove.id
     
  }

  console.log(cartItems.filter(removeitemm))

  return cartItems.filter(removeitemm)


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


    const removeCartItem = (productToRemove) => {
       setCartItems(removeItem(cartItems, productToRemove));
       
    }
    console.log(cartItems)
    const value = { cartOpened, setCartOpened, addItemToCart, cartItems,cartCount, removeCartItem};

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}