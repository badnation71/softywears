# StepStyle E-Commerce Platform - Architecture Documentation

## Overview

StepStyle is built using a modern, scalable three-tier architecture:

1. **Frontend**: Next.js client application
2. **Backend**: Express.js REST API
3. **Database**: PostgreSQL with Prisma ORM

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     Client Layer                                 │
│  ┌──────────────────────┐  ┌──────────────────────┐            │
│  │ Desktop Web          │  │ Mobile Web           │            │
│  ├──────────────────────┤  ├──────────────────────┤            │
│  │ Admin Panel          │  │                      │            │
│  └──────────────────────┘  └──────────────────────┘            │
│        │                            │                            │
│        └────────────────────────────┴──────────────────────────┘
│                                │                                 │
│                          (HTTPS/REST)                            │
│                                │                                 │
├────────────────────────────────┼────────────────────────────────┤
│                                ▼                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │        API Gateway / Load Balancer                      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                  Application Layer                              │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              Express.js API Server                      │   │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐   │   │
│  │  │ Auth     │ │ Products │ │ Orders   │ │ Payments │   │   │
│  │  │ Routes   │ │ Routes   │ │ Routes   │ │ Routes   │   │   │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘   │   │
│  │  ┌────────────────────────────────────────────────────┐ │   │
│  │  │ Middleware: JWT, Validation, Error Handling       │ │   │
│  │  └────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                 │                                │
├─────────────────────────────────┼────────────────────────────────┤
│                                 ▼                                │
│        Persistence & External Services Layer                    │
│  ┌──────────────────────────┐  ┌──────────────────────────┐    │
│  │ PostgreSQL Database      │  │ External Services        │    │
│  │ (Prisma ORM)            │  │ ┌──────────────────────┐  │    │
│  │ ┌──────────────────────┐ │  │  │ M-Pesa API         │  │    │
│  │ │ Users Table          │ │  │  │ (Daraja)           │  │    │
│  │ │ Products             │ │  │  ├──────────────────────┤  │    │
│  │ │ Orders               │ │  │  │ Email Service      │  │    │
│  │ │ Payments             │ │  │  │ (Nodemailer)       │  │    │
│  │ │ Reviews              │ │  │  ├──────────────────────┤  │    │
│  │ │ etc.                 │ │  │  │ SMS Service        │  │    │
│  │ └──────────────────────┘ │  │  │ (Twilio)           │  │    │
│  └──────────────────────────┘  │  ├──────────────────────┤  │    │
│                                 │  │ AWS S3              │  │    │
│                                 │  │ (Images)            │  │    │
│                                 │  └──────────────────────┘  │    │
│                                 └──────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

## Component Details

### Frontend Architecture

**Framework**: Next.js 14+ (App Router)

**Structure**:
```
frontend/
├── app/
│   ├── (auth)/              # Auth-related pages
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── (shop)/              # Shopping pages
│   │   ├── page.tsx         # Homepage
│   │   ├── products/        # Product listing
│   │   ├── product/[id]/    # Product details
│   │   ├── cart/            # Shopping cart
│   │   └── checkout/        # Checkout flow
│   ├── (user)/              # User account pages
│   │   ├── profile/
│   │   ├── orders/
│   │   └── wishlist/
│   ├── admin/               # Admin dashboard
│   └── api/                 # API routes (optional)
├── components/
│   ├── layout/              # Header, footer, nav
│   ├── product/             # Product-related components
│   ├── cart/                # Cart components
│   ├── checkout/            # Checkout flow
│   ├── common/              # Reusable components
│   └── ui/                  # Shadcn/ui components
├── lib/
│   ├── api.ts               # API client setup
│   ├── auth.ts              # Auth utilities
│   ├── validators.ts        # Form validation
│   └── utils.ts             # Helper functions
├── store/                   # Redux/Zustand state
├── hooks/                   # Custom React hooks
├── styles/                  # Global CSS
└── public/                  # Static assets
```

**State Management**: Zustand for lightweight client state (cart, filters) + TanStack Query for server state

**Styling**: Tailwind CSS with custom components using Shadcn/ui

### Backend Architecture

**Framework**: Express.js with TypeScript

