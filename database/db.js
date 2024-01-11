const mongoose = require("mongoose");

async function connectDataBase() {
    try {
        const res = await mongoose.connect("mongodb://localhost:27017/QuizAppDB");
        console.log("connected to database successfully");
    } catch (error) {
        console.log(error.message);
    };
};

module.exports = {connectDataBase};