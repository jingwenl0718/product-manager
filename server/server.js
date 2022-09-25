const express = require("express")
const cors = require('cors')
const app = express()
const port = 8000

app.use(cors())

require("./config/mongoose.config")

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

require("./routes/product.routes")(app)

app.listen(8000, () => console.log('Listening on port: 8000'))