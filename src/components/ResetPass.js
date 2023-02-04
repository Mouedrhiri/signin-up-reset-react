import React from "react";
import { Link } from "react-router-dom";

function ResetPass() {
  return (
    <div className='container container-md'>
      <h1>Reset your Password</h1>
      <form>
        <div className='form-group'>
          <label>Email adress</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter your email adress'
          />
          <small className='form-text text-muted'>
            Enter your Associated Email
          </small>
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter your password'
          />
          <label>Re-Enter your Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Re-Enter your password'
          />
          <div className='form-group'>
            <input type='checkbox' className='form-check-input' />
            <label className='form-check-label'>Check me out</label>
          </div>
          <button type='submit' className='btn btn-primary'>
            Reset Password
          </button>
          <div className='form-group'>
            <label>Now Sign In:</label>
            <Link to='/signin'>
              <input
                type='button'
                className='form-control btn btn-secondary'
                value='Sign in'
              />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ResetPass;
