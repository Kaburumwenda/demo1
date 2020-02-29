const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('successfully rendered on Heroku')
})

const port = process.env.PORT || 4000;
app.listen(port,()=>console.log('server up'))