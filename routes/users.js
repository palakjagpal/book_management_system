const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const router = express.Router()

const rootDir = require('../util/path')

//Upon clicking Users
router.get('/',(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","users.html"))
})

router.get('/addUsers',(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","addUsers.html"))
})

router.post('/addUsers',(req,res,next) => {
    console.log("User Name : ", req.body.username)
    console.log("Age : ", req.body.age)
    res.redirect('/users')
})

module.exports = router