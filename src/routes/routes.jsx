import { Login } from "../pages/Login.jsx";

// APP'S SCREEN
import { AppHome } from "../pages/app/Home.jsx"; 


const routes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/app',
    element: <AppHome />,
  },
];

export default routes;
