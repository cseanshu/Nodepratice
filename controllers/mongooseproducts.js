const model=require('../model/product');
const Product=model.Product
exports.createProduct=async(req,res)=>{
   // const product=new Product();
   // product.title='iphone X',
   // product.rating=5.6,
   // product.price=33
   // const savedProduct= await product.save();
   // console.log("Product saved successfully:", savedProduct);
   //      res.status(200).json(savedProduct);

   // sending data directly from the body
   
   try{
      const product =new Product(req.body);
      console.log(req.body);
      const savedProduct= await product.save();
      console.log("product is save",savedProduct)
      res.status(200).json(savedProduct);
   }catch(err){
      console.log(err)
      res.status(400).json(err);
   }
 
   //this is a old version so it is not accepting this 
   // product.save((err,doc)=>{
   //    console.log({err,doc});
   //    res.status(200).json(doc);
   // })
 
}

//getting all products
exports.getAllProducts=async(req,res)=>{
   const products=await Product.find();
   res.json(products);
}
//gettting products by conditions
exports.getConditionalProducts=async(req,res)=>{
   const product=await Product.find({price:{$gt:400}});
   res.json(product);
}
exports.getProductById=async(req,res)=>{
  try{
   const id=req.params.id;
   const product=await Product.findById(id);
   res.json(product);
  }
  catch(err){
   console.log(err)
   res.json(err);
  }
}
//find the product by id and replace it 
//  we use findOneAndReplace
exports.replaceProducts=async(req,res)=>{
   try{
      const id=req.params.id;
      const product=await Product.findOneAndReplace({_id:id},req.body,{new:true});
      res.status(202).json(product);
   }
   catch(err){
      console.log(err);
      res.status(400).json(err);
   }
}
//find the products and update it
// we use findOneAndUpdate
exports.updateProducts=async(req,res)=>{
   try{
      const id=req.params.id;
      const product=await Product.findOneAndUpdate({_id:id},req.body,{new:true});
      res.status(202).json(product);
   }
   catch(err){
      console.log(err);
      res.status(400).json(err);
   }
}
exports.deleteProducts=async(req,res)=>{
   try{
      const id=req.params.id;
      const deletedProduct=await Product.findOneAndDelete({_id:id});
      res.status(204).json(deletedProduct)
   }
   catch(err){
      console.log(err);
      res.status(400).json(err);

   }
}