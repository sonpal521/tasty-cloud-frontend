import React, { useContext } from 'react';
import "./FoodItem.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axiosInstance from '../../config/AxiosInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FoodItem({ id, name, price, title, description, image }) {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    // Construct the full image URL using axiosInstance baseURL
    const imageUrl = `${axiosInstance.defaults.baseURL}/images/${image}`;

    // Function to handle adding an item with a toast notification
    const handleAddToCart = () => {
        addToCart(id);
        toast.success(`${name} added to cart!`);
    };

    // Function to handle removing an item with a toast notification
    const handleRemoveFromCart = () => {
        removeFromCart(id);
        toast.warn(`${name} removed from cart!`);
    };

    return (
        <div className="food-item">
            <div className="food-item-img-container">
                <img className='food-item-image' src={imageUrl} alt={name} />
                
                {/* Show 'Add' button if item is not in cart, else show counter */}
                {!cartItems[id] ? (
                    <img className='add' onClick={handleAddToCart} src={assets.add_icon_white} alt='Add' />
                ) : (
                    <div className="food-item-counter">
                        <img onClick={handleRemoveFromCart} src={assets.remove_icon_red} alt='Remove' />
                        <p>{cartItems[id]}</p>
                        <img onClick={handleAddToCart} src={assets.add_icon_green} alt='Add' />
                    </div>
                )}
            </div>

            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='Rating' />
                </div>
                <p className="food-item-title">{title}</p>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">£{price}</p>

                {/* Add to Cart button with toast notification */}
                <button onClick={handleAddToCart} className='cart-btn'>Add To Cart</button>
            </div>
        </div>
    );
}

export default FoodItem;
