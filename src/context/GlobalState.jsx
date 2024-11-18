// import React, {createContext, useReducer} from 'react';
// import AppReducer from './AppReducer';

// //initial state
// const initialState = {
//     transaction: [
//         { id:1, text: 'Flower', amount: -20},
//         { id:2, text: 'Salary', amount: 500},
//         { id:3, text: 'Book', amount: -30},
//         { id:4, text: 'Camera', amount: -60}
//     ]
// }

// export const GlobalContext = createContext(initialState);

// export const GlobalProvider = ({children}) => {
//     const[state, dispatch] = useReducer(AppReduce,initialState);

//     //action

//     function deleteTransaction(id) {
//         dispatch({
//             type: `DELETE_TRANSACTION`,
//             payload: id
//         })
//     }

//     function addTransaction(transaction) {
//         dispatch({
//             type: `ADD_TRANSACTION`,
//             payload: transaction
//         })
//     }

//     return(
//         <GlobalContext.Provider 
//         value={{transaction:state
//         .transaction,deleteTransaction,addTransaction}}>
//             {children}
//         </GlobalContext.Provider>
//     )
// }



//frontend integration to backend

import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  transaction: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Get the API URL from environment variables
  const API_URL = process.env.VITE_API_URL || 'http://localhost:5000';

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get(`${API_URL}/api/transactions`);
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data,
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`${API_URL}/api/transactions/${id}`);
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id,
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function addTransaction(transaction) {
    try {
      const res = await axios.post(`${API_URL}/api/transactions`, transaction);
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data,
      });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
