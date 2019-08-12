ARG DOCKER_REGISTRY
ARG NODE_ENV

FROM $DOCKER_REGISTRY/general/node-docker:latest

ENV NODE_ENV ${NODE_ENV}
# Create app directory
WORKDIR /app

# Copy source code
ADD . /app

# Install dependencies and build the app
RUN npm install \
    && npm rebuild node-sass \
    && NODE_ENV=${NODE_ENV} npm run build

# Set entrypoint
CMD ["npm", "start"]
