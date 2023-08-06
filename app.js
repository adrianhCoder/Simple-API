const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON data
app.use(bodyParser.json());

// Define the endpoint for addition
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;

  if (num1 === undefined || num2 === undefined) {
    return res.status(400).json({ error: 'Both numbers are required.' });
  }

  // Check if the provided values are valid numbers
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Both inputs must be valid numbers.' });
  }

  const sum = num1 + num2;
  res.json({ result: sum });
});
 
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
