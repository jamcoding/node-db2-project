const express = require('express');

const db = require('../data/db-config.js');

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

router.get('/:id', (req, res) => {
    const { id } = req.params;

    db('cars').where({ id })
        .then(car => {
            res.status(200).json(car)
        })
        .catch(error => {
            res.status(500).json({ message: "this car with this ID doesn't exist" })
        })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db('cars').where({ id }).update(changes)
        .then(carUpdate => {
            if (carUpdate) {
                res.status(200).json(carUpdate)
            } else {
                res.status(404).json({ message: "this car couldn't be found "})
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'error updating the car info' })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db('cars').where({ id }).del()
        .then(count => {
            if (count > 0) {
                res.status(200).json({ message: 'this car has been deleted' })
            } else {
                res.status(404).json({ message: 'this car cannot be found '})
            }
        })
        .catch(error => {
            res.status(500).json({ message: "this car with this ID doesn't exist" })
        }) 
})

module.exports = router;