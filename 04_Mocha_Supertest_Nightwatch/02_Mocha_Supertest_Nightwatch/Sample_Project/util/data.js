const faker = require('faker');

let api = {
  base_url: "https://api.trello.com/1",
  api_key: "your api key",
  server_token: "your server token"
}

const userData = {
  email: 'your email address',
  password: 'your password',
  userId:'your user id'
}

var cardTitle = faker.lorem.sentence();

var board = {
  title: faker.random.words(),
  listName: faker.lorem.word()
}

const boardQuery = {
  filter: "open",
  fields: "id",
  key: api.api_key,
  token: api.server_token
};

const dataDeleteQuery = {
  key: api.api_key,
  token: api.server_token
};

const cardsData = [
  { title: faker.random.words() },
  { title: faker.random.words() },
  { title: faker.random.words() },
  { title: faker.random.words() },
  { title: faker.random.words() }

]

module.exports = {
  cardsData,
  boardQuery,
  api,
  board,
  userData,
  cardTitle,
  dataDeleteQuery
}
