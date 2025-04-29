package models

import (
	"encoding/json"
)

// Account struct represents a bank account

type Account struct {
	ID      string  `json:"id"`
	Name    string  `json:"name"`
	Balance float64 `json:"balance"`
}



// Bank represents the banking system

type Bank struct {
	accounts map[string]Account
}

var bank = Bank{
	accounts: make(map[string]Account),
}