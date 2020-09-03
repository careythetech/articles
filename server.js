const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3003;

app.use(cors());

app.use(express.json());

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/books";
mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(() => {
        console.log("connected to mongo at: " + connectionString);
    });

const router = require('./routes/articles');
app.use('/api/articles/', router);


app.listen(port, () => console.log(`The app is running on Port: ${port}`))