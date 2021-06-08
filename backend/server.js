
const express = require("express");
const connectDb = require("./config/dbConnect");
const user = require("./Routes/user");


const app = express();
app.use(express.json())
app.use('/user', user)


connectDb()
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
    err ? console.error(err) : console.log(`Server running on port ${PORT}`)
);

