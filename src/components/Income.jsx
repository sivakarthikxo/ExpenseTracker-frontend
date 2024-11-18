import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Income() {
  const { transaction } = useContext(GlobalContext);

  if (!transaction || transaction.length === 0) {
    return (
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+$0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-$0.00</p>
        </div>
      </div>
    );
  }

  const amounts = transaction.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0) * 1
    .toFixed(2);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0) * -1
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">-${expense}</p>
      </div>
    </div>
  );
}

export default Income;
