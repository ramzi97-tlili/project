import React, { useState } from 'react';

import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, register } from '../../redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./admin.css"


import { Link } from 'react-router-dom';
const Admin = ({ }) => {
  const users = useSelector((state) => state.userReducer.users)
  const comments = useSelector((state) => state.docReducer.comments)
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const loading = useSelector((state) => state.userReducer.loading);
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [age, setAge] = useState()
  const [photo, setPhoto] = useState()
  const [countrie, setCountrie] = useState()
  const [role, setRole] = useState()
  const [editDone, setEditDone] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
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
        role,
      })
    );
  };
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return loading ? (
    <div>
      <div>
        <span>Loading...</span>
      </div>
    </div>
  ) : !isAuth ? (<p>login first</p>)
    : (
      <div class="back">
        <div>
          <button class="admin1" onClick={openModal}>ADD ADMIN</button>
          <Link to="/admin2">
            <button class="admin1">COMMENTS</button>
          </Link>
          <Link to="/profile">
            <button class="admin1">PROFILE</button>
          </Link>
        </div>
        <div class="test">
          <div class="table">
            {users.map(({ _id, email, role }) => (
              <div key={_id} timeout={500}>
                <table id="customers">
                  <tr>
                    <td>{_id}</td>
                    <td class="td">{email}</td>
                    <td>{role}</td>
                    <td>
                      <button class="delete" onClick={() => {
                        dispatch(deleteUser(_id))
                        window.alert("user deleted");
                        window.location.reload()
                          ;
                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <form>
                <input type="text" placeholder="first Name" onChange={(e) => setFirstname(e.target.value)} />
                <input type="text" placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} />
                <input type="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                <select type="text" onChange={(e) => setCountrie(e.target.value)} >
                  <option>Sidi Bouzid</option>
                  <option >Sfax</option>
                  <option >Tunis</option>
                </select>
                <select onChange={(e) => setRole(e.target.value)} >
                  <option>admin</option>
                  <option >user</option>
                </select>
                <input
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='password'
                />
                <input type="text"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="phone Number" />
                <input type="file"
                  type="URL"
                  placeholder="URL photo"
                  onChange={(e) => setPhoto(e.target.value)}
                />
                <button class="close" value="ADD ADMIN" onClick={addUser} > ADD</button>
                <button class="close" onClick={closeModal}>CLOSE</button>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    );
};
export default Admin;