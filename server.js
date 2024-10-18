

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Initialize dotenv to read from the .env file
dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse incoming JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('Hello from the Task Management Tool API!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const taskRoutes = require('./routes/taskRoutes');
app.use('/api', taskRoutes);
