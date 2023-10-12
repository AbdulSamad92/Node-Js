const express = require('express')
const router = express.Router()
const UserModel = require('../Model/user')

// const users = [{
//     name: 'Abdul',
//     id: 1
// },
// {
//     name: 'Sameer',
//     id: 2
// },
// {
//     name: 'Noman',
//     id: 3
// },
// {
//     name: 'Sid',
//     id: 4
// },
// {
//     name: 'Areeb',
//     id: 5
// }
// ]

router.get('/', async (req, res) => {
    const users = await UserModel.find()
    res.status(200).send({
        status: 200,
        users
    })
})

router.get('/:id', async (req, res) => {
    const user = await users.find((data) => data.id == req.params.id)
    if (!user) {
        res.send({
            status: 500,
            error: true,
            msg: 'User not found'
        })
    }
    else {
        res.send({ status: 200, user })
    }
})

router.post('/', async (req, res) => {
    console.log(req.body)
    try{
    const user = await UserModel.create({...req.body})
    res.status(200).send({status: 200, user})
    }
    catch(err){
        res.status(500).send({status: 500, error: err, msg: "internal server error"})
    }
    // users.push({ name: req.body.name, id: users.length + 1 })
    // res.send('Post Update')
})



module.exports = router
