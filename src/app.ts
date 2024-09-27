import express from 'express'
import userRoutes from './routes/userRoutes'
import { AppDataSource } from './data_source'

const app = express()
const port = 3000

app.use(express.json())

app.use('/users', userRoutes)

app.get('/', (req, res) => {
  res.send('Hello, TypeScript API!')
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`)
    })
  })
  .catch((error) => {
    console.error('Error during Data Source initialization:', error)
  })
