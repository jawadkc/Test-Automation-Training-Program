let faker = require('faker');

let api = {
    base_url: "https://api.trello.com/1",
    api_key: "your api key",
    server_token: "your server token"
}

var cardTitle = faker.lorem.sentence()
var boardName = faker.lorem.words()
var listName = faker.lorem.word();
var userId = 'your user id';
var board = {
    name : boardName,
    listName : listName
}

module.exports = {
    cardTitle,
    api,
    board,
    userId
}
