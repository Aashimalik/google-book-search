const express=require('express');
const http=require('http');
const morgan=require('morgan');
var dns = require ( 'dns' )

const app=express();

var hostname='localhost';
var port=3000 ;
app.use(morgan('dev'));


    



app.get('/check',function(req,res){
    url=req.params.url;
    dns.resolve4( url, function (err, addresses) {
        if (err) console.log (url + " is possibly available : " + err)
})
 res.json({
     msg:"available"
 });
  })

      
checkAvailable( "ohwellhaithar.com" )


app.use((req,res)=>{
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("connected to server");
});

var server=http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });