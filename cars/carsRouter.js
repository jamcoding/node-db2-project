const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(car => {
            res.json(car);
        })
        .catch(error => {
            res.status(500).json({ message: 'there was an error retrieving the cars' });
        })
})

router.post('/', (req, res) => {
    db('cars').insert(req.body)
        .then(car => {
            res.status(200).json(car);
        })
        .catch(error => {
            res.status(500).json({ message: "couldn't add a new car" })
        })
})

module.exports = router;