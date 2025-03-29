import React, { useContext } from 'react';
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/AxiosInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate(); 

  // Function to handle removing items with toast notification
  const handleRemoveFromCart = (id, name) => {
    removeFromCart(id);
    toast.warn(`${name} removed from cart!`);
  };

  // Function to handle checkout action
  const handleCheckout = () => {
    if (getTotalCartAmount() === 0) {
      toast.error("Your cart is empty!", { autoClose: 2000 });
      return;
    }
    toast.success("Proceeding to checkout...", { autoClose: 2000 });
    navigate('/order');
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            // Construct the full image URL using axiosInstance
            const imageUrl = `${axiosInstance.defaults.baseURL}/images/${item.image}`;

            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={imageUrl} alt={item.name} />
                  <p className='name'>{item.name}</p>
                  <p>£{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>£{item.price * cartItems[item._id]}</p>
                  <p 
                    onClick={() => handleRemoveFromCart(item._id, item.name)} 
                    className='cross'
                  >X</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>£{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>£{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>£{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button onClick={handleCheckout}>Proceed To Checkout</button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input className='promo' type="text" placeholder='Promo code' />
              <button onClick={() => toast.info("Promo applied!", { autoClose: 2000 })}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
