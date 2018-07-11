const mysql = require('mysql');
const { selectAll, insertAll, deleteAll } = require("./config/sqlCmd");
const { db_host, database, db_pass, db_port, db_user } = require("./config/db");
const fetchInfo = require("./utils/fetchInfo");
const toNestedArr = require("./utils/toNestedArr");
const moment = require("moment");
const { DAY, MINUTE } = require("./config/constant");

const con = mysql.createConnection({
  host: db_host,
  user: db_user,
  password: db_pass,
  port: db_port,
  database: database
});

con.connect((err)=>{

  if (err) throw err;

  console.log("Connected!");
    
  const main = ()=>{
    console.log("Querying db state...");
    con.query(selectAll, (err, res)=>{
      if(err) throw err;
      console.log("Current db state received...");

      console.log("Fetching info...");

      fetchInfo(res).then((results)=>{
        const nestedValues = toNestedArr(results);
        // deleteDb();
        writeDb(nestedValues);

      }).catch((err)=>{
        console.log(err);
      });
    });

    setTimeout(()=>{
      main();
    }, DAY); // running it each day
  }
  
  main();
});


const writeDb = (values)=>{
  con.query(insertAll, [values], function(err) {
    if (err) throw err;
    console.log("Db updated at", moment(Date.now()).format('YYYY-MM-DD'));
  });
};

// const deleteDb = ()=>{
//   con.query(deleteAll, (err)=>{
//     if (err) throw err;
//     console.log("Delete current db state");
//   });
// }