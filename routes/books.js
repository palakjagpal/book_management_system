const express = require('express')
const router =  express.Router()
const bodyParser = require('body-parser')

const path = require('path')

const rootDir = require('../util/path')

//Upon clicking Books
router.get('/',(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","books.html"))
})

//Upon clicking add Books
router.get('/addBooks',(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","addBooks.html"))
})

//After submission
router.post('/addBooks',(req,res,next) => {
    console.log("Book Name : ", req.body.bookName)
    console.log("Author  : ", req.body.author)
    console.log("Genre : ", req.body.genre)
    console.log("Publication Year : ", req.body.year)
    res.redirect('/books')
})

module.exports = router