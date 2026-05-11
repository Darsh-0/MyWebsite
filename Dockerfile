# Build stage
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build static files
RUN npm run build


# Production stage
FROM node:22-alpine

WORKDIR /app

# Install a lightweight static server
RUN npm install -g serve

# Copy built output from previous stage
COPY --from=build /app/dist ./dist

# Expose port
EXPOSE 4173

# Serve the built app
CMD ["serve", "-s", "dist", "-l", "4173"]
