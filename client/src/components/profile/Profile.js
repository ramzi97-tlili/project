import React, { useEffect, useState } from "react";
import { addComm } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getProfile, logout, updateProfile } from "../../redux/actions"
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from "react-modal";
import "./profile.css"
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Profile = ({ }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);
  const [edit, setEdit] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [countrie, setCountrie] = useState("");
  const [photo, setPhoto] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [editDone, setEditDone] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [date] = useState(Date.now);
  const [comment, setComment] = useState();
  const addC = (e) => {
    e.preventDefault();
    dispatch(
      addComm({
        lastname,
        comment,
        firstname,
        date,
      })
    );
  };

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    if (user) {
      setFirstname(user.firstname);
      setLastname(user.lastname);
      setEmail(user.email);
      setCountrie(user.countrie)
      setAge(user.age)
      setphoneNumber(user.phoneNumber)
      setPhoto(user.photo)
    }
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProfile(user._id, {
        firstname,
        lastname,
        email,
        photo,
        phoneNumber,
        age,
        countrie,
      })
    );
    setEditDone(true);
  };
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch, editDone]);
  return loading ? (
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  ) : !isAuth ? (
    <Redirect to="/login" />
  ) : (
    <div class="body1" >
      <nav class="navbar navbar-light bg-light">
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div class="btn-group me-2" role="group" aria-label="Second group">
            <button type="button" class="btn btn-secondary"
              onClick={() => {
                dispatch(logout())
                window.location.reload()
              }}>LOGOUT</button>
            <button type="button" class="btn btn-secondary"
              onClick={
                () => {
                  openModal();
                  setEdit(true);
                }}>EDIT PROFILE</button>
            <Link to="/card">
              <button type="button" class="btn btn-secondary">CARD</button>
            </Link>
            <Link to="/admin">
              <button type="button" class="btn btn-secondary">ADMIN PAGE</button>
            </Link>
          </div>
        </div>
        <div>
          <form class="d-flex">
            <Link to="/com">
              <button class="btn btn-outline-success">COMMENTS
              </button>
            </Link>
          </form>
        </div>
      </nav>
      <div>
        <Modal
          style={customStyles}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <form>
            <label>first name</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required minlength="4" />
            <label> last name</label>
            <input
              type="text"
              name="last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone Number</label>
            <input
              type="number"
              name="text"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
            />
            <label>Age</label>
            <input
              type="number"
              name="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <label>countrie</label>
            <select type="text" value={countrie} onChange={(e) => setCountrie(e.target.value)} >
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
            <div>
              <button type="submit" onClick={(e) => {
                handleSubmit(e);
              }}>
                Add
            </button>
              <button type="cancel" onClick={closeModal}>
                Cancel
            </button>
            </div>
          </form>
        </Modal>
        <div class="flex">
          <div class="pro">
            <img src={photo} alt="profile photo" class="img" />
            <p class="type">{firstname} {lastname}</p>
          </div>
          <div class="inform">
            <p class="type"> information</p>
            <hr></hr>

            <div class="box2">
              <p class="information">firstname</p>
              <label>{firstname}</label>
            </div>
            <div class="box2">
              <p class="information">lastname</p>
              <label>{lastname}</label>
            </div>
            <div class="box2">
              <p class="information">email</p>
              <label>{email}</label>
            </div><br />
            <div class="box2">
              <p class="information">phone Number</p>
              <label>{phoneNumber}</label>
            </div>
            <div class="box2">
              <p class="information">country</p>
              <label>{countrie}</label>
            </div>
            <div class="box2">
              <p class="information">Age</p>
              <label>{age}</label>
            </div>
            <div class="inform">
              <p class="type"> add comment</p>
              <hr></hr>
              <div>
                <input
                  type='text'
                  name='comment'
                  onChange={(e) => setComment(e.target.value)}
                  placeholder='Comment'
                  className='message'
                />
                <Link to="/com">
                  <button
                    type='submit'
                    onClick={addC}>
                    Send Comment
                    </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;