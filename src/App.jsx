import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Login } from './pages/Login';

import { AppHome } from "./pages/app/Home.jsx"; 
import { Profile } from "./pages/app/Profile.jsx";
import PrivateRoute from './privateRoutes.context.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route>
          <Route path="/app" element={<AppHome />}></Route>
          <Route exact path="/app/:user" element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
