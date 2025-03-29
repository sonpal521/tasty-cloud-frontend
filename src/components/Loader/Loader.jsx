import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        {[...Array(12)].map((_, index) => (
          <div 
            key={index} 
            className="loader_item" 
            style={{ "--i": index + 1 }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Loader;
