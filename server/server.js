const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
let port = process.env.PORT || 3000;
require('dotenv').config();
const app = express();

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB Database'));

app.listen(port, '0.0.0.0', () => {
    console.log(`app running on ${port} `);
});

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());

const charactersRouter = require('./routes/characters');
const episodesRouter = require('./routes/episodes');
app.use('/characters', charactersRouter);
app.use('/episodes', episodesRouter);