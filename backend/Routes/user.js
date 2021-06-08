const express = require('express');
const { register, login, allUsers, deleteone, updateUser, addComment,allComments, allusersAdmin, admin, deletecomment } = require('../controllers/user.controller');
const { registerRules, validator, registerComment } = require('../middleware/validator');
const isAuth = require('../middleware/passport-setup');
const Router = express.Router();


Router.put('/profile/:id',updateUser, validator);
Router.post(`/register`, registerRules(), validator, register);
Router.post(`/login`, login);
Router.delete("/delete/:id", deleteone);
Router.post(`/addcomment`, registerComment(), addComment);
Router.get("/users", allUsers);
Router.get("/Admin",allusersAdmin );
Router.get("/comments", allComments);
Router.delete("/deletecom/:id", deletecomment);
Router.get('/current', isAuth(), (req, res) => {
    console.log('req', req);
    res.json(req.user);
})

Router.patch("/user/:id", admin);

Router.put('/comment/:id');

Router.get("/users/:id");

module.exports = Router;