/*MODEL SCHEMA FOR THE MENTOR DATA*/

const mongoose = require('mongoose');

const mentorInfoSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        maxlength: 32,
        required: true
    }, 

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    number: {
        type: Number,
        trim: true,
        required: true,
        unique: true,
        maxlength:13
    },

    tasks: {
        type: [String],
        default: [],    
    }
});

module.exports = mongoose.model('Mentor', mentorInfoSchema);