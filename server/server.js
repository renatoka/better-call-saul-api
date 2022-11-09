const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
const axios = require('axios');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB Database'));

// Middleware to display React Page
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const charactersRouter = require('./routes/characters');
const episodesRouter = require('./routes/episodes');
app.use('/characters', charactersRouter);
app.use('/episodes', episodesRouter);

app.listen(port, () => {
    console.log(`app running on ${port} `);
});

const callItself = async () => {
    try {
        const response = await axios.get('https://better-call-saul-api.onrender.com/characters');
        console.log("Called API to stay alive");
    } catch (error) {
        console.error(error);
    }
}

// call every 10 minutes
setInterval(callItself, 600000);