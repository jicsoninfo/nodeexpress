const {sql_connection} = require('../models');

const config = require('../config/db_config.js');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB
  });

//var someVar = [];
customerindex = function(req, res){
    
    // var cus_data = sql_connection.customer_data();
    // console.log('data ',cus_data);
    //res.render('index', {'cus_data':cus_data});
        //var someVar = [];
        //console.log(someVar);
        con.connect(function(err) {
            //if (err) throw err;
            var sql = "SELECT * FROM customers";
            con.query(sql, function(err, rows, fields){
                if(err) {
                //throw err;
                //setValue(err);
                } else {
                setValue(rows);
                    // Object.keys(rows).forEach(function(key) {
                    //     someVar = rows[key];
                    //     setValue(rows);
                    // });
                    
                    // Object.keys(fields).forEach(function(key) {
                    //     var field = fields[key];
                    //     console.log(field)
                    //   });
                }
            });
       });

   //console.log(someVar);
}
function setValue(data){
    var someVar = [];
    someVar = data;
    //return someVar;
    console.log(someVar);
    //render('index', {'cus_data':someVar});
}
const customercontroller = {
    customerindex:customerindex,
}

module.exports = customercontroller;