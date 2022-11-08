import React, {useState, useContext} from "react";
import './SignUp.css';
import axios from 'axios';
import UserContext from '../contexts/UserContext'
import {Link, useNavigate} from 'react-router-dom';

function SignUp() {

  const [, setUser] = useContext(UserContext);
  const [errMsg, setErrMsg] = useState([]);
  const navigate = useNavigate();


  //Call this function to sign into app
  function makeSigninCall(first_name, last_name, email, password, type) {

    try{
      axios(
        {
          'method' : "POST",
          "url" : 'http://localhost:8080/sign_up',
          params : {"first_name":first_name, "last_name":last_name, "email":email, "password":password, "type":type}
        }
      ).then((response)=>{
        const responseData = response.data
        if(responseData === "Server Down"){ //Sign up failed due to server problems, try again later
          setErrMsg("Server is down");
        }else if(responseData === "Duplicate Username"){ //Sign up failed because there is already a user with that email address
          setErrMsg("Email has already been used");
        }else{ //Sign up successful, set the context with the correct values and go to the dashboard page
          window.localStorage.setItem("user", JSON.stringify({"first_name":first_name, "last_name":last_name, "email":email, "type":type}));
          setUser({"first_name":first_name, "last_name":last_name, "email":email, "type":type})
          navigate('/Dashboard', { replace: true });
        }
      })
    }catch(error){
      console.log(error)
      setErrMsg("Server is down");
      //Sign up failed due to server problems, try again later
    }
  
  }

  const [first_name, set_first_name] = useState("");
  const [last_name, set_last_name] = useState("");
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [firstError, setFirstErrorMessage] = useState("");
  const [lastError, setLastErrorMessage] = useState("");
  const [emailError, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordErrorMessage] = useState("");
  
  const [type, set_type] = useState("");
  const [typeError, setTypeErrorMessage] = useState("");

  
  function inputInvalid(input) {
    return (input == null) || (input.match(/^ *$/) != null) || (input === "") || (input.length > 30);
  }

  function validPassword(password) {
    if ((inputInvalid(password)) && (password.length < 8) ) {
      return false;
    } else {
      console.log(password.length < 8)
      var letter = "";
      for (var i = 0; i < password.length; i++) {
        letter = password.charAt(i);
        if (letter === letter.toUpperCase()) {
          return true;
        }
      }
      return false;
    }
  }

  const makeFirstErrorMessage = (name) =>
    ((name === firstError.name) && (
      <div className="error">{firstError.message}</div>) || (<div className="notError"> "" </div>)
  );

  const makeLastErrorMessage = (name) =>
      (name === lastError.name && (
      <div className="error">{lastError.message}</div>) || (<div className="notError"> "" </div>)
  );

  const makeEmailErrorMessage = (name) =>
    (name === emailError.name && (
    <div className="error">{emailError.message}</div>) || (<div className="notError"> "" </div>)
  );

  const makePasswordErrorMessage = (name) =>
    (name === passwordError.name && (
    <div className="error">{passwordError.message}</div>) || (<div className="notError"> "" </div>)
  );

  const makeTypeErrorMessage = (name) =>
    (name === typeError.name && (
     <div className="error">{typeError.message}</div>) || (<div className="notError"> "" </div>)
  );

  const submit = (e) => {
    setFirstErrorMessage({name: "firstname", message: ""});
    setLastErrorMessage({name: "lastname", message: ""});
    setEmailErrorMessage({name: "email", message: ""});
    setPasswordErrorMessage({name: "password", message: ""});
    setTypeErrorMessage({name: "type", message: ""});
  
    e.preventDefault();
    var x = true;

    if (inputInvalid(first_name)) {
      setFirstErrorMessage({name: "firstname", message: "First name invalid."});
      x = false;
    } else {
        setFirstErrorMessage({name: "nofirst", message: ""})
    }

    if (inputInvalid(last_name)) {
      setLastErrorMessage({name: "lastname", message: "Last name invalid."});
      x = false;
    } else {
      setLastErrorMessage({name: "nofirst", message: ""})
    }

    if (inputInvalid(email)) {
      setEmailErrorMessage({name: "email", message: "Email invalid."});
      x = false;
    } else {
      setEmailErrorMessage({name: "nofirst", message: ""})
    }

    if (!(validPassword(password))) {
      setPasswordErrorMessage({name: "password", message: "Password invalid."});
      x = false;
    } else {
      setPasswordErrorMessage({name: "nofirst", message: ""})
    }

    if (type === "") {
      setTypeErrorMessage({name: "type", message: "Select type."});
      x = false;
    } else {
      setTypeErrorMessage({name: "nofirst", message: ""})
    }

    if (x) {
      makeSigninCall(first_name, last_name, email, password, type)
    }
  }



    return (
    <div className="app">
        <header className="signup">
        <h1>Sign Up</h1>
             
        <form onSubmit = {submit}>
          <div className="first">
            <label id="firstName"> 
              First Name</label>
              <input
              id="firstNameBox"
              name="first_name"
              type="text"
              value={first_name}
              onChange={(e) => set_first_name(e.target.value)}/>
            
            {makeFirstErrorMessage("firstname")}
          </div>
          <div className="lastName">
            <label id="lastName" > 
              Last Name</label>
              <input
              id="lastNameBox"
              name="last_name"
              type="text"
              value={last_name}
              onChange={(e) => set_last_name(e.target.value)}/>
            
            {makeLastErrorMessage("lastname")}
          </div>
          <div className="email">
            <label id="email"> 
              Email  </label>
              <input
              id="emailBox"
              name="email"
              type="text"
              value={email}
              onChange={(e) => set_email(e.target.value)}/>
          
            {makeEmailErrorMessage("email")}
          </div>
          <div className="pass">
            <label id="password"> 
              Password</label>
              <input
              id="passwordBox"
              name="password"
              type="text"
              value={password}
              onChange={(e) => set_password(e.target.value)}/>
            
            {makePasswordErrorMessage("password")}
          </div>
          <div className="dropdown">
            <label id="occupation"> 
              Type
            </label>
            <select name="occupation" id="occupationBox" value={type} onChange={(e) => set_type(e.target.value)}>
              <option selected value="choose occupation"/>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="alumni">Alumni</option>
            </select>
            {makeTypeErrorMessage("type")}
          </div>


          {( (errMsg && Object.keys(errMsg)) && (Object.keys(errMsg).length > 0))
            ? <p id="ErrorMessage"> {errMsg} </p>
            : <p id="Blank"> &nbsp; </p>
          }

          <button type="submit" id="signUpButton">Sign Up</button>         
        </form>
          
        <p id="login"> Already have an account? </p>
        <Link to="/Login" id="loginLink">Login Here</Link>

        </header>
        </div>
    );
    }




export default SignUp;