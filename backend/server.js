// const express = require('express');
// const { MongoClient } = require('mongodb');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = 5001; 

// app.use(cors());
// app.use(express.json());

// // MongoDB Connection
// const uri = process.env.MONGO_URI; 
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function connectDB() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB!");
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//   }
// }
// connectDB();


// app.get('/api/messages', async (req, res) => {
//   try {
//     const database = client.db('EmailStore'); 
//     const collection = database.collection('Emails'); 

//     const messages = await collection.find({}).toArray();
//     res.json(messages);
//   } catch (err) {
//     res.status(500).send("Error fetching messages");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5001; 

app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}
connectDB();

// GET endpoint to fetch messages
app.get('/api/messages', async (req, res) => {
  try {
    const database = client.db('EmailStore'); 
    const collection = database.collection('Emails'); 

    const messages = await collection.find({}).toArray();
    res.json(messages);
  } catch (err) {
    res.status(500).send("Error fetching messages");
  }
});

// POST endpoint to add emails
app.post('/api/messages', async (req, res) => {
  try {
    const database = client.db('EmailStore'); 
    const collection = database.collection('Emails'); 

    const result = await collection.insertMany(req.body);
    res.status(200).json({ message: `${result.insertedCount} emails added successfully` });
  } catch (err) {
    res.status(500).send("Error adding emails to database");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});