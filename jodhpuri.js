var connection = require("./connection");
var FetchJodhpuri = function(request,response){
    var sql = "select * from  jodhpuri order by id desc";
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
var Deletejodhpuri = function(request,response){
    var id = request.params.id;
    var sql = `delete from jodhpuri where id= '${id}' `;
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
var Insertjodhpuri = function (request, response) {

    var id = request.params.id;
    var customerid = request.params.customerid;
    var chest = request.params.chest;
    var stomach = request.params.stomach;
    var waist = request.params.waist;
    var hip = request.params.hip;
    var shoulder = request.params.shoulder;
    var sleeve = request.params.sleeve; 
    var rise = request.params.rise;
    var inseamlength = request.params.inseamlength;     
    var bottom = request.params.bottom;
    var fulllength = request.params.fulllength;
    var measurement_date = request.params.measurement_date;
    var remarks = request.params.remarks;
    var delivery_date = request.params.delivery_date;
    console.log(request.params);
    var sql = `insert into jodhpuri (customerid,chest,stomach,waist,hip,shoulder,sleeve,rise,
        inseamlength,bottom,fulllength,measurement_date,remarks,delivery_date) values('${customerid}','${chest}','${stomach}','${waist}','${hip}','${shoulder}','${sleeve}','${rise}','${inseamlength}','${bottom}','${fulllength}','${measurement_date}','${remarks}','${delivery_date}')`;
    console.log(sql);
    connection.con.query(sql, function (error, result) {
        if (error) {
            console.log(error);
            message = error.message;
            response.json({'error':message});
        }
        else {
            response.json({'message':'jodhpuri added successfully' });
        }
    });
}

module.exports.FetchJodhpuri = FetchJodhpuri;
module.exports.Deletejodhpuri = Deletejodhpuri;
module.exports.Insertjodhpuri = Insertjodhpuri;
