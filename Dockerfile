FROM node:slim
MAINTAINER xiaoranran
RUN apt-get update \
    && apt-get install -y nginx
    && apt-get purge -y --auto-remove

WORKDIR /app

COPY . /app/

EXPOSE 80

RUN yarn \
    && yarn build \
    && cp -r dist/* /usr/share/nginx/html \
    && rm -rf /app

CMD ["nginx", "-g", "daemon off;"]    