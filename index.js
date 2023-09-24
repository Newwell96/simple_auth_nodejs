const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter.js');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const PASSWORD = process.env.PASSWORD;

const app = express();

app.use(express.json());
app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://NewWell96:${PASSWORD}@cluster0.6iq2kvk.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
}

start();