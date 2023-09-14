import express from 'express'
import { createHash } from 'node:crypto'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
   console.log("Server Listening on PORT:", PORT);
});

app.get("/", (_req, res) => {
   res.send("Hi, I can give you a sha256 digest!")
})

app.get("/status", (_req, res) => {
   const status = {
      "Status": "Running"
   }

   res.send(status)
})

app.post('/data', (req, res) => {
   const payload = req.body['payload']
   const digest = createHash('sha256').update(payload).digest('hex')
   const result = {
      digest
   }

   res.send(result)
})
