const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    char_id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    occupation: {
        type: Array,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    appearance: {
        type: Array,
        required: true
    },
    firstAppearance: {
        type: String,
        required: true
    },
    lastAppearance: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    portrayed: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Character', characterSchema);