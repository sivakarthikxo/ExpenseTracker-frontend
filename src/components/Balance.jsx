import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transaction } = useContext(GlobalContext);

  // Guard against undefined or empty transactions
  if (!transaction || transaction.length === 0) {
    return (
      <>
        <h4>Your balance</h4>
        <h1>$0.00</h1>
      </>
    );
  }

  const amounts = transaction.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);

  return (
    <>
      <h4>Your balance</h4>
      <h1>${total}</h1>
    </>
  );
}

export default Balance;
