const { default: mongoose, model } = require('mongoose');



const InstaSchema = new mongoose.Schema({
    c_name:String,
    content:String,
    followers:String
});

module.exports = mongoose.model('reels', InstaSchema);