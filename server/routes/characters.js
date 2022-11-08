const express = require('express');
const router = express.Router();
const Character = require('../models/character');

// Get All Characters
router.get('/', async (req, res, next) => {
    try {
        const characters = await Character.find();
        if (characters.length == 0) return res.status(404).json({ message: 'No characters found in the database. Something must have went wrong.' });
        else { res.status(200).json(characters) };
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Random Character
router.get('/random', async (req, res, next) => {
    try {
        const characters = await Character.find();
        if (characters.length == 0) return res.status(404).json({ message: 'No characters found in the database. Something must have went wrong.' });
        else {
            const random = Math.floor(Math.random() * characters.length);
            res.status(200).json(characters[random]);
        };
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Character by Name
router.get('/character/:name', async (req, res, next) => {
    try {
        const character = await Character.findOne({ name: req.params.name });
        if (character == null) return res.status(404).json({ message: 'Character not found in the database. Please try again.' });
        else { res.status(200).json(character) };
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Get Specific Character by ID
router.get('/:char_id', async (req, res, next) => {
    try {
        const character = await Character.find({ char_id: req.params.char_id });
        if (character.length == 0) return res.status(404).json({ message: 'No characters found with ID: ' + req.params.char_id });
        else { res.status(200).json(character) };
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Create a Character
router.post('/', async (req, res, next) => {
    const character = new Character({
        char_id: req.body.char_id,
        name: req.body.name,
        birthday: req.body.birthday,
        occupation: req.body.occupation,
        img: req.body.img,
        status: req.body.status,
        appearance: req.body.appearance,
        firstAppearance: req.body.firstAppearance,
        lastAppearance: req.body.lastAppearance,
        nickname: req.body.nickname,
        portrayed: req.body.portrayed
    });
    try {
        const existingCharacter = await Character.find({ name: req.body.name });
        if (existingCharacter.length > 0) {
            return res.status(400).send({ message: 'Character already exists in the database.' });
        }
        const newCharacter = await character.save();
        res.status(201).json(newCharacter);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a Character
router.patch('/:char_id', async (req, res, next) => {
    try {
        const character = await Character.find({ char_id: req.params.char_id });
        if (character.length == 0) return res.status(404).json({ message: 'No characters found with ID: ' + req.params.char_id });
        else {
            for (let key in req.body) {
                if (req.body[key] == '') return res.status(400).json({ message: 'Please fill in all fields.' });
            }
            const updatedCharacter = await Character.updateOne({ char_id: req.params.char_id }, { $set: req.body });
            res.status(200).json(updatedCharacter);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = router;