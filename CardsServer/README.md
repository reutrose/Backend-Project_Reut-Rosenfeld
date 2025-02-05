# CardsServer Project

This project is a **Node.js** backend server integrated with **MongoDB**, developed as part of a Full-Stack Web Development course. It provides a backend solution for managing business cards and incorporates **user authentication, role-based permissions, and advanced functionalities** to enhance user experience and system security.

## Table of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Project](#running-the-project)
  - [Initial Data](#initial-data)
- [Features](#features)
- [Bonus Features](#bonus-features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

**CardsServer** is a backend application designed to handle business card management. It supports user authentication, rate limiting, and role-based functionalities. The server includes security measures such as password encryption and JWT authentication to ensure safe and reliable operations.

---

## Built With

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool
- **Joi** - Data validation library
- **JsonWebToken (JWT)** - Authentication management
- **Bcrypt.js** - Password encryption
- **Morgan** - HTTP request logger
- **dotenv** - Environment variable management
- **CORS** - Cross-origin resource sharing

---

## Getting Started

### Installation

1. Open a terminal in **Visual Studio Code** (or any terminal of your choice):
   ```sh
   Ctrl + Shift + `
   ```
2. Clone the repository:
   ```sh
   git clone https://github.com/reutrose/CardsServer_ReutR.git
   ```
3. Navigate to the project folder:
   ```sh
   cd CardsServer
   ```
4. Install all dependencies:
   ```sh
   npm install
   ```

### Environment Variables

⚠ **IMPORTANT:** Before running the project, make sure you add the **.env** file to the root folder. If the `.env` file is missing, the project will **not** work correctly.

If you are the examiner, please check the **assignment submission** where a `.zip` folder is provided. Inside, you will find the `.env` file that needs to be placed in the **main folder** before starting the server.

### Running the Project

#### Development Mode (local MongoDB):

```sh
npm run dev
```

#### Production Mode (MongoDB Atlas):

```sh
npm start
```

### Initial Data

When the server starts, a function automatically checks whether the database is empty. If it is, **mock data** will be injected for testing purposes.

- Default user credentials (including passwords) are stored in the `.env` file.
- If the `.env` file is missing, the **initial data will NOT be generated**.

---

## Features

### User Management

- **Register** a new user
- **Login** authentication with JWT
- **Retrieve user** information by ID
- **Get all users** (admin only)
- **Update user** information
- **Delete user**
- **Change user role** (admin only, from business to customer)

### Business Card Management

- **Create a card**
- **Get all cards**
- **Get a card by ID**
- **Get user-specific cards**
- **Update a card**
- **Delete a card**
- **Like or Unlike a card**
- **Change the business number** (admin only)

### HTTP Methods Used

- `GET`
- `POST`
- `PUT`
- `PATCH`
- `DELETE`

---

## Bonus Features

- **Admin Privileges**: Admin users can modify business numbers if not already taken.
- **Login Security**: Users are **blocked for 24 hours** if they fail to log in more than **three times** in a row with the same email but incorrect password.
- **File Logging**: All server logs, including errors, are saved into files categorized by date. Find them in the `/logs` folder.

---

## Contributing

This project is for educational purposes, and contributions are not required. However, feedback and suggestions are always welcome!

---

## License

Distributed under the **ISC License**.

---

## Contact

**Reut Rosenfeld**  
📧 Email: [reutroz@gmail.com](mailto:reutroz@gmail.com)  
📞 Phone: +972 50 294 4421

---

## API Documentation

API documentation for this project using **Postman**:

### Cards:

https://documenter.getpostman.com/view/40630650/2sAYX6pN81

### Users:

https://documenter.getpostman.com/view/40630650/2sAYX6pMtj

---

Thank you for reviewing this project! 😊
