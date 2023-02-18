import { createContext, useState } from "react";


const addCartItem =(cartItems,productToAdd) => {

    const {id} = productToAdd;
    cartItems.map((item) => {
    if(item.id === id){
        item.quantity = item.quantity + 1;
    }
    if (item.id !== id) {
        cartItems.push({...productToAdd, quantity: 1})
    }
   })

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
        setCartItems(cartItems,productToAdd)
    }
    console.log(cartItems)

    const value = { cartOpened, setCartOpened};

    return(
        <CartDropdownContext.Provider value={value}>
            {children}
        </CartDropdownContext.Provider>
    )

}