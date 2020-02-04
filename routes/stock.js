const Stock = require('../models/stocks');
const express = require('express');
const router = express.Router();

//get stock
router.get('/', (req, res) => {
  Stock.find()
    .then(stocks => res.send(stocks))
    .catch(err => console.log(err));
});

//delete stock
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Stock.findOneAndDelete({ _id: id })
    .then(stocks => res.send(stocks))
    .catch(err => console.log(err));
});
// update stock
router.put('/:id', (req, res) => {
  console.log('TCL: req.params.id', req.params.id);
  const { stockInitial , stockMinimum, stockSecurite } = req.body;
  Stock.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { stockInitial , stockMinimum, stockSecurite } }
  )
    .then(stocks => res.send(stocks))
    .catch(err => console.log(err));
});
// add stock
router.post('/', (req, res) => {
  const { stockInitial , stockMinimum, stockSecurite } = req.body;
  const newstock = new Stock({
     stockInitial ,
      stockMinimum, 
      stockSecurite 
  });
  newstock
    .save()
    .then(stocks => res.send(stocks))
    .catch(err => console.log(err));
});
module.exports = router;
