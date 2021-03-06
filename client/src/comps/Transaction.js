import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState'
import numberFormat from "../utils/numberFormat";

const Transaction = ({transaction: {_id, text, amount}}) => {
	const { deleteTransaction } = useContext(GlobalContext)

	const sign = Math.sign(amount) < 0 ? '-' : '+'

	return (
        <li className={Math.sign(amount) < 0 ? "minus" : "plus"}>
            {text}{" "}
            <span>
                {sign}₱{numberFormat(Math.abs(amount))}
            </span>
            <button
                className='delete-btn'
                onClick={(e) => deleteTransaction(_id)}>
                x
            </button>
        </li>
    );
}

Transaction.propTypes = {
	transaction: PropTypes.object.isRequired,
}

export default Transaction
