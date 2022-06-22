const mongoose = require('mongoose')



//@desc     get all blogs
//route     api/blogs
//method    GET
const getController = (req,res) => {
    res.status(200)
    res.render('index')
}

//@desc     create a blog
//route     api/blog/create
//method    POST
const postController = (req,res) => {
    res.status(200)
    res.json({message: 'post route is functional'})
}
module.exports = {getController, postController,}