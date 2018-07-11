const axios = require("axios");
const { API_URL, API_PORT } = require("../config/api");


module.exports =(user, cb)=>{

    axios.get(`http://${API_URL}:${API_PORT}/users/${user}/posts/count`)
       .then((response)=>{
           if(response.data.error){
               console.log(response.data);
               return console.log("error===true");
           }
           console.log(response.data.data.count);
           return cb(response.data.data.count);
       })
       .catch((err)=> console.log(err));
};
