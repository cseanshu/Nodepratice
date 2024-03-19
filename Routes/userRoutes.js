const express= require('express')
const userRouter=express.Router();
 const userController=require('../controllers/users')

// 1. Get request

userRouter.get('/',userController.getUsers)

userRouter.get('/:id',userController.getsearchedUsers)

// 2. post or create request
// use bodyparser
userRouter.use(express.json());    // used for the req.body

userRouter.post('/',userController.createUsers);

// 3. update using the put  it will simply overwrite or replace the products


userRouter.put('/:id',userController.replaceUsers);

// 4.update using the patch


userRouter.patch('/:id',userController.updateUsers);

// 5. delete DELETE 


userRouter.delete('/:id',userController.deletedUsers)

exports.userrouter= userRouter;