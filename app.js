const express = require('express');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use('/add-product',(req,res,next)=>{
    res.send('<form action = "/product" method="POST"><lable>Add products</label><input type="text" name="title" ><input type="text" name="qunatity"><button type="submit">Add</button></form>')
})

app.post('/product',(req,res,next)=>{
    const normalObject = Object.assign({}, req.body)
    console.log(normalObject);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send('This is an express js framework');
})

app.listen(3000);