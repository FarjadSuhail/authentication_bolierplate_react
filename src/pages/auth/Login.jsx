import { useSelector, useDispatch } from 'react-redux';
// import { authActions } from '../../store/slice/AuthSlice';
import { useState } from "react";
import "./Login.css";
import CONSTANTS from "../../utilities/constants";
import { loginUser } from '../../store/slice/AuthSlice';
import { useNavigate } from 'react-router-dom';
// import { useLogin } from "../hooks/useLogin";

const Login = () => {
  // states
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // redux state
  const {loading, error} = useSelector((state)=> state.authentication);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username, password);
    
    let userCredentials = {
      username, password
    };
    
    dispatch(loginUser(userCredentials)).then((result) => {
      console.log(result);
      //if loginUser is fulfilled then we have something in the payload
      if (result.payload.statusCode == CONSTANTS.HTTP_RESPONSE.OK) {
        setEmail('');
        setPassword('');
        navigate('/dashboard');
      }
      else if (result.payload.statusCode == CONSTANTS.HTTP_RESPONSE.UNAUTHORIZED) {
        
      }
      else {

      }
    })
    // await login(email, password);
    // const res = await fetch('http://localhost:8080/api/user/login', {
    //           method: 'POST',
    //           headers: {'Content-Type': 'application/json'},
    //           body: JSON.stringify({username, password})
    //       })
    //       const json = await res.json();
    //       if(res.statusCode == CONSTANTS.HTTP_RESPONSE.OK) {

    //       }
    //       console.log(json);
  }

  // const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  // console.log(isAuthenticated)
  // const dispatch = useDispatch();

  // const loginHandler = () => {
  //   console.log("a")
  //   dispatch(authActions.login());
  // }


  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="text" 
        onChange={(e) => setEmail(e.target.value)} 
        value={username} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button disabled={loading}>Log in</button>
      {error && <div className="alert alert-danger" role='alert'>{error}</div>}
    </form>
  )
}

export default Login;