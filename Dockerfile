FROM mcr.microsoft.com/playwright:v1.48.0-noble

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build TypeScript
RUN npx tsc --noEmit

# Create directories for results
RUN mkdir -p __screenshots__ test-results

# Default command runs visual tests
CMD ["npx", "playwright", "test", "--project=visual"]
