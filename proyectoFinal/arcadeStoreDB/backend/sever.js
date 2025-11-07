

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/arcadeStoreDB');

app.use('/api/auth', require('./routes/auth'));
