var connection = require("./connection");
var FetchAdmin = function(request,response){
    var sql = "select * from admin order by id desc";
    connection.con.query(sql,function(error,result){
        if(error)
        {
            console.log(error);
            response.json({'error':'error occured'});
        }
        else 
        {
           //convert fetched data from table into json format 
           var output_as_json = JSON.parse(JSON.stringify(result));
           response.send(output_as_json);
        }
    });
}
module.exports.FetchAdmin = FetchAdmin;
