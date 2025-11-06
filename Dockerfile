# Stage 1: Build the React app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app (Vite outputs to dist folder)
RUN npm run build

# Stage 2: Serve app with nginx server
FROM nginx:alpine

# Copy the custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy SSL certificates if they exist (optional - comment out if not using SSL)
# COPY ssl/e822a21acfa412f0.crt /etc/nginx/ssl/e822a21acfa412f0.crt
# COPY ssl/gd_bundle-g2-g1.crt /etc/nginx/ssl/gd_bundle-g2-g1.crt
# COPY ssl/e822a21acfa412f0.key /etc/nginx/ssl/e822a21acfa412f0.key

# Copy the dist folder from builder stage to Nginx HTML directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 and 443 to the outside world
EXPOSE 80
EXPOSE 443

# Start Nginx when the container has provisioned
CMD ["nginx", "-g", "daemon off;"]
