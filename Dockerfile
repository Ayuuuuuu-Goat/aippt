FROM python:3.11-slim-bookworm

ARG TARGETARCH=amd64

# Install Node.js and npm
RUN apt-get update && apt-get install -y --no-install-recommends \
    nginx \
    curl \
    libreoffice \
    fontconfig \
    chromium && \
    rm -rf /var/lib/apt/lists/*


# Install Node.js 20 using NodeSource repository (fallback to ARM-compatible packages when needed)
RUN if [ "$TARGETARCH" = "amd64" ]; then \
      curl -fsSL https://deb.nodesource.com/setup_20.x | bash -; \
    else \
      curl -fsSL https://deb.nodesource.com/setup_20.x | bash -; \
    fi && \
    apt-get update && apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*


# Create a working directory
WORKDIR /app  

# Set environment variables
ENV APP_DATA_DIRECTORY=/app_data
ENV TEMP_DIRECTORY=/tmp/presenton
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV PUPPETEER_SKIP_DOWNLOAD=1


# Install ollama when supported by architecture
RUN if [ "$TARGETARCH" = "amd64" ]; then \
      curl -fsSL https://ollama.com/install.sh | sh; \
    else \
      echo "Skipping Ollama install on $TARGETARCH"; \
    fi

# Install dependencies for FastAPI
RUN pip install aiohttp aiomysql aiosqlite asyncpg fastapi[standard] \
    pathvalidate pdfplumber chromadb sqlmodel \
    anthropic google-genai openai fastmcp dirtyjson
RUN pip install docling --extra-index-url https://download.pytorch.org/whl/cpu

# Install dependencies for Next.js
WORKDIR /app/servers/nextjs
COPY servers/nextjs/package.json servers/nextjs/package-lock.json ./
RUN npm install


# Copy Next.js app
COPY servers/nextjs/ /app/servers/nextjs/

# Build the Next.js app
WORKDIR /app/servers/nextjs
RUN npm run build

WORKDIR /app

# Copy FastAPI
COPY servers/fastapi/ ./servers/fastapi/
COPY start.js LICENSE NOTICE ./

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port
EXPOSE 80

# Start the servers
CMD ["node", "/app/start.js"]