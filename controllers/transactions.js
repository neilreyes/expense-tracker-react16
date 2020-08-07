// @desc Add transaction
// @route POST /api/v1/transactions/
// @access Public
exports.addTransaction = (req, res) => {
	try {
		res.send("Add Transaction");
	} catch (error) {
		console.error(error.message);
		res.status(500).json({msg:'Server Error'})
	}
}

// @desc Get all transactions
// @route GET /api/v1/transactions/
// @access Public
exports.getTransactions = (req, res) => {
	try {
		res.send("Get Transactions");
    } catch (error) {
		console.error(error.message);
        res.status(500).json({ msg: "Server Error" });
    }
}

// @desc Update transaction using ID
// @route PUT /api/v1/transactions/:id
// @access Public
exports.updateTransaction = (req, res) => {
	try {
        res.send("Update transaction");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Server Error" });
    }
}

// @desc Delete transaction using ID
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = (req, res) => {
	
	try {
        res.send("Delete transaction");
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Server Error" });
    }
}