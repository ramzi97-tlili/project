import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./admin2.css"
import { deleteccomment, getProfile } from "../../redux/actions"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Admincom = ({ }) => {
    const comments = useSelector((state) => state.docReducer.comments)
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.user);
    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);
    return (
        <div class="back">
            <Link to="/admin">
                <button class="return">RETURN</button>
            </Link>
            <h1 class="title">COMMENTS</h1>
            <div className="shopping-list">
                {comments.map(({ _id, firstname, lastname, comment }) => (
                    <div key={_id} timeout={500} classNames="fade">
                        <table id="customers">
                            <tr>
                                <td>{firstname} {lastname}</td>
                                <td class="td">{comment}</td>
                                <td>
                                    <button class="delete" onClick={() => {
                                        dispatch(deleteccomment(_id))
                                        window.alert("comment deleted");
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
    );
};
export default Admincom;