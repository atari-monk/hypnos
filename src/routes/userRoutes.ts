import { Router, Request, Response } from 'express'
import { IUser } from './../interfaces/IUser'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('User route')
})

router.post('/', (req: Request, res: Response) => {
  const newUser: IUser = req.body
  console.log('New user:', newUser)
  res.status(201).json({ message: 'User created', user: newUser })
})

export default router
