import { Login } from "../pages/Login.jsx";

// APP'S SCREEN
import { AppHome } from "../pages/app/Home.jsx"; 
import { Profile } from "../pages/app/Profile.jsx";


const routes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/app',
    element: <AppHome />,
  },
  {
    path: '/app/:user',
    element: <Profile />,
  },
];

export default routes;
