const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;
const { addToDoItem } = require('./app'); 
const { getToDoList } = require('./app'); 

const BASE_URL = 'http://localhost:3000';

describe('add function', () => {
  it('should correctly add two numbers', () => {
    // Arrange
    const num1 = 5;
    const num2 = 7;

    // Act
    const result = add(num1, num2);

    // Assert
    expect(result).to.equal(12);
  });

  it('should handle negative numbers', () => {
    // Arrange
    const num1 = -3;
    const num2 = 8;

    // Act
    const result = add(num1, num2);

    // Assert
    expect(result).to.equal(5);
  });
});



describe('CRUD APP To Do List', () => {

  //Unit Test for addToDoItem function
  //Arrange
    const newItem = {
      "userId": 1234,
      "id": 201,
      "title": "Create a New Item in To Do List",
      "completed": false
    };

  //Act
  it('should create a new item', async () => {
    const response = await addToDoItem(newItem);
    itemId = response.data.id;

    //Assert
    expect(response.status).to.equal(201);
    expect(response.data.title).to.equal('Create a New Item in To Do List');
  });

  //Unit Test for addToDoItem function
  //Arrange

  //Act
  it('should retrieve items', async () => {
    const response = await getToDoList();
    
    //Assert
    expect(response.status).to.equal(200);
    expect(response.data).to.be.an('array');
    expect(response.data.length).to.equal(200);
  });
});

