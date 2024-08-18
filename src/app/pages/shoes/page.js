import React, { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';
import ShoeCard from '../../components/ShoeCard';

const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = async () => {
      const shoesCollection = await db.collection('shoes').get();
      setShoes(
        shoesCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    fetchShoes();
  }, []);

  return (
    <div>
      <h1>Shoes</h1>
      <div className='shoe-list'>
        {shoes.map((shoe) => (
          <ShoeCard key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default Shoes;
