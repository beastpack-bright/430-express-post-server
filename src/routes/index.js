const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.get('/bye', (req, res) => {
  res.send('Goodbye!');
});

router.get('/helloJSON', (req, res) => {
  res.json({
    message: 'Hello there!',
  });
});
router.get('/timeJSON', (req, res) => {
  res.json({
    content: new Date(),
  });
});
module.exports = router;
