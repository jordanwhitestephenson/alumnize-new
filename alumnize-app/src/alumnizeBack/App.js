require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');



const alumni = require('./routes/alumni');
const employer = require('./routes/employer');
const mock = require('./routes/mock');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cookieParser());
app.use(express.static('public'));

app.use('/alumni', alumni);
app.use('/employer', employer);
app.use('/mock', mock);



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
