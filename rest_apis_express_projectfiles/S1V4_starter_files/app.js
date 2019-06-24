const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);


// Send a GET request to /quotes READ(view) a list of quotes
// Send a GET request to /quotes/quotes/random to READ(view) a random quote

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
})

app.use((err, req, res, next) => {
    res.status(err.status || (500));
    res.json({
     error: {
       message: err.message
     }
    })
})

app.listen(3000, () => console.log('Quote API listening on port 3000!'));
