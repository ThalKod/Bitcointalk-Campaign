const axios = require("axios");
const { Legendary_Signature, JrMember_Signature, Newbie_Signature, SrMemberSignature, FullMember_Signature, HeroMember_Signature, Member_Signature, CopperMember_Signature } = require("../config/signature");
const { API_URL, API_PORT } = require("../config/api");

module.exports =({ user, level }, cb)=>{

     axios.get( `http://${API_URL}:${API_PORT}/users/${user}/signature`)
        .then((response)=>{
            if(response.data.error){
                return console.log(response.data.data.error);
            }
            switch(level){
                case "Legendary":
                    console.log(user);
                    return cb(response.data.data.signature === Legendary_Signature);
                
                case "Jr. Member":
                    console.log(user);
                    return  cb(response.data.data.signature === JrMember_Signature);

                case "Newbie":
                    console.log(user);
                    return cb(response.data.data.signature === Newbie_Signature);

                case "Sr. Member":
                    console.log(user);
                    return cb(response.data.data.signature === SrMemberSignature);

                case "Full Member":
                    console.log(user);
                    return cb(response.data.data.signature === FullMember_Signature);

                case "Member":
                    console.log(user);  
                    return cb(response.data.data.signature === Member_Signature);

                case "Hero Member":
                    console.log(user);
                    return cb(response.data.data.signature === HeroMember_Signature);

                case "Copper Member":
                    console.log(user);
                    return cb(response.data.data.signature === CopperMember_Signature);

                default : 
                    return "What the fuck ?" // Satoshi ? :D
            }
        })
        .catch((err)=> console.log(err));
};

