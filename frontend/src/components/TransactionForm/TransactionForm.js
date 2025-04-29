import React from 'react';
import './TransactionForm.css';

function TransactionForm({ handleDeposit, handleWithdrawal, depositAmount, setDepositAmount, withdrawalAmount, setWithdrawalAmount }) {
  return (
    <div>
      <h3>Deposit</h3>
      <form onSubmit={handleDeposit}>
        <label>Amount:</label>
        <input type="number" value={depositAmount} onChange={(event) => setDepositAmount(parseFloat(event.target.value))} />
        <br />
        <button type="submit">Deposit</button>
      </form>

      <h3>Withdrawal</h3>
      <form onSubmit={handleWithdrawal}>
        <label>Amount:</label>
        <input type="number" value={withdrawalAmount} onChange={(event) => setWithdrawalAmount(parseFloat(event.target.value))} />
        <br />
        <button type="submit">Withdraw</button>
      </form>
    </div>
  );
}

export default TransactionForm;