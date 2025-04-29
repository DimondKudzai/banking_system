package utils

import (
	"errors"
	"github.com/gin-gonic/gin"
)

func ErrorHandler(c *gin.Context, err error) {
	c.JSON(400, gin.H{"error": err.Error()})
}