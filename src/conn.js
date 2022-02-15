const mongoose = require("mongoose");

const dburl='mongodb+srv://employ:employ@proj2.fzzyq.mongodb.net/Student-api';
mongoose.connect(dburl)
.then(()=>{
    console.log('connected');
}).catch((err)=>{
    console.log("Not Connected");
})
