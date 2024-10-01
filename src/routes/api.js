const express = require('express');

const router = express.Router();

const generateNewId = () => crypto.randomUUID();

const hoots = [{
  id: generateNewId(),
  content: "Let's Rock!",
  createdAt: new Date(),
}];
router.post('/addHoot', (req, res) => {
  const content = req.body && req.body.content
    ? req.body.content
    : 'No req.body or req.body.content found';

  const hoot = {
    id: generateNewId(),
    content,
    createdAt: new Date(),
  };
  hoots.push(hoot);
  res.status(201).json(hoot);
});
router.get('/helloJSON', (req, res) => {
  res.json({
    message: 'Hello there!',
  });
});
router.get('/hoots', (req, res) => {
  res.json(hoots);
});
router.get('/timeJSON', (req, res) => {
  res.json({
    content: new Date(),
  });
});
module.exports = router;