**Structure**:
```
backend/src/
├── routes/
│   ├── auth.routes.ts       # Authentication endpoints
│   ├── products.routes.ts   # Product CRUD
│   ├── orders.routes.ts     # Order management
│   ├── payment.routes.ts    # Payment processing
│   ├── users.routes.ts      # User profile
│   └── admin.routes.ts      # Admin endpoints
├── controllers/
│   ├── auth.controller.ts   # Auth logic
│   ├── product.controller.ts
│   ├── order.controller.ts
│   └── payment.controller.ts
├── services/
│   ├── auth.service.ts      # Business logic
│   ├── product.service.ts
│   ├── order.service.ts
│   ├── payment.service.ts   # M-Pesa integration
│   ├── email.service.ts     # Email notifications
│   └── sms.service.ts       # SMS notifications
├── middleware/
│   ├── auth.middleware.ts   # JWT verification
│   ├── validation.middleware.ts
│   └── errorHandler.ts      # Global error handling
├── models/                  # Prisma schema
├── utils/
│   ├── constants.ts
│   ├── logger.ts
│   └── helpers.ts
├── config/
│   └── database.ts          # Prisma client
└── app.ts                   # Express app setup
```

**API Design Principles**:
- RESTful conventions
- Consistent response format
- Comprehensive error handling
- Request validation at middleware level
- JWT-based authentication
- Role-based access control (RBAC)

### Database Architecture

**Database**: PostgreSQL 14+

**ORM**: Prisma

**Key Tables**:

1. **users**
   - id (PK)
   - email (unique)
   - password_hash
   - first_name, last_name
   - phone
   - role (customer, admin)
   - status (active, inactive)
   - created_at, updated_at
   - is_verified

2. **products**
   - id (PK)
   - name
   - description
   - category_id (FK)
   - price_tzs, price_kes
   - images (JSON array)
   - materials (JSON)
   - stock_quantity
   - rating
   - created_at, updated_at

3. **product_variants**
   - id (PK)
   - product_id (FK)
   - size
   - color
   - stock_quantity
   - sku

4. **orders**
   - id (PK)
   - user_id (FK)
   - order_number (unique)
   - total_amount_kes
   - total_amount_tzs
   - status (pending, processing, shipped, delivered)
   - payment_status
   - delivery_address
   - delivery_method
   - created_at, updated_at

5. **order_items**
   - id (PK)
   - order_id (FK)
   - product_id (FK)
   - variant_id (FK)
   - quantity
   - price_at_purchase

6. **payments**
   - id (PK)
   - order_id (FK)
   - amount_kes, amount_tzs
   - method (mpesa, card, cash)
   - status (pending, completed, failed)
   - mpesa_transaction_id
   - mpesa_response (JSON)
   - created_at, updated_at

7. **reviews**
   - id (PK)
   - product_id (FK)
   - user_id (FK)
   - rating (1-5)
   - comment
   - verified_purchase
   - helpful_count
   - created_at, updated_at

8. **wishlists**
   - id (PK)
   - user_id (FK)
   - product_id (FK)
   - created_at

9. **coupons**
   - id (PK)
   - code (unique)
   - discount_type (percentage, fixed)
   - discount_value
   - min_purchase_amount
   - max_uses
   - current_uses
   - expires_at
   - is_active

10. **categories**
    - id (PK)
    - name
    - slug
    - image_url
    - parent_id (for subcategories)

## API Response Format

All API responses follow this consistent format:

```typescript
{
  "success": boolean,
  "statusCode": number,
  "message": string,
  "data": object | array | null,
  "errors": [
    {
      "field": string,
      "message": string
    }
  ] | null,
  "meta": {
    "timestamp": string,
    "path": string,
    "version": string
  }
}
```

## Authentication Flow

```
1. User Login
   POST /api/auth/login
   ├─ Validate credentials
   ├─ Compare password hash
   └─ Generate JWT token

2. Token Usage
   GET /api/products
   ├─ Header: Authorization: Bearer {token}
   ├─ Verify JWT signature
   └─ Extract user context

3. Token Refresh
   POST /api/auth/refresh
   ├─ Validate refresh token
   └─ Issue new access token

4. Logout
   POST /api/auth/logout
   └─ Invalidate token (optional)
```

## M-Pesa Payment Flow

