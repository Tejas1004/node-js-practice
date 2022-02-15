const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    phone:{type:String,min:10,max:10,required:true,unique:true},
    email:{type:String,required:true,unique:true}
})
const Student = new mongoose.model('Student',studentSchema);

module.exports=Student;