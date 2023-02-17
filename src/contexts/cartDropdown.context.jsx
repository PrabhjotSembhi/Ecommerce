import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
    cartOpened:false
})

export const CardDropdownProvider = ({children}) =>{
    const [cartOpened, setCartOpened] = useState(false)
    const value = { cartOpened };

    return(
        <CardDropdownProvider value={value}>
            {children}
        </CardDropdownProvider>
    )

}