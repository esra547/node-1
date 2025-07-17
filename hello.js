console.log("hello world !")

const http= require("http")
 http.createServer((req, res)=>{
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.end("<h1>Hello Node!!!!</h1>");
    }).listen(3000)


console.log("server is running on http://127.0.0.1:3000/")

const fs = require("fs");
// fs is the file system module we will see it later
const data = fs.readFileSync('welcom.txt');
 fs.readFile('welcom.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });