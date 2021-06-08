import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getusersadmin, getProfile } from "../../redux/actions";
import Admin from "./Admin";


const Profileadmin = ({ comment }) => {
    const user = useSelector((state) => state.userReducer.user);
    const [role, setRole] = useState("")
    const dispatch = useDispatch()
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
                    <Admin key={Admin._id} user={user} />
                </div>
            ) : (
                <div>
                    <div class="error">please use an admin account</div>
                    <Link to="/login">
                        <button class="pushable">
                            <span class="front">
                                RETURN
                                </span>
                        </button>
                    </Link>
                </div>
            )
    );
};
export default Profileadmin;