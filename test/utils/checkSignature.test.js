const checkSignature = require("../../utils/checkSignature");
const userArray  = require("../fixtures");


describe("checkSignature", ()=>{
    it("Should check if user is using the correct signature", (done)=>{
        checkSignature(userArray[1], (isIt)=>{
            expect(isIt).toBeTruthy;
            done();
        });
    });
});