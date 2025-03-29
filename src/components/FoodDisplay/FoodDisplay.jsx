import React, { useContext, useState, useEffect } from 'react';
import "./FoodDisplay.css";
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import SkeletonFoodItem from '../SkeletonFoodItem/SkeletonFoodItem'

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 20000); // Simulated delay
  }, []);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {loading ? (
          // Show 6 skeleton items while loading
          [...Array(6)].map((_, index) => <SkeletonFoodItem key={index} />)
        ) : (
          food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          })
        )}
      </div>
    </div>
  );
}

export default FoodDisplay;
