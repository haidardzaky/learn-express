const express = require("express")
const app = express()
const HOST = "localhost"
const PORT = 3001

const bodyParser = require("body-parser")


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())


app.get("/", (req, res) => {
  res.send("empty page")
})

const teams = [
  {
    id:0,
    tim:"bango",
    kostum:"merah"
  },{
    id:1,
    tim:"citot",
    kostum:"skyblue"
  },{
    id:2,
    tim:"munyuk",
    kostum:"merah-hitam"
  }
]


app.get("/teams", (req, res) => {
  res.send(teams)
})

app.get("/teams/:id", (req, res) => {
  const items = teams
  const itemId = Number(req.params.id)
  const item = items.filter(item => {
    return item.id === itemId
  })
  res.send({
    message: `get single item`,
    item: item
  })
})

app.post("/teams", (req, res) => {
  const data = {
    id: teams.length,
    tim: req.body.tim,
    kostum: req.body.kostum
  }
  teams.push(data)
  res.send(teams)
})

app.listen(PORT, HOST, () => {
  console.log("Server is listening on localhost:" + PORT)
})
