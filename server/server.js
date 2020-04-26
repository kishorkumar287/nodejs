const express = require("express");
const app = express();

console.log(typeof express);
console.log(typeof app);


app.get("/",(req,res)=>{
    res.json("hello this is kishor...........");


}
);


app.listen(3100, () => {
    console.log("API server started in port 3100!");

});