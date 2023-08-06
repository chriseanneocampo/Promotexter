const chaiHttp = require('chai-http');
const chai = require('chai');
const expect = chai.expect;
const { addNewItem, getToDoList } = require('./app');


chai.use(chaiHttp);

describe('CRUD APP To Do List', () => {

  //Unit Test for Adding a new item in To Do List
  //Arrange
  const newItem = {
    "userId": 1234,
    "id": 201,
    "title": "Create a New Item in To Do List",
    "completed": true
  };

  //Act
  it('Should create a new item in To Do List ', async () => {
    const response = await addNewItem(newItem);

    //Assert
    expect(response.status).to.equal(201);
    expect(response.data).to.deep.equal(newItem);
  });


  //Unit Test for Getting all items in To Do List;
  //Arrange
  let items = [];

  //Act
  it('Should retrieve To Do List', async () => {
    const response = await getToDoList();
    items.push(response.data);

    //Assert
    expect(response.status).to.equal(200);
    expect(response.data.length).to.equal(200);
  });
});

