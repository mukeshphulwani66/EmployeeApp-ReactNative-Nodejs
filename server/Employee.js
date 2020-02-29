const mongoose = require('mongoose')

const EmpoyeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    picture:String,
    salary:String,
    position:String
})


mongoose.model("employee",EmpoyeeSchema)