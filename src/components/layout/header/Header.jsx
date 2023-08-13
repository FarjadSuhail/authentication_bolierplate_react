import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../store/slice/AuthSlice';
import { useNavigate } from 'react-router-dom';
// import { useLogout } from '../hooks/useLogout'
// import { useAuthContext } from '../hooks/useAuthContext'
import "./Header.css";

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

const Header = () => {
//   const { logout } = useLogout()
//   const {isLoggedIn} = useAuthContext();
// const isLoggedIn = true;
const dispatch = useDispatch();
const navigate = useNavigate();
const [user, setUser] = useState(getUser());
const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user'));

const state = useSelector(state => state);
console.log(state);
  const handleClick = () => {
    // logout();
    // localStorage.removeItem('user')
    dispatch(logoutUser());
    setIsLoggedIn(false);
    
    navigate('/login');
    // window.reload();
    // window.location.reload();
  }

  useEffect(()=> {
    console.log('header')
    if (localStorage.getItem('user')) {
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }
}, [state]);
  return (
    <header>
      <div className="container">
      <img 
            src="https://img.icons8.com/color/512/firebase.png"
            width={45}
            alt=""
          />
        <Link to="/">
          <h1>Workout</h1>
        </Link>
        <nav>
          {isLoggedIn && (
            <div>
              <span>{}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!isLoggedIn && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header