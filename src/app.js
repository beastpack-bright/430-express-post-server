const express = require('express');

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const path = require('path');

const filePath404Page = path.resolve(__dirname, '../client/404.html');
const app = express();

// import routes (put this near top)
// ...
const quotesRouter = require('./routes/quotes.js');
const cryRouter = require('./routes/complain.js');
const apiRouter = require('./routes/api.js');
// use routes (put this near the bottom, BEFORE app.listen()
// ...
// put this AFTER we instantiate `app`, and BEFORE our GET and POST routes
app.use(express.static('client'));
// put this right after the other `app.use()` call
app.use(express.json());

// import routes (put this near top)
const indexRouter = require('./routes/index.js');

// use routes (put this near the bottom, BEFORE app.listen()
app.use('/', indexRouter);

/*
.
// .all refers to ALL http methods - GET, POST, DELETE etc
// note .status(404) and method chaining
// .status(404) is how we send the 404 - File Not Found status code
app.all('*', (req, res) => {
    res.status(404).sendFile(filePath404Page);
  });
  */

app.use('/quotes', quotesRouter);
app.use('/complain', cryRouter);
app.use('/api', apiRouter);

// this is the LAST route, right before app.listen()
app.use((req, res) => {
  res.status(404).sendFile(filePath404Page);
});

// app.listen(...)

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
