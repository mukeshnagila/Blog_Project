const express = require("express");
const app = express();
const PORT = 2003;
const cors = require("cors");
const routingCategory = require("./Routing/routingCategory");


app.use(cors());
app.use("/api" , routingCategory);

app.use(cors({
    origin: "*"
}))

app.get("/", (req,res) => {
    console.log("This Is Home Page");
    res.send("API is running fine");
})

app.listen(PORT, () => {
    try{
        console.log(`Server start from PORT No- ${PORT}`);
    }
    catch(err){
        console.log(`Error in starting server, ${err}`);
    }
})

