const express = require("express")
const path = require('path')
const port = process.env.PORT || 3000
const app = express()

app.use('/staticFiles', express.static('staticFiles'))

app.get('/*', (req, res) => {
    res.sendFile(__dirname+'/frontend/index.html')
})

app.listen(port,()=> console.log(`app on port ${port}`))