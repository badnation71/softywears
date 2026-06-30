#!/bin/bash

echo "🧹 Cleaning up Docker resources..."
docker-compose down -v
rm -rf backend/dist backend/node_modules backend/logs
rm -rf frontend/.next frontend/node_modules
echo "✅ Cleanup complete!"
