# Import image argument
ARG image

# Pull image from argument
FROM $image

# Install global packages
RUN npm install -g typescript

# Set directory to server part
WORKDIR /src

# Add dependencies files
ADD package.json .
ADD package-lock.json .

# Install dependencies
RUN npm install

# Compile files and launch server
CMD tsc && \
    node app.js
