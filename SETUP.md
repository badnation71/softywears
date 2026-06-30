# StepStyle Project - Development Setup Guide

## 🎯 Getting Started

Welcome to the StepStyle E-Commerce Platform development setup! This guide will help you get the project running locally.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js
- **PostgreSQL**: Version 14 or higher ([Download](https://www.postgresql.org/download/))
- **Git**: For version control ([Download](https://git-scm.com/))
- **Docker**: (Optional, but recommended) ([Download](https://www.docker.com/))

## 🚀 Quick Start with Docker (Recommended)

The easiest way to get started is using Docker:

```bash
# Clone the repository
git clone https://github.com/badnation71/softywears.git
cd softywears

# Make scripts executable
chmod +x start.sh stop.sh clean.sh

# Start the entire platform
./start.sh
```

The platform will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🔧 Manual Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/badnation71/softywears.git
cd softywears
```

### Step 2: Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Update .env with your PostgreSQL credentials
# DATABASE_URL=postgresql://username:password@localhost:5432/softywears

# Run database migrations
npm run db:migrate

# Seed the database with initial data
npm run db:seed

# Start the development server
npm run dev
```

Backend will run on: http://localhost:5000

### Step 3: Frontend Setup

In a new terminal:

```bash
cd frontend

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start the development server
npm run dev
```

Frontend will run on: http://localhost:3000

## 📚 Database Setup

### PostgreSQL Installation

#### macOS (using Homebrew)
```bash
brew install postgresql@14
brew services start postgresql@14
```

#### Windows
Download and run the PostgreSQL installer from [postgresql.org](https://www.postgresql.org/download/windows/)

#### Linux (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
sudo service postgresql start
```

### Create Database

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database and user
CREATE DATABASE softywears;
CREATE USER stepstyle WITH PASSWORD 'stepstyle123';
ALTER ROLE stepstyle SET client_encoding TO 'utf8';
ALTER ROLE stepstyle SET default_transaction_isolation TO 'read committed';
ALTER ROLE stepstyle SET default_transaction_deferrable TO on;
ALTER ROLE stepstyle SET default_transaction_read_uncommitted TO off;
GRANT ALL PRIVILEGES ON DATABASE softywears TO stepstyle;

# Exit psql
\q
```

## 🔑 Environment Configuration

### Backend (.env)

```env
# Server
NODE_ENV=development
PORT=5000

# Database
DATABASE_URL=postgresql://stepstyle:stepstyle123@localhost:5432/softywears

# Authentication
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRE=7d

# M-Pesa Integration
MPESA_CONSUMER_KEY=your-key-from-daraja
MPESA_CONSUMER_SECRET=your-secret-from-daraja
MPESA_SHORTCODE=173379
MPESA_PASSKEY=your-passkey
MPESA_ENVIRONMENT=sandbox

# Email Service
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@stepstyle.com

# SMS Service
TWILIO_ACCOUNT_SID=your-sid
TWILIO_AUTH_TOKEN=your-token
TWILIO_PHONE_NUMBER=+1234567890
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=StepStyle
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_DEFAULT_CURRENCY=TZS
```

## 🎨 Design System

### Color Palette

- **Primary**: #1a1a1a (Black)
- **Secondary**: #ffffff (White)
- **Accent**: #00c853 (Green)
- **Muted**: #666666 (Gray)

### Typography

- **Font Family**: Inter, system-ui, sans-serif
- **Primary Size**: 16px
- **Heading Size**: 32px - 48px

## 📦 Available Scripts

### Backend

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm start             # Start production server
npm run lint          # Run linter
npm run format        # Format code with Prettier
npm run test          # Run tests
npm run db:migrate    # Run migrations
npm run db:seed       # Seed database
npm run db:studio     # Open Prisma Studio
```

### Frontend

```bash
npm run dev           # Start development server
npm run build         # Build for production
npm start             # Start production server
npm run lint          # Run linter
npm run format        # Format code
npm run test          # Run tests
```

## 🔗 API Testing

### Using cURL

```bash
# Health check
curl http://localhost:5000/health

# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

### Using Postman

1. Download [Postman](https://www.postman.com/downloads/)
2. Import the API collection
3. Set the `{{base_url}}` variable to `http://localhost:5000/api`
4. Start making requests

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5000 (backend)
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9
```

### Database Connection Error

1. Check if PostgreSQL is running
2. Verify DATABASE_URL in .env
3. Ensure database exists: `createdb softywears`

### Node Modules Issues

```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📖 Additional Resources

- **[Architecture Documentation](ARCHITECTURE.md)** - Detailed system architecture
- **[Contributing Guidelines](CONTRIBUTING.md)** - How to contribute
- **[API Documentation](backend/README.md)** - Backend API reference
- **[Frontend Guide](frontend/README.md)** - Frontend setup details

## 🆘 Getting Help

- Check [GitHub Issues](https://github.com/badnation71/softywears/issues)
- Review [Discussions](https://github.com/badnation71/softywears/discussions)
- Contact: support@stepstyle.com

## ✅ Verification

After setup, verify everything is working:

```bash
# 1. Backend is running
curl http://localhost:5000/health
# Expected: {"status":"OK","timestamp":"..."}

# 2. Frontend is running
curl http://localhost:3000
# Expected: HTML response

# 3. Database is connected
# Check backend console for no connection errors
```

## 🎓 Next Steps

1. Read the [Architecture Documentation](ARCHITECTURE.md)
2. Review the [Contributing Guidelines](CONTRIBUTING.md)
3. Check out the [Frontend README](frontend/README.md)
4. Check out the [Backend README](backend/README.md)
5. Start contributing!

---

**Happy coding! 🚀**
