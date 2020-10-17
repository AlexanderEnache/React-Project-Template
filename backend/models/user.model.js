const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
},{
    timestamps:true
});

userSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });

const User = mongoose.model('User', userSchema)

module.exports = User;