const mongoose = require('mongoose');



const {Schema} = mongoose;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        match:[ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'please email in correct format email@mail.com'],
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ["student", "teacher"],
        default: 'student'
    },

    date: {
        type: Date,
        default: Date.now(),
    }
})


const UserModel = mongoose.model('user', userSchema);


module.exports = UserModel;