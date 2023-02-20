import { Fragment, useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import CartIcon from "../../components/cart-icon/CartIcon"
import CartDropdown from "../../components/cart-dropdown/CartDropdown"
import { UserContext } from "../../contexts/user.context"
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from "../../utils/firebase/firebase"
import './navigation.scss'

const Navigation = () => {
  const {cartOpened} = useContext(CartContext)

  const {currentUser, setCurrentUser} = useContext(UserContext)

  const signOutHandler = async () => {
    await signOutUser();

    setCurrentUser(null);
  }
  return (

  <Fragment>
    <div className="navigation">
        <Link className="logo-container" to="/">
            <CrownLogo className="logo"/>
        </Link>

        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">SHOP</Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={signOutHandler} >SIGN OUT</span>

              ):(
                <Link className="nav-link" to="/auth">SIGN IN</Link>

              )
            }
            <CartIcon/>

        </div>
       {cartOpened && <CartDropdown/>}
    </div>
    <Outlet/>
  </Fragment>

  )
}

export default Navigation