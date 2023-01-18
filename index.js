const fs = require('fs');
fs.mkdir("Thapa",(err)=>{
    console.log("folder created..");
});
fs.writeFile('Thapa/bios.txt','hello.. i am prasanta..',(err)=>{
    console.log("file created ...");
})

fs.appendFile('Thapa/bios.txt', '\nthis is king ... ',(err)=>{
    console.log("file updated ...");
})

fs.readFile('thapa/bios.txt','UTF-8',(err,data)=>{
    console.log(data);
})

fs.rename('Thapa/bios.txt','Thapa/new.txt',(err)=>{
    console.log('rename completed ...' );
});
fs.unlink('Thapa/new.txt',(err)=>{
    console.log("file deleted");
});
fs.rmdir('Thapa',(err)=>{
    console.log('folder deleted ..');
})