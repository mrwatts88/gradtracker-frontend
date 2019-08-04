ARG DOCKER_REGISTRY

FROM $DOCKER_REGISTRY/general/node-docker:latest

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
