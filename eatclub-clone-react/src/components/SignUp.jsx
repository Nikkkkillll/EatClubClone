import React from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div>
            <div class="signup-login-body">
                <div class="signup-container">
                    <h2>Create an account</h2>
                    <p class="signup-subtext">Sign up with your valid email and password.</p>
                    <form class="signup-login-form">
                        <input type="text" placeholder="Username" required />
                        <input type="email" placeholder="Email" required />
                        <div class="password-wrapper">
                            <input type="password" placeholder="Password" required />
                        </div>
                        <div class="password-wrapper">
                            <input type="password" placeholder="Confirm Password" required />
                        </div>
                        <button type="submit" class="signup-btn">Sign Up</button>
                    </form>

                    <p class="login-text">Already have an account? <Link to="/signin">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default SignUp;