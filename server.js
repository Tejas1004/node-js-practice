const express = require('express')
const app = express();
require("./src/conn");
const Student = require('./src/students');
const port = process.env.PORT || 3000;
app.use(express.json())
app.post('/home',(req,res)=>{
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(()=>{
        res.send(200)(user);
    }).catch((err)=>{
        res.send(401)(err);
    })
    res.send(req.body);
})
app.listen(port,()=>{
    console.log(`SUccess at ${port}`);
})