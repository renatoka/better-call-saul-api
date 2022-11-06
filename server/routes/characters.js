const express = require('express');
const router = express.Router();
const Character = require('../models/character');

// Get All Characters
router.get('/', async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Specific Character
router.get('/:char_id', async (req, res, next) => {
    let character;
    try {
        character = await Character.find({ char_id: req.params.char_id });
        if (character == null) {
            return res.status(404).json({ message: 'Character not found' });
        }
        res.json(character);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    res.character = character;
    next()
});

// Create a Character
router.post('/', async (req, res) => {
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
        const newCharacter = await character.save();
        res.status(201).json(newCharacter);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;