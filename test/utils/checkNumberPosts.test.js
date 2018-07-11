const checkNumberPost = require("../../utils/checkNumberPosts");
const usersArr = require("../fixtures");

describe("checkNumberPost", ()=>{
    it("Should return the number of today's post of the user ", (done)=>{
        checkNumberPost(usersArr[0].user, (count)=>{
            expect(count).toBeGreaterThanOrEqual(0);
            done();
        });
    });
});