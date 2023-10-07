const express = require ("express");
const app = express();

const userRoutes = require('./routes/user')

app.use('/user', userRoutes)

app.get('/user/:id', (req, res) => {
        console.log('console.log-->', req.params.id)
        console.log('console.log-->', req.query)
        res.send({ 
            status: 200,
            msg: "User id is " + req.params.id
        })
    })

const port = 3000;

app.get("/", (req, res) => {
    res.send({
        status : 200,
        msg : "API is working fine on nodemon"
    })
})

app.get('/about', (req, res) => {
    res.send({
        status : 200,
        msg : "About Route"
    })
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})
