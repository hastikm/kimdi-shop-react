import '../blog/blog.css';
import MyNav from '../../Components/navbar/nav';
import { Link , Outlet } from 'react-router-dom';
function Blog(){

  return(
<>

    <MyNav/>
    <div className="container-wrapper">
      <h1>صفحه برچسب ها</h1>
      <hr />
      <div className="btnContainer">
       <Link to="/blog/num1" className="linkbtn"> <p className='par'>برچسب شماره 1</p></Link>
       <Link to="/blog/num2" className="linkbtn"><p className='par'>برچسب شماره 2</p>  </Link>
       <Link to="/blog/num3" className="linkbtn"> <p className='par'>برچسب شماره 3</p></Link>   
      </div>
      <hr />
  
    </div>
    
    <Outlet/>

</>

  )
};

export default Blog;