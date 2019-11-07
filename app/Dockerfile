# Import image argument
ARG image

# Pull image from argument
FROM $image

# Set directory to server part
WORKDIR /src

# Add dependencies files
ADD package.json .
ADD package-lock.json .

# Install dependencies
RUN npm install

# Compile files and launch server
CMD node app.js
