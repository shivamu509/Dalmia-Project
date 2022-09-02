/* Without database */
/* Comment line 39 and uncomment line 40 of list.ejs*/

// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({
//     extended: true
// }))
// app.set('view engine', 'ejs');

// let arr = []
// let allowList = []
// let denyList = []


// app.get('/',(req,res)=>{
//     res.render("form")
// });
// app.get('/login',(req,res)=>{
//     res.render("login")
// })
// app.get('/admin/:location',(req,res)=>{
//     let target = req.params.location
//     if (target == "home")
//         res.render("list",{items: arr, render: req.params.location})
//     else if (target == "allow")
//         res.render("list",{items: allowList, render: req.params.location})
//     else if (target == "deny")
//         res.render("list",{items: denyList, render: req.params.location})
//     else
//         res.send("No such file available please check name")
// })


// app.post('/file',(req,res)=>{
//     res.send("<img src='https://imgs.search.brave.com/HqKAfs7t3LanOBBdU76cjobZpTpPXSvBRwklpK6KFS8/rs:fit:1200:805:1/g:ce/aHR0cDovL3JlbmV3/aGg1ODEud2VlYmx5/LmNvbS91cGxvYWRz/LzEvMi81LzMvMTI1/Mzk1NjYxLzcyMjgx/NTc4Ni5qcGc'></img>")
// })
// app.post("/",(req,res)=>{
//     let itemObj = {
//         name: req.body.name,
//         email:  req.body.email,
//         phone: req.body.phone,
//         employeeNumber: req.body.employeeNumber,
//         requisition: req.body.requisition,
//         file: req.body.file,
//         pickupPlace: req.body.pickupPlace,
//         dropPlace: req.body.dropPlace,
//         description: req.body.description,
//         noOfPerson: req.body.noOfPerson,
//         date: req.body.date,
//         time: req.body.time,
//         requestioningEmployee: req.body.requestioningEmployee
//       }
//     const items = new Item(itemObj)
//     items.save()
//     arr.push(itemObj)
//     res.render("success")
// })
// app.post('/login',(req,res)=>{
//     if(req.body.email=='user1@gmail.com' && req.body.password=='12345'){
//          res.redirect('/admin/home');
//     }else{
//         res.send('Invalid Username or Password')
//     }
// })
// app.post('/move',(req,res)=>{
//     let from = req.body.from
//     let id = req.body.id 
//     let to = req.body.to
//     let item = []
//     function insert(val,item,id) {
//         item.forEach(item => {
//             val.push(item)
//         });
//     }

//     if ( from == "home" ){
//         item = arr.filter(value => value.employeeNumber == id)
//         arr = arr.filter(value => value.employeeNumber != id)
//     }else if (from == "allow"){
//         item = allowList.filter(value => value.employeeNumber == id)
//         allowList = allowList.filter(value => value.employeeNumber != id)
//     }else if (from =="deny"){
//         item = denyList.filter(value => value.employeeNumber == id)
//         denyList = denyList.filter(value => value.employeeNumber != id)
//     }else{
//         console.log("Something went wrong while inserting data");
//     }
//     if ( to == "home" ){
//         insert(arr,item,id)
//         res.redirect('/admin/'+from)
//     }else if (to == "allow"){
//         insert(allowList,item,id)
//         res.redirect('/admin/'+from)
//     }else if (to =="deny"){
//         insert(denyList,item,id)
//         res.redirect('/admin/'+from)
//     }
//     else{
//         res.redirect('/admin/'+from)
//     }
    
// })

// app.listen(port,(err)=>{
//     if(err)
//         console.log("Something went wrong while listening the port");
//     else
//         console.log("Server started at http://localhost:"+port);
// });

/* WITH MONGODB LOCAL DATABASE*/
/* Comment line 40 and uncomment line 39 of list.ejs */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/registerDB",(err)=>{
  if (err)
    console.log(err);
  else
    console.log("Database Connected");
})


app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs');

const itemsSchema = new mongoose.Schema({
    name: String,
    email:  String,
    phone: Number,
    employeeNumber: Number,
    requisition: String,
    file: String,
    pickupPlace: String,
    dropPlace: String,
    description: String,
    noOfPerson: Number,
    date: String,
    time: String,
    requestioningEmployee: String
})
const Item = mongoose.model("Item",itemsSchema);
const allowItem = mongoose.model("AllowItem",itemsSchema);
const denyItem = mongoose.model("DenyItem",itemsSchema);

app.get('/',(req,res)=>{
    res.render("form")
});
app.get('/login',(req,res)=>{
    res.render("login")
})
app.get('/admin/:location',(req,res)=>{
    let target = req.params.location
    let db = ""
    if (target != "home" && target != "deny" && target != "allow" )
        res.send("No such file available please contact to developer")
    else{
        let db = Item
        if (target == "allow"){
            db = allowItem
        }else if (target == "deny")
            db = denyItem
        db.find({},(err,item)=>{
            if(err)
                console.log("Something went wrong while searching")
            else if(item.length > 0)
                res.render("list",{items: item, render: req.params.location})
            else
                res.render("list",{items: [], render: req.params.location})
        })
    }
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
    const items = new Item(itemObj)
    items.save()
    // arr.push(itemObj)
    res.render("success")
})
app.post('/login',(req,res)=>{
    if(req.body.email=='admin1@mail.com' && req.body.password=='admin123'){
         res.redirect('/admin/home');
    }else{
        res.send('Invalid Username or Password')
    }
})
app.post('/move',(req,res)=>{
    let from = req.body.from
    let id = req.body.id 
    let to = req.body.to
    let item = []
    function insert(val,item,id) {
        item.forEach(item => {
            val.push(item)
        });
    }

    if (to =="home"){
        db = Item
    }else if (to == "allow"){
        db = allowItem
    }else if(to == "deny"){
        db = denyItem
    }

    if ( from == "home" ){
        if ( to != "delete"){
            Item.findOne({_id: id},(err,item)=>{
                db.insertMany([item],(err)=>{
                    if(err)
                        console.log(err.message);
                })
            })
        }
        Item.findByIdAndDelete(id,(err)=>{
            if(err)
                console.log("Something went wrong while deleting data")
        })
        res.redirect('/admin/home')
    }else if (from == "allow"){
        if ( to != "delete"){
            allowItem.findOne({_id: id},(err,item)=>{
                db.insertMany([item],(err)=>{
                    if(err)
                        console.log(err.message);
                })
            })
        }
        allowItem.findByIdAndDelete(id,(err)=>{
            if(err)
                console.log("Something went wrong while deleting data")
        })
        res.redirect('/admin/allow')
    }else if (from =="deny"){
        if ( to != "delete"){
            denyItem.findOne({_id: id},(err,item)=>{
                db.insertMany([item],(err)=>{
                    if(err)
                        console.log(err.message);
                })
            })
        }
        denyItem.findByIdAndDelete(id,(err)=>{
            if(err)
                console.log("Something went wrong while deleting data")
        })
        res.redirect('/admin/deny');
    }else{
        res.send("Something went wrong please try again or contact developer");
    }
    
})

app.listen(port,(err)=>{
    if(err)
        console.log("Something went wrong while listening the port");
    else
        console.log("Server started at http://localhost:"+port);
});