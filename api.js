var express = require("express") //downloaded library
var connection = require("./connection") //our own library
var admin = require("./admin")
var jodhpuri = require("./jodhpuri")
var kafni = require("./kafni")
var langho = require("./langho")
var pants = require("./pants")
var shervani = require("./shervani")
var shirts = require("./shirts")
var suit = require("./suit")
var newcustomer = require("./newcustomer")
var login = require("./login")
var customer = require("./customer") //our own library
var app = express();
//npm install express-session
var session = require('express-session'); // for session variableszzz
const { response, request } = require("express");

var bodyParser = require('body-parser')

app.use(express.json());
app.use(express.urlencoded({ 'extended': true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
 });

app.use(express.json());
app.use(express.urlencoded({'extended':true}))
app.use(
    session({
        secret: 'abc'  // it is good to use random string
    })
);
app.get("/customer",(request,response)=>customer.FetchCustomers(request,response));
app.get("/admin",(request,response)=>admin.FetchAdmin(request,response));
app.get("/jodhpuri",(request,response)=>jodhpuri.FetchJodhpuri(request,response));
app.get("/kafni",(request,response)=>kafni.FetchKafni(request,response));
app.get("/langho",(request,response)=>langho.FetchLangho(request,response));
app.get("/pants",(request,response)=>pants.Fetchpants(request,response));
app.get("/shervani",(request,response)=>shervani.FetchShervani(request,response));
app.get("/shirts",(request,response)=>shirts.Fetchshirts(request,response));
app.get("/suit",(request,response)=>suit.FetchSuit(request,response));
app.get("/newcustomer",(request,response)=>newcustomer.FetchnewCustomer(request,response));

app.get("/pants/:id",(request,response)=>pants.Deletepants(request,response));
app.get("/shirts/:id",(request,response)=>shirts.Deleteshirts(request,response));
app.get("/suit/:id",(request,response)=>suit.Deletesuit(request,response));
app.get("/kafni/:id",(request,response)=>kafni.Deletekafni(request,response));
app.get("/langho/:id",(request,response)=>langho.Deletelangho(request,response));
app.get("/jodhpuri/:id",(request,response)=>jodhpuri.Deletejodhpuri(request,response));
app.get("/shervani/:id",(request,response)=>shervani.Deleteshervani(request,response));


app.get("/shirts/:customerid/:shoulder/:chest/:waist/:back/:sleeve/:neck/:shirttype/:measurement_date/:remarks/:delivery_date",(request,response)=>shirts.Insertshirts(request,response));
app.get("/pants/:customerid/:waist/:hip/:thigh/:rise/:leg/:outseam/:inseam/:measurement_date/:remarks/:delivery_date",(request,response)=>pants.Insertpants(request,response));
app.get("/suit/:customerid/:bust/:waist/:bottomhem/:frontlengh/:shoulder/:backlength/:sleevlength/:measurement_date/:remarks/:delivery_date",(request,response)=>suit.InsertSuit(request,response));
app.get("/kafni/:customerid/:collar/:chest/:waist/:length/:shoulder/:sleeve/:measurement_date/:remarks/:delivery_date",(request,response)=>kafni.InsertKafni(request,response));
app.get("/langho/:customerid/:waist/:hip/:inseam/:measurement_date/:remarks/:delivery_date",(request,response)=>langho.Insertlangho(request,response));
app.get("/shervani/:customerid/:length/:chest/:bust/:hipsize/:shoulder/:armhole/:sleeve/:around/:neck/:back/:flare/:chudidar/:thigh/:knee/:ankle/:looseankle/:measurement_date/:remarks/:delivery_date",(request,response)=>shervani.InsertShervani(request,response));
app.get("/jodhpuri/:customerid/:chest/:stomach/:waist/:hip/:shoulder/:sleeve/:rise/:inseamlength/:bottom/:fulllength/:measurement_date/:remarks/:delivery_date",(request,response)=>jodhpuri.Insertjodhpuri(request,response));

app.get("/admin/:email/:password",(request,response)=>login.Login(request,response));
//(customer) is file name
// FetchCustomers = module.exports.FetchCustomers = FetchCustomers;
// http://127.0.0.1:5000/customer   

app.listen(5000,function(error){
    if(error)
    {
        console.log("service can not be started....");
        console.log(error);
    }
    else 
        console.log("service has been started");
});

