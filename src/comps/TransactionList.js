import React, { useContext } from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
	const { transactions, deleteTransactions } = useContext(GlobalContext)

	return (
        <>
            <h3>History</h3>
            <ul id='list' className='list'>
                {transactions.length > 0 &&
                    transactions.map((entry) => (
                        <Transaction key={entry.id} transaction={entry} />
                    ))}
            </ul>
        </>
    )
}

export default TransactionList
