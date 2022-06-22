const express = require('express')
const router = express.Router('')
const {getController,postController,} = require('../controllers/blogController')

router.get('/', getController)

// router.use((req,res) => {
//     res.status(404).send('File not found')
// })
module.exports = router