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

router.get('/del/:id', async(res, req) => {
    const id = req.params;
    await Val.findByIdAndRemove(id);
    res.redirect('/');
});

router.get('/ver', async (req, res)=>{
    const Val = await Valor.find();
    console.log(Val);
    res.status(200).json({reg: Val})
});

module.exports = router;

