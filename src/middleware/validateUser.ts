import { body, validationResult } from 'express-validator'
import { Request, Response, NextFunction, RequestHandler } from 'express'

export const validateUser = [
  body('name')
    .isString()
    .notEmpty()
    .withMessage('Name is required and must be a string.'),
  body('email')
    .isEmail()
    .withMessage('Email is required and must be a valid email address.'),
]

export const checkValidationResult: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() })
    return
  }
  next()
}
