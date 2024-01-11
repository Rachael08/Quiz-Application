const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    question1: {
        type: String,
        required: true
    },

    Option1A: {
        type: String,
        required: true

    },
    Option1B: {
        type: String,
        required: true,

    },
    Option1C: {
        type: String,
        required: true,

    },
    Option1D: {
        type: String,
        required: true,

    },
    Answer1: {
        type: String,
        required: true,
    },
    question2: {
        type: String,
        required: true
    },

    Option2A: {
        type: String,
        required: true

    },
    Option2B: {
        type: String,
        required: true,

    },
    Option2C: {
        type: String,
        required: true,

    },
    Option2D: {
        type: String,
        required: true,

    },
    Answer2: {
        type: String,
        required: true
    },
    question3: {
        type: String,
        required: true
    },

    Option3A: {
        type: String,
        required: true

    },
    Option3B: {
        type: String,
        required: true,

    },
    Option3C: {
        type: String,
        required: true,

    },
    Option3D: {
        type: String,
        required: true,

    },
    Answer3: {
        type: String,
        required: true
    },

    question4: {
        type: String,
        required: true
    },

    Option4A: {
        type: String,
        required: true

    },
    Option4B: {
        type: String,
        required: true,

    },
    Option4C: {
        type: String,
        required: true,

    },
    Option4D: {
        type: String,
        required: true,

    },
    Answer4: {
        type: String,
        required: true
    },
    question5: {
        type: String,
        required: true
    },

    Option5A: {
        type: String,
        required: true

    },
    Option5B: {
        type: String,
        required: true,

    },
    Option5C: {
        type: String,
        required: true,

    },
    Option5D: {
        type: String,
        required: true,

    },
    Answer5: {
        type: String,
        required: true
    },

});

const postModel = mongoose.model("post", postSchema);
module.exports = {postModel};