const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require("../middleware/errorHandler");
const connectDB = require('../config/dbConnection')
const app = express();
const cors = require('cors');
exports.app = app;
const server = require('http').createServer(app);
exports.server = server;




// Enable CORS  >>>>>>>>>>>>>>>>>>>>
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE', 'PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


//

// Established database connection
connectDB()

// Define Port from .env file or custom port
const port = process.env.PORT || 3001;
app.use(express.json());

// routes

// default get route for all show not found page 

app.get('/', (req, res) => {
  res.send('Hello World!');
}),



// Error handler
app.use(errorHandler);


// Start the server
server.listen(port, () => {
  console.log(`✅✅✅✅✅✅✅✅✅ Server listening on port ${port} ✅✅✅✅✅✅✅✅✅✅✅`);
});
