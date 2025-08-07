import '../home/home.css';
import MyNav from '../../Components/navbar/nav';
import { Container , Row , Col } from 'react-bootstrap';
import img1 from '../../assets/imge/zCmwfUuK17CmZ0pGfRqEYJaiwjTPHHp41HhNvg53.jpg';
import img2 from '../../assets/imge/photo_۲۰۲۴-۱۱-۰۵_۱۶-۲۷-۵۲.jpg';
import img3 from '../../assets/imge/2024-6-kimdi-site-66cc7d122b5676090d02f089.jpg';
import img4 from '../../assets/imge/کارت-بازی-کیمدی۱.jpg'
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';
import Cursee from '../../Components/Course/course';
import { useState } from 'react';
import Article from '../article/article';
import Footer from '../../Components/Footer/footer';
import {CourseData} from '../../Components/curseData';
function Home() {


  let [cardee , setCardee] = useState(CourseData)
  
  return(
    <>
    
     <MyNav/>
    <Container >
        <Row >
        <Col className='d-flex justify-content-center align-items-center '> <Carousel data-bs-theme="dark">
      <Carousel.Item style={{ marginTop: '10px' }}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
            style={{ height: '100%', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         src={img2}
          alt="Second slide"
            style={{ height: '100%', objectFit: 'cover' }}
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         src={img3}
          alt="Third slide"
            style={{ height: '100%', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Col>

    {/* col 2 */}
        <Col xl={5}>
        <ListGroup style={{fontFamily : 'lalezar' , fontSize: '15px'}} className='my-top-item'>
      <ListGroup.Item className='itemm' > <NavLink to='/blog'>مجله های کیمدی کینگ </NavLink>2025 <i class="fa-solid fa-book-quran"></i></ListGroup.Item>
      <ListGroup.Item className='itemm'> <NavLink to='/about'>اکسسوری فوتبالی</NavLink><i class="fa-solid fa-puzzle-piece"></i></ListGroup.Item>
      <ListGroup.Item className='itemm'><NavLink to='/blog'>بسته های 240تایی مخصوص مغازه دارن </NavLink><i class="fa-solid fa-cubes"></i></ListGroup.Item>
      <ListGroup.Item className='itemm'><NavLink to='/blog'>کارت های کلکسیونی</NavLink><i class="fa-solid fa-trophy"></i></ListGroup.Item>
    </ListGroup>
    <br />
    <img src={img4} style={{width : '400px' , marginRight: '80px'}} className="d-none d-xl-block"/>
    </Col>
        </Row>
        <Row className="g-1">
         <h1 >کیمدی کارت فوتبال</h1>
         <p>اسطوره ات رو خودت انتخاب کن</p>
{cardee.map((cardd, id) => (
  <Col key={id}>
    <Cursee {...cardd} />
  </Col>
))}

        </Row>

        <Row>

          <h1 style={{textAlign: 'center' , marginTop: '30px'}}>آخرین نوشته ها</h1>
          <Article/>

        </Row>

        <Row>
          
        </Row>
    <Footer/>
    </Container>
    </>

  )
};

export default Home;