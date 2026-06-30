# StepStyle E-Commerce Platform

Complete full-stack e-commerce solution for a premium footwear brand with modern UI/UX, secure M-Pesa payment integration, and multi-language support.

## 🚀 Quick Start

### With Docker (Recommended)

```bash
# Make scripts executable
chmod +x start.sh stop.sh clean.sh

# Start the entire platform
./start.sh

# Stop the platform
./stop.sh

# Clean up Docker resources
./clean.sh
```

### Manual Setup

#### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or pnpm

#### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
npm run db:migrate
npm run db:seed
npm run dev
```

#### Frontend Setup

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

## 📱 Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Database**: localhost:5432
- **Prisma Studio**: `npm run db:studio`

## 📁 Project Structure

```
softywears/
├── frontend/              # Next.js e-commerce website
│   ├── src/
│   │   ├── app/          # App router pages
│   │   ├── components/   # React components
│   │   ├── lib/          # Utilities and helpers
│   │   ├── hooks/        # Custom hooks
│   │   └── store/        # Zustand stores
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.js
│
├── backend/               # Express.js REST API
│   ├── src/
│   │   ├── middleware/   # Express middleware
│   │   ├── routes/       # API routes
│   │   ├── controllers/  # Request handlers
│   │   ├── services/     # Business logic
│   │   ├── utils/        # Helper functions
│   │   └── index.ts      # Entry point
│   ├── prisma/
│   │   ├── schema.prisma # Database schema
│   │   └── seed.ts       # Database seeding
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
│
├── docker-compose.yml     # Docker services configuration
├── .env.docker           # Docker environment variables
├── start.sh              # Start script
├── stop.sh               # Stop script
├── clean.sh              # Clean script
├── ARCHITECTURE.md       # Architecture documentation
├── CONTRIBUTING.md       # Contributing guidelines
└── README.md            # This file
```

## 🎯 Key Features

### Frontend
- ✨ Modern Next.js 14 with App Router
- 🎨 Tailwind CSS with custom design system
- 📱 Fully responsive design
- 🛒 Zustand state management
- 🔐 Secure authentication
- 🌍 Multi-language support (English/Swahili)
- 💱 Multi-currency support (TZS/KES)
- 🌓 Dark mode support
- ⚡ Image optimization

### Backend
- 🚀 Express.js REST API
- 📊 PostgreSQL with Prisma ORM
- 🔐 JWT authentication
- 💳 M-Pesa payment integration
- 📧 Email notifications
- 💬 SMS notifications
- 📈 Admin dashboard
- 🔍 Product search & filtering
- ⭐ Reviews & ratings

### Database
- User management
- Product catalog with variants
- Order management
- Payment processing
- Reviews and ratings
- Wishlist functionality
- Coupon/discount system

## 🔧 Environment Variables

Create `.env` files in both frontend and backend directories:

### Backend (.env)
```
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/softywears
JWT_SECRET=your-secret-key
MPESA_CONSUMER_KEY=your-key
MPESA_CONSUMER_SECRET=your-secret
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-password
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📚 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `POST /auth/refresh` - Refresh token

### Products
- `GET /products` - List products with filters
- `GET /products/:id` - Get product details
- `POST /products` - Create product (admin)
- `PUT /products/:id` - Update product (admin)
- `DELETE /products/:id` - Delete product (admin)

### Orders
- `GET /orders` - List user orders
- `POST /orders` - Create new order
- `GET /orders/:id` - Get order details
- `PUT /orders/:id/status` - Update order status (admin)

### Payment
- `POST /payment/initiate-stk` - Initiate M-Pesa STK Push
- `POST /payment/callback` - M-Pesa callback handler
- `GET /payment/status/:id` - Check payment status

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm run test
npm run test:coverage
```

### Frontend Tests
```bash
cd frontend
npm run test
npm run test:coverage
```

## 📦 Build & Deployment

### Build for Production

```bash
# Backend
cd backend
npm run build

# Frontend
cd frontend
npm run build
```

### Deploy with Docker

```bash
# Update docker-compose.yml for production
docker-compose -f docker-compose.yml build
docker-compose -f docker-compose.yml up -d
```

## 🔒 Security Features

- JWT authentication
- bcrypt password hashing
- CORS protection
- Rate limiting
- Input validation
- SQL injection prevention (Prisma)
- XSS protection
- CSRF tokens
- Secure payment processing

## 📊 Database Schema

Key tables:
- `users` - User accounts
- `products` - Product catalog
- `product_variants` - Size/color variants
- `orders` - Customer orders
- `order_items` - Items in orders
- `payments` - Payment records
- `reviews` - Product reviews
- `wishlists` - Saved products
- `categories` - Product categories
- `coupons` - Discount codes

## 🚀 Performance

- Lighthouse Score: 90+
- Page Load Time: <2s
- First Contentful Paint: <1s
- Image lazy loading
- Bundle optimization
- Database query optimization

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - See [LICENSE](LICENSE) file

## 📞 Support

- Issues: [GitHub Issues](https://github.com/badnation71/softywears/issues)
- Email: support@stepstyle.com
- Phone: +255 123 456 789

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [M-Pesa Daraja API](https://developer.safaricom.co.ke/)

---

**Built with ❤️ for East African businesses**

Last Updated: June 30, 2026
