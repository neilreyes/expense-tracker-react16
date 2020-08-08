export default (state, action) => {
	const {type, payload} = action

	switch (type) {
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [...state.transactions, payload],
            };

        case "GET_TRANSACTIONS":
            return {
                ...state,
				transactions: payload,
				loading: false
            };

        case "UPDATE_TRANSACTION":
            return {
                ...state,
                transactions: [...state.transactions, payload],
            };

        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction._id !== payload
                ),
            };

        case "TRANSACTION_ERROR":
            return {
                ...state,
                error: payload,
            };

        default:
            return state;
    }
}