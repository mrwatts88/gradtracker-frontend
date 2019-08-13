ARG DOCKER_REGISTRY

FROM $DOCKER_REGISTRY/general/node-docker:latest

ARG ENVIRONMENT

# Create app directory
WORKDIR /app

# Copy source code
ADD . /app

# Install dependencies and build the app
RUN npm install \
    && npm rebuild node-sass \
    && NODE_ENV=${ENVIRONMENT} npm run build

# Set entrypoint
CMD ["npm", "start"]
