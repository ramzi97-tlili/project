const mongoose = require("mongoose")

const config = require("config")

const mongoUri = config.get("mongoUri")




const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log(`connected success`)
    } catch (error) {
        console.error(error);
    }
}
module.exports = connectDB;