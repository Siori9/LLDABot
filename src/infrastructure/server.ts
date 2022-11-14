import express from 'express'

const port = process.env.PORT ?? 3000

const app = express()
app.all('/', (_, res) => {
  res.send('LLDA Bot est en vie')
})

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})