const mongoose=require('mongoose')
const {Schema}=mongoose
 //creating the new schema
const productSchema=new Schema({
            title:{
                type:String,
                 required:true
            },
            description:{
                type:String
            },
            price: {
                type:Number,
                 required:true,
                 min:[10,"Invaild Price"],
                 max:[1000,"Invalid Price"]
            },
            discountPercentage:Number ,
            rating:{
                type:Number,
                min:0,
                max:5,
                default:0
            },
            stock:Number,
            brand: {
                type:String,
                 required:true
            },
            category: String,
            thumbnail: {
                type:String, 
                required:true
            },
            images: [String] 
 });
 exports.Product=mongoose.model('Product',productSchema);