import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"
import numberFormat from '../utils/numberFormat'

const IncomeExpense = () => {
	const {transactions} = useContext(GlobalContext)

	const expensesTotal = transactions
        .filter((transaction) => transaction.amount < 0)
        .map((transaction) => transaction.amount)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
	
	const incomeTotal = transactions
        .filter((transaction) => transaction.amount >= 0)
        .map((transaction) => transaction.amount)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

	return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p id='money-plus' className='money plus'>
                    ₱{numberFormat(incomeTotal)}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id='money-minus' className='money minus'>
                    ₱{numberFormat(Math.abs(expensesTotal))}
                </p>
            </div>
        </div>
    );
}

export default IncomeExpense
