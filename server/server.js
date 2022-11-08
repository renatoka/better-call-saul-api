const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://rkauric:admin@cluster0.b9czkm5.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB Database'));

app.listen(port, () => console.log('Server Started on port ' + port));
app.use(express.json());

const charactersRouter = require('./routes/characters');
const episodesRouter = require('./routes/episodes');
app.use('/characters', charactersRouter);
app.use('/episodes', episodesRouter);