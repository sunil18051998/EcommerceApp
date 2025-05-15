# Build stage
FROM node:20-bullseye as builder

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./
COPY package-lock.json ./

# Clear npm cache and install dependencies
RUN npm cache clear --force && \
    npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Verify build output
RUN ls -la dist
RUN test -f dist/index.html && echo "Build files exist" || (echo "Build files missing" && exit 1)

# Production stage
FROM nginx:alpine

# Copy build files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Verify nginx config
RUN nginx -t

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
