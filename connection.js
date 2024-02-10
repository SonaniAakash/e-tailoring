var mysql = require("mysql")
var con = mysql.createConnection({
    database : 'e-tailoring',
    user: 'root',
    port: 3306,
    password: '',
    host: 'localhost'
});
con.connect(function(error){
    if(error)
        console.log(error);
    else 
        console.log("connected with mysql database e-tailoring");
});
module.exports.con = con;