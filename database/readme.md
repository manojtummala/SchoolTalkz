## Get started
1. make db named empty postgres db named `schooltalkz`
make sure db is empty
```bash
CREATE DATABASE schooltalkz;
```

2. make a `.env` file and enter db url

```bash
cat << EOF > .env
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/schooltalkz"
EOF
```


3. change username and password with your postgres user and password

4. download node modules
```bash
npm i --legacy-peer-deps
```

5. generate a migration
```bash
npm run migrate_dev
```


while developing use
```bash
npm run dev
```
