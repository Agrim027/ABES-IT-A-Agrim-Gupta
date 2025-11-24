const express = require('express');
const app = express()
const port = 8080;

app.get('/',(req , res)=>{
    res.send(`<h1>hi this is my first server</h1>`);
});

app.get('/about',(req , res)=>{
    const students = [
        {
            id:1,
            name:"Agrim",
            class:"IT-A",
        },
        {
            id:2,
            name:"Agraj",
            class:"IT-A",
        },
        {
            id:3,
            name:"Umang",
            class:"IT-A",
        },
        {
            id:4,
            name:"Agrim",
            class:"IT-A",
        },
        {
            id:5,
            name:"Agrim",
            class:"IT-A",
        }
    ];
    // res.json(students);
    res.send(students);
});

app.get('/contact',(req , res)=>{
    res.send(`hi this is My Contact`);
});







app.listen(port, ()=>{
    console.log(`Server is running at 8080: http://localhost:${port}`);
})
