//declare "express" framework
const express = require('express')

//declare server instance (app)
const app = express()

//declare server port
//set port for local
//const port = 3000        //default
//set port for cloud
const port = process.env.PORT || 3001

//declare "mongoose" library: to connect to MongoDB
const mongoose = require('mongoose')
//declare database connection string (URI) + database name
const database_local = "mongodb://localhost:27017/vocab-builder"     //vocab-builder: database name
const database_cloud = "mongodb+srv://25thnovvv:_25_Nov_04@vuxphamj.t3zwk.mongodb.net/vocab-builder"     //vocab-builder: database name
//connect to database
mongoose.connect(database_cloud)
   .then(() => console.log('connect to db succeed !'))
.catch((err) => console.error('connect to db failed !' + err))

//declare "body-parser" library/package/module: to take input's value
const bodyParser = require('body-parser')
//config "body-parser"
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//declare "cors" library: to share API with "client" (front-end)
const cors = require('cors')
//enable cors : VERY IMPORTANT
app.use(cors())

//declare router (route)
const vocabRouter = require ('./routes/vocabRouter')
//register router: VERY IMPORTANT
vocabRouter(app)

app.get('/', (req, res) => {
   res.send("<h1>This is homepage of backend side</h1>")
})

//run server: listen to port
app.listen(port, () => {
   console.log('Backend server is running at http://localhost:' + port)
})