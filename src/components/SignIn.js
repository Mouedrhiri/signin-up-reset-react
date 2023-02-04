import React from "react";
import "./bootstrap.min.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className='container container-md'>
      <h1>Sign In Form</h1>
      <form>
        <div className='form-group'>
          <label>Email adress</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter your email adress'
          />
          <small className='form-text text-muted'>
            We will never share your email adress
          </small>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter your password'
          />
          <div className='form-group'>
            <input type='checkbox' className='form-check-input' />
            <label className='form-check-label'>Check me out</label>
          </div>
          <button type='submit' className='btn btn-primary'>
            Sign In
          </button>
          <div className='form-group'>
            <label>If you don't have an account :</label>
            <Link to='/signup'>
              <input
                type='button'
                className='form-control btn btn-secondary'
                value='Create Account'
              />
            </Link>
          </div>
          <div className='form-group'>
            <label>If you Forgot your password :</label>
            <Link to='/reset'>
              <input
                type='button'
                className='form-control btn btn-secondary'
                value='Reset Password'
              />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
