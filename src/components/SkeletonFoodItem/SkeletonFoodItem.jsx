import React from "react";
import "./SkeletonFoodItem.css";

const SkeletonFoodItem = () => {
  return (
    <div className="skeleton-container">
            <div className="skeleton skeleton-image"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text small"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text small"></div>
        </div>
  );
};

export default SkeletonFoodItem;
