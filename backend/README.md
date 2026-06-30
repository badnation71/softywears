# StepStyle Backend

Express.js based REST API for the StepStyle e-commerce platform.

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or pnpm

### Installation

```bash
cd backend
npm install
```

### Environment Setup

```bash
cp .env.example .env
```

### Database Setup

```bash
# Run migrations
npm run db:migrate

# Seed database
npm run db:seed
```

### Development

```bash
npm run dev
```

Server will run on http://localhost:5000

### Build

```bash
npm run build
npm start
```

### Testing

```bash
npm run test
npm run test:coverage
```

### Database Management

```bash
# View database GUI
npm run db:studio

# Reset database
npm run db:reset
```

## Project Structure

```
src/
├── index.ts              # App entry point
├── middleware/           # Express middleware
├── routes/              # API routes
├── controllers/          # Request handlers
├── services/            # Business logic
├── utils/               # Helper functions
└── config/              # Configuration

prisma/
├── schema.prisma        # Database schema
└── seed.ts              # Database seeding
```

## API Documentation

API endpoints follow RESTful conventions. Base URL: `/api`

### Authentication
- POST `/auth/register` - Register new user
- POST `/auth/login` - User login
- POST `/auth/refresh` - Refresh token

### Products
- GET `/products` - List products
- GET `/products/:id` - Get product details
- POST `/products` - Create product (admin)
- PUT `/products/:id` - Update product (admin)
- DELETE `/products/:id` - Delete product (admin)

### Orders
- GET `/orders` - List user orders
- POST `/orders` - Create order
- GET `/orders/:id` - Get order details

### Payment
- POST `/payment/initiate-stk` - Initiate M-Pesa payment
- POST `/payment/callback` - M-Pesa callback

## Environment Variables

See `.env.example` for all required variables.
