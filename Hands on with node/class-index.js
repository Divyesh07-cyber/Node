var http=require('http')
var result=require('./class')
var url=require('url')
var querystirng=require('querystring')

var server=http.createServer(function(req,res){
    var query=url.parse(req.url).query;
    var fname=querystirng.parse(query)['fname'];
    var lname=querystirng.parse(query)['lname'];

    console.log(result.fname,result.lname)
    console.log("fname:",result.fname);
    console.log("lname:",result.lname);
}).listen(3000);
console.log("server started at 3000...");