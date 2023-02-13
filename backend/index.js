const express = require('express')
const app = express()
const mongoDB = require("./db");
mongoDB();
require('dotenv').config()
const port = process.env.port||8000;


//this is need to write in order to connect to frontend
// These headers are used to control the CORS policy of the server, allowing or denying requests from different origins. In this case, the "Access-Control-Allow-Origin" header is set to "http://localhost:3000", allowing requests from that origin to access the server's resources. The "Access-Control-Allow-Headers" header lists the allowed headers in the request. Finally, the "next()" function is called to pass control to the next middleware function in the chain.

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.get("/",(req,res)=>{
    res.send("response");
})
app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use('/api',require('./Router/CreateUser'));
app.use('/api',require('./Router/DisplayData'));
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})