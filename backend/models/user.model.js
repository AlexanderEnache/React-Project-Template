const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: {type: String, required: true, default: null},
    description: {type: String, required: false}
},{
    timestamps:true
});

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    friends: [{type: String}],
    dogs:[dogSchema]
},{
    timestamps:true
});

userSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });

const User = mongoose.model('User', userSchema)

module.exports = User;