const express = require("express");
const mongoose = require("mongoose");

const app = express();



async function connectDB() {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/classes");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
}

connectDB();


const studentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
  classId: Number,
});

let Student = new mongoose.model("student", studentSchema);

let newUser1 = new Student({
  id: 1,
  name: "John Doe",
  age: 8,
  classId:1
}).save();

let newUser2 = new Student({
  id: 2,
  name: "Jane Smith",
  age: 8,
  classId:1
}).save();

let newUser3 = new Student({
  id: 3,
  name: "Alice Johnson",
  age: 12,
  classId:3
}).save();

let newUser4 = new Student({
  id: 4,
  name: "Bob Brown",
  age: 12,
  classId:3
}).save();

let newUser5 = new Student({
  id: 5,
  name: "Charlie Davis",
  age: 10,
  classId:2
}).save();

let newUser6 = new Student({
  id: 6,
  name: "Diana Evans",
  age: 10,
  classId:2
}).save();

let newUser7 = new Student({
  id: 7,
  name: "Eve Foster",
  age: 12,
  classId:3
}).save();

let newUser8 = new Student({
  id: 8,
  name: "Frank Green",
  age: 12,
  classId:3
}).save();

let newUser9 = new Student({
  id: 9,
  name: "Grace Harris",
  age: 13,
  classId:3
}).save();

let newUser10 = new Student({
  id: 10,
  name: "Henry Jackson",
  age: 13,
  classId:3
}).save();

// Product Schema and Model
const classSchema = new mongoose.Schema({
  id: Number,
  name: String,
});

let Class = new mongoose.model("class", classSchema);
let newClass1 = new Class({
  id: 1,
  name: "1 sec",
}).save();

let newClass2 = new Class({
  id: 2,
  name: "2 sec",
}).save();

let newClass3 = new Class({
  id: 3,
  name: "3 sec",
}).save();


// CRUD operations for Users
app.get("/student", async (req, res) => {
  let users = await Student.find();
  res.status(200);
  res.json(users);
});

app.get("/student/:id", async (req, res) => {
  const user = await Student.findOne({ id: req.params.id });
  if (!user) return res.status(404).json({ error: "Student not found" });
  res.status(200).json(user);
});

app.post("/student", async (req, res) => {
  let newuser = await Student({
    name: "Ahmed",
    age: 13,
    classId: 3,
  }).save();
  res.status(201);
  res.json("Student added successfully");
});

app.put("/student/:id", async (req, res) => {
  const updatedUser = await Student.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    {
      new: true,
    }
  );
  if (!updatedUser) return res.status(404).json({ error: "Student not found" });
  res.status(200).json(updatedUser);
});

app.delete("/student/:id", async (req, res) => {
  const deletedUser = await Student.findOneAndDelete({ id: req.params.id });
  if (!deletedUser) return res.status(404).json({ error: "Student not found" });
  res.status(200).json({ message: "Student deleted successfully" });
});

// CRUD operations for Products
app.get("/class", async (req, res) => {
  let products = await Class.find();
  res.status(200);
  res.json(products);
});

app.get("/class/:id", async (req, res) => {
  const product = await Class.findOne({ id: req.params.id });
  if (!product) return res.status(404).json({ error: "Class not found" });
  res.status(200).json(product);
});

app.post("/class", async (req, res) => {
  let newproduct = await Class({
    name: "3 sec-e",
  }).save();
  res.status(201);
  res.json("Class added successfully");
});

app.put("/class/:id", async (req, res) => {
 
    const updatedProduct = await Class.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedProduct)
      return res.status(404).json({ error: "Class not found" });
    res.status(200).json(updatedProduct);
 
});

app.delete("/class/:id", async (req, res) => {
 
    const deletedProduct = await Class.findOneAndDelete({
      id: req.params.id,
    });
    if (!deletedProduct)
      return res.status(404).json({ error: "Class not found" });
    res.status(200).json({ message: "Class deleted successfully" });

});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
