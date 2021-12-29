import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from '../Authentication/Login'
import Register from '../Authentication/Register'

let PageRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )

}

export default PageRoutes