var express = require( "express" );
var app = express();
//var canvas = require("");

app.set("port",process.env.PORT|| 4000);
app.get( "/" , function(req , res ){
    res.send("Hello world");
});

app.listen(app.get("port"),function(){
    console.log( "server is started at port : "+ app.get("port"));
});