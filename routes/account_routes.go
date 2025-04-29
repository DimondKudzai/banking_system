package routes

// import models, gin, log

import (
	"github.com/gin-gonic/gin"
	"../models"
	"log"
	"../utils"
)


// setup routes function

func SetupRoutes(r *gin.RouterGroup) {
	accountGroup := r.Group("/accounts")
	{
	    accountGroup.GET("/all_accounts", getAccounts)
		accountGroup.POST("/create", createAccount)
		accountGroup.GET("/:id", getAccount)
		accountGroup.PUT("/:id/deposit", depositMoney)
		accountGroup.PUT("/:id/withdraw", withdrawMoney)
	}
}


// get all accounts data

func getAccounts(c *gin.Context) {
	accounts := make([]models.Account, 0)
	for _, account := range bank.accounts {
		accounts = append(accounts, account)
	}
	c.JSON(200, accounts)
}



// create account function

func createAccount(c *gin.Context) {
var account models.Account
if err := c.BindJSON(&account); err != nil {
c.JSON(400, gin.H{"error": err.Error()})
return
}
bank.accounts[account.id] = account
c.JSON(201, account)
}




// get account by id account function

func getAccount(c *gin.Context) {

	// func body
	
	id := c.Param("id")
	account, ok := bank.accounts[id]
	if !ok {
		c.JSON(404, gin.H{"error": "Account not found"})
		return
	}
	c.JSON(200, account)
	
}



// deposit money function

func depositMoney(c *gin.Context) {
	
	// depositMoney deposits money into an account body

	id := c.Param("id")
	account, ok := bank.accounts[id]
	if !ok {
	c.JSON(404, gin.H{"error": "Account not found"})
	return
	}
	
	// deposit struct
	
	var deposit struct {
	Amount float64 `json:"amount"`
	}
	if err := c.BindJSON(&deposit); err != nil {
	c.JSON(400, gin.H{"error": err.Error()})
	return
	}
	
	account.Balance += deposit.Amount
	bank.accounts[id] = account
	c.JSON(200, account)
	
}


// withdraw money function

func withdrawMoney(c *gin.Context) {
	
	
	// withdrawMoney withdraws money from an account

	id := c.Param("id")
	account, ok := bank.accounts[id]
	if !ok {
	c.JSON(404, gin.H{"error": "Account not found"})
	return
	}
	
	var withdrawal struct {
	Amount float64 `json:"amount"`
	}
	if err := c.BindJSON(&withdrawal); err != nil {
	c.JSON(400, gin.H{"error": err.Error()})
	return
	}
	
	if account.Balance < withdrawal.Amount {
	c.JSON(400, gin.H{"error": "Insufficient balance"})
	return
	}
	
	account.Balance -= withdrawal.Amount
	bank.accounts[id] = account
	c.JSON(200, account)
	
	
}