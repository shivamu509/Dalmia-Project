const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
const arr = []
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render("form")
});
app.get('/login',(req,res)=>{
    res.render("login")
})

app.post('/file',(req,res)=>{
    res.send("<img src='https://imgs.search.brave.com/HqKAfs7t3LanOBBdU76cjobZpTpPXSvBRwklpK6KFS8/rs:fit:1200:805:1/g:ce/aHR0cDovL3JlbmV3/aGg1ODEud2VlYmx5/LmNvbS91cGxvYWRz/LzEvMi81LzMvMTI1/Mzk1NjYxLzcyMjgx/NTc4Ni5qcGc'></img>")
})
app.post("/",(req,res)=>{
    let itemObj = {
        name: req.body.name,
        email:  req.body.email,
        phone: req.body.phone,
        employeeNumber: req.body.employeeNumber,
        requisition: req.body.requisition,
        file: req.body.file,
        pickupPlace: req.body.pickupPlace,
        dropPlace: req.body.dropPlace,
        description: req.body.description,
        noOfPerson: req.body.noOfPerson,
        date: req.body.date,
        time: req.body.time,
        requestioningEmployee: req.body.requestioningEmployee
      }
    arr.push(itemObj)
    res.render("success")
})
app.post('/login',(req,res)=>{
    console.log(req.body);
    if(req.body.email=='user1@gmail.com' && req.body.password=='12345'){
        res.render("list",{items: arr}) 
    }else{
        res.send('Invalid Username or Password')
    }
})

app.listen(port,(err)=>{
    if(err)
        console.log("Something went wrong while listening the port");
    else
        console.log("Server started at http://localhost:"+port);
});