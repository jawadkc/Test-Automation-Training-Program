const faker = require('faker');

let api = () => ({
  base_url: process.env.BASE_URL,
  api_key: process.env.API_KEY,
  server_token: process.env.SERVER_TOKEN
})

const userData = () => ({
  email: process.env.USER_EMAIL,
  password: process.env.USER_PASSWORD,
  userId: process.env.USER_ID,
})

var cardTitle = () => faker.lorem.sentence();

var board = () => ({
  title: faker.random.words(),
  listName: faker.lorem.word()
});

const boardQuery = () => ({
  filter: "open",
  fields: "id",
  key: api().api_key,
  token: api().server_token
});

const dataDeleteQuery = () => ({
  key: api().api_key,
  token: api().server_token
});

const cardsData = () => [
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
