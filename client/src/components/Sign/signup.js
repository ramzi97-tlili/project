import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { register } from '../../redux/actions';
import "./sign.css"
const Signup = () => {
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [age, setAge] = useState()
  const [photo, setPhoto] = useState()
  const [countrie, setCountrie] = useState()
  const addUser = (e) => {
    e.preventDefault();
    dispatch(
      register({
        firstname,
        lastname,
        age,
        photo,
        countrie,
        email,
        password,
        phoneNumber,
      })
    );
  };
  return (
    <div class="body2">
      <div className='container'>
        {loading ? (
          <h1>loading...</h1>
        ) : user ? (
          <Redirect to='/profile' />
        ) : (
          <div class="form-style-6">
            <h1>Sign Up  </h1>
            <form>
              <input type="text" name="field1" placeholder="Your first Name" onChange={(e) => setFirstname(e.target.value)} />
              <input type="text" name="field1" placeholder="Your Last Name" onChange={(e) => setLastname(e.target.value)} />
              <input type="email" name="field2" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
              <input type="number" name="field2" placeholder="Your Age" onChange={(e) => setAge(e.target.value)} />
              <select type="text" name="field2" onChange={(e) => setCountrie(e.target.value)} >
                <option>Sidi Bouzid</option>
                <option >Sfax</option>
                <option >ARIENA</option>
                <option >BEJA</option>
                <option >BEN AROUS</option>
                <option >Bizerte</option>
                <option >Gabes</option>
                <option >Gafsa</option>
                <option >Jendouba</option>
                <option >Kairouan</option>
                <option >Kasserine</option>
                <option >Kebeli</option>
              </select>
              <input
                type='password'
                name='field3'
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password'
              />
              <input type="text" name="phone"
                pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}"
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="phone Number" />
              <input type="file"
                placeholder="URL photo"
                name="field1"
                type="URL"
                onChange={(e) => setPhoto(e.target.value)}
              />
              <input type="submit" value="SIGN UP" onClick={addUser} /><br /><br />
              <Link to="/login">
                <input type="submit" value="LOGIN HERE" />
              </Link>
            </form>
          </div>
        )}
        <div>
        </div>
      </div>
    </div>
  );
};
export default Signup;