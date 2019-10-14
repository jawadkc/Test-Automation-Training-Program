const faker = require('faker');

module.exports = {
  testData: {
    email: 'jawad.k.cheema+tests@gmail.com',
    password: 'jawadjawad'
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
