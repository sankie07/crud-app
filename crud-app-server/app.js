const express = require("express");
const cors = require("cors");
const app = express();

// Allow requests from a specific origin
const corsOptions = {
  origin: "https://crud-app-pink-sigma.vercel.app",
  methods: ["GET", "POST"], // Adjust the allowed HTTP methods as needed
  credentials: true, // Enable credentials (cookies, authorization headers) if required
};

// Use the CORS middleware with the specified options
app.use(cors(corsOptions));

// Your route handlers and other middleware

// Example route
app.post("/addcrud", (req, res) => {
  // Handle the POST request
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
