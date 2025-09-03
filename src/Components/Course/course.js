import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../../Components/Course/course.css';

function Cursee({ id, price, titel, imgee, desc }) {
  const handleAddToCart = () => {
    console.log(`${titel} added to cart`);
  };

  return (
    <Card style={{ width: '15rem' }} className="my-card">
      <Card.Img variant="top" src={imgee} />
      <Card.Body>
        <Card.Title style={{ fontSize: '17px' }}>{titel}</Card.Title>
        <Card.Text
          style={{ color: 'rgba(154, 154, 154, 1)', textAlign: 'center' }}
        >
          {desc}
        </Card.Text>
        <h1
          style={{
            color: 'rgba(255, 107, 2, 1)',
            textAlign: 'center',
            fontSize: '20px',
          }}
        >
          {price}
        </h1>

        {/* دکمه‌ها */}
        <div className="button-wrapper">
          <Link to={`/card/${id}`} className="hover-button">
            مشخصات
          </Link>
          <button className="add-circle" onClick={handleAddToCart}>
            +
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cursee;
