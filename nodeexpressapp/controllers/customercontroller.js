const {sql_connection} = require('../models');

customerindex = function(req, res){
    
    var cus_data = sql_connection.customer_data();
    console.log('data ',cus_data);
    res.render('index', {'cus_data':cus_data});
    //console.log('you are in controller');
}

const customercontroller = {
    customerindex:customerindex,
}

module.exports = customercontroller;