FROM node:18-alpine

RUN npm install -g serverless @nestjs/cli

ARG AWS_ACCESS_KEY
ARG AWS_SECRET_KEY

# AWSの認証情報を~/.aws/credentialsに書き込む
# Serverless Frameworkは~/.aws/credentialsの認証情報を利用する
RUN serverless config credentials --provider aws --key $AWS_ACCESS_KEY --secret $AWS_SECRET_KEY

WORKDIR /app
