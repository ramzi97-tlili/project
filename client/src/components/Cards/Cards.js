import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "../../redux/actions";
import Card from "./card";
import { Redirect } from 'react-router-dom';


const Cards = ({ user }) => {

    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const loading = useSelector((state) => state.userReducer.loading);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getusers())
    }, [dispatch])
    
    return (
        loading ? (
            <h1>Loading...</h1>
        ) : !isAuth ? (
            <Redirect to='/card' />
        ) :
            <div>
                <Card key={Card._id} user={user} />
            </div>
    );
};

export default Cards;