Przykładowy projekt pokazujący technikę webscraping za pomocą AWS Lambda.

Musisz posiadać Node.js oraz Serverless Framework, sprawdź [Jak zainstalować Serverless Framework?](https://serverlesspolska.pl/2019/01/05/Jak-zainstalowac-Serverless-Framework/)

Przetestowano na Ubuntu.

# Użycie lokalne

```
npm i
npm run browser-search
```

# Deployment do chmury

```
sls deploy
```

# Uruchomienie w chmurze
```
sls invoke -f search
```

