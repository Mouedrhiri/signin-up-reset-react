import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className='container container-md'>
      <h1>Sign Up Form</h1>
      <form>
        <div className='form-group'>
          <label>Full name</label>
          <div className='d-flex flex-row justify-content-between'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your First name'
            />
            <input
              type='text'
              className='form-control'
              placeholder='Enter your Last name'
            />
          </div>
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
          <label>Confirme Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Confirm your password'
          />
          <div className='form-group'>
            <input type='checkbox' className='form-check-input' />
            <label className='form-check-label'>Agree to terms </label>
          </div>
          <button type='submit' className='btn btn-primary'>
            Sign UP
          </button>
          <div className='form-group'>
            <label>If you have an account :</label>
            <Link to='/signin'>
              <input
                type='button'
                className='form-control btn btn-secondary'
                value='Sign In'
              />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
