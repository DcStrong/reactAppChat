const router = require("express").Router();

router.get('/chat', (req, res) => {
  res.send('server is running');
});

module.exports = router;