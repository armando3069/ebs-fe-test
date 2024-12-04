import { useShoppingCart } from "../../context/shopContext";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

import './index.css'

type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
};

const ShopItem = ({ id, title, price, image, category }: StoreItemProps) => {

  const { increaseCartQuantity, decreaseCartQuantity, getItemQuantity } =
    useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className="card-item" >
      <img
        src={image}
        alt={title}
        className="card-image"
      />
      <div className="card-title">
        <h4>{title}</h4>
      </div>
      <p>Price: <strong>${price}</strong></p>
      
      <p>Category: {category}</p>

      <div className="add">
        {quantity === 0 ? (
          <button 
            onClick={() => increaseCartQuantity(id)} 
            className="btn add-to-cart-btn"
          >
            Add to Cart
          </button>
        ) : (
          <div className="quantity-controls">
            <button onClick={() => decreaseCartQuantity(id)} className="btn">
              <IoIosRemoveCircleOutline fontSize={25} />
            </button>
            <strong className="quantity">{quantity}</strong>
            <button onClick={() => increaseCartQuantity(id)} className="btn">
              <IoIosAddCircleOutline fontSize={25} />
            </button>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default ShopItem;
