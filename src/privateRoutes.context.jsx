import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {

    var isAuthenticated = false

    // WE VALIDE THE SESSION WITH THE LOCAL STORAGE OBJECT
    const userSession = localStorage.getItem('userSession');
    if (userSession != undefined) {
        // alert("ez2")
        isAuthenticated = true
    }else{
        // alert("ez")
    }

    return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;
