FROM node:slim
RUN apt-get update \
    && apt-get install -y nginx

WORKDIR /app

COPY . /app/

EXPOSE 80

RUN yarn \
    && yarn build \
    && cp -r dist/* /usr/share/nginx/html \
    && rm -rf /app

CMD ["nginx", "-g", "daemon off;"]    