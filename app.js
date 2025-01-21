const express = require('express')
const app = express()
const port = 3001
const postsRouter = require('./routers/posts');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.json(`Questo è il server del mio blog, vai a visualizzare i post http://localhost:${port}/posts/`)
})

app.use("/posts", postsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})