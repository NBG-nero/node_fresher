// Global object 

console.log(global);

setTimeout(function () {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

int = setInterval(function () {
    console.log('in the interval');
}, 1000);

console.log(__dirname);
console.log(__filename);

