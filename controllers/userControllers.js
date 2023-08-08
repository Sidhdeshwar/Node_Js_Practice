
const fs = require('fs');
let a = fs.readFileSync(`${__dirname}/../json-data/data.json`, 'utf-8');
let arr  = (JSON.parse(a));



// ^Methods Handllers 

//* getAllUsers - routeHandler
let getAllUsers = (req,res)=>{
    res.send(arr);
    res.end();
}
// * get1User -routeHandler
let get1User = (req,res)=>{
    let id = req.params.id;
    console.log(req.params)
  let obj =  arr.find((x)=>{ 
      return  x.id==id
    });
    res.status(201).send(obj)
    res.end();
};
//? addUser -routeHandler
let addUser = (req,res)=>{
    let obj = req.body;
    let id  = arr[arr.length-1].id + 1;
     let newOBJ = Object.assign({id}, obj);
     console.log(newOBJ);
    arr.push(newOBJ);
    fs.writeFileSync(`${__dirname}/json-data/data.json`, JSON.stringify(arr));
    res.status(200).json({
        status: "success",
        message: "Data Added Succesfully",
        data: {
            newOBJ
        }
    });
    res.end();
}
// ! Delete User -routeHandler
let deleteUser = (req,res)=>{
    let id = req.params.id;
arr.forEach((value,index)=>{
    if(value.id==id)
    {
        arr.splice(index,1);
    }
});
fs.writeFileSync(`${__dirname}/json-data/data.json`, JSON.stringify(arr));
res.send("Deleted Sucess");
res.end();
};

// ^ EditUser  -routeHandler

let editUser = (req,res)=>{
    let id = req.params.id *1;
    console.log(typeof id)
    let newData = req.body;
    let a ;
    arr.forEach((obj,i)=>{
          if(id==obj.id)
          {
            arr[i].name = newData.name;
            a = arr[i]
          }
    }); 
    fs.writeFileSync(`${__dirname}/json-data/data.json`, JSON.stringify(arr));
    res.status(200).json({
        status: "success",
        requestedAt : req.requestTime,
        data: a
    });
    res.end();
};

module.exports = { getAllUsers, get1User, addUser,editUser,deleteUser }