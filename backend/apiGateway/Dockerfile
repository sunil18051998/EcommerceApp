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

# Configure SSL environment variables
ENV SSL_CERT_FILE=/etc/ssl/certs/ca-certificates.crt \
    NODE_EXTRA_CA_CERTS=/etc/ssl/certs/ca-certificates.crt \
    SSLKEYLOGFILE=/dev/null

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
ENV PORT=3000

# Expose port
EXPOSE 3000

# Start command
CMD ["node", "apigateway.js"]
