const abc = require('express');
const router = abc.Router();

const users = [
    {
        name : 'Abdul',
        id : 1
    },
    {
        name : 'Sam',
        id : 2
    },
    {
        name : 'Sameer',
        id : 3
    }
]

// All Users Get
router.get('/', (req, res)=>{
    res.status(200).send({
        status : 200,
        users : users
    })
})

// Single User Get
router.get('/:id', (req, res)=>{
    const user = users.find((data) => data.id == req.params.id)
    if(!user){
        res.status(500).send({
            status : 500,
            error : true,
            user : 'User not found'
        })
    }
    if(user){
    res.status(200).send({
        status : 200,
        user : user
    })
}
})

//Post Method
router.post('/', (req, res) => {
    console.log(req.body)
    users.push({name: req.body.name, id: users.length + 1})
    res.status(200).send({status: 200, user: {name: req.body.name, id: users.length + 1}})
})

module.exports = router