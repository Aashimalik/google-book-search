const express=require('express');
const http=require('http');
const morgan=require('morgan');
var book = require("google-books-search");

const app=express();

var hostname='localhost';
var port=3000 ;
app.use(morgan('dev'));


app.get('/author/:authorName',function(req,res){
    var author=req.params.authorName;
    book.search("inauthor=" + author, function(error, results) {
        if ( ! error ) {
            // console.log(results);
            res.send(results);
            }
        else {
            console.log(error);
        }
    })
    

});

app.get('/title/:titleName',function(req,res){
    var title=req.params.titleName;
    book.search("intitle=" + title, function(error, results) {
        if ( ! error ) {
            // console.log(results);
            res.send(results);
            }
        else {
            console.log(error);
        }
    })
    

});


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