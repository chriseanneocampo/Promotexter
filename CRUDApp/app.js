const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

let items = [];

// Create
function addToDoItem(item) {
    app.post('https://jsonplaceholder.typicode.com/todos', (req, res) => {
        items.push(newItem);
        res.status(201).json(item);
    });
}

// Read
function getToDoList() {
    app.get('https://jsonplaceholder.typicode.com/todos', (req, res) => {
        res.json(items);
    });
}

