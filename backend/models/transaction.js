const mongoose = require("./db.js")

const transaction = new mongoose.Schema({
    vender_name: {
        type: String,
        required: true,
        ref:"Vender"
    },
    transaction_type: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    final_amount: {
        type: Number,
        required: true
    },
    transaction_date: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Transaction",transaction)