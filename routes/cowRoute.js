const express = require('express');
const router = express.Router();
const { checkCowOrGoat } = require('../controllers/farmController');

// Route to render the main form page
router.get('/', (req, res) => {
    res.render('index');
});

// Route to check cow or goat by ID
router.post('/check-id', checkCowOrGoat);

// Route to render cow view
router.get('/cow', (req, res) => {
    res.render('cow', { /* data */ });
});

// Route to render goat view
router.get('/goat', (req, res) => {
    res.render('goat', { /* data */ });
});

module.exports = router;
