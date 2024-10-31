const express = require('express')
const router = express.Router()

router.use('/', (req, res) => {
    res.send('Index Route!')
  }) 

module.exports = router;