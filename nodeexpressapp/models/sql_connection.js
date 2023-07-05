const config = require('../config/db_config.js');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB
  });


  customer_data = function(req, res) {
    // var test = "you are in model";
    // return test;
    
    con.connect(function(err) {
    if (err) throw err;
    var sql = "SELECT * FROM customers";
    cust_data = con.query(sql, function (err, result) {
        if (err){
          throw err;
        }else{
          console.log(result)
          //return res.send(result);          
        } 
    });
   });
 
}

   const sql_connection  = {
    customer_data:customer_data
   }

   module.exports =  sql_connection;