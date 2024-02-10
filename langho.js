var connection = require("./connection");
var FetchLangho = function(request,response){
    var sql = "select * from langho order by id desc";
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

var Deletelangho = function(request,response){
    var id = request.params.id;
    var sql = `delete from langho where id= '${id}' `;
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

var Insertlangho = function (request, response) {

    var id = request.params.id;
    var customerid = request.params.customerid;
    var waist = request.params.waist;
    var hip = request.params.hip;
    var inseam = request.params.inseam;
    var measurement_date = request.params.measurement_date;
    var remarks = request.params.remarks;
    var delivery_date = request.params.delivery_date;
    console.log(request.params);
    var sql = `insert into langho (customerid,waist,hip,inseam,measurement_date,remarks,delivery_date) values('${customerid}','${waist}','${hip}','${inseam}','${measurement_date}','${remarks}','${delivery_date}')`;
    console.log(sql);
    connection.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            message = error.message;
            response.json({'error':message});
        }
        else {
            response.json({'message':'langho added successfully' });
        }
    });
}
module.exports.FetchLangho = FetchLangho;
module.exports.Deletelangho = Deletelangho;
module.exports.Insertlangho = Insertlangho;
