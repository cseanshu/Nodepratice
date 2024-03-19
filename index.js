// exports.sum=(a,b)=>{
//     return a+b;
// }
// exports.diff=(a,b)=>{
//     return a-b;
// }
// // const sum=(a,b)=>{
// //     return a+b;
// // }
// // const diff=(a,b)=>{
// //     return a-b;
// // }
// // export {sum,diff}
// console.log("anshuman")
// console.log("mihsra")
// const os  = require('os');
// // console.log(os.version())
// const http=require('http')
// // const data={
// //     name:'anshuman'
// // }

  // const fs=require('fs')
// const dummy=fs.readFileSync('dummy.html','utf-8')
// const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products=data.products;

// // console.log(product.title);
// // const server= http.createServer((req,res)=>{
// //     console.log(req.url)
// //     console.log('serverStarter');
// //     res.setHeader('mihsra','DummyValue')
// //      res.setHeader('Content-Type','application/json')
// //     //  res.setHeader('Content-Type','text/html')
// //     // res.end(JSON.stringify(data))
// //     res.end(data)
// // })
// const server= http.createServer((req,res)=>{
//    if(req.url.startsWith('/product')){
//     // console.log(req.url.split('/')[2])
//     const id=req.url.split('/')[2];
//     const prd=product.find((x)=>x.id==+id)
//     // console.log(prd)
//         res.setHeader('content-Type','text/html')
//        let modifieddummy= dummy.replace('**title**',prd.title).replace('**url**',prd.thumbnail).replace('**price**',prd.price).replace('**brand**',prd.brand);
//         res.end(modifieddummy)
//         return
//    }

//    switch(req.url){
//     case '/':
//         {res.setHeader('Content-Type','text/html');
//         res.end(dummy)
//         break;
//     }
//         case '/api':{
//             res.setHeader('Content-Type','application/json')
//             res.end(JSON.stringify(data));
//             break;
//         }
        
//         default:
//             res.writeHead(404,'the not found');
//             res.end();
//    }
// })
// server.listen(8080)

// express started
require('dotenv').config()
const mongoose=require('mongoose')
const express=require('express');
const { request } = require('http');
const server=express();
const cors=require('cors')
// server.get('/',(req,res)=>{
    // res.json(product)
    // res.sendFile('E:\Node.js\dummy.html')
// })

//applying middleware
// server.use((req,res,next)=>{
//     console.log(req.method,req.ip,req.hostname,new Date(),req.get('Accept-Language'))
//     next()
// })
//making another middleware for the  auth purpose
// const auth =(req,res,next)=>{
//     console.log(req.query);
//     if(req.body.password=='123'){
//         next();
//     }
//     else{
//         res.sendStatus(401);
//     }
// }
// server.use(auth)
// server.use(express.json())
// server.get('/',auth,(req,res)=>{
//  res.json({type:'GET'})
// })
// server.post('/',auth,(req,res)=>{
//     res.json({type:'post'})
// })
// server.put('/',(req,res)=>{
//     res.json({type:'PUT'})
// })
// server.delete('/',(req,res)=>{
//     res.json({type:'delete'})
// })




// ***************************Rest Api
// const productRouter=require('./Routes/productRoutes')
// server.use('/products',productRouter.productrouter)

// middleware for the user api
// const userRouter=require('./Routes/userRoutes');
// server.use('/users',userRouter.userrouter);
server.use(cors());
server.use(express.static('./public/dist'))
// console.log("ENV PASSWORD", process.env.DB_PASSWORD);

//    middleware for the mongooseproducts.js
const productRouter=require('./Routes/productRoutes')
server.use('/products',productRouter.productrouter);

server.use('*',(req,res)=>{
    res.sendFile(__dirname+'/public/dist/index.html')
})
const main = async () => {
    // await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');   //this is connecting with the localhost
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected to the database");
};

main().catch(err=>console.log(err));

server.listen(process.env.PORT);