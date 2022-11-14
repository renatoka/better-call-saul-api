const express = require('express');
const router = express.Router();
const Quote = require('../models/quote');

router.get('/', async (req, res) => {
    const { author } = req.query;
    try {
        if (author) {
            const quotes = await Quote.find({ author });
            if (quotes.length == 0) return res.status(404).json({ message: 'No quotes by ' + author + ' found.' });
            else return res.status(200).json(quotes);
        }
        else {
            const quotes = await Quote.find();
            if (quotes.length == 0) return res.status(404).json({ message: 'No quotes found.' });
            else return res.status(200).json(quotes);
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.get('/random', async (req, res) => {
    try {
        const quotes = await Quote.find();
        if (quotes.length == 0) return res.status(404).json({ message: 'Database Error. No quotes found. Try again later.' });
        else {
            const random = Math.floor(Math.random() * quotes.length);
            res.status(200).json(quotes[random]);
        };
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.get('/:quote_id', async (req, res) => {
    try {
        const quote = await Quote.find({ quote_id: req.params.quote_id });
        if (quote.length == 0) return res.status(404).json({ message: 'Quote doesn\'t exist. Check spelling and try again.' });
        else { res.status(200).json(quote) };
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



router.post('/', async (req, res) => {
    const quote = new Quote({
        quote_id: req.body.quote_id,
        quote: req.body.quote,
        author: req.body.author,
    });
    try {
        if (quote.quote_id == null || quote.quote == null || quote.author == null) {
            return res.status(400).json({ message: 'Quote ID, Quote and Author are required.' });
        }
        else {
            const quoteExists = await Quote.find({ quote: quote.quote });
            if (quoteExists.length > 0) return res.status(400).json({ message: 'Quote already exists.' });
            else {
                const newQuote = await quote.save();
                res.status(201).json(newQuote);
            }
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
module.exports = router;