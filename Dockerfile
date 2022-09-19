FROM amazonlinux:2 AS base
RUN yum update -y \
  && curl -sL https://rpm.nodesource.com/setup_16.x | bash \
  && yum install -y nodejs \
  && npm install --location=global typescript \
  && npm install --location=global firebase-tools
FROM base
WORKDIR /myapp
COPY . .
RUN npm install \
  && npm run build
ENTRYPOINT ["npm", "run", "start"]