const mongoose = require('mongoose');
const TranscactionSchema = new mongoose.Schema({
	text: {type: String, trim: true, required: [true, 'Please add some text']},
	amount: {type: Number, required: [true, 'Please add a positive or negative number']},
	createdAt: {type: Date, default: Default.now}
});

module.exports = Transaction = mongoose.model('Transaction', TranscactionSchema);