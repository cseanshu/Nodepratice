const fs=require('fs')
const path =require('path')
const data=JSON.parse(fs.readFileSync(path.resolve(__dirname,'data.json'),'utf-8'))
const users=data.users
// console.log(users)


exports.getUsers=(req,res)=>{
    res.json(users);
    console.log(users)
}
exports.getsearchedUsers=(req,res)=>{
    const id=+req .params.id;
    const user=  users.find(pr=>pr.id==id);
    res.json(user)

}
exports.createUsers=(req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.json(req.body);
}
exports.replaceUsers=(req,res)=>{
    const id=+req.params.id;
    const positionIndex=users.findIndex(p=>p.id==id);
    users.splice(positionIndex,1,{...req.body,id:id});
    res.status(200).json(req.body);
}
exports.updateUsers=(req,res)=>{
    const id=+req.params.id;
    const positionIndex=users.findIndex(p=>p.id===id);
    const orgUser=users[positionIndex];
    users.splice(positionIndex,1,{...orgUser,...req.body});
    res.status(200).json(req.body);
}
exports.deletedUsers=(req,res)=>{
    const id=+req.params.id;
    const positionIndex=users.findIndex(p=>p.id===id)
    const deletedUser=users[positionIndex];
    users.splice(positionIndex,1);
    console.log(deletedUser)
    res.status(202).json(deletedUser);
}