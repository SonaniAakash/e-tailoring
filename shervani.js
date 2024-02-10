var connection = require("./connection");
var FetchShervani = function(request,response){
    var sql = "select * from shervani order by id desc";
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

var Deleteshervani = function(request,response){
    var id = request.params.id;
    var sql = `delete from shervani where id= '${id}' `;
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

var InsertShervani = function (request, response) {

    var customerid = request.params.customerid;
    var length = request.params.length;
    var chest = request.params.chest;
    var bust = request.params.bust;
    var hipsize = request.params.hipsize;
    var shoulder = request.params.shoulder;
    var armhole = request.params.armhole; 
    var sleeve = request.params.sleeve;
    var around = request.params.around;
    var neck = request.params.neck;
    var back = request.params.back;
    var flare = request.params.flare;
    var chudidar = request.params.chudidar;
    var thigh = request.params.thigh;
    var knee = request.params.knee;
    var ankle = request.params.ankle;
    var looseankle = request.params.looseankle;
    var measurement_date = request.params.measurement_date;
    var remarks = request.params.remarks;
    var delivery_date = request.params.delivery_date;
    console.log(request.params);
    var sql = `insert into shervani(customerid,length,chest,bust,hipsize,shoulder,armhole,sleeve,around,neck,back,flare,chudidar,thigh,knee,ankle,looseankle,measurement_date,remarks,delivery_date) values('${customerid}','${length}','${chest}','${bust}','${hipsize}','${shoulder}','${armhole}','${sleeve}','${around}','${neck}','${back}','${flare}','${chudidar}','${thigh}','${knee}','${ankle}','${looseankle}','${measurement_date}','${remarks}','${delivery_date}')`;
    console.log(sql);
    connection.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            message = error.message;
            response.json({'error':message});
        }
        else {
            response.json({'message':'shervani added successfully' });
        }
    });
}
module.exports.FetchShervani = FetchShervani;
module.exports.Deleteshervani = Deleteshervani;
module.exports.InsertShervani = InsertShervani;
