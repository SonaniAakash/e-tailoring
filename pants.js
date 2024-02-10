var connection = require("./connection");
var Fetchpants = function(request,response){
    var sql = "select * from pants order by id desc";
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
var Deletepants = function(request,response){
    var id = request.params.id;
    var sql = `delete from pants where id= '${id}' `;
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

var Insertpants = function (request, response) {

    var id = request.params.id;
    var customerid = request.params.customerid;
    var waist = request.params.waist;
    var hip = request.params.hip;
    var thigh = request.params.thigh;
    var rise = request.params.rise;
    var leg = request.params.leg;
    var outseam = request.params.outseam; 
    var inseam = request.params.inseam;
    var measurement_date = request.params.measurement_date;
    var remarks = request.params.remarks;
    var delivery_date = request.params.delivery_date;
    console.log(request.params);
    var sql = `insert into pants (customerid,waist,hip,thigh,rise,leg,outseam,inseam,measurement_date,remarks,delivery_date) values('${customerid}','${waist}','${hip}','${thigh}','${rise}','${leg}','${outseam}','${inseam}','${measurement_date}','${remarks}','${delivery_date}')`;
    console.log(sql);
    connection.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            message = error.message;
            response.json({'error':message});
        }
        else {
            response.json({'message':'pants added successfully' });
        }
    });
}
 
module.exports.Fetchpants = Fetchpants;
module.exports.Deletepants = Deletepants;
module.exports.Insertpants = Insertpants;

