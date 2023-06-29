const {sql_connection} = require('../models');
customerindex = function(req, res){
    cus_data = sql_connection.customer_data ;
    console.log(cus_data);
    res.render('index');
    //console.log('you are in controller');
}

const customercontroller = {
    customerindex:customerindex,
}

module.exports = customercontroller;