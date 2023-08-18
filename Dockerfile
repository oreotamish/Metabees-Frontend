FROM node:18 as base
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# FROM nginx:1.21.3-alpine
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=base /app/build .
EXPOSE 3000
CMD ["npm", "run", "start"]