import React from 'react';
import "../styles/card.css";

const card = ({ product }) => {
  const { productName, price, rating, discount, availability } = product;

  return (
    <div className="product-card">
      <h3>{productName}</h3>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <p>Discount: {discount}%</p>
      <p>Availability: {availability}</p>
    </div>
  );
};

export default card;
