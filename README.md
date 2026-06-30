# StepStyle - Premium Footwear E-Commerce Platform

**A modern, premium, and fully responsive e-commerce website specializing in men's, women's, and children's footwear.**

## Overview

StepStyle is a full-stack e-commerce platform built with Next.js, Node.js, and PostgreSQL. It offers a seamless shopping experience with modern UI/UX, secure M-Pesa payment integration, and comprehensive admin functionality. The platform is optimized for East African markets with multi-language (English/Swahili) and multi-currency (TZS/KES) support.

## Key Features

### Customer Features
- 🛍️ **Product Catalog**: Men's, women's, and children's footwear with advanced filtering
- 🛒 **Smart Shopping Cart**: Add/remove items, apply coupons, real-time calculations
- 💳 **Secure Payments**: M-Pesa STK Push, card payments, cash on delivery
- 👤 **User Accounts**: Registration, login, order history, wishlists, saved addresses
- 📦 **Order Tracking**: Real-time order status updates
- ⭐ **Reviews & Ratings**: Customer feedback system
- 🎁 **Wishlist & Comparison**: Save favorites and compare products
- 🌙 **Dark Mode**: Optional dark theme
- 🌍 **Multi-Language**: English and Swahili support
- 💱 **Multi-Currency**: Tanzanian Shilling and Kenyan Shilling

### Admin Features
- 📊 **Product Management**: Add, edit, delete products and categories
- 📈 **Inventory Tracking**: Stock management and alerts
- 💰 **Order Management**: View, process, and track orders
- 👥 **Customer Management**: User data and analytics
- 🏪 **Payment Monitoring**: M-Pesa transaction logs and reports
- 🎯 **Promotions**: Create discounts and coupon codes
- 📉 **Analytics**: Sales reports and performance metrics

### Technical Features
- 🚀 **Performance**: Image lazy loading, optimized bundles
- ♿ **Accessibility**: WCAG compliant design
- 🔐 **Security**: JWT authentication, secure payment processing
- 📱 **Responsive**: Desktop, tablet, and mobile optimized
- 🎨 **Modern Design**: Clean, elegant UI with black/white/green palette
- ⚡ **Fast Loading**: SEO optimized with meta tags

## Tech Stack

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit / Zustand
- **HTTP Client**: Axios
- **UI Components**: Shadcn/ui, Radix UI
- **Image Optimization**: Next.js Image
- **Forms**: React Hook Form
- **Animations**: Framer Motion

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (jsonwebtoken)
- **Validation**: Zod / Yup
- **Payment Gateway**: Safaricom Daraja API (M-Pesa)
- **Email**: Nodemailer
- **SMS**: Twilio

### DevOps & Tools
- **Version Control**: Git
- **Package Manager**: npm / pnpm
- **Testing**: Jest, React Testing Library, Supertest
- **Linting**: ESLint, Prettier
- **Docker**: Containerization for deployment
- **CI/CD**: GitHub Actions

## Project Structure

```
softywears/
├── frontend/                 # Next.js application
│   ├── app/                 # App router pages
│   ├── components/          # Reusable React components
│   ├── lib/                 # Utility functions
│   ├── styles/              # Global styles
│   ├── public/              # Static assets
│   └── package.json
│
├── backend/                 # Express.js API
│   ├── src/
│   │   ├── routes/          # API endpoints
│   │   ├── controllers/     # Request handlers
│   │   ├── services/        # Business logic
│   │   ├── models/          # Prisma schema
│   │   ├── middleware/      # Auth, validation
│   │   ├── utils/           # Helpers
│   │   └── config/          # Configuration
│   ├── prisma/              # Database schema
│   └── package.json
│
├── docker-compose.yml       # Local development setup
├── .env.example             # Environment variables template
└── docs/                    # Documentation
```

## Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or pnpm
- M-Pesa Daraja API credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/badnation71/softywears.git
   cd softywears
   ```

2. **Install dependencies**
   ```bash
   # Frontend
   cd frontend && npm install
   
   # Backend
   cd ../backend && npm install
   ```

3. **Configure environment variables**
   ```bash
   # Create .env files from templates
   cp backend/.env.example backend/.env
   cp frontend/.env.local.example frontend/.env.local
   ```

4. **Setup database**
   ```bash
   cd backend
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Start development servers**
   ```bash
   # Terminal 1: Backend
   cd backend && npm run dev
   
   # Terminal 2: Frontend
   cd frontend && npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - Admin Dashboard: http://localhost:3000/admin

### Docker Setup

```bash
docker-compose up -d
```

## API Documentation

The backend API follows RESTful conventions. Key endpoints:

### Products
- `GET /api/products` - List all products with filters
- `GET /api/products/:id` - Get product details
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Orders
- `GET /api/orders` - List user orders
- `GET /api/orders/:id` - Get order details
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id/status` - Update order status

### Payment
- `POST /api/payment/initiate-stk` - Initiate M-Pesa STK Push
- `POST /api/payment/callback` - M-Pesa payment callback
- `GET /api/payment/status/:id` - Check payment status

### Users
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile

## M-Pesa Integration

The platform uses Safaricom's Daraja API for M-Pesa payments.

### Setup
1. Register on [Safaricom Daraja Portal](https://developer.safaricom.co.ke)
2. Get Consumer Key and Consumer Secret
3. Add credentials to backend `.env`
4. Configure shortcode and test account

### Flow
1. User enters M-Pesa phone number at checkout
2. System initiates STK Push to customer's phone
3. Customer enters M-Pesa PIN
4. Payment confirmation received via callback
5. Order automatically confirmed
6. SMS and email receipts sent

## Database Schema

Key tables:
- **users**: Customer accounts and authentication
- **products**: Footwear catalog with variants
- **orders**: Customer purchases and status
- **order_items**: Individual items in orders
- **payments**: Payment transactions and M-Pesa logs
- **reviews**: Customer reviews and ratings
- **wishlists**: Saved products
- **categories**: Product categories
- **coupons**: Discount codes

## Testing

```bash
# Backend tests
cd backend && npm run test

# Frontend tests
cd frontend && npm run test

# E2E tests
npm run test:e2e
```

## Deployment

### Frontend (Vercel)
```bash
vercel deploy
```

### Backend (Heroku/Railway)
```bash
heroku create
heroku config:set DATABASE_URL=...
git push heroku main
```

## Performance Metrics

- **Lighthouse Score**: 90+
- **Page Load Time**: <2 seconds
- **First Contentful Paint**: <1 second
- **Largest Contentful Paint**: <2.5 seconds

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## License

MIT License - see LICENSE file for details

## Support

For issues and feature requests, please use [GitHub Issues](https://github.com/badnation71/softywears/issues)

## Contact

- Email: support@stepstyle.com
- Phone: +255 123 456 789
- Address: Dar es Salaam, Tanzania

---

**Built with ❤️ by the StepStyle Team**
