import React, { useState, useContext } from "react"
import "./auth.css"
import { AuthContext } from '../../shared/context/auth-context'
import { useHistory  } from "react-router-dom";
import Alert from '@mui/material/Alert';

export default function (props) {
  const history = useHistory();
  const auth = useContext(AuthContext);
  let [authMode, setAuthMode] = useState("signin")
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    name: "",
  });

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const onLoginSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('https://know-your-finances.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: loginState.email,
          password: loginState.password
        })
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setIsLoading(false);
      auth.login();
      localStorage.setItem("score", responseData.score)
      localStorage.setItem("email", responseData.email)
      localStorage.setItem("token", responseData.token)
      history.push("/home");
    } catch (err) {
      setIsLoading(false);
      setError(err.message || 'Something went wrong, please try again.');
    }
  }
  
  const onSignUpSubmit = async event => { 
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('https://know-your-finances.onrender.com/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: loginState.name,
          email: loginState.email,
          password: loginState.password,
          score: 0
        })
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setIsLoading(false);
      auth.login();
      localStorage.setItem("score", responseData.score)
      localStorage.setItem("email", responseData.email)
      localStorage.setItem("token", responseData.token)
      history.push("/home");
    } catch (err) {
      setIsLoading(false);
      setError(err.message || 'Something went wrong, please try again.');
    }
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(event) => {
                  const value = event.target.value;
                  setLoginState({ ...loginState, email: value });
            }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(event) => {
                  const value = event.target.value;
                  setLoginState({ ...loginState, password: value });
                }}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={onLoginSubmit} disabled={!loginState.email || !loginState.password}>
                Submit
              </button>
            </div>
            {error&&
            <Alert severity="error">{error}</Alert>}
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={(event) => {
                const value = event.target.value;
                setLoginState({ ...loginState, name: value });
                }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(event) => {
                const value = event.target.value;
                setLoginState({ ...loginState, email: value });
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(event) => {
                const value = event.target.value;
                setLoginState({ ...loginState, password: value });
                }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={onSignUpSubmit} disabled={!loginState.email || !loginState.password}>
              Submit
            </button>
          </div>
          {error&&
            <Alert severity="error">{error}</Alert>}
        </div>
      </form>
    </div>
  )
}