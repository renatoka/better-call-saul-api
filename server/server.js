const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB Database'));

app.use(express.static(path.join(__dirname, '/public')));

app.listen(process.env.PORT || 5000)
app.use(express.json());

const charactersRouter = require('./routes/characters');
const episodesRouter = require('./routes/episodes');
app.use('/characters', charactersRouter);
app.use('/episodes', episodesRouter);