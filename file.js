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
}else { 
    fs.rmdir('C:/Users/HP/Documents/assets', (err) => { 
        if(err) { 
            console.log(err);
        }
        console.log('folder deleted');
    });
}


//? deleting files
if(fs.existsSync('C:/Users/HP/Documents/delete.txt')) { 
    fs.unlink('C:/Users/HP/Documents/delete.txt',(err) => { 
        if(err) { 
            console.log(err);
        }
        console.log('file deleted');
    });
}

