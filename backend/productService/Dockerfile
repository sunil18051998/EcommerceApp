# Base image
FROM node:20-bullseye

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install build dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Configure npm for SSL
RUN npm config set registry https://registry.npmjs.org/ && \
    npm config set cafile /etc/ssl/certs/ca-certificates.crt

# Clear npm cache and install dependencies
RUN npm cache clear --force && \
    npm install --omit=dev

# Copy source code
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3004

# Expose port
EXPOSE 3004

# Start command
CMD ["node", "server.js"]
