const express=require("express");
const app=express();
require("./db/conn");

const port=process.env.PORT || 3000;

app.get("/",(req,res) => {
    res.send("hello from the sourav")
});


app.listen(port, () => {
    console.log('sever is running at port numner ${port}');
})