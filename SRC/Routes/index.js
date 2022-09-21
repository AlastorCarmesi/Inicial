const express = require('express');
const router = express.Router();
const model = require('../model/Values')();
const Valor = require('../model/Values');
 

router.get('/', (req, res) =>{
res.render('index')
});

router.post('/add', async (req, res) => {
    const Val = new Valor(req.body);
    await Val.save();
    res.redirect('/');
});

module.exports = router;