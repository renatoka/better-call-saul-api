const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    quote_id: {
        type: Number,
        required: true
    },
    quote: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
}, { versionKey: false });

module.exports = mongoose.model('Quote', quoteSchema);