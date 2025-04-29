

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AccountForm from 'components/accountForm/AccountForm';
import AccountList from 'components/accountList/AccountList';
import TransactionForm from 'components/transactionForm/TransactionForm';
import SelectedAccount from 'components/selectedAccount/SelectedAccount';
import './App.css';

function App() {
  const [accounts, setAccounts] = useState([]);
  const [newAccount, setNewAccount] = useState({ id: '', name: '', balance: 0 });
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawalAmount, setWithdrawalAmount] = useState(0);


// get all accounts data
  useEffect(() => {
    axios.get('http://localhost:3001/accounts/all_accounts') // replace url
      .then(response => {
        setAccounts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  

// create bank account

  const handleCreateAccount = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/accounts/create', newAccount) // replace url
      .then(response => {
        setAccounts([...accounts, response.data]);
        setNewAccount({ id: '', name: '', balance: 0 });
      })
      .catch(error => {
        console.error(error);
      });
  };

//handle selected account

  const handleSelectAccount = (account) => {
    setSelectedAccount(account);
  };


//handle deposit

  const handleDeposit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3001/accounts/${selectedAccount.id}/deposit`, { amount: depositAmount })// replace url
      .then(response => {
        const updatedAccounts = accounts.map((account) => {
          if (account.id === selectedAccount.id) {
            return response.data;
          }
          return account;
        });
        setAccounts(updatedAccounts);
        setSelectedAccount(response.data);
        setDepositAmount(0);
      })
      .catch(error => {
        console.error(error);
      });
  };


// handle withdraw

  const handleWithdrawal = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3001/accounts/${selectedAccount.id}/withdraw`, { amount: withdrawalAmount })// replace url
      .then(response => {
        const updatedAccounts = accounts.map((account) => {
          if (account.id === selectedAccount.id) {
            return response.data;
          }
          return account;
        });
        setAccounts(updatedAccounts);
        setSelectedAccount(response.data);
        setWithdrawalAmount(0);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <AccountForm handleCreateAccount={handleCreateAccount} newAccount={newAccount} setNewAccount={setNewAccount} />
      <AccountList accounts={accounts} handleSelectAccount={handleSelectAccount} />
      {selectedAccount && (
        <div>
          <SelectedAccount selectedAccount={selectedAccount} />
          <TransactionForm handleDeposit={handleDeposit} handleWithdrawal={handleWithdrawal} depositAmount={depositAmount} setDepositAmount={setDepositAmount} withdrawalAmount={withdrawalAmount} setWithdrawalAmount={setWithdrawalAmount} />
        </div>
      )}
    </div>
  );
}

export default App;