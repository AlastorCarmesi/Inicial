const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Val = new Schema({
    Temp: String,
    Hum: String,
    Dia: Date

});
module.exports = mongoose.model('valores',Val);