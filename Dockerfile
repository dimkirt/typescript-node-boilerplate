# First stage: Build the app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY . .

# Install dev dependencies and build the app then
# clean up dev dependencies and install production only deps
RUN npm ci \
    && npm run build \
    && rm -rf /node_modules \
    && npm ci --only=prod

# Second stage: Copy the app and dependencies to a distroless image
FROM gcr.io/distroless/nodejs:20

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

CMD ["dist/main.js"]
