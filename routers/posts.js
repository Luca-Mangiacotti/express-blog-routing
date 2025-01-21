const express = require('express')
const router = express.Router();

// index
router.get('/', function(req, res) {
    res.send('Lista dei post')
   })
// show
router.get('/:id', function(req, res) {
    res.send(`dettagli post`)
   })
// store
router.post('/', function(req, res) {
    res.send('Creazione nuovo post')
   })
// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale del post ');
   });
// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale del post ');
   });
// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione del post');
   });
  
module.exports = router