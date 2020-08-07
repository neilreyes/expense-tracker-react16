const express = require('express');
const router = express.Router();
const {
	addTransaction,
	getTransactions,
	updateTransaction,
	deleteTransaction,
} = require('../controllers/transactions');

// @desc Add transaction
// @route POST /api/v1/transactions/
// @access Public
router.post('/', addTransaction);

// @desc Get all transactions
// @route GET /api/v1/transactions/
// @access Public
router.get("/", getTransactions);

// @desc Update transaction using ID
// @route PUT /api/v1/transactions/:id
// @access Public
router.put("/:id", updateTransaction);

// @desc Delete transaction using ID
// @route DELETE /api/v1/transactions/:id
// @access Public
router.delete("/:id", deleteTransaction);

module.exports = router;