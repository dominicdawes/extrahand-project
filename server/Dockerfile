FROM node:16-alpine

# Define working dir
WORKDIR /app

# Identify pkg.json and copy it
COPY package*.json ./

RUN npm install

COPY . . 

# Expose port from index.js (or .ENV vars)
EXPOSE 8080 

# Start the node.js app
CMD ["node", "index.js"]