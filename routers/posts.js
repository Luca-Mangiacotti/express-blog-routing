const express = require('express')
const router = express.Router();

// index
router.get('/', function(req, res) {
    res.send(`Lista dei post`)
   })
// show
router.get('/:id', function(req, res) {
    res.send(`dettagli post${req.params.id}`)
   })
// store
router.post('/', function(req, res) {
    res.send('Creazione nuovo post')
   })
// update
router.put('/:id', function (req, res) {
    res.send(`modifica integrale del post${req.params.id}`);
   });
// modify
router.patch('/:id', function (req, res) {
    res.send(`modifica parziale del post${req.params.id}`);
   });
// destroy
router.delete('/:id', function (req, res) {
    res.send(`Eliminazione post${req.params.id}`);
   });
  
module.exports = router