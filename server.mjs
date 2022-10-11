import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'
const port = process.env.PORT || 3000
const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/staticFiles', express.static('staticFiles'))

app.get('/*', (req, res) => {
    res.sendFile(__dirname+'/frontend/index.html')
})

app.listen(port,()=> console.log(`app on port ${port}`))