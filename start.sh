#!/bin/bash

echo "🚀 Starting StepStyle E-Commerce Platform..."

# Create necessary directories
mkdir -p backend/logs
mkdir -p frontend/.next

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Build and start containers
echo "📦 Building Docker images..."
docker-compose build

echo "🔧 Starting services..."
docker-compose up -d

echo "⏳ Waiting for services to be ready..."
sleep 5

# Run database migrations
echo "🗄️  Running database migrations..."
docker-compose exec -T backend npm run db:migrate -- --skip-generate

# Seed database
echo "🌱 Seeding database..."
docker-compose exec -T backend npm run db:seed

echo "✅ All services are running!"
echo ""
echo "📍 Access the application:"
echo "   Frontend: http://localhost:3000"
echo "   Backend API: http://localhost:5000"
echo "   Database: localhost:5432"
echo ""
echo "💡 Useful commands:"
echo "   docker-compose logs -f backend  - View backend logs"
echo "   docker-compose logs -f frontend - View frontend logs"
echo "   docker-compose down             - Stop all services"
echo "   docker-compose ps               - Show running services"
