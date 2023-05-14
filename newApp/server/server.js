const express = require('express')
const { exec } = require("child_process");
const app = express()

app.get('/lof',(req,res)=>{
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


app.get('/addDevice',(req,res)=>{
    exec(`cd data/ && ls`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        ret=stdout
        ret=ret.split('\n')
        ret.splice(ret.length-1,1)
        addnum=ret[ret.length-1].split('-')
        addnum=addnum[addnum.length-1]
        addnum=parseInt(addnum)+1
        
        exec(`mkdir -p data/device-${addnum} && cd data/device-${addnum} && touch distance.txt && chmod 777 distance.txt && touch humidity.txt && chmod 777 humidity.txt && touch temperature.txt && chmod 777 temperature.txt`)
        
        res.json("Done")
    });
})

app.listen(5002,()=>{console.log('server start port 5002')})