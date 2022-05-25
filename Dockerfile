FROM node

# Create app directory
RUN mkdir -p /server
ADD . /server
WORKDIR /server

# RUN npm install

EXPOSE 3000 9229
CMD [ "npm", "start" ]