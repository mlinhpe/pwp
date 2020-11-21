// resource
// https://nodejs.org/en/knowledge/HTTP/servers/how-to-serve-static-files/

// require the relevant libraries
const express = require("express")
const fs = require("fs")
const path = require("path")

// initialize variables
const app = express()
const port = 10011
const fileName = 'visits.txt'

// send the current date and ip address of visitors
app.set('trust proxy', true)
app.get('/getPixel', (req, res) => {
   const currentDate = new Date()
   const ip = req.ip
   fs.appendFileSync(fileName, "IP " + ip + " TIMESTAMP: " + currentDate + "\n")
   res.sendFile(path.join(__dirname, '/pixel', 'pixel.jpg'))
})

// endpoint for the website
app.get('/', (req, res) => {
   res.send(
       `<!DOCTYPE html>
       <html>
       
       <body>
       <p><b> Hello, can you spot the pixel? </b></p>
       <img src="http://localhost:10011/getPixel">
       </body>
       
       </html>`)
})
app.listen(port)

// endpoint for visits
app.get('/visits', (req, res) => {
   res.sendFile(path.join(__dirname, 'visits.txt'))
})

