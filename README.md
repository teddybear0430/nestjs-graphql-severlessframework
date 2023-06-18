# nestjs-graphql-severlessframework

NestJSで構築したGraphQLサーバ。   

## 設定

### .sample.envをコピーする

### .envに必要な情報を設定する

### Dockerイメージをビルドして、コンテナを立ち上げる

## デプロイ

## 実行

```
curl 'https://*.execute-api.ap-northeast-1.amazonaws.com/dev/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1'  --data-binary '{"query":"query {\n  todos {\n    id\n    title\n  }\n}"}' --compressed
```
