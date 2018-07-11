const toNestedArr = require("../../utils/toNestedArr");
const usersArr = require("../fixtures");

describe("toNestedArr", ()=>{
    it("Should convert the user array into a nested array", ()=>{
        const nestedArray = toNestedArr(usersArr);
        expect(nestedArray).toEqual([ [ '2131727', 'Copper Member', 1000, 10 ],[ '106120', 'Legendary', 2000, 20 ],[ '850616', 'Member', 11000, 100 ] ]);
    });
});
