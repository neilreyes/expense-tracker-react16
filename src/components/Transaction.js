import React from 'react'

const Transaction = ({transaction}) => {
	const { text, amount } = transaction; 
	const sign = transaction.amount < 0 ? '-' : '+';

	return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {text}{" "}
            <span>
                {sign}${Math.abs(amount)}
            </span>
            <button className='delete-btn'>x</button>
        </li>
    );
}


export default Transaction;