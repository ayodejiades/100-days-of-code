const fs = require("fs");

console.log("Start reading a file...");

fs.readFile("sample.txt", "utf8", (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});

console.log("End of the program.");
