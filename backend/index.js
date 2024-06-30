
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const tasksRouter = require('./routes/tasks');


const app = express();

// task-management-five-mu.vercel.app

// app.use(cors(
//   {
//   origin: ["https://task-management-frontend-orpin.vercel.app"],
//   methods:
//   ["POST", "GET"],
//   credentials: true
//   }
//   ));
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});


app.use('/api/tasks', tasksRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 