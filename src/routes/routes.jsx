import { Login } from "../pages/Login.jsx";
import PrivateRoute from "../privateRoutes.context.jsx";

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
    element: (
      <PrivateRoute  element={<AppHome />} />
    ),
  },
  {
    path: '/app/:user',
    element: (
      <PrivateRoute  element={<Profile />} />
    ),
  },
];

export default routes;
