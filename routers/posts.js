const express = require('express')
const router = express.Router();
const blogPosts = require('../data/post')

// index
router.get('/', function(req, res) {
    res.json(blogPosts)
   })
// show
router.get('/:id', function(req, res) {
    const currentPost = blogPosts.find((elm) => elm.id == req.params.id )
    res.json(currentPost)
   })
// store
router.post('/', function(req, res) {
    res.send('Creazione nuovo post')
   })
// update
router.put('/:id', function (req, res) {
    res.send(`modifica integrale del post ${req.params.id}`);
   });
// modify
router.patch('/:id', function (req, res) {
    res.send(`modifica parziale del post ${req.params.id}`);
   });
// destroy
router.delete('/:id', function (req, res) {
    res.send(`Eliminazione post ${req.params.id}`);
   });
  
module.exports = router