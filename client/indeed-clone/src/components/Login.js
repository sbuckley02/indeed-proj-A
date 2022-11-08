import './Login.css';
import axios from 'axios'
import React, {useState, useContext} from 'react'; 
import {Link, useNavigate} from 'react-router-dom';
import UserContext from '../contexts/UserContext'

function Login() {

  const [errMsg, setErrMsg] = useState([]);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const [, setUser] = useContext(UserContext);

  //Call this function to sign into app
  function makeLoginCall(email, password) {
    if((email==="") || (password==="")){
      setErrMsg("Username or password is incorrect.");
      return
    }
    try {
      axios(
        {
          'method' : "GET",
          "url" : 'http://localhost:8080/login',
          params : {"username":email, "password":password}
        }
      ).then((response)=>{
        const responseData = response.data
        if(responseData === "Server Down") { //Login failed due to server problems, try again later
          setErrMsg("Server down. Try again later.");
        } else if(responseData === "No Match") { //Login failed because there is no users with those credidentials
          setErrMsg("Username or password is incorrect.");
        } else { //Login successful, set the context with the correct values and go to the dashboard page
          window.localStorage.setItem("user", JSON.stringify(responseData));
          setUser(responseData)
          navigate('/Dashboard', { replace: true });
        }
      })
      .catch(function (error) {
        setErrMsg("Server problems. Try again later.");
      })
    } catch(error) {
      //Sign up failed due to server problems, try again later
      setErrMsg("Server problems. Try again later.");
    }
  }

  function setUsernameVal(e) {
      setUsername(e.target.value)
      setErrMsg("");
  }
  function setPass(e) {
    setPassword(e.target.value)
    setErrMsg("");
  }
  return (
    <div className="Login">
      <header className="Login-header">
        <h1 id="Login"> Login </h1>

        <p id="Username"> Username </p>
        <input type="text" id="UsernameTextBox" value={username} onChange={setUsernameVal} /> <br/>
        <p id="Password"> Password </p>
        <input type="text" id="PasswordTextBox" value={password}  onChange={setPass}/><br/>

        {( (errMsg && Object.keys(errMsg)) && (Object.keys(errMsg).length > 0))
          ? <p id="ErrorMessage"> {errMsg} </p>
          : <p id="Blank"> &nbsp; </p>
        }

        <button onClick={() => makeLoginCall(username, password)} id="LoginButton">Login</button> <br/>
        <p id="SignUp"> Don't have an account yet? </p>
        <Link to="/SignUp" id="SignUpLink">Sign Up Here</Link>

      </header>
    </div>
  );
}

export default Login;