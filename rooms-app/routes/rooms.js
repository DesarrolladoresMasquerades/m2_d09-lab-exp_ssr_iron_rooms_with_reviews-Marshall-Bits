const router = require("express").Router();
const mongoose = require("mongoose");

const Room = require("../models/Room.model");


router.get('/', (req, res) => {
    Room.find().
        then((roomsInDB) => {
            res.render('rooms/rooms',{roomsInDB})
        })
})

router.get('/create', (req, res) => {
    if(!req.session.user){
        res.redirect('/rooms/')
    }   
    else res.render('rooms/create-room')
})
router.post('/create', (req, res) => {
    const ownerId = req.session.userId
    const name = req.body.name
    const description = req.body.description
    const imageUrl = req.body.imageUrl
    Room.create({ name, description, imageUrl, owner: ownerId })
        .then(
            res.redirect('/rooms')        
        )
})
router.get('/edit/:id', (req, res) => {
    const id = req.params.id
    res.render('rooms/edit-room')
})


module.exports = router;