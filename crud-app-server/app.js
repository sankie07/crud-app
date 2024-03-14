const express = require("express")
const bodyparser = require ("body-parser")
const cors= require ("cors")
require ('dotenv/config')

const db=require('./db')

const createCrudRoute = require('./routes/create_crud')

const app = express();

app.use(bodyparser.json());
app.use(cors())
app.use('/api',createCrudRoute)

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Port is running on -http:\\localhost:${port}`);
})