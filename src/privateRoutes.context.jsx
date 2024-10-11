import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {

    var isAuthenticated = false

    // WE VALIDE THE SESSION WITH THE LOCAL STORAGE OBJECT
    const userSession = localStorage.getItem('userSession');
    if (userSession != undefined) {
        isAuthenticated = true
    }

    return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;
