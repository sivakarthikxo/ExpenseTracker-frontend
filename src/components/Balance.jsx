import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
    const {transaction} = useContext(GlobalContext)

    const amounts = transaction.map((transaction) =>{return transaction.amount});

    const total = amounts.reduce((acc,item) => {return acc += item},0).toFixed(2);

    return(
        <>
            <h4>Your balance</h4>
            <h1>${total}</h1>
        </>
    )
}

export default Balance