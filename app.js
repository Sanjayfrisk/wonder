const express = require('express');
const bodypraser = require('body-praser');
const app = express();
app.use(bodypraser.json());
app.post('/api/register',(req,res)=>{
    const userdata = req.body;
    res.status(201).json({message: 'User registered successfully'});
});
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`);
});