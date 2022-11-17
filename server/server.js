const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const axios = require('axios');
const charactersRouter = require('./routes/characters');
const episodesRouter = require('./routes/episodes');
const quotesRouter = require('./routes/quotes');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB Database'));

// Middleware to display React Page
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/characters', charactersRouter);
app.use('/episodes', episodesRouter);
app.use('/quotes', quotesRouter);

app.listen(port, () => {
    console.log(`app running on ${port} `);
});

const callItself = async () => {
    try {
        const response = await axios.get('https://better-call-saul-api.onrender.com/characters');
        const anotherResponse = await axios.get('https://convertoo.onrender.com/');
        console.log("Called API and Convertoo to stay awake");
    } catch (error) {
        console.error(error);
    }
}

// call every 13 minutes
setInterval(callItself, 780000);