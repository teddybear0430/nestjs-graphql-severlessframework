# nestjs-graphql-severlessframework

NestJSで構築したGraphQLサーバです。   
デプロイ後に以下のcurlコマンドを実行すると、Lambda上でGraphQLサーバが実行されて、GraphQLのクエリが返却されます。

```
curl 'https://{endpoint}.execute-api.{region}.amazonaws.com/dev/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1'  --data-binary '{"query":"query {\n  todos {\n    id\n    title\n  }\n}"}' --compressed
```

## 使用技術

- TypeScript
- Node.js
- GraphQL
- NestJS
- Serverless Framework

## 設定

### .sample.envをコピーする

```
cp .sample.env .env
```

### .envに必要な情報を設定する

- AWS_ACCESS_KEY・・・アクセスキー
- AWS_SECRET_KEY・・・シークレットキー
- AWS_DEFAULT_REGION・・・リージョン

```
AWS_ACCESS_KEY=
AWS_SECRET_KEY=
AWS_DEFAULT_REGION=
```

### Dockerイメージをビルドして、コンテナを立ち上げる

```
docker-compose build
```

```
docker-compose up -d
```

## ローカル環境

### Dockerコンテナを立ち上げた後に、以下のURLにアクセスするとGraphQL Playgroundが立ち上がります

GraphQL Playgroundブラウザ上でGraphQLクエリを実行したり、レスポンスを確認することができます。

```
http://localhost:3000/graphql
```

### Dockerコンテナを立ち上げた後に、以下のコマンドを実行するとローカル環境上でAPIのレスポンスを確認できます。

```
sls offline start
```

## デプロイ

Dockerコンテナの中に入って、以下のコマンドを実行します。

```
sls deploy
```
