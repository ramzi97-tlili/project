import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../redux/actions/index';
import "./sign.css";

const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loading = useSelector((state) => state.userReducer.loading);
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
  };
  return localStorage.getItem('token') ? (
    <Redirect to='/profile' />
  ) : loading ? (

    <h1>please wait ....</h1>
  ) : (
    <div class="body2">

      

      <div class="form-style-6">
        <h1>Sign In Here </h1>
        <form>
          <input type="email" name="field2" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
          <input
            type='password'
            name='field3'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            />
          <input type="submit" value="LOGIN" onClick={loginUser} />
        </form>
        <br />
        <Link to="/">
          <input type="submit" value="REGISTER" />
        </Link>
      </div>
    </div>

  )
};
export default Signin;