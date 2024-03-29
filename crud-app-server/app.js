const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const app = express();

// Allow all origins to access the API endpoints
app.use(cors());

app.use(express.json());

const db = require('./db');

const createCrudRoute = require('./routes/create_crud');

app.use(bodyParser.json());
app.use('/api', createCrudRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Port is running on - http://localhost:${port}`);
});
