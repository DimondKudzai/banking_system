package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"./routes"
	"./utils"
)

func main() {
	r := gin.Default()
	
	// make index.html from react frontend the default page with "" endpoint
	
	r.Static("/static", "./frontend/public")
	r.LoadHTMLFiles("./frontend/public/index.html")
	
	// add a route to serve the `index.html`
	r.GET("", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", nil)
	})
	
	// register routes
	routes.SetupRoutes(r)
	
	log.Fatal(r.Run(":3001"))
}