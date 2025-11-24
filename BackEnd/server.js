const express = require('express');
const app = express()
const port = 8080;

app.get('/',(req , res)=>{
    res.send(`<h1>hi this is my first server</h1>`);
});

app.get('/about',(req , res)=>{
    res.send(`hi this is my first About`);
});

app.get('/contact',(req , res)=>{
    res.send(`hi this is My Contact`);
});

app.listen(port, ()=>{
    console.log(`Server is running at 8080: http://localhost:${port}`);
})
