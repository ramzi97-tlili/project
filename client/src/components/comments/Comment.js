import React, { useState, useEffect } from 'react';
import "./comment.css";
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from "../../redux/actions"
import { Link } from 'react-router-dom';
const Comment = ({ }) => {
  const comments = useSelector((state) => state.docReducer.comments)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  return (
    <div>
      <div>
      <div  class="title">
<div class = "inline">
<Link to ="/profile">
  <button class= "bouton" >PROFILE</button>
</Link>
</div>
        <div class = "inline">
        COMMENTS
        </div>
        </div>
      </div>
      <div class="testt">
        {comments.map(({ _id, firstname, lastname, date, comment}) => (
          <div key={_id} timeout={500} classNames="fade">
            <div class="container">
              <div class="row">
                <div class="col-sm-5 col-md-6 col-12 pb-4">
                  <div class="comment mt-4 text-justify float-left">
                    <h4>{firstname} {lastname}</h4>  <br />
                    <p>{comment}</p>
                    <p>{date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Comment;