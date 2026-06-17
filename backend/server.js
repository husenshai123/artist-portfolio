require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Guestbook = require('./models/Guestbook');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("MongoDB Connection Error: ", err));

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});