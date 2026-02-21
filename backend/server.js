const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 3000

app.use(cors()) // 👈 TEM QUE ESTAR AQUI
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Servidor rodando 🚀")
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})