## Dolzanes Pizza

The goal of this project is to provide a modern and easy to use order management system.

## Features

- [x] Configure database using ORM Prisma and Sqlite
- [x] CRUD users.
- [x] Log a user using JWT.
- [x] Verify authentication for private routes using Middlewares.
- [ ] Show logged in user details.
- [ ] Create new Categories and List Categories.
- [ ] Create new Products and List Products from a specific category.
- [ ] Upload product image using multer
- [ ] Open an order table and Close a table.
- [ ] Add items to a table and also remove items.
- [ ] Submit order and withdraw from draft.
- [ ] List all orders.
- [ ] Access all order details.
- [ ] Complete order.

## Requirements

- Node v14.17.1
- Npm v6.14.13
- Git

## API Documentation

## Users

**GET /users**

Returns all users in the system.

- Content

```
{
  "users": [
    {
      "id": "a0b4cdf4-db08-416f-a5ff-dda598fab71f",
      "name": "admin",
      "email": "admin@admin.com"
    }
  ]
}
```

**POST /users**

Creates a new User and returns the new object.

- Data Body

```
{
  "name": "Admin",
  "email": "admin@admin.com",
  "password": "123456"
}
```

- Content

```
{
  "message": "User created successfully"
}
```

**PUT/users**

Update a User and returns the updated object.

- Params

```
/api/users/:email
```

- Data Body

```
{
  "name": "Admin",
  "password": "123456"
}
```

- Content

```
{
  "status": 200
  "message": "User updated successfully"
}
```

## Run Locally

Clone the project

```bash
  git clone git@github.com:fdolzanes1/node-api-pizza.git
```

Go to the project directory

```bash
  cd node-api-pizza
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
