const myasserts = require('chai').assert;
const api = require('../steps/api/trello-endpoints');
const customNightwatchRunner = require('../nightwatchRunner');

const data = require('../util/data');

describe('My First Mocha based UI and API Test', function() {

    describe("Checking default behaior of user boards", function() {

        it('Clear all boards', async function() {
            boardsList = await api.getBoardsIds(myasserts,
                {
                    userId: data.userData().userId,
                    query: data.boardQuery()
                });
            return Promise.all(
                boardsList.map(board => api.
                    deleteBoard(myasserts, {
                        boardID: board.id,
                        query: data.dataDeleteQuery()
                    })
            ));

        }),

        it('Verify board creation behavior for new user', function(done) {
            customNightwatchRunner.customTestRunner(
                'AssignmentTask.spec.js',
                {
                    testData: data.userData(),
                    boardData: data.board(),
                    cardsData: data.cardsData()
                },
                done
            )

        })

    })

})
