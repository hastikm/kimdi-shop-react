import { Navigate } from "react-router-dom";
import MyNav from "../../Components/navbar/nav"

function Setting() {
  const isLogin = (username) =>{
    if(username == 'admin') return true;
    return false
  }

  return(
<>
{isLogin('hasti') ?
(
  <div>
    <MyNav/>
<h1>setting page</h1>

  </div>
) :
(
  <Navigate to='/' />
)
}

</>
  )

};

export default Setting