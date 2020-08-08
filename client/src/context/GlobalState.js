import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

// Initial state
const initialState = {
	transactions: [],
	error: null,
	loading: true,
}

export const GlobalContext = createContext(initialState)

// Provider Component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)

	// Actions
	async function getTransactions(){
		try {
			const res = await axios.get('/api/v1/transactions')
			dispatch({
				type: "GET_TRANSACTIONS",
				payload: res.data.data,
				loading: false
			})

		} catch (error) {
			dispatch({
				type: "TRANSACTION_ERROR",
				payload: error
			})
		}
	}

	async function addTransaction(data) {
        try {
			const config = {
                header: {
                    "Content-Type": "application/json",
                },
            }
            const res = await axios.post("/api/v1/transactions", data, config)
			dispatch({ type: "ADD_TRANSACTION", payload: res.data.data })
			
        } catch (error) {
			dispatch({
                type: "TRANSACTION_ERROR",
                payload: error,
            });
		}
	}
	
	async function deleteTransaction(id) {
		try {
			await axios.delete(`/api/v1/transactions/${id}`)
			dispatch({ type: "DELETE_TRANSACTION", payload: id })
		} catch (error) {
			dispatch({
                type: "TRANSACTION_ERROR",
                payload: error,
            });
		}
	}

	

	return (
        <GlobalContext.Provider
            value={{
				transactions: state.transactions,
				error: state.error,
				loading: state.loading,
                addTransaction,
                getTransactions,
                deleteTransaction,
            }}>
            {children}
        </GlobalContext.Provider>
    );
}