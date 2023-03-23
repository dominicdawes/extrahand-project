# Initialize the Docker environment using Alpine Linux 
FROM node:16-alpine

# Define working dir
WORKDIR /app

# Identify pkg.json and copy it
COPY package*.json ./

RUN npm install

# copy files from outside the container into it
COPY . .

# init next js and build
RUN npm run build

# Expose port from index.js (or .ENV vars)
EXPOSE 8080 

# Start the nextjs app
CMD ["npm", "start"]