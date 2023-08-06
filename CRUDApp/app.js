const axios = require('axios');
const BASE_URL = 'https://jsonplaceholder.typicode.com';


// POST Function to add a new item in To Do List
function addNewItem(item) {
    return axios.post(`${BASE_URL}/todos`, item)
        .catch(error => {
            throw new Error(`POST request error: ${error.message}`);
        });
}

// GET Function to get all To Do List items
function getToDoList() {
    return axios.get(`${BASE_URL}/todos`)
        .catch(error => {
            throw new Error(`GET request error: ${error.message}`);
        });
}

module.exports = { addNewItem, getToDoList };