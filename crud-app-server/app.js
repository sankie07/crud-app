const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const app = express();

app.use(bodyparser.json());
app.use(cors())
app.use('/api',createCrudRoute)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Port is running on -http:\\localhost:${port}`);
});
