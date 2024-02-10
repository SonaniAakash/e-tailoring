var connection = require("./connection");
var FetchKafni = function(request,response){
    var sql = "select * from kafni order by id desc";
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

var Deletekafni = function(request,response){
    var id = request.params.id;
    var sql = `delete from kafni where id= '${id}' `;
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
var InsertKafni = function (request, response) {

    var customerid = request.params.customerid;
    var collar = request.params.collar;
    var chest = request.params.chest;
    var waist = request.params.waist;
    var length = request.params.length;
    var shoulder = request.params.shoulder;
    var sleeve = request.params.neck; 
    var measurement_date = request.params.measurement_date;
    var remarks = request.params.remarks;
    var delivery_date = request.params.delivery_date;
    console.log(request.params);
    var sql = `insert into kafni (customerid,collar,chest,waist,length,shoulder,sleeve,measurement_date,remarks,delivery_date) values('${customerid}','${collar}','${chest}','${waist}','${length}','${shoulder}','${sleeve}','${measurement_date}','${remarks}','${delivery_date}')`;
    console.log(sql);
    connection.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            message = error.message;
            response.json({'error':message});
        }
        else {
            response.json({'message':'kafni added successfully' });
        }
    });
}
module.exports.InsertKafni = InsertKafni;
module.exports.FetchKafni = FetchKafni;
module.exports.Deletekafni = Deletekafni;
