'use strict';
require('dotenv').config();
const express = require('express');
const Connection = require('./config/connection');
const project = require('./model');
const projectRoute = require('./route/project.route');

const app = express();
const mongo = new Connection();

mongo.connect();
app.use(express.json());

// setup router
app.use('/projects', projectRoute);

app.listen(3000, () => console.log('Server started'));
