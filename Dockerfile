# FROM registry.uwm-nm-te-capstone.com:8083/general/node-docker:latest
FROM node:10.16.0-alpine

# Create app directory
WORKDIR /app

# Copy source code
ADD . /app

# Install dependencies and build the app
RUN npm install \
    && npm rebuild node-sass \
    && npm run build

# Set entrypoint
CMD ["npm", "start"]
