import "./App.css";
import "./bootstrap.min.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <h1>Hello OFPPT</h1>
      <div className='d-flex flex-column justify-content-around'>
        <Link to='/signin'>
          <input
            className='btn btn-primary btn-md w-5'
            value='Sign in'
            type='button'
          />
        </Link>
        <br />
        <Link to='signup'>
          <input className='btn btn-primary' value='Sign UP' type='button' />
        </Link>
        <br />
        <Link to='reset'>
          <input
            className='btn btn-primary'
            value='Reset Password'
            type='button'
          />
        </Link>
      </div>
    </div>
  );
}

export default App;
