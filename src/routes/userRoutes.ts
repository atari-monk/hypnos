import { Router, Request, Response } from 'express'
import { IUser } from './../interfaces/IUser'
import { checkValidationResult, validateUser } from './../middleware/validateUser'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('User route')
})

router.post(
  '/',
  validateUser,
  checkValidationResult,
  (req: Request, res: Response) => {
    const newUser: IUser = req.body
    console.log('New user:', newUser)
    res.status(201).json({ message: 'User created', user: newUser })
  }
)

export default router
