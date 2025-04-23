# Use Node 18 Alpine base image
FROM node:18-alpine

# Enable Corepack to manage Yarn versions
RUN corepack enable

# Set working directory
WORKDIR /app

# Copy only package.json and yarn.lock first for caching
COPY package.json yarn.lock ./

# Install dependencies using the correct Yarn version
RUN yarn install

# Now copy the rest of your app
COPY . .

# Expose app port (adjust if different)
EXPOSE 3000

# Run your dev server or production build here
CMD ["yarn", "dev"]
