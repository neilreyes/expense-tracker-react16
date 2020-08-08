import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"
import numberFormat from '../utils/numberFormat'

const Balance = () => {
	
	const { transactions } = useContext(GlobalContext)

	if(transactions === undefined ){
		return false
	}

	if(transactions.length === 0){
		return false
	}

	const balance = transactions
        .map((transaction) => transaction.amount)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
        

	const balanceSign = Math.sign(balance) < 0 && '-'

	return (
        <>
            <h4>Your Balance</h4>
            <h1 id='balance'>
                {balanceSign}₱{numberFormat(Math.abs(balance))}
            </h1>
        </>
    );
}

export default Balance
