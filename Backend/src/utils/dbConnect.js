<<<<<<< HEAD
// DB Connect
=======
const mongoose = require("mongoose");
require('dotenv').config(); 

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT);
        console.log("DB Connected Successfully...");
    } catch (error) {
        console.error("DB Connection Failed:", error);
    }
};

module.exports = dbConnect;
>>>>>>> 50a3b3fe5d2982f46a8b02163c5353d9808888e8