```
1. Initiate Payment
   POST /api/payment/initiate-stk
   ├─ Validate order
   ├─ Get M-Pesa token
   ├─ Prepare STK Push request
   └─ Send to Daraja API
   └─ Return request_id

2. Customer Action
   ├─ M-Pesa prompt appears on phone
   ├─ Customer enters PIN
   └─ M-Pesa processes payment

3. Callback Notification
   POST /api/payment/callback
   ├─ Receive payment result
   ├─ Verify request signature
   ├─ Update payment status
   ├─ Update order status
   ├─ Send SMS receipt
   └─ Send email receipt

4. Status Check
   GET /api/payment/status/:id
   └─ Return current payment status
```

## Security Measures

1. **Authentication**
   - JWT tokens with expiration
   - Secure password hashing (bcrypt)
   - Refresh token rotation

2. **Authorization**
   - Role-based access control (RBAC)
   - Middleware-level permission checks
   - Resource ownership validation

3. **Data Protection**
   - HTTPS only in production
   - CORS configuration
   - Rate limiting
   - Input validation and sanitization

4. **Payment Security**
   - M-Pesa request signing
   - Callback signature verification
   - PCI compliance for card processing
   - Encrypted sensitive data storage

5. **API Security**
   - Helmet.js for HTTP headers
   - CSRF protection
   - SQL injection prevention (Prisma parameterized queries)
   - XSS protection

## Scalability Considerations

1. **Database**
   - Connection pooling (PgBouncer)
   - Read replicas for reporting
   - Indexing strategy
   - Partitioning for large tables

2. **API**
   - Horizontal scaling with load balancer
   - Caching layer (Redis)
   - Queue system for async tasks (Bull/BullMQ)
   - CDN for static assets

3. **Frontend**
   - Vercel edge network
   - Image optimization
   - Bundle splitting
   - Incremental Static Regeneration (ISR)

## Deployment Architecture

```
┌────────────────────────────────────┐
│    GitHub Repository               │
│ (Source code + CI/CD pipeline)     │
└────────────────┬────────────────────┘
                 │
     ┌───────────┴────────────┐
     │                        │
     ▼                        ▼
┌─────────────┐         ┌──────────────┐
│ Vercel      │         │ Railway/     │
│ (Frontend)  │         │ Heroku       │
│             │         │ (Backend)    │
│ Auto deploy │         │ Auto deploy  │
└──────┬──────┘         └──────┬───────┘
       │                       │
       │                  ┌────┴────────────┐
       │                  │                 │
       │           ┌──────▼────────┐        │
       │           │ PostgreSQL    │        │
       │           │ Database      │        │
       │           └──────┬────────┘        │
       │                  │                 │
       │           ┌──────▼────────┐        │
       │           │ Backup/       │        │
       │           │ Monitoring    │        │
       │           └───────────────┘        │
       │                                    │
       └────────────────────────────────────┘
              (Production)
```

## Performance Optimization

1. **Frontend**
   - Code splitting with Next.js
   - Image lazy loading
   - CSS-in-JS optimization
   - Service worker for offline support

2. **Backend**
   - Query optimization with Prisma select/include
   - Response caching headers
   - Gzip compression
   - Connection pooling

3. **Database**
   - Strategic indexing
   - Query analysis and optimization
   - Denormalization where appropriate
   - Archive old data

## Monitoring & Logging

1. **Application Logs**
   - Winston for structured logging
   - Log levels: debug, info, warn, error
   - Centralized logging (ELK stack optional)

2. **Performance Monitoring**
   - Sentry for error tracking
   - DataDog/New Relic for APM
   - Lighthouse CI for frontend

3. **Business Metrics**
   - Google Analytics for user behavior
   - Payment success rates
   - Order fulfillment metrics
   - Customer satisfaction scores

## Development Workflow

1. **Local Development**
   - Docker Compose for PostgreSQL
   - Environment variables from .env.local
   - Hot reload for both frontend and backend

2. **Version Control**
   - Feature branches from develop
   - Pull requests for code review
   - Merge strategy: squash for features

3. **Testing**
   - Unit tests with Jest
   - Integration tests with Supertest
   - E2E tests with Cypress/Playwright
   - Pre-commit hooks with Husky

4. **Deployment**
   - Staging environment for QA
   - Production deployment with CI/CD
   - Blue-green deployment strategy
   - Rollback capability

---

Last Updated: June 2026
