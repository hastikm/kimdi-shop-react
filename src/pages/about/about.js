import '../about/about.css';
import MyNav from '../../Components/navbar/nav';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import Footer from '../../Components/Footer/footer';
import Card from 'react-bootstrap/Card';

function About() {
  const [albums] = useState([
    { id: 1, imger: 'https://cdn.snappshop.ir/products/ed/ad/9ec6b69c-4af5-4859-bf3b-2dcb3890edad.jpg?q=75&w=576', price3: '500,000 ', name1: 'آلبوم 2025' },
    { id: 2, imger: 'https://cdn.snappshop.ir/products/b0/c1/9e538acd-8a81-4b3b-9664-49c25840b0c1.jpg?q=75&w=576', price3: '350,000 ', name1: 'آلبوم رونالدو 2025' },
    { id: 3, imger: 'https://files.emalls.ir/files/Products/automatic/25833945/mno3j3xx_thumb3.jpg', price3: '400,000 ', name1: 'آلبوم 2025 مسی' },
    { id: 4, imger: 'https://cdn.snappshop.ir/products/66/c8/9e538a44-9bdf-4f24-a788-38c8090466c8.jpg?q=75&w=576', price3: '400,000 ', name1: 'آلبوم 2025 ترکیبی' },
    { id: 5, imger: 'https://cdn.snappshop.ir/products/ea/ca/9eba9f24-918f-4ce2-9678-91bb93e0eaca.jpg?q=75&w=576', price3: '100,000 ', name1: ' آلبوم اختصاصی کیمدی ' },
    { id: 6, imger: 'https://cdn.snappshop.ir/products/a3/7a/9e45fd3a-8b25-4211-9f7c-ac8af6bfa37a.png?q=75&w=576', price3: '250,000 ', name1: 'آلبوم 2025 یامال' },
  ]);

  const handleAdd = (name) => {
    console.log(`${name} added to cart`);
  };

  return (
    <>
      <MyNav />
      <Container className="album-container">
        <Row>
          {albums.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} className="d-flex justify-content-center">
              <Card className="album-card">
                <Card.Img variant="top" src={item.imger} />
                <Card.Body>
                  <Card.Title className="album-title">{item.name1}</Card.Title>
                  <h1 className="album-price">{item.price3}</h1>
                  <div className="album-actions">
                    <button className="hover-button">مشخصات</button>
                    <button className="add-circle" onClick={() => handleAdd(item.name1)}>+</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default About;
