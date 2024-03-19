// const express=require('express');
// const productRouter=express.Router();
// const productControllers=require('../controllers/products');

// // 1. Get request

// productRouter.get('/',productControllers.getProducts)

// productRouter.get('/:id',productControllers.getsearchedProducts)

// // 2. post or create request
// // use bodyparser
// productRouter.use(express.json());    // used for the req.body

// productRouter.post('/',productControllers.createProduct);

// // 3. update using the put  it will simply overwrite or replace the products


// productRouter.put('/:id',productControllers.replaceProducts);

// // 4.update using the patch


// productRouter.patch('/:id',productControllers.updateProducts);

// // 5. delete DELETE 


// productRouter.delete('/:id',productControllers.deletedProduct)

// //doing the default export
// exports.productrouter=productRouter;










// by mongoose
const express=require('express');
const productRouter=express.Router();
const mongproductController=require('../controllers/mongooseproducts')
//bodyparser
productRouter.use(express.json());
productRouter.post('/',mongproductController.createProduct);
productRouter.get('/',mongproductController.getAllProducts);
// productRouter.get('/',mongproductController.getConditionalProducts);
productRouter.get('/:id',mongproductController.getProductById);
productRouter.put('/:id',mongproductController.replaceProducts);
productRouter.patch('/:id',mongproductController.updateProducts);
productRouter.delete('/:id',mongproductController.deleteProducts);
exports.productrouter=productRouter;