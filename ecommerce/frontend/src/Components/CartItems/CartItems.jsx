import React, { useContext } from 'react';
import './cartitems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const {getTotalCartAmount, all_product, cartItems, removeCart } = useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cart-item-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((e) => {
        if (cartItems && cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="cartitems-format cart-item-main">
              <img src={e.image} alt={e.name} className='cart-icon' />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cartitem-quantity'>{cartItems[e.id]}</button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img src={remove_icon} onClick={() => {removeCart(e.id)}} alt="Remove" className='remove-icon' />
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartItems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed to Check out</button>
        </div>
        <div className="cartitems-promocode"><p>
          If you have promo enter it here</p>
          <div className="cartitmes-promobox">
            <input type="text" placeholder='promo-code' />
            <button>Submit</button>
          </div>
          </div>
      </div>
    </div>
  );
};

export default CartItems;
