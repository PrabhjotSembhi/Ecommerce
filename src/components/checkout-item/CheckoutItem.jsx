import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ CheckoutItem }) => {
  const { name, imageUrl, price, quantity } = CheckoutItem;
  const { removeCartItem, IncreaseQuantity, DecreaseQuantity } =
    useContext(CartContext);

  return (
    <div>
      <img src={imageUrl} alt={`${name}`} />

      <h3 className="">{name}</h3>

      <button
        onClick={() => {
          IncreaseQuantity(CheckoutItem);
        }}
      >
        Increase
      </button>
      <span className="">{quantity}</span>
      <button
        onClick={() => {
          if (CheckoutItem.quantity > 1) {
            DecreaseQuantity(CheckoutItem);
          }
          if (CheckoutItem.quantity === 1) {
            removeCartItem(CheckoutItem);
          }
        }}
      >
        Decrease
      </button>

      <span className=""> ${price}</span>
      <button onClick={() => removeCartItem(CheckoutItem)}>Remove</button>
    </div>
  );
};

export default CheckoutItem;
