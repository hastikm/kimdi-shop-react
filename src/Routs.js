import Home from '../src/pages/home/home.js';
import Panel from '../src/pages/panel/panel.js';
import Login from './pages/login/login.js';
import Blog from './pages/blog/blog.js';
import About from './pages/about/about.js';
import Albom2 from './Components/albom/albom2.js';
import CardeItem from './Components/curseItem/curseItem.js';
import Setting from './pages/setting/setting.js';
import PrivateRouts from '../src/Components/privateRours.js'

let Router = [
  { path: '/', element: <Home /> },
  { path: '/panel', element: <PrivateRouts>  <Panel /> </PrivateRouts> },
  { path: '/login', element:  <Login />  },
  {
    path: '/blog',
    element: <Blog />,
    children: [
      { path: 'num1', element: <h2>برچسب شماره 1</h2> },
      { path: 'num2', element: <h2>برچسب شماره 2</h2> },
      { path: 'num3', element: <h2>برچسب شماره 3</h2> }
    ]
  },
  { path: '/about', element: <About /> },
  { path: '/about/:id', element: <Albom2 /> },
  { path: '/card/:id', element: <CardeItem /> },
  { path: '/setting', element:  <Setting />},
];

  

  export default Router;