const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
    episode_id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    season: {
        type: Number,
        required: true
    },
    episode: {
        type: Number,
        required: true
    },
    air_date: {
        type: String,
        required: true
    },
    characters: {
        type: Array,
        required: true
    },
    directed_by: {
        type: String,
        required: true
    },
    written_by: {
        type: String,
        required: true
    },
}
    , { versionKey: false });

module.exports = mongoose.model('Episode', episodeSchema);
