const express = require('express');
const router = express.Router();
const Episode = require('../models/episode');

/*
Get All Episodes
13.11.2022.
-----------
Added Query search by title and season
*/

router.get('/', async (req, res) => {
    const { title, season } = req.query;
    try {
        if (title && season) {
            const episodes = await Episode.find({ title, season });
            if (episodes.length == 0) return res.status(404).json({ message: 'No episode with title ' + title + ' and season ' + season + ' found' });
            else return res.status(200).json(episodes);
        }
        else if (title) {
            const episodes = await Episode.find({ title });
            if (episodes.length == 0) return res.status(404).json({ message: 'No episode with title ' + title + ' found.' });
            else return res.status(200).json(episodes);
        }
        else if (season) {
            const episodes = await Episode.find({ season });
            if (episodes.length == 0) return res.status(404).json({ message: 'No such season as ' + season + ' found.' });
            else return res.status(200).json(episodes);
        }
        else {
            const episodes = await Episode.find();
            if (episodes.length == 0) return res.status(404).json({ message: 'No episodes found.' });
            else return res.status(200).json(episodes);
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

// Get Random Episode
router.get('/random', async (req, res) => {
    try {
        const episodes = await Episode.find();
        if (episodes.length == 0) return res.status(404).json({ message: 'Database Error. No episodes found. Try again later.' });
        else {
            const random = Math.floor(Math.random() * episodes.length);
            res.status(200).json(episodes[random]);
        };
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Specific Episode by ID
router.get('/:episode_id', async (req, res) => {
    try {
        const episode = await Episode.find({ episode_id: req.params.episode_id });
        if (episode.length == 0) return res.status(404).json({ message: 'Episode doesn\'t exist. Check spelling and try again.' });
        else { res.status(200).json(episode) };
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create an Episode
router.post('/', async (req, res) => {
    const episode = new Episode({
        episode_id: req.body.episode_id,
        title: req.body.title,
        season: req.body.season,
        episode: req.body.episode,
        air_date: req.body.air_date,
        characters: req.body.characters,
        directed_by: req.body.directed_by,
        written_by: req.body.written_by
    });
    try {
        const newEpisode = await episode.save();
        res.status(201).json(newEpisode);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;