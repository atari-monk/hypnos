import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('User route')
})

router.post('/', (req, res) => {
  const newUser = req.body
  console.log('New user:', newUser)
  res.status(201).json({ message: 'User created', user: newUser })
})

export default router
