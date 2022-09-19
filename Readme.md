# React × Firebase を使ったTwitterクローンアプリ

Twitterのようなタイムラインを模写したSNSアプリになります。
Firebaseを使用しており、投稿した内容はリアルタイムにWEBアプリにアクセスしているユーザーに反映されます。

## set up
```
docker compose up -d
docker compose exec nodejs bash
```
```
firebase login --no-localhost
```
## dev up
```
npm run start
```

## firebase deploy
```
npm run deploy
```
