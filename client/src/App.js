import React from "react";
import "./App.css";
import Header from "./comps/Header";
import Balance from "./comps/Balance";
import IncomeExpense from "./comps/IncomeExpense";
import TransactionList from "./comps/TransactionList";
import TransactionForm from "./comps/TransactionForm";
import { GlobalProvider } from "./context/GlobalState";

function App() {
    return (
        <>
            <GlobalProvider>
                <Header />
                <div className='container'>
                    <Balance />
                    <IncomeExpense />
                    <TransactionList />
                    <TransactionForm />
                </div>
            </GlobalProvider>
        </>
    );
}

export default App;
