var connection = require("./connection");
var Fetchshirts = function(request,response){
    var sql = "select * from shirts order by id desc";
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

var Deleteshirts = function(request,response){
    var id = request.params.id; 
    var sql = `delete from shirts where id= '${id}' `;
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
var Insertshirts = function (request, response) {

    var id = request.params.id;
    var customerid = request.params.customerid;
    var shoulder = request.params.shoulder;
    var chest = request.params.chest;
    var waist = request.params.waist;
    var back = request.params.back;
    var sleeve = request.params.sleeve;
    var neck = request.params.neck; 
    var shirttype = request.params.shirttype;
    var measurement_date = request.params.measurement_date;
    var remarks = request.params.remarks;
    var delivery_date = request.params.delivery_date;
    console.log(request.params);
    var sql = `insert into shirts (customerid,shoulder,chest,waist,back,sleeve,neck,shirttype,measurement_date,remarks,delivery_date) values('${customerid}','${shoulder}','${chest}','${waist}','${back}','${sleeve}','${neck}','${shirttype}','${measurement_date}','${remarks}','${delivery_date}')`;
    console.log(sql);
    connection.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            message = error.message;
            response.json({'error':message});
        }
        else {
            response.json({'message':'shirt added successfully' });
        }
    });
}

module.exports.Fetchshirts = Fetchshirts;
module.exports.Deleteshirts = Deleteshirts;
module.exports.Insertshirts = Insertshirts;