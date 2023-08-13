import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Sidebar from './components/layout/sidebar/Sidebar';
import Dashboard from './pages/sidebar/Dashboard.jsx';
import About from './pages/sidebar/About.jsx';
import Analytics from './pages/sidebar/Analytics.jsx';
import Comment from './pages/sidebar/Comment.jsx';
import Product from './pages/sidebar/Product.jsx';
import ProductList from './pages/sidebar/ProductList.jsx';
import Header from './components/layout/header/Header';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { useSelector, useDispatch } from 'react-redux';

const getUser = () => {
  let user = localStorage.getItem('user');
  if (user) {
    user = JSON.parse(user);
    console.log(user);
    // setIsLoggedIn(true);
  }
  else {
    user = null;
    // setIsLoggedIn(false);
  }
  console.log(user);
  return user;
}
const App = () => {
  // redux state -- getting state this way, the state is lost on refreshing the screen. 
  // const state = useSelector((state)=> state.authentication);
  // console.log(state);

  // hence use the below implementation -- to retain data even after refresh
  const [user, setUser] = useState(getUser());
  const state = useSelector((state)=> state);
  console.log(state);
  
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user'));
  // setIsLoggedIn(user);
  // setIsLoggedIn(state);
  // if (state) {
  //   setIsLoggedIn(true);
  // }
  // else {
  //   setIsLoggedIn(false);
  // }

  useEffect(()=> {
    if (localStorage.getItem('user')) {
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }
}, [state]);
  
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
    {!isLoggedIn && (<div className="pages">
            <Routes>
              {/* <Route 
                path="/"
                element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
              /> */}
              <Route 
                path="/login"
                element={<Login />}
              />
              <Route 
                path="/signup"
                element={<Signup />}
              />
            </Routes>
        </div>)}
    {isLoggedIn && (<Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>)}
    </BrowserRouter>
    </div>
  );
};

export default App;