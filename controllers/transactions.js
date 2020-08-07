const Transaction = require('../models/Transaction');

// @desc Add transaction
// @route POST /api/v1/transactions/
// @access Public
exports.addTransaction = async (req, res) => {
	try {	
		const { text, amount } = req.body;
        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction,
		});
		
	} catch (error) {
		if(error.name ==='ValidationError'){
			const messages = Object.values(error.errors).map(val=>val.message);
			res.status(400).json({
				success: false,
				error: messages
			});
		} else {
			console.error(error.message);
            res.status(500).json({
                sucess: false,
                error: `Server error: ${error.message}`,
            });
		}
	}
}				

// @desc Get all transactions
// @route GET /api/v1/transactions/
// @access Public
exports.getTransactions = async (req, res, next) => {
	try {
		const transactions = await Transaction.find();

		if(transactions.length > 0){
			return res.status(200).json({
                success: true,
                count: transactions.length,
                data: transactions,
            });
		} else {
			return res.status(404).json({
				success: false,
				message: "No transactions found"
			})
		}

    } catch (error) {
		console.error(error.message);
        res.status(500).json({
            sucess: false,
            message: `Server error: ${error.message}`,
        });
    }
}

// @desc Update transaction using ID
// @route PUT /api/v1/transactions/:id
// @access Public
exports.updateTransaction = async (req, res) => {
	try {
		let transaction = await Transaction.findById(req.params.id);
		
		if(!transaction){
			return res.status(404).json({
				success: false,
				message: 'Transaction not found'
			})
		}

		const { text, amount } = req.body;

		if (text) transaction.text = text;
		if (amount) transaction.amount = amount;
		await transaction.save();
		return res.status(200).json({
			success: true,
			message: "Transaction has been updated"
		})

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            sucess: false,
            message: `Server error: ${error.message}`,
        });
    }
}

// @desc Delete transaction using ID
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = async (req, res) => {
	try {
		const transaction = await Transaction.findById(req.params.id);

        if(!transaction){
			res.status(404).json({
				success: false,
				error: 'No transaction found'
			})
		}

		await transaction.remove();

		return res.status(201).json({
			sucess: true,
			data: {},
			message: 'Transaction has been removed'
		})

    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            sucess: false,
            message: `Server error: ${error.message}`,
        });
    }
}