var http = require('http')
var fs = require('fs')
var path = require("path");

http.createServer(function(req,res){

    if(req.url === '/'){ 
        fs.readFile("../client/index.html",'UTF-8',function(err,html){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end(html)
        })
    }else if(req.url.match("\.js$")){
          var jspath = path.join(__dirname,'../','client',req.url);
          var fileStream = fs.createReadStream(jspath,'UTF-8')
          res.writeHead(200,{"Content-Type":"text/js"})
          fileStream.pipe(res)
          console.log(jspath)
    }else if(req.url.match("\.json")){
        var jsonpath = path.join(__dirname,'../',req.url)
        var fileStream = fs.createReadStream(jsonpath,'UTF-8')
        res.writeHead(200,{"Content-Type":"text/json"})
        fileStream.pipe(res)
        console.log(jsonpath)

       
    }else{
        res.writeHead(404,{ "Content-Type" : "text/html" });
        res.end("No Page Found")
    }
    console.log(req.url);
    
    
}).listen(8000);