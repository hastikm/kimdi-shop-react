import '../blog/blog.css';
import MyNav from '../../Components/navbar/nav';
import {BlogData} from '../blog/blogData'
import BlogItem from './BlogItem';
import { Row  , Col , Container} from 'react-bootstrap';


function Blog(){

  return(
<>

    <MyNav/>

    
    <Container style={{ maxWidth: "1200px" }}>
  <Row className="justify-content-center g-3">
    {BlogData.map((bitem) => (
      <Col
        key={bitem.id}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        className="d-flex justify-content-center"
      >
        <BlogItem {...bitem} />
      </Col>
    ))}
  </Row>
</Container>
</>

  )
};

export default Blog;