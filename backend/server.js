require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Guestbook = require('./models/Guestbook');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS for both production and local development environments
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("MongoDB Connection Error: ", err));

// Base route to verify if the backend server is successfully deployed and live
app.get('/', (req, res) => {
  res.send("Artist Portfolio Backend is Running Live!");
});

// GET: Fetch all entries
app.get('/api/guestbook', async (req, res) => {
  try {
    const entries = await Guestbook.find().sort({ date: -1 });
    res.status(200).json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Add a new entry
app.post('/api/guestbook', async (req, res) => {
  try {
    const { name, message } = req.body;
    const newEntry = new Guestbook({ name, message });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Save contact form data
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Contact saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Only bind the port when running locally. Vercel handles the routing in production automatically.
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running locally on port ${PORT}`);
  });
}

// Export the application instance for Vercel's serverless environment
module.exports = app;