const mongoose = require('mongoose');

// Define the structure for guestbook entries
const guestbookSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  message: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

// Export the model to use in server.js
module.exports = mongoose.model('Guestbook', guestbookSchema);