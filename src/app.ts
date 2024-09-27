import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello, TypeScript API!')
})

app.post('/users', (req, res) => {
  const newUser = req.body
  console.log('New user:', newUser)
  res.status(201).json({ message: 'User created', user: newUser })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
