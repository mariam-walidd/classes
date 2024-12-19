const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json())


async function connectDB() {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/classes");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
}

connectDB();


const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  password: String,
  phone: String,
});

let User = new mongoose.model("User", userSchema);

let newUser1 = new User({
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  password: "password123",
  phone: "1234567890",
}).save();

let newUser2 = new User({
  id: 2,
  name: "Jane Smith",
  email: "jane.smith@example.com",
  password: "password123",
  phone: "0987654321",
}).save();

let newUser3 = new User({
  id: 3,
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  password: "password123",
  phone: "1112223333",
}).save();

let newUser4 = new User({
  id: 4,
  name: "Bob Brown",
  email: "bob.brown@example.com",
  password: "password123",
  phone: "4445556666",
}).save();

let newUser5 = new User({
  id: 5,
  name: "Charlie Davis",
  email: "charlie.davis@example.com",
  password: "password123",
  phone: "7778889999",
}).save();

let newUser6 = new User({
  id: 6,
  name: "Diana Evans",
  email: "diana.evans@example.com",
  password: "password123",
  phone: "0001112222",
}).save();

let newUser7 = new User({
  id: 7,
  name: "Eve Foster",
  email: "eve.foster@example.com",
  password: "password123",
  phone: "3334445555",
}).save();

let newUser8 = new User({
  id: 8,
  name: "Frank Green",
  email: "frank.green@example.com",
  password: "password123",
  phone: "6667778888",
}).save();

let newUser9 = new User({
  id: 9,
  name: "Grace Harris",
  email: "grace.harris@example.com",
  password: "password123",
  phone: "9990001111",
}).save();

let newUser10 = new User({
  id: 10,
  name: "Henry Jackson",
  email: "henry.jackson@example.com",
  password: "password123",
  phone: "2223334444",
}).save();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
