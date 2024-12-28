// transcation.js
const express = require('express');
const router = express.Router();

const { authenticate } = require('../middleware/authMiddleware');

const { addTransaction, getTransactions } = require('../controllers/transcationController');

router.post('/add', authenticate, addTransaction);

// Get all transactions for a user
router.get('/get', getTransactions);

module.exports = router;
