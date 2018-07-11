const checkSignature = require("./checkSignature");
const checkNumbersPosts = require("./checkNumberPosts");
const moment = require("moment");

module.exports = (userList)=>{

    return new Promise((resolve, reject)=>{
        let validUser = [];
        let cr = 0; 
        
        userList.forEach((user) => {
                checkSignature(user, (isIt)=>{
                    if(isIt) validUser.push(user);
                    cr++;
                    if(cr === userList.length) fetchInfo(validUser, resolve);
                });
            });
        })
    };
    
    const fetchInfo = (users, resolve)=>{
        let userList = [];
        let cr = 0;

        users.forEach((user)=>{
            checkNumbersPosts(user.user, (count)=>{
                userList.push(user);
                cr++;
                user.posts = count;
                user.date = moment(Date.now()).format('YYYY-MM-DD');

                if(cr === users.length) resolve(userList);
            });
        })
    };