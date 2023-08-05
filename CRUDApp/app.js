const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let items = [];

// POST Function to add a new item in To Do List
app.post(`/todos`, (req, res) => {
    const newItem = req.body;
    res.status(201).json(newItem);
});

// GET Function to get all To Do List items
app.get(`/todos`, (req, res) => {
    res.json(items);
});

module.exports = app;