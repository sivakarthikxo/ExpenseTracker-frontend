import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function History() {
  const { transaction, deleteTransaction } = useContext(GlobalContext);

  // Guard against undefined or empty transactions
  if (!transaction || transaction.length === 0) {
    return <h3>No transactions to display.</h3>;
  }

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transaction.map((transaction, index) => {
          console.log("Transaction Object:", transaction); // Log full transaction object
          return (
            <li
              key={transaction._id || index}
              className={transaction.amount > 0 ? "plus" : "minus"}
            >
              {transaction.text} <span>${transaction.amount}</span>
              <button
                className="delete-btn"
                onClick={() => {
                  console.log("Deleting transaction with ID:", transaction._id); // Log the ID
                  deleteTransaction(transaction._id); // Use _id here
                }}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default History;
