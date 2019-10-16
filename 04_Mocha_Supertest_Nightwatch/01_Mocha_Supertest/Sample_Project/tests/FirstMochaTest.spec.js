const myasserts = require('chai').assert
let request = require('supertest');
const data = require('../utils/data');

const base_url = data.api.base_url;
const userId = data.userId;
const api_key = data.api.api_key;
const token = data.api.server_token;


request = request(base_url);

describe('Main Describe', function() {

    before(() => {
        console.log("Parent Before");
    });

    beforeEach(() => {
        console.log("Parent Before Each");
    });

    afterEach(() => {
        console.log("Parent After Each");
    });

    after(() => {
        console.log("Parent After");
    });

    describe("Developing Understanign", function() {
        before(() => {
            console.log("First Before");
        });

        beforeEach(() => {
            console.log("First Before Each");
        });

        afterEach(() => {
            console.log("First After Each");
        });

        after(() => {
            console.log("Frist After");
        });

        it('First Test', function(done) {
            request
                .get(`/members/${userId}/boards`)
                .query({
                    filter: "open",
                    fields: "id,name",
                    lists:"open",
                    key: api_key,
                    token: token
                })
                .expect(200)
                //.expect('Content-Type', 'json')
                .then(response => {
                    //console.log(response.body);
                    
                    myasserts.exists(response.body[0].id);
                    done();
                })
            
        })

        it('2nd Test', function(done) {
            request
                .get(`/members/${userId}/boards`)
                .query({
                    fields: "id,name",
                    key: api_key,
                    token: token
                })
                .expect(200)
                //.expect('Content-Type', 'json')
                .then(response => {
                    //console.log(response.body);
                    myasserts.exists(response.body[0].id);
                    done();
                })
            
        })

    })

    describe("Developing Understanign", function() {
        before(() => {
            console.log("Second Before");
        });

        beforeEach(() => {
            console.log("Second Before Each");
        });

        afterEach(() => {
            console.log("Second After Each");
        });

        after(() => {
            console.log("Second After");
        });

        it('First Test', function(done) {
            request
                .get(`/members/${userId}/boards`)
                .query({
                    filter: "open",
                    fields: "id,name",
                    lists:"open",
                    key: api_key,
                    token: token
                })
                .expect(200)
                //.expect('Content-Type', 'json')
                .then(response => {
                    //console.log(response.body);
                    
                    myasserts.exists(response.body[0].id);
                    done();
                })
            
        })

        it('2nd Test', function(done) {
            request
                .get(`/members/${userId}/boards`)
                .query({
                    fields: "id,name",
                    key: api_key,
                    token: token
                })
                .expect(200)
                //.expect('Content-Type', 'json')
                .then(response => {
                    //console.log(response.body);
                    myasserts.exists(response.body[0].id);
                    done();
                })
            
        })

    })

})