var connection = require("./connection");
var FetchSuit = function(request,response){
    var sql = "select * from suit order by id desc";
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
var Deletesuit = function(request,response){
    var id = request.params.id;
    var sql = `delete from suit where id= '${id}' `;
    console.log(sql);
    connection.con.query(sql,function(error,result){
        if(error)
        {
            console.log(error);
            response.json({'error':'error occured'});
        }
        else 
        {
           //convert fetched data from table into json format 
           response.json({'message':'Deleted successfully'});
        }
    });
}
var InsertSuit = function (request, response) {

    var customerid = request.params.customerid;
    var bust = request.params.bust;
    var waist = request.params.waist;
    var bottomhem = request.params.bottomhem;
    var frontlengh = request.params.frontlengh;
    var shoulder = request.params.shoulder; 
    var backlength = request.params.backlength;
    var sleevlength = request.params.sleevlength;
    var measurement_date = request.params.measurement_date;
    var remarks = request.params.remarks;
    var delivery_date = request.params.delivery_date;
    console.log(request.params);
    var sql = `insert into suit (customerid,bust,waist,bottomhem,frontlengh,shoulder,backlength,sleevlength,measurement_date,remarks,delivery_date) values('${customerid}','${bust}','${waist}','${bottomhem}','${frontlengh}','${shoulder}','${backlength}','${sleevlength}','${measurement_date}','${remarks}','${delivery_date}')`;
    console.log(sql);
    connection.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            message = error.message;
            response.json({'error':message});
        }
        else {
            response.json({'message':'suit added successfully' });
        }
    });
}
module.exports.FetchSuit = FetchSuit;
module.exports.Deletesuit = Deletesuit;
module.exports.InsertSuit = InsertSuit;
