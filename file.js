const  fs = require('fs');

//? reading files 
// fs.readFile('C:/Users/HP/Documents/apex_crash.txt',(err, data) => { 
//     if(err) { 
//         console.log(err);
//     }
// console.log(data.toString());
// });

// console.log('last line');

//? writing files 
// fs.writeFile('C:/Users/HP/Documents/ok.txt',' hello, world', ()=> { 
// console.log('file was written');
// });


//? directories 
if(!fs.existsSync('C:/Users/HP/Documents/assets')){
fs.mkdir('C:/Users/HP/Documents/assets', (err) => { 
    if(err) { 
        console.log(err);
    }
    console.log('folder created');
});
}


//? deleting files