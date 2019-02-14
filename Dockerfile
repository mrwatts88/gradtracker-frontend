FROM registry.uwm-nm-te-capstone.com:8083/general/node-docker:latest

COPY . /app

# Create app directory
WORKDIR /app

RUN npm install \
    && npm rebuild node-sass \
    && npm run build

CMD ["npm", "start"]