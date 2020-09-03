const express = require('express');
const router = express.Router();
const Article = require('../models/Article');
const mongoose = require('mongoose');


router.get("/", (req, res) => {
    Article.find()
        .then(article => res.json(article))
            .catch(err => res.status(400).res.json(`Error: ${err}`))
});

router.get('/:id', (req, res) => {
    Article.findById(req.params.id).then((article) => {
        res.json(article);
    });
});
router.post('/add', (req, res) => {
    Article.create(req.body).then((article) => {
        res.json(article)
        res.status(200).end();
    });
});

router.put('/:id', (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.status(200).end();
    });
});

router.delete('/:id', (req, res) => {
    Article.findByIdAndDelete(req.params.id).then(() => {
        res.status(200).end();
    });
});


module.exports = router