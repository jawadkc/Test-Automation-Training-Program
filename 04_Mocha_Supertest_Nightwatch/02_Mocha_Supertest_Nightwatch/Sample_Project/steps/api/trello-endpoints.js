let request = require('supertest');
const data = require('../../util/data');

request = request(data.api.base_url);

module.exports = {
    getBoardsIds: (assert, data)=> {
        console.log(data);
        
        return request
        .get(`/members/${data.userId}/boards`)
        .query(data.query)
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
            console.log(res.body);
            assert.isArray(res.body);
            return Promise.resolve(res.body);
        })
    },

    deleteBoard: (assert, data) => {
        console.log(data);
        
        return request
        .delete(`/boards/${data.boardID}`)
        .query(data.query)
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
            console.log(res.body);
            return Promise.resolve(res.body);
        })
    }
}
  