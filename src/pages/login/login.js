import '../login/login.css';
import MyNav from '../../Components/navbar/nav';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Login() {

const navigate = useNavigate(); 

  let [Username , setUsername] = useState();
  let [Password , setPassword] = useState();

  function btnHandler(){
if(Username == 'admin' && Password == '12345'){
  document.cookie = "username=admin; expires=Thu, 18 Dec 2028 12:00:00 UTC";
  
navigate('/panel');

}else{
  Swal.fire({
  title: "نام کاربری یا رمز عبور اشتباه هست.",
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
}
  }
  
  return (
    <>
      <MyNav />

      <div className="login-box">
        <h2>Login</h2>
        <form action="" className="form">
          <div className="user-box">
            <input onChange={(e)=> setUsername(e.target.value)} className="input" type="text" required />
            <label className="label" htmlFor="">Username</label>
          </div>
          {/* /.user-box */}
          <div className="user-box">
            <input onChange={(e)=> setPassword(e.target.value)} className="input" type="password" required />
            <label className="label" htmlFor="">Password</label>
          </div>
          {/* /.user-box */}
          <button type='button' className="submit-btn" onClick={btnHandler}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
