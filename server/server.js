const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 3000;
require('dotenv').config();
const app = express();

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB Database'));


app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());

app.get ('/test', (req, res) => {
    res.send('Hello World');
});

const charactersRouter = require('./routes/characters');
const episodesRouter = require('./routes/episodes');
app.use('/characters', charactersRouter);
app.use('/episodes', episodesRouter);

app.listen(port, () => {
    console.log(`app running on ${port} `);
});