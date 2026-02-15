FROM node:20-alpine
WORKDIR /app
# Solo copiamos el package.json primero para optimizar la caché de Docker
COPY package*.json ./
RUN npm install
# El código fuente no se copia aquí, se inyectará desde el docker-compose
CMD ["npm", "start"]

