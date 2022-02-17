# STAGE 1, "build-stage" using node
# get node
FROM node:14-alpine AS builder

# working directory for the image
WORKDIR /app

# copy all files from current directory to working dir in image

COPY . .

# install node modules and build

RUN npm install && npm run ng build

# STAGE 2

# get nginx
FROM nginx:alpine AS nginx

# set working dir to ngnix asset directory
WORKDIR /usr/share/nginx/html

# remove default nginx static content
RUN rm -rf ./*

# copy static assets from builder stage
COPY --from=builder /app/dist/ng-deploy-demo .

# add nginx configuration to reroute browser url to index.html always
COPY nginx.conf  /etc/nginx/conf.d/default.conf

#if commented : takes the default 80, forward the port when running the image
#EXPOSE 80

