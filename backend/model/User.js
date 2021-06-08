const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
    },
    phoneNumber: {
        type: String,
        required: true
    },

    photo: {
        type: String,
        required: true,
    },

    countrie: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    }
})

module.exports = User = mongoose.model('user', userSchema)