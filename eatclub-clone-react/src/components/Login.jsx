import React from "react";

function Login(){
    return(
        <div>
             <div class="container">
    <h2>Welcome Back!</h2>
    <p class="subtext">Sign in with your Username and Password.</p>
    
    <form>
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <div class="forgot">
        <a href="#">Forget Password?</a>
      </div>
      <button type="submit" class="btn">Login</button>
    </form>

    <div class="divider">
      <span>or login with</span>
    </div>

    <div class="social-buttons">
      <button class="google-btn">🔵 Login with Google</button>
      <button class="facebook-btn">🔷 Login with Facebook</button>
    </div>

    <p class="register-text">Did not have any account? <a href="#">Register Now</a></p>
  </div>
            
        </div>
    )
}