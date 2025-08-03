import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div class="login-body-container">
        <div class="login-container">
          <h2>Welcome Back!</h2>
          <p class="login-subtext">Sign in with your Username and Password.</p>

          <form class="login-form">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <div class="forgot">
              <a href="#">Forget Password?</a>
            </div>
            <button type="submit" class="login-btn">Login</button>
          </form>
          <p class="login-register-text">Did not have any account?<Link to="/signup">Register Now</Link></p>
        </div>
      </div>

    </div>
  )
}
export default Login;