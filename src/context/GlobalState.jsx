import React, {createContext, useReducer} from 'react';
import AppReduce from './AppReduce';

//initial state
const initialState = {
    transaction: [
        { id:1, text: 'Flower', amount: -20},
        { id:2, text: 'Salary', amount: 500},
        { id:3, text: 'Book', amount: -30},
        { id:4, text: 'Camera', amount: -60}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const[state, dispatch] = useReducer(AppReduce,initialState);

    //action

    function deleteTransaction(id) {
        dispatch({
            type: `DELETE_TRANSACTION`,
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: `ADD_TRANSACTION`,
            payload: transaction
        })
    }

    return(
        <GlobalContext.Provider 
        value={{transaction:state
        .transaction,deleteTransaction,addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}