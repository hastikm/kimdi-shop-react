import { Navigate } from "react-router-dom";
import { isLogin } from "../pages/login/utilis";
function PrivateRouts({ children }) {
  

  return(
    <>
    {isLogin('admin') ? children :   <Navigate to='/login' />}



    </>
  )
  
}

export default PrivateRouts;