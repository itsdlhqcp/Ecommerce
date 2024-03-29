﻿# Ace E-commerce MERN App

Welcome to Ace E-commerce MERN App, a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This e-commerce app is designed to provide a seamless shopping experience for users and a robust management system for administrators.

![image](https://github.com/itsdlhqcp/Ecommerce/assets/95963252/210f90d8-8826-4a51-b791-49811a0083dd)

![image](https://github.com/itsdlhqcp/Ecommerce/assets/95963252/aeffa10a-2f9e-43b1-adf0-af2b4ea58399)

![image](https://github.com/itsdlhqcp/Ecommerce/assets/95963252/8f982f42-3974-4a3c-b0e0-6b98c7ff56d8)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Secure user authentication and authorization.
- **Product Management:** Admins can add, update, and delete products.
- **Shopping Cart:** Users can add products to their shopping cart and proceed to checkout.
- **Order Management:** Admins can manage and fulfill customer orders.
- **Responsive Design:** Ensures a seamless experience on various devices.

## Installation

1. **Clone the Repository:**
   ```
   git clone https://github.com/itsdlhqcp/Ecommerce
   cd ace-ecommerce-mern-app
   ```

2. **Install Dependencies:**
   ```
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the Application:**
   - In the `server` directory, run:
     ```
     npm start
     ```
   - In the `client` directory, run:
     ```
     npm start
     ```

## Usage

1. **Visit the Website:**
   - Open your browser and go to `http://localhost:3000` to access the e-commerce application.

2. **Explore the Features:**
   - Browse products, add them to your cart, and proceed to checkout.
   - Log in as an admin to manage products and orders.

## Technologies

- **Frontend:**
  - React.js
  - Redux for state management
  - Axios for API requests
  - React Router for navigation

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database
  - Mongoose for ODM
  - JSON Web Tokens (JWT) for authentication

## Contributing

Contributions are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for using Ace E-commerce MERN App! If you have any questions or issues, feel free to open an [issue](https://github.com/itsdlhqcp/Ecommerce/issues). Happy coding!
