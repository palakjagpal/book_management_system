const express = require('express')
const bodyParser =  require('body-parser')
const path = require('path')

const app = express()

const PORT = 3000

const bookRoutes = require('./routes/books')
const userRoutes = require('./routes/users')

const rootDir = require('./util/path')

app.use(bodyParser.urlencoded({extended : false}))

//making style.css available to all routes and easily accessible to anyone on browser
app.use(express.static(path.join(__dirname,"public")))

app.use('/books',bookRoutes)
app.use('/users',userRoutes)

//home pages
app.get('/',(req,res,next) => {
    res.sendFile(path.join(rootDir,"views","home.html"))
})

//404 page
app.use((req,res,next) => {
    res.sendFile(path.join(rootDir,"views","404.html"))
})

app.listen(PORT || 5000 , () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})

