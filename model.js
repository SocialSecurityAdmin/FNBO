const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user : String,
    key : String
})
const userModel = mongoose.model('users', userSchema)
module.exports = userModel