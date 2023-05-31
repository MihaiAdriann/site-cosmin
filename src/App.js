import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Category from './Pages/Category';
import Products from './Pages/Products';
import Login from './Pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

/*   const PrivateRoute = ({ element, ...rest }) => {
    return isLoggedIn ? (
      <Route {...rest} element={element} />
    ) : (
      <Navigate to="/" replace={true} /> 
    );
  }; */

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/category" element={<Category />}  />
        <Route path="/products"  element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
