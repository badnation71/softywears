import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import { logger } from './utils/logger'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 5000

// Security middleware
app.use(helmet())
app.use(cors())

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
})
app.use(limiter)

// Body parsing
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

// Request logging
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.path}`)
  next()
})

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date() })
})

// API Routes (to be implemented)
// app.use('/api/auth', authRoutes)
// app.use('/api/products', productRoutes)
// app.use('/api/orders', orderRoutes)
// app.use('/api/payment', paymentRoutes)
// app.use('/api/users', userRoutes)
// app.use('/api/admin', adminRoutes)

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Error: ${err.message}`)
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {},
  })
})

// Start server
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})

export default app
