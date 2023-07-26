FROM node:alpine AS huldra
WORKDIR /app
COPY package.json  .
COPY package-lock.json .
RUN npm ci
COPY . .
ARG REACT_APP_FIREBASE_API_KEY
ARG REACT_APP_FIREBASE_APP_ID
ARG REACT_APP_FIREBASE_AUTH_DOMAIN
ARG REACT_APP_FIREBASE_MESSAGING_SENDER_ID
ARG REACT_APP_FIREBASE_PROJECT_ID
ARG REACT_APP_FIREBASE_STORAGE_BUCKET
ARG REACT_APP_FIREBASE_ROOT_DIRECTORY
COPY env-script.sh .
CMD [ "./env-script.sh" ]
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=huldra /app/build /usr/share/nginx/html
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'