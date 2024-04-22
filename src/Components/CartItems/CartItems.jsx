import React, { useContext } from 'react';
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
  const {getTotalCartAmount, all_product, CartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        const cartQuantity = CartItems && CartItems[product.id] ? CartItems[product.id] : 0;

        if (cartQuantity > 0) {
          return (
            <div key={product.id}>
              <div className="format format-main">
                <img src={product.image} alt="" className='cartion-product-icon' />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <button className='quantity'>{cartQuantity}</button>
                <p>${product.new_price * cartQuantity}</p>
                <img className='remove-icon' src={remove_icon} onClick={() => removeFromCart(product.id)} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null; 
      })}
      <div className="down">
        <div className="total">
          <h1>Cart Total</h1>
          <div>
            <div className="total-item">
              <p>subtotal</p>
              <p>${ getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="total-item">
              <h3>Total</h3>
              <h3>${ getTotalCartAmount}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promo-code">
          <p>Enter Your Promo Code Here:</p>
          <div className="promo-box">
            <input type="text" placeholder="promo code" id="" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
