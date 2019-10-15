const faker = require('faker');

module.exports = {
  testData: {
    email: 'your email account',
    password: 'your password'
  },
  boardData: {
    title: faker.random.words()
  },
  cardsData: [
    { title: faker.random.words() },
    { title: faker.random.words() },
    { title: faker.random.words() },
    { title: faker.random.words() },
    { title: faker.random.words() }

  ]
}
