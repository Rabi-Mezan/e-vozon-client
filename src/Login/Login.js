import React, { useState } from "react";
import useFirebase from "../Hook/useFirebase";

const Login = () => {
  const {
    handleGoogleLogin,
    user,
    handleGithubLogin,
    handleUserRegister,
    handleUserLogin,
  } = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };

  // console.log(email, password);

  const handleRegister = () => {
    handleUserRegister(email, password);
  };

  const handleLogin = () => {
    handleUserLogin(email, password);
  };

  return (
    <div className="div d-flex justify-content-center align-items-center">
      <div className="row ">
        <div className="col-md-6">
          <div>
            <div className="form-input mt-5">
              <input
                onChange={hanldeEmail}
                className="mt-2 p-2"
                type="email"
                placeholder="Email"
              />
              <br />
              <input
                onChange={hanldePassword}
                className="mt-2 p-2"
                type="password"
                placeholder="Password"
              />
              <br />
              <div className="login-regiater-btn mt-4">
                <button
                  onClick={handleRegister}
                  className="btn btn-primary me-1"
                >
                  Register
                </button>
                <button onClick={handleLogin} className="btn btn-success ms-1">
                  Login
                </button>
              </div>
            </div>
            <div className="login-btn mt-4">
              <button onClick={handleGoogleLogin}>GoogleSignIn</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;