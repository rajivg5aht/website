# Deployment Guide

This guide provides instructions for deploying the Helmets and Gears e-commerce platform to various environments.

## Prerequisites

- Node.js (v14.0.0 or higher)
- PostgreSQL database
- Git
- Domain name (for production)
- SSL certificate (for production)

## Environment Setup

### Development Environment

1. **Clone the repository**
```bash
git clone https://github.com/rajivg5aht/Helmets-and-Gears-Sem3-Website.git
cd Helmets-and-Gears-Sem3-Website
```

2. **Install dependencies**
```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

3. **Configure environment variables**
Create `.env` file in the backend directory:
```env
DB_NAME=helmets_gears_dev
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

4. **Setup database**
```bash
cd backend
node update-user-schema.js
node create-admin.js
```

5. **Start development servers**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### Production Deployment

#### Option 1: Traditional VPS/Server Deployment

1. **Server Setup**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib

# Install PM2 for process management
sudo npm install -g pm2
```

2. **Database Setup**
```bash
sudo -u postgres psql
CREATE DATABASE helmets_gears_prod;
CREATE USER your_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE helmets_gears_prod TO your_user;
\q
```

3. **Application Deployment**
```bash
# Clone repository
git clone https://github.com/rajivg5aht/Helmets-and-Gears-Sem3-Website.git
cd Helmets-and-Gears-Sem3-Website

# Install dependencies
npm install
cd frontend && npm install && npm run build
cd ../backend && npm install
```

4. **Environment Configuration**
```bash
# Create production .env file
cat > backend/.env << EOF
DB_NAME=helmets_gears_prod
DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=localhost
PORT=5000
JWT_SECRET=your_production_jwt_secret
NODE_ENV=production
EOF
```

5. **Database Migration**
```bash
cd backend
node update-user-schema.js
node create-admin.js
```

6. **Start with PM2**
```bash
# Start backend
cd backend
pm2 start src/index.js --name "helmets-backend"

# Serve frontend (using serve package)
npm install -g serve
cd ../frontend
pm2 start "serve -s dist -l 3000" --name "helmets-frontend"

# Save PM2 configuration
pm2 save
pm2 startup
```

#### Option 2: Docker Deployment

1. **Create Dockerfile for Backend**
```dockerfile
# backend/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

2. **Create Dockerfile for Frontend**
```dockerfile
# frontend/Dockerfile
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

3. **Create docker-compose.yml**
```yaml
version: '3.8'

services:
  database:
    image: postgres:13
    environment:
      POSTGRES_DB: helmets_gears
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      DB_NAME: helmets_gears
      DB_USER: postgres
      DB_PASSWORD: password
      DB_HOST: database
      JWT_SECRET: your_jwt_secret
    depends_on:
      - database
    volumes:
      - ./backend/uploads:/app/uploads

  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend

volumes:
  postgres_data:
```

4. **Deploy with Docker**
```bash
docker-compose up -d
```

#### Option 3: Cloud Platform Deployment (Heroku)

1. **Prepare for Heroku**
```bash
# Install Heroku CLI
# Create Procfile in root
echo "web: cd backend && npm start" > Procfile

# Create package.json in root for Heroku
cat > package.json << EOF
{
  "name": "helmets-and-gears",
  "version": "1.0.0",
  "scripts": {
    "build": "cd frontend && npm install && npm run build",
    "start": "cd backend && npm start",
    "heroku-postbuild": "npm run build"
  }
}
EOF
```

2. **Deploy to Heroku**
```bash
heroku create your-app-name
heroku addons:create heroku-postgresql:hobby-dev

# Set environment variables
heroku config:set JWT_SECRET=your_jwt_secret
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

## Nginx Configuration

For production deployments, use Nginx as a reverse proxy:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    # Frontend
    location / {
        root /path/to/frontend/dist;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static files (uploads)
    location /uploads {
        proxy_pass http://localhost:5000;
    }
}
```

## SSL Configuration

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

## Monitoring and Maintenance

### PM2 Monitoring
```bash
pm2 status
pm2 logs
pm2 restart all
pm2 reload all
```

### Database Backup
```bash
# Create backup
pg_dump -U your_user -h localhost helmets_gears_prod > backup.sql

# Restore backup
psql -U your_user -h localhost helmets_gears_prod < backup.sql
```

### Log Management
```bash
# Setup log rotation
sudo nano /etc/logrotate.d/helmets-gears

# Add log rotation configuration
/path/to/logs/*.log {
    daily
    missingok
    rotate 52
    compress
    notifempty
    create 644 www-data www-data
}
```

## Troubleshooting

### Common Issues

1. **Database Connection Issues**
   - Check database credentials
   - Verify database server is running
   - Check firewall settings

2. **File Upload Issues**
   - Verify uploads directory permissions
   - Check disk space
   - Validate file size limits

3. **CORS Issues**
   - Update CORS configuration in backend
   - Check frontend API base URL

4. **Performance Issues**
   - Enable gzip compression
   - Implement caching strategies
   - Optimize database queries

### Health Checks

```bash
# Check backend health
curl http://localhost:5000/api/health

# Check frontend
curl http://localhost:3000

# Check database
psql -U your_user -h localhost -d helmets_gears_prod -c "SELECT 1;"
```

## Security Checklist

- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] Database credentials protected
- [ ] File upload restrictions in place
- [ ] Rate limiting implemented
- [ ] Security headers configured
- [ ] Regular backups scheduled
- [ ] Monitoring and alerting setup

## Performance Optimization

1. **Frontend Optimization**
   - Code splitting
   - Image optimization
   - CDN for static assets
   - Caching strategies

2. **Backend Optimization**
   - Database indexing
   - Query optimization
   - Connection pooling
   - Caching layer (Redis)

3. **Infrastructure Optimization**
   - Load balancing
   - Auto-scaling
   - Content delivery network
   - Database replication
