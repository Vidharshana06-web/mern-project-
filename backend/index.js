// index.js
const express = require("express");
const cors = require("cors");

const { MongoClient, ServerApiVersion,ObjectId } = require("mongodb");

const bcrypt = require('bcryptjs');


const app = express();
const port = 6005;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Running test server");
});

// MongoDB setup
const uri = "mongodb+srv://vidharshanadevaraj06:seIHYCxpk3SkELdy@cluster0.fjgblu6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
});

async function run() {
  try {
    await client.connect();
    const db = client.db("test");
    const usersCollection = db.collection("products");

   
    
  app.post("/reg", async (req, res) => {
  try {
    const { text, email, pass, mobile, gender } = req.body;
    
    console.log("Request received:", { text, email,pass, mobile,gender });

    if (!text || !email || !pass || !mobile || !gender) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(pass, 10);

    const result = await usersCollection.insertOne({
      text,
      email,
      pass: hashedPassword,
      mobile,
      gender
    });

    res.status(201).json({ success: true, message: "User registered", userId: result.insertedId });

  } catch (error) {
    console.error("Error in /reg:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


 app.post("/login", async (req, res) => {
  try {
    const { email, pass } = req.body; // fixed here

    if (!email || !pass) {
      return res.status(400).json({ success: false, message: "Email and password required" });
    }

    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(pass, user.pass); // fixed here
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: { name: user.text, email: user.email, _id: user._id }
    });

  } catch (error) {
    console.error("Error in /login:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});


app.put("/forgot-password", async (req, res) => {
  const { email, newpass } = req.body;

  if (!email || !newpass) {
    return res.status(400).json({ message: "Email and new password are required." });
  }

  const user = await usersCollection.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found." });

  const hashedPassword = await bcrypt.hash(newpass, 10); // Use 10 salt rounds
  await usersCollection.updateOne(
    { email },
    { $set: { pass: hashedPassword } } // <- correct field name
  );

  res.json({ message: "Password reset successful" });
});



    console.log("Connected to MongoDB");
  } finally {
    // do not close client to keep server responsive
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);

});












