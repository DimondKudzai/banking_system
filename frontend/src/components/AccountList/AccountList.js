import React from 'react';
import './AccountList.css';

function AccountList({ accounts, handleSelectAccount }) {
  return (
    <div className="account-list">
      <h2>Accounts</h2>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            <span>{account.name} (ID: {account.id}) - Balance: {account.balance}</span>
            <button onClick={() => handleSelectAccount(account)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AccountList;