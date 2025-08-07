import { Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Footer/footer.css';
function Footer() {
  
  return(
    <>
  <Row className='my-footer'>
    
    <Col  className='fpr-main' >
    <h1 style={{fontFamily:'lalezar' , fontSize: '25px'}}>کیمدی کینگ <i class="fa-solid fa-crown"></i></h1>
    <img  src="https://kimdikart.ir/wp-content/uploads/2021/08/%D8%A7%DB%8C%D9%86%D9%85%D8%A7%D8%AF-%DA%A9%DB%8C%D9%85%D8%AF%DB%8C-%DA%A9%D8%A7%D8%B1%D8%AA.png"  />
    <p>تلفن: 09115577912</p>
    <p>تلفن: 09114785952</p>
    </Col>
    <Col className='fpr-p'>
    <h1 style={{fontFamily:'lalezar' , fontSize: '20px'}}>محصولات ما</h1>
    <Link to='/'>کارت کیمدی</Link>
    <Link to='/about'>برچسب کیمدی</Link>
    <Link to='/blog'>آلبوم کیمدی</Link>
    </Col>

    <Col className='fpr-p'>
     <h1 style={{fontFamily:'lalezar' , fontSize: '20px'}}>دسترسی سریع </h1>
    <Link to='/'>کارت کیمدی</Link>
    <Link to='/about'>برچسب کیمدی</Link>
    <Link to='/blog'>آلبوم کیمدی</Link>
    </Col>

    <Col className='fpr-p'>
     <h1 style={{fontFamily:'lalezar' , fontSize: '20px'}}>لینک مفید  </h1>
    <Link to='/'>کارت کیمدی</Link>
    <Link to='/about'>برچسب کیمدی</Link>
    <Link to='/blog'>آلبوم کیمدی</Link>
    </Col>
   
  </Row>
    
    </>
  )
};

export default Footer;