const mongoose = require('mongoose');
const jerseysSchema = require('../schema/Jerseys');

const jerseysModel = mongoose.model('jerseys',jerseysSchema);
module.exports = jerseysModel;