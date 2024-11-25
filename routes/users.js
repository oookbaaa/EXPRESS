
 const express = require('express');    
 const router = express.Router();
 const User = require('../models/user');




    router.get('/show', (req, res) => {
    res.send('salut les gens');
    })
    router.get('/add/:username/:email/:cin', (req, res) => {
        
           user = new User({
            username: req.params.username,
            email: req.params.email,
            cin: req.params.cin
        });
        user.save().then(() => {
            res.send('user added');
            }).catch((err) => {
                res.send('error adding user');
            }
            );
        })
        
        router.post('/add', async (req, res) => {
            console.log(req.body);
            const user = new User(req.body);
            await user.save().then(() => {
                res.status(200).send('user added');
            }).catch((err) => {
                console.error(err);
                res.status(500).send('error adding user');
            });
        });
            
    

    module.exports = router;