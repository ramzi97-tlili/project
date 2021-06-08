import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
import { Redirect } from 'react-router-dom';
import { getcomments } from "../../redux/actions/index";

const Comments = ({ comment }) => {

    const isAuth = useSelector((state) => state.docReducer.isAuth);
    const loading = useSelector((state) => state.docReducer.loading);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getcomments())
    }, [dispatch])
    return (
        loading ? (
            <h1>Loading...</h1>
        ) : !isAuth ? (
            <Redirect to='/com' />
        ) :
            <div>
        <Comment key={Comment._id} comment={comment} />
            </div>
    );
};
export default Comments;