const fs=require('fs')
const data=JSON.parse(fs.readFileSync('data.json','utf-8'))
const products=data.products

exports.getProducts=(req,res)=>{
    res.json(products);
}
exports.getsearchedProducts=(req,res)=>{
    const id=+req .params.id;
    const product=  products.find(pr=>pr.id==id);
    res.json(product)

}
exports.createProduct=(req,res)=>{
    console.log(req.body);
    products.push(req.body);
    res.json(req.body);
}
exports.replaceProducts=(req,res)=>{
    const id=+req.params.id;
    const positionIndex=products.findIndex(p=>p.id==id);
    products.splice(positionIndex,1,{...req.body,id:id});
    res.status(200).json(req.body);
}
exports.updateProducts=(req,res)=>{
    const id=+req.params.id;
    const positionIndex=products.findIndex(p=>p.id===id);
    const orgProduct=products[positionIndex];
    products.splice(positionIndex,1,{...orgProduct,...req.body});
    res.status(200).json(req.body);
}
exports.deletedProduct=(req,res)=>{
    const id=+req.params.id;
    const positionIndex=products.findIndex(p=>p.id===id)
    const deletedProduct=products[positionIndex];
    products.splice(positionIndex,1);
    console.log(deletedProduct)
    res.status(202).json(deletedProduct);
}