import { useShoppingCart } from "../../context/shopContext";
import CartItem from "../../components/cartItems/cartItems";
import emptyCart from '../../assets/img/emptyCart.png'
import './index.css';

const Shop = () => {
  const { cartItems, products,clearCart } = useShoppingCart();

  const total = cartItems.reduce((acc, item) => {
    const product = products.find((prod) => prod.id === item.id);
    return acc + (product?.price || 0) * item.quantity;
  }, 0);

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <img src={emptyCart} alt="" width={300} />
      ) : (
        <>
         <div className="title-shop">
          <div className="left">
            <p>PRODUCT</p>
          </div>
          <div className="right">
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>TOTAL</p>
            <p>&nbsp;</p>
          </div>
         </div>
        <hr className="hr-line" />
        {cartItems.map((item) => <CartItem key={item.id} id={item.id} quantity={item.quantity} />)}
      
        </>
      )}

      <div className="btn-shops">
      {cartItems.length > 0 && <button className="shop-btn-clear" onClick={clearCart}>CLEAR SHOPPING CART</button>}
      {cartItems.length > 0 && <button className="shop-btn" >CHECKOUT</button>}
      </div>
      <div className="total-price-item">
      {cartItems.length > 0 &&  <h2>Total: ${total.toFixed(2)}</h2>}
      </div>
    </div>
  );
};

export default Shop;