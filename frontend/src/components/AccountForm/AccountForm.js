import React from 'react';
import './AccountForm.css';

function AccountForm({ handleCreateAccount, newAccount, setNewAccount }) {
  return (
    <form onSubmit={handleCreateAccount}>
      <label>ID:</label>
      <input type="text" value={newAccount.id} onChange={(event) => setNewAccount({ ...newAccount, id: event.target.value })} />
      <br />
      <label>Name:</label>
      <input type="text" value={newAccount.name} onChange={(event) => setNewAccount({ ...newAccount, name: event.target.value })} />
      <br />
      <label>Balance:</label>
      <input type="number" value={newAccount.balance} onChange={(event) => setNewAccount({ ...newAccount, balance: parseFloat(event.target.value) })} />
      <br />
      <button type="submit">Create Account</button>
    </form>
  );
}

export default AccountForm;