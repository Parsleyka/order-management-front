FROM node:18

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["bash", "-c", "npm run build && npm run preview"]