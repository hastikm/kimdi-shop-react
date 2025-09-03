import React from 'react';
import Card from 'react-bootstrap/Card';
import '../blog/blogitem.css';

const BlogItem = ({ titel, desc, price, imgee }) => {

  const handleAddToCart = () => {
    console.log(`${titel} added to cart`);
  };

  return (
    <Card className="kimdi-card">
      <Card.Img src={imgee} />
      <Card.Body>
        <Card.Title className="kimdi-title">{titel}</Card.Title>
        <Card.Text className="kimdi-tag">{desc}</Card.Text>
        <h1 className="kimdi-price">{price}</h1>

        <div className="button-wrapper">
          <button className="kimdi-button">خرید</button>
          <button className="add-circle" onClick={handleAddToCart}>+</button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BlogItem;
