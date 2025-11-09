# Build Stage 1
FROM node:22-alpine AS build
RUN corepack enable
WORKDIR /app

COPY package.json pnpm-lock.yaml .
RUN pnpm i

COPY . .
RUN pnpm run build



# Build Stage 2
FROM node:22-alpine
WORKDIR /app

RUN apk add --no-cache curl bash python3
RUN curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp \
    && chmod +x /usr/local/bin/yt-dlp

# Only `.output` folder is needed from the build stage
COPY --from=build /app/.output/ ./

# Change the port and host
ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000
CMD ["node", "/app/server/index.mjs"]
