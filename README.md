Simple video library project created by OnlyDevs (students of Vilnius University)
# OnlyDevs
___
Install node modules by running:
```
cd Frontend && npm ci
```
you can skip `cd Frontend &&` if the working directory is already `*/Frontend`

## Scripts

In the `Frontend` directory, run:

### Start dev server:
```
npm start
```

### Run tests in watch mode:
```
npm test
```
Name JS test folders `__tests__`.\
Name JS test files with `.test.js` suffix.

### Build for production:
```
npm run build
```
Builds the app to the `build` folder.

# Backend

## How to start backend
- apply migrations
- in project dir, in terminal do ```dotnet run```
- in browser go to ```http://localhost:5000/swagger```

## Migrations
### Apply migrations
```
dotnet ef database update
```

### Create new migration
```
dotnet ef migrations add <new_migration_name>
```
