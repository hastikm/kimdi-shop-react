import '../about/about.css';
import MyNav from '../../Components/navbar/nav';
import Albom from '../../Components/albom/albom';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import Footer from '../../Components/Footer/footer';

function About() {
  const [albums, setAlbums] = useState([
    {
      id: 1,
      imger: 'https://cdn.snappshop.ir/products/ed/ad/9ec6b69c-4af5-4859-bf3b-2dcb3890edad.jpg?q=75&w=576',
      price3: '500,000 ',
      name1: 'آلبوم 2025',
    },
    {
      id: 2,
      imger: 'https://cdn.snappshop.ir/products/b0/c1/9e538acd-8a81-4b3b-9664-49c25840b0c1.jpg?q=75&w=576',
      price3: '350,000 ',
      name1: 'آلبوم رونالدو 2025',
    },
    {
      id: 3,
      imger: 'https://files.emalls.ir/files/Products/automatic/25833945/mno3j3xx_thumb3.jpg',
      price3: '400,000 ',
      name1: 'آلبوم 2025 مسی',
    },
    {
      id: 4,
      imger: 'https://cdn.snappshop.ir/products/66/c8/9e538a44-9bdf-4f24-a788-38c8090466c8.jpg?q=75&w=576',
      price3: '400,000 ',
      name1: 'آلبوم 2025 ترکیبی',
    },
    {
      id: 5,
      imger: 'https://cdn.snappshop.ir/products/ea/ca/9eba9f24-918f-4ce2-9678-91bb93e0eaca.jpg?q=75&w=576',
      price3: '100,000 ',
      name1: ' آلبوم اختصاصی کیمدی ',
    },
    {
      id: 6,
      imger: 'https://cdn.snappshop.ir/products/a3/7a/9e45fd3a-8b25-4211-9f7c-ac8af6bfa37a.png?q=75&w=576',
      price3: '250,000 ',
      name1: 'آلبوم 2025 یامال',
    },
  ]);


  

  return (
    <>
     <MyNav />
      <Container>
         
        <Row>
          {albums.map((item) => (
            <Col className='imger' key={item.id} md={4}>
              <Albom
                imger={item.imger}
                price3={item.price3}
                name1={item.name1}
                 id={item.id}
              />
            </Col>
          ))}
        </Row>
         <Footer className='my-foot' />
      </Container>

     
    </>
  );
}

export default About;
