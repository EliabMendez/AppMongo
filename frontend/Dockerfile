FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
# Instalamos el CLI globalmente en el contenedor para poder correr el servidor
RUN npm install -g @angular/cli
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]
