const express = require("express");
const app = express();
const connectTomongoDB=require("./db");


connectTomongoDB();

// code to make requests to our backend through frontend
// comment the code to see what happens when you make requests through your frontend
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port=5000;

app.use("/api",require("./Routes/createUser"));
app.use("/api",require("./Routes/displayData"));


app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})