const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../model/User');
const Comment = require('../model/Comment');
const secretOrKey = config.get('secretOrkey');
const nodemailer = require('nodemailer')



//register user

exports.register = async (req, res) => {
  const { role, countrie, photo, age, firstname, lastname, email, password, phoneNumber } = req.body;
  try {
    const searchRes = await User.findOne({ email });
    if (searchRes)
      return res.status(401).json({ msg: `user already exists !!` });
    const newUser = new User({
      firstname,
      lastname,
      countrie,
      photo,
      role,
      age,
      email,
      password,
      phoneNumber,
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;
    await newUser.save();
    res.status(201).json(newUser);


  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};

//login user

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: `bad credentials!` });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: `bad credentials!!` });
    const payload = {
      id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      age: user.age,
      countrie: user.countrie,
      photo: user.photo,
      email: user.email,
      phoneNumber: user.phoneNumber,
    };
    const token = await jwt.sign(payload, secretOrKey);
    return res.status(200).json({ token: `Bearer ${token}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};
//get all users
exports.allUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      succes: true,
      users,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}

//delete one comment

exports.deleteone = async (req, res) => {
  try {
    await Comment.deleteOne(req.params.commentID);
    res.send({ message: "comment deleted" });
  } catch (error) {
    res.send(error);
  }
};

//delete one user

exports.deleteone = async (req, res) => {
  const{id}=req.params
  try {
    await User.findByIdAndDelete(id);
    res.send({ message: "user deleted" });
  } catch (error) {
    res.send(error);
  }
};



exports.deletecomment = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.send({ message: "comment deleted" });
  } catch (error) {
    res.send(error);
  }
};


exports.addComment = async (req, res) => {
  const { firstname, lastname, date, comment } = req.body;
  try {
    const newComment = new Comment({
      firstname,
      lastname,
      comment,
      date,
    });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: error });
  }
};



exports.allComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json({
      succes: true,
      comments,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}



exports.allusersAdmin = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      succes: true,
      users,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}



exports.updateUser = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      age,
      countrie,
      photo,
      email,
      phoneNumber
    } = req.body;

    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      firstname,
      lastname,
      age,
      countrie,
      photo,
      email,
      phoneNumber
    });
    return res.status(201).json({
      msg: "modifié avec succès",
      user: updatedUser,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
}


//get one user 
exports.getOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json({ status: "success", user: user });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
//admin
exports.admin = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id);
    if (user.role == "admin") {
      user.update
    } else {

    }
    res.json({ status: "success", user: user.role = "user" });
  }

  catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};