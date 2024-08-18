import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebaseConfig';

const ShoeDetails = () => {
  const { id } = useParams();
  const [shoe, setShoe] = useState(null);

  useEffect(() => {
    const fetchShoe = async () => {
      const shoeDoc = await db.collection('shoes').doc(id).get();
      setShoe(shoeDoc.data());
    };

    fetchShoe();
  }, [id]);

  if (!shoe) return <p>Loading...</p>;

  return (
    <div>
      <h1>{shoe.name}</h1>
      <img src={shoe.image} alt={shoe.name} />
      <p>Type: {shoe.type}</p>
      <p>Cost: ${shoe.cost}</p>
      <p>Rated: {shoe.ratedStar} stars</p>
      <p>Color: {shoe.color}</p>
      <p>Size: {shoe.size}</p>
      <p>Product Information: {shoe.productInformation}</p>
      <button>Buy Now</button>
      <button>Add to Cart</button>
    </div>
  );
};

export default ShoeDetails;
