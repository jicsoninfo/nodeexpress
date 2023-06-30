const config = require('../config/db_config.js');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB
  });


  customer_data = function() {
    var test = "you are in model";
    return test;
  //   con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = "SELECT * FROM customers";
  //   con.query(sql, function (err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //       //return result;
  //   });

  //  });
}

   const sql_connection  = {
    customer_data:customer_data
   }

   module.exports =  sql_connection;