const express = require('express');

const router = express.Router();

router.get('/cry', (req, res) => {
  res.send('WA');
});

router.get('/whine', (req, res) => {
  res.send('i want a hundred percent on my javascript homework!!!');
});

module.exports = router;
