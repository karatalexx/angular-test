# For start working

You need:
```
npm 6.9.0
node v10.16.3

MongoDB shell version v4.2.0
```

1. At first install run:
```
cp .env.example .env
npm i
npm run seed-db
```
If the last command is not working - check if you have installed and launched MongoDB. 
And check the path to some DB in .env file in var BE_MONGO_DB_PATH. 
Then run the last command again.

2. For start:
- run
```
npm start
```
- open http://localhost:4200 at browser.
