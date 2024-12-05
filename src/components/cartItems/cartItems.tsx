import { useShoppingCart } from "../../context/shopContext";
import { HiOutlineX } from "react-icons/hi";

import "./index.css";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    products,
  } = useShoppingCart();

  const product = products.find((product) => product.id === id);

  if (!product) return null; // Returnează nimic dacă produsul nu este găsit

  return (
    <div className="cart-item">
      <div className="cart-item-product">
        <img
          src={product.image}
          alt={product.title}
          className="cart-item-image"
        />
        <h5>{product.title}</h5>
      </div>

      <div className="cart-item-details">
        <p className="cart-item-price">${product.price}</p>

        <div className="cart-item-actions">
          <button className="btn-cart" onClick={() => decreaseCartQuantity(id)}>
            -
          </button>
          <p>{quantity}</p>
          <button
            className="btn-cart"
            id="mb"
            onClick={() => increaseCartQuantity(id)}
          >
            +
          </button>
        </div>
        <p>${(product.price * quantity).toFixed(2)}</p>
        <button className="btn-cart" onClick={() => removeFromCart(id)}>
          <HiOutlineX size={20} color="grey" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
