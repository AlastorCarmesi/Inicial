const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Val = new Schema({
    Email: String,
    Cont: String,
    NomUs: String,
    Nom: String


});
module.exports = mongoose.model('valores',Val);