import React from 'react';
import { Link } from 'react-router-dom';

const ShoeCard = ({ shoe }) => {
  return (
    <div className='shoe-card'>
      <Link to={`/shoes/${shoe.id}`}>
        <img src={shoe.image} alt={shoe.name} />
        <h2>{shoe.name}</h2>
        <p>${shoe.cost}</p>
      </Link>
    </div>
  );
};

export default ShoeCard;
