require('dotenv').config()
require('./Database/db')
const cors =require('cors')

const express = require('express')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require("./routes/user")
const profileRoutes = require("./routes/profile")
const { urlencoded, json } = require('express')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(urlencoded());
app.use(json());
app.use(cors({origin: true, credentials: true}));

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})



// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)
app.use('/api/profile', profileRoutes)

app.listen(8000, () => {
  console.log("Connected to server")
})
