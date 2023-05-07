const express = require('express')
const app = express()

app.get('/api',(req,res)=>{
    res.json({'users':['userOne',"userTwo"]})
})

app.listen(5002,()=>{console.log('server start')})