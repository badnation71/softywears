import jwt from 'jsonwebtoken'
import { Response, NextFunction } from 'express'

export interface AuthRequest extends Express.Request {
  userId?: string
  user?: any
}

export const generateToken = (userId: string, expiresIn: string = '7d'): string => {
  return jwt.sign({ userId }, process.env.JWT_SECRET || 'your-secret-key', {
    expiresIn,
  })
}

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key')
  } catch (error) {
    throw new Error('Invalid token')
  }
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided' })
    }

    const decoded = verifyToken(token)
    req.userId = decoded.userId
    next()
  } catch (error) {
    res.status(401).json({ success: false, message: 'Unauthorized' })
  }
}
