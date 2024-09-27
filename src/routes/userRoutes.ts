import { Router, Request, Response } from 'express'
import {
  checkValidationResult,
  validateUser,
} from './../middleware/validateUser'
import { User } from '../entities/User'
import { AppDataSource } from '../data_source'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve users', error })
  }
})

router.post(
  '/',
  validateUser,
  checkValidationResult,
  async (req: Request, res: Response) => {
    try {
      const newUser: User = req.body // Enforce User interface

      // Get the repository and create a new user instance
      const userRepository = AppDataSource.getRepository(User)
      const userEntity = userRepository.create(newUser)

      // Save the user to the database
      const savedUser = await userRepository.save(userEntity)

      res.status(201).json({ message: 'User created', user: savedUser })
    } catch (error) {
      res.status(500).json({ message: 'Failed to create user', error })
    }
  }
)

export default router
