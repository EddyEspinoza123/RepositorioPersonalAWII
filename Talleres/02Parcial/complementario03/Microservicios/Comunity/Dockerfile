#imagen de node
FROM node 
#copia de ficheros locales
COPY . /var/www
#directorio del server mochine
WORKDIR /var/www
#instalar dependecia
RUN npm install --only=production
#exponer puertos de ejecucion del servidor
EXPOSE 8000
#entrypoint el cual es para iniciar server desde comendao start de package json
ENTRYPOINT ["npm","start"]
