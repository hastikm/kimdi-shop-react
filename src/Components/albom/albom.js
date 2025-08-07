import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../albom/albom.css';
function Albom({imger , price3 , name1 , id}) {
  
  return(
<>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imger} />
      <Card.Body>
        <Card.Title>{name1}</Card.Title>
        <Card.Text>
          {price3}
        </Card.Text>
        <Link to={`/about/${id}`} className='bttn'>افزودن  به سبد خرید</Link>
      </Card.Body>
    </Card>
</>

  )
};

export default Albom;