import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../../Components/Course/course.css'

function Cursee({id ,price , titel , imgee , desc}) {
  
  return(
   <>
  
    <Card style={{ width: '15rem' }} className='my-card'>
      <Card.Img variant="top" src={imgee} />
      <Card.Body>
        <Card.Title style={{fontSize: '17px'}}>{titel}</Card.Title>
        <Card.Text style={{color : 'rgba(154, 154, 154, 1)' , textAlign: 'center'}}>
       {desc}
        </Card.Text>
       <h1 style={{color : 'rgba(255, 107, 2, 1)' , textAlign: 'center', fontSize: '20px'}}>{price}</h1>
         <Link to={`/card/${id}`} className="hover-button" style={{padding: '10px', display: 'inline-block', textAlignLast: 'center', textDecoration: 'none'}}>
  خرید
</Link>
      </Card.Body>
    </Card>
    
   </>
  );

}

export default Cursee;
