const fetchInfo = require("../../utils/fetchInfo");
const userArr = require("../fixtures");


describe("fecthInfo", ()=>{
    it("Should fetch all info about the users and return the correct updated users..", (done)=>{
        fetchInfo(userArr).then((results)=>{
            expect(results).toEqual([ { user: '106120',level: 'Legendary', date: expect.any(String), posts: expect.any(Number) } ])
            done();
          }).catch((err)=>{
            throw new Error(err);
          });
    });
});
