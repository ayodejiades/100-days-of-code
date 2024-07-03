const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (req.url === "/"){
        res.end(JSON.stringify({message: "Hello World"}));
    } else if (req.url === "/about"){
        res.end(JSON.stringify({message: "About Page"}));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({message: "Page Not Found"}));
    }
});

server.listen(port,hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});