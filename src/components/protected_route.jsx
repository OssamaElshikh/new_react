import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ path, element: Element }) => {
    const isAuthenticated = true; // Replace with your actual authentication check

    return isAuthenticated ? (
        <Route path={path} element={<Element />} />
    ) : (
        <Navigate to="/login" />
    );
};

export default ProtectedRoute;
