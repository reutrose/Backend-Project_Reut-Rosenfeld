# CardsServer Project

This project is a Node.js server integrated with MongoDB, developed as part of a Full-Stack Web Development course. It provides a backend solution for managing business cards and incorporates user authentication, role-based permissions, and advanced functionalities to enhance user experience and system security.

## Table of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Initial Data](#initial-data)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

CardsServer is a backend application designed to handle business card management. It supports user authentication, rate limiting, and role-based functionalities. The server offers robust security measures and additional enhancements to ensure reliable operation.

---

## Built With

- [Node.js]
- [Express.js]
- [MongoDB]
- [Mongoose]
- [Joi]
- [JsonWebToken]
- [Bcrypt.js]
- [Morgan]
- [dotenv]

---

## Getting Started

### Installation

1. Clone the repository:

   git clone https://github.com/reutrose/Backend-Project_Reut-Rosenfeld
   cd CardsServer

2. Install dependencies:

   npm install

### Running the Project

- **Development Mode**: Start the server with Nodemon:
  npm run dev

- **Production Mode**: Start the server with Node.js:
  npm start

### Initial Data

When the server starts and begins listening on the specified port, the createInitialData() function is triggered to populate the database with three example users and three example cards. To enable this functionality, ensure the .env file is included in the project. If the .env file is missing, the initial data will not be generated.

The .env file also stores the default passwords for these users, allowing you to perform specific actions or tests using their credentials.

---

## Bonus Features

- **Login Limiting**: Login attempts are restricted to prevent brute force attacks.
- **Admin Controls**: Admin users can modify the business number of cards if not already taken.
- **Error Logging**: All errors with status codes above 400 are logged in daily files, named after the respective date.

---

## Contributing

This project is part of a Full-Stack Web Development course. Contributions are not required, but feedback and suggestions are always welcome.

---

## License

Distributed under the ISC License.

---

## Contact

**Name:** Reut Rosenfeld  
**Email:** reutroz@gmail.com  
**Phone:** +972 50 294 4421
