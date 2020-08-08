import React, { useState, useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

const TransactionForm = () => {

	const { addTransaction } = useContext(GlobalContext)

	const [formData, setFormData] = useState({
		text: '',
		amount: ''
	})

	const { text, amount } = formData

	const handleOnChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleOnSubmit = e => {
		e.preventDefault()
		addTransaction(formData);
		setFormData({text:'', amount: ''})
	}

	return (
        <>
            <h3>Add new transaction</h3>
            <form id='form' onSubmit={(e) => handleOnSubmit(e)}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input
                        type='text'
                        id='text'
                        placeholder='Enter text...'
						value={text}
						name='text'
                        onChange={(e) => handleOnChange(e)}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type='number'
						id='amount'
						name='amount'
                        value={amount}
                        onChange={(e) => handleOnChange(e)}
                        placeholder='Enter amount...'
                    />
                </div>
                <button className='btn'>Add transaction</button>
            </form>
        </>
    )
}

export default TransactionForm
