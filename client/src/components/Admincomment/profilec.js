import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { getcomments, getProfile, getusersadmin } from "../../redux/actions/index";
import Admincom from "./Admincom";

const Comments = ({ comment }) => {
    const isAuth = useSelector((state) => state.docReducer.isAuth);
    const loading = useSelector((state) => state.docReducer.loading);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getcomments())
    }, [dispatch])
    const user = useSelector((state) => state.userReducer.user);
    const [role, setRole] = useState("")
    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);
    useEffect(() => {
        if (user) {
            setRole(user.role);
        }
    }, [user]);
    useEffect(() => {
        dispatch(getusersadmin())
    }, [dispatch])
    return (
        (role == "admin") ?
            (
                <div>
                    <Admincom key={Comment._id} comment={comment} />
                </div>) : (<div>login with admin  account</div>
            )
    );
};

export default Comments;