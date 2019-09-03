ARG DOCKER_REGISTRY

FROM $DOCKER_REGISTRY/general/docker-images/node-docker:latest

# Create app directory
WORKDIR /app

# Copy source code
ADD . /app

# Install dependencies and build the app
RUN npm install \
    && npm rebuild node-sass \
    && npm run build:local-docker \
    && npm run build:deployed

# Set entrypoint
CMD ["npm", "start"]
