const getDetail = require('./index');
const getTitle = require('./index');

describe('getTitle()', () => {
    describe('WHEN a title is searched by the user', () => {
        it('THEN a list of possible titles are returned', async () => {
            const res = await getTitle();
            expect(res).toEqual('True');
          });
    });        
});

describe('getDetail()', () => {
    describe('WHEN a title is requested by the user', () => {
        it('THEN correct details of a title are returned', async () => {
            const res = await getDetail();
            expect(res).toEqual('True');
          });
    });        
});