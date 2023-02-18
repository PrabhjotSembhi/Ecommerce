import { useContext } from 'react';
import './product-card.styles.scss'
import Button from '../button/Button'
import { CartDropdownContext } from '../../contexts/cartDropdown.context';


const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartDropdownContext)

    const {name, price, imageUrl} = product;
 return (  <div className='product-card-container'>
        <img src={imageUrl} alt='h'/>
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>

        </div>
        <Button buttonType='inverted' onClick={()=>{addItemToCart(product)}} >Add to cart</Button>
    </div>)
}

export default ProductCard;