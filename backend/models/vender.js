const mongoose = require("mongoose")

const vender = new mongoose.Schema({

    vender_name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Vender', vender)