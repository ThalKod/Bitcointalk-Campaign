const toNestedArr = (objArr)=>{
    const nestedArray = [];

    for(let i = 0; i < objArr.length; i++){

        let newArr = [];
        newArr[0] = objArr[i].user;
        newArr[1] = objArr[i].level;
        newArr[2] = objArr[i].date;
        newArr[3] = objArr[i].posts;
        
        nestedArray.push(newArr);
    }
    return nestedArray;
}

module.exports = toNestedArr;