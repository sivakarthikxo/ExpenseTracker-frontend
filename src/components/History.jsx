import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function TransactionHistory() {

    const {transaction} = useContext(GlobalContext);
    const {deleteTransaction} = useContext(GlobalContext);

    return(
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transaction.map(transaction=>(
                    <li key={transaction.id} className={transaction.amount >0?`plus`:`minus`}>
                    {transaction.text} <span>${transaction.amount}</span>
                    <button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>x</button>
                </li> 
                ))}
            </ul>
        </>
    )
}

export default TransactionHistory