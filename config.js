const mongoose = require('mongoose')
require("dotenv").config()
const connection = mongoose.connect('mongodb+srv://meta:meta@cluster0.yssjui7.mongodb.net/valintinedb?retryWrites=true&w=majority')

module.exports = connection
