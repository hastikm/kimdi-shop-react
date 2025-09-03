import '../about/about.css';
import MyNav from '../../Components/navbar/nav';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import Footer from '../../Components/Footer/footer';
import Card from 'react-bootstrap/Card';

function About() {
  const [albums] = useState([
    { id: 1, imger: 'https://kimdikart.ir/wp-content/uploads/2025/07/%D8%A2%D9%84%D8%A8%D9%88%D9%85-%DA%A9%DB%8C%D9%85%D8%AF%DB%8C-120-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-%D8%B2%D9%84%D8%A7%D8%AA%D8%A7%D9%86-%D8%8C-%D8%B5%D9%84%D8%A7%D8%AD-%D9%88-%D8%A8%DA%A9%D8%A7%D9%85.webp', price3: '500,000 ', name1: 'آلبوم 2025' },
    { id: 2, imger: 'https://kimdikart.ir/wp-content/uploads/2025/07/%D8%A2%D9%84%D8%A8%D9%88%D9%85-%DA%A9%DB%8C%D9%85%D8%AF%DB%8C-120-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-%DB%8C%D8%A7%D9%85%D8%A7%D9%84-%D9%88-%D8%A7%D9%85%D8%A8%D8%A7%D9%BE%D9%87.webp', price3: '350,000 ', name1: 'آلبوم رونالدو 2025' },
    { id: 3, imger: 'https://kimdikart.ir/wp-content/uploads/2025/07/%D8%A2%D9%84%D8%A8%D9%88%D9%85-%DA%A9%DB%8C%D9%85%D8%AF%DB%8C-120-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-%D9%85%D8%A7%D8%B1%D8%A7%D8%AF%D9%88%D9%86%D8%A7-%D8%8C-%D9%BE%D9%84%D9%87-%D9%88-%D9%85%D9%88%D9%84%D8%B1.webp', price3: '400,000 ', name1: 'آلبوم 2025 مسی' },
    { id: 4, imger: 'https://kimdikart.ir/wp-content/uploads/2025/07/%D8%A2%D9%84%D8%A8%D9%88%D9%85-%DA%A9%DB%8C%D9%85%D8%AF%DB%8C-120-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-%D9%85%D8%AD%D8%A8%D9%88%D8%A8-%D9%87%D8%A7.webp', price3: '400,000 ', name1: 'آلبوم 2025 ترکیبی' },
    { id: 5, imger: 'https://kimdikart.ir/wp-content/uploads/2025/07/%D8%A2%D9%84%D8%A8%D9%88%D9%85-%DA%A9%DB%8C%D9%85%D8%AF%DB%8C-120-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-%DA%AF%D9%88%D8%A7%D8%B1%D8%AF%DB%8C%D9%88%D9%84%D8%A7-%D8%AA%D9%88%D9%BE-%D8%B7%D9%84%D8%A7.webp', price3: '100,000 ', name1: ' آلبوم اختصاصی کیمدی ' },
    { id: 6, imger: 'https://kimdikart.ir/wp-content/uploads/2025/07/%D8%A2%D9%84%D8%A8%D9%88%D9%85-%DA%A9%DB%8C%D9%85%D8%AF%DB%8C-120-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-%D8%B3%D8%AA%D8%A7%D8%B1%D9%87-%D9%87%D8%A7.webp', price3: '250,000 ', name1: 'آلبوم 2025 یامال' },
    { id: 7, imger: 'https://kimdikart.ir/wp-content/uploads/2025/07/%D8%A2%D9%84%D8%A8%D9%88%D9%85-%DA%A9%DB%8C%D9%85%D8%AF%DB%8C-120-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-%DA%98%D8%A7%D8%A8%DB%8C-%D8%A2%D9%84%D9%88%D9%86%D8%B3%D9%88-%D8%AA%D9%88%D9%BE-%D8%B7%D9%84%D8%A7.webp', price3: '250,000 ', name1: 'آلبوم 2025 یامال' },
    { id: 8, imger: 'https://kimdikart.ir/wp-content/uploads/2025/07/%D8%A2%D9%84%D8%A8%D9%88%D9%85-%DA%A9%DB%8C%D9%85%D8%AF%DB%8C-120-%DA%A9%D8%A7%D8%B1%D8%AA%DB%8C-%D8%A8%D8%A7%D9%84%D8%A7%DA%A9-%D9%88-%DA%A9%D8%B1%D9%88%D8%B3.webp', price3: '250,000 ', name1: 'آلبوم 2025 یامال' },
   
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
            <Col key={item.id} xs={12} sm={6} md={3} className="d-flex justify-content-center">
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
