const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    comment: {
        type: String,
        required:true,
    },
    date: {
        type: Date,
    },
    souscomment:[ {
        type: String,
    }]
}
)
module.exports = Comment = mongoose.model('comment', commentSchema)