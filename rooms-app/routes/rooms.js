const router = require("express").Router();
const mongoose = require("mongoose");

router.get('/', (req, res)=>{
    res.render('rooms/rooms')
})
router.get('/create', (req, res)=>{
    res.render('rooms/create-room')
})
router.get('/edit/:id', (req, res)=>{
    res.render('rooms/edit-room')
})


module.exports = router;