import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
    cartOpened:false,
    setCartOpened: () => {}
})

export const CardDropdownProvider = ({children}) =>{
    const [cartOpened, setCartOpened] = useState(false)
    const value = { cartOpened, setCartOpened};

    return(
        <CartDropdownContext.Provider value={value}>
            {children}
        </CartDropdownContext.Provider>
    )

}