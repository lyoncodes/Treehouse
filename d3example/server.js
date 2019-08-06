'use strict'

// Application Dependencies
const express = require('express');

// HTTP Server
const app = express()

// PORT 
const PORT = 3000;

// View Engine
app.use(express.static(__dirname + '/public'))

// Routes
app.get('/', home)


//GET Functions
function home (req, res) {
  res.render('index.html')
}

// Listen
app.listen(PORT, () => {
 console.log(`Listening on PORT: ${PORT}`)
})