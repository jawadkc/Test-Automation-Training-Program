let request = require('supertest');
const data = require('../../util/data');

const requestObj = () => request(data.api().base_url);

module.exports = {
    getBoardsIds: (assert, data)=> {
        return requestObj()
        .get(`/members/${data.userId}/boards`)
        .query(data.query)
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
            assert.isArray(res.body);
            return Promise.resolve(res.body);
        })
    },

    deleteBoard: (assert, data) => {
        return requestObj()
        .delete(`/boards/${data.boardID}`)
        .query(data.query)
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
            return Promise.resolve(res.body);
        })
    }
}
