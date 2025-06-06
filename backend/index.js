const connectToMongo = require('./db');
const connectDB = require('./db');
connectToMongo(); 
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors') // Import the CORS middleware
app.use(cors()) // Use the CORS middleware
app.use(express.json()) // Middleware to parse JSON bodies


app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(` inotebook Backend app listening on port at http://localhost:${port}`)
})
