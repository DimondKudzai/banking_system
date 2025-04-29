
import React from 'react';
import './SelectedAccount.css';

function SelectedAccount({ selectedAccount }) {
  return (
    <div>
      <h2>Selected Account: {selectedAccount.name} (ID: {selectedAccount.id})</h2>
      <p>Balance: {selectedAccount.balance}</p>
    </div>
  );
}

export default SelectedAccount;