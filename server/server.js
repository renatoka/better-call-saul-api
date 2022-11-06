const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://rkauric:admin@cluster0.b9czkm5.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.listen(3000, () => console.log('Server Started'));
app.use(express.json());

const charactersRouter = require('./routes/characters');
app.use('/characters', charactersRouter);

const characters = [
    {
        char_id: 1,
        name: "Jimmy McGill",
        birthday: "November 12, 1960",
        occupation: [
            "Mailroom clerk at Hamlin, Hamlin & McGill",
            "Public Defense Attorney"
        ],
        img: "https://static.wikia.nocookie.net/breakingbad/images/8/8e/BCS_S6_Portrait_Jimmy.jpg/revision/latest?cb=20220802210840",
        status: "Alive",
        appearance: [1, 2, 3, 4, 5, 6],
        firstAppearance: "Uno",
        lastAppearance: "Saul Gone",
        nickname: "Saul Goodman",
        portrayed: "Bob Odenkirk"
    },
    {
        char_id: 2,
        name: "Michael Ehrmantraut",
        birthday: "Between 1940–1944",
        occupation: [
            "Police Officer",
            "Private Investigator",
            "Ticket Booth Guard"
        ],
        img: "https://static.wikia.nocookie.net/breakingbad/images/4/46/BCS_S6_Portrait_Mike.jpg/revision/latest?cb=20220522174959",
        status: "Deceased",
        appearance: [1, 2, 3, 4, 5, 6],
        firstAppearance: "Uno",
        lastAppearance: "Saul Gone",
        nickname: ["Mike", "Pop Pop"],
        portrayed: "Jonathan Banks"
    },
    {
        char_id: 3,
        name: "Kim Wexler",
        birthday: "February 13, 1968",
        occupation: [
            "Law student at University of New Mexico (former)",
            "Mailroom clerk at Hamlin, Hamlin & McGill (former)",
            "Associate at HHM (former)"
        ],
        img: "hhttps://static.wikia.nocookie.net/breakingbad/images/c/c6/BCS_S6_Portrait_Kim.jpg/revision/latest?cb=20220522174923",
        status: "Alive",
        appearance: [1, 2, 3, 4, 5, 6],
        firstAppearance: "Uno",
        lastAppearance: "Saul Gone",
        nickname: ["Kim", "Lizy"],
        portrayed: "Rhea Seehorn"
    },
    {
        char_id: 4,
        name: "Howard Hamlin",
        birthday: "Mid or late 1960s",
        occupation: [
            "Lawyer at Hamlin, Hamlin & McGill"
        ],
        img: "https://static.wikia.nocookie.net/breakingbad/images/5/53/BCS_S6_Portrait_Howard.jpg/revision/latest?cb=20220522175047",
        status: "Deceased",
        appearance: [1, 2, 3, 4, 5, 6],
        firstAppearance: "Uno",
        lastAppearance: "Fund and Games",
        nickname: "Howard",
        portrayed: "Patrick Fabian"
    },
    {
        char_id: 5,
        name: "Chuck McGill",
        birthday: "1944",
        occupation: [
            "Lawyer at Hamlin, Hamlin & McGill"
        ],
        img: "https://static.wikia.nocookie.net/breakingbad/images/3/3e/BCS_S3_ChuckMcGill.jpg/revision/latest?cb=20170327185308",
        status: "Deceased",
        appearance: [1, 2, 3, 4, 6],
        firstAppearance: "Uno",
        lastAppearance: "Lantern",
        nickname: "Chuck",
        portrayed: "Michael McKean"
    },
    {
        char_id: 6,
        name: "Eduardo Lalo Salamanca",
        birthday: "1960",
        occupation: [
            "Cartel Member",
            "Drug Lord"
        ],
        img: "https://static.wikia.nocookie.net/breakingbad/images/f/fd/BCS_S6_Portrait_Lalo.jpg/revision/latest?cb=20220522175118",
        status: "Deceased",
        appearance: [4, 5, 6],
        firstAppearance: "Coushatta",
        lastAppearance: "Point and Shoot",
        nickname: "Lalo",
        portrayed: "Tony Dalton"
    },
    {
        char_id: 7,
        name: "Gustavo Fring",
        birthday: "Late 1950s or early 1960s",
        occupation: [
            "Drug Lord",
            "Los Pollos Hermanos CEO"
        ],
        img: "https://static.wikia.nocookie.net/breakingbad/images/5/54/BCS_S3_GusFring.jpg/revision/latest?cb=20170327185354",
        status: "Deceased",
        appearance: [3, 4, 5, 6],
        firstAppearance: "Witness",
        lastAppearance: "Fun and Games",
        nickname: "Gus",
        portrayed: "Giancarlo Esposito"
    },
    {
        char_id: 8,
        name: "Hector Salamanca",
        birthday: "1939",
        occupation: [
            "Cartel Member",
            "Drug Lord"
        ],
        img: "https://static.wikia.nocookie.net/breakingbad/images/3/34/TioSalamanca.jpg/revision/latest?cb=20100516195603",
        status: "Deceased",
        appearance: [2, 3, 4, 5, 6],
        firstAppearance: "Rebecca",
        lastAppearance: "Fun and Games",
        nickname: "Tio",
        portrayed: "Mark Margolis"
    },
];
