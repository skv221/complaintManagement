const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const instituteSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    password: String,
    type: String,
    complaints: Array,
});

module.exports = mongoose.model('institute', instituteSchema, 'institutions');