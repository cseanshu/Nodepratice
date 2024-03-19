const lib=require('./index')
// import {sum,diff} from './index.js'
// console.log(sum(4,5),diff(5,3));
const fs=require('fs')
// const txt=fs.readFileSync('demo.txt','utf-8')
fs.readFile('demo.txt','utf-8',(err,txt)=>{
   try{
    console.log(txt);
   }
   catch{
    console.log(err);
   }
})
// console.log(txt);
console.log(lib.sum(3,5),lib.diff(7,4));