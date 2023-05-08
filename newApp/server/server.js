const express = require('express')
const { exec } = require("child_process");
const app = express()
var cors = require('cors')

app.use(cors())

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/lof',cors(corsOptions),(req,
    res)=>{
    let ret=""
    exec("cd data && ls", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log("ishaq",stdout)
        ret=stdout
        ret=ret.split('\n')
        ret.splice(ret.length-1,1)
        res.json(ret)
    });
})

app.get('/device/:id',(req,res)=>{
    exec(`cd data/${req.params.id} && cat distance.txt && echo "" && cat humidity.txt && echo "" && cat temperature.txt && echo ""`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log("ishaq",stdout)
        ret=stdout
        ret=ret.split('\n')
        ret.splice(ret.length-1,1)
        
        retdata={
            "distance":ret[0],
            "humidity":ret[1],
            "temperature":ret[2]
        }
        res.json(retdata)
    });
})

app.listen(5002,()=>{console.log('server start port 5002')})
app.use(cors())