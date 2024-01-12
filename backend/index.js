// const express =require("express");
// const mongoose=require("mongoose");
// const EmployeeModel=require("./models/employee")
// const cors=require("cors");
// const app=express();
// app.use(express.json());
// app.use(cors());
// mongoose.connect("mongodb://localhost:27017/Employee");
// app.post("/register",(req,res)=>{
//   EmployeeModel.create(req.body)
//   .then(employees=>res.json(employees))
//   .catch(err=>res.json(err))
// })
// app.listen(3001,()=>{
//     console.log("Server is running");
// })

const express = require("express");
const mongoose = require("mongoose");
const EmployeeModel = require("./models/employee");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Employee");
app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password==password){
                res.json("Success");
            }else{
                res.json("The password is incorrect")
            }
        }else{
            re.json("No record existed")
        }
    })

})
  


app.post("/register", async (req, res) => {
  try {
    // Explicitly extract the required fields from the request body
    const { name, email, password } = req.body;

    // Validate the data
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields." });
    }

    // Create a new employee with sanitized data
    const newEmployee = new EmployeeModel({
      name: name.trim(),
      email: email.trim(),
      password: password.trim(), // You may want to hash the password here
    });

    // Save the new employee to the database
    const savedEmployee = await newEmployee.save();

    res
      .status(201)
      .json({
        message: "Employee created successfully",
        employee: savedEmployee,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
