var connection = require("./connection");
var Login = function (request, response) {

    const email = request.params.email;
    const password = request.params.password;
    // console.log(email);
    sql = `select id from admin where email='${email}' and password='${password}'`;
    console.log(sql);
    connection.con.query(sql, function (error, result) {
        console.log(error);
        if (result.length != 0) {

            console.log("password is correct ")
            response.json({ 'error': 'no', 'success': 'yes', 'message': 'login successfull', 'teacherid': result[0]['id'] });
        }
        else {
            response.json({ 'error': 'no', 'success': 'no', 'message': 'invalid login attampt' });
        }
    });
}
module.exports.Login = Login