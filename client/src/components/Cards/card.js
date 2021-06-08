import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./card.css"
const Card = ({ }) => {
    const users = useSelector((state) => state.userReducer.users)
    return (
        <div class="example">
            <div>
                <Link to="/profile">
                    <button class="profile profile1">PROFILE</button>
                </Link>
            </div>
            {users.map(({ _id, email, firstname, phoneNumber, lastname, role, photo }) => (
                <div key={_id} timeout={500} classNames="fade">
                    <div class="column">
                        <div class="card">
                            <img src={photo} alt="profile photo" class="photocard" />
                            <div >
                                <p class="paragraph">
                                    {firstname} {lastname}
                                </p>
                                <p class="paragraph">email:{email}</p>
                                <p class="paragraph">phone Number: {phoneNumber}</p>
                                <p class="paragraph">Role:<p class="role">{role}</p></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Card;