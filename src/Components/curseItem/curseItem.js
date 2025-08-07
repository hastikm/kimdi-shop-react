import { useParams } from "react-router-dom";
import MyNav from "../navbar/nav";
import { CourseData } from "../curseData";
import { Container , Row , Col } from "react-bootstrap";
function CardItem() {
  
  const param = useParams().id
  const courseInfo = CourseData.find( course => course.id == param ) 
  console.log(courseInfo)
  return(
<>

<MyNav/>

<Container>
  <Row>
   <Col md={5}>
   <img src={courseInfo.imgee} />
   </Col>
   <Col md={7}>
   <h2>{courseInfo.titel}</h2>
   <p><b>{courseInfo.price}</b></p>
   <p>{courseInfo.desc2}</p>

   </Col>
  </Row>
</Container>

</>
  )
};

export default CardItem;