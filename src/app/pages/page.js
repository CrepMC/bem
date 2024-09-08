import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebaseConfig';
import { Layout, Button, Typography, Image } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

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

  if (!shoe) return <Paragraph>Loading...</Paragraph>;

  return (
    <Layout>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-content" style={{ padding: 24, minHeight: 380 }}>
          <Title>{shoe.name}</Title>
          <Image src={shoe.image} alt={shoe.name} />
          <Paragraph>Type: {shoe.type}</Paragraph>
          <Paragraph>Cost: ${shoe.cost}</Paragraph>
          <Paragraph>Rated: {shoe.ratedStar} stars</Paragraph>
          <Paragraph>Color: {shoe.color}</Paragraph>
          <Paragraph>Size: {shoe.size}</Paragraph>
          <Paragraph>Product Information: {shoe.productInformation}</Paragraph>
          <Button type="primary">Buy Now</Button>
          <Button>Add to Cart</Button>
        </div>
      </Content>
    </Layout>
  );
};

export default ShoeDetails;
