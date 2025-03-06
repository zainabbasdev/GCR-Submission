# StarFeul Petroleum Backend

This repository contains the backend code for the StarFeul Petroleum management system. The backend is built using Node.js, Express, and MongoDB. It provides various APIs to manage sales, stock, expenditures, reports, and more.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Controllers](#controllers)
- [Routes](#routes)
- [License](#license)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/zainabbasdev/starfeul-petroleum.git
   cd Backend
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

## Configyration

The MongoDB connection URI is configured in the `db.js` file. Ensure that MongoDB is running and the URI is correctly set.

## Project Structure

    .
    ├── config/
    │   └── db.js
    ├── controllers/
    │   ├── amanatBookController.js
    │   ├── dipController.js
    │   ├── expenditureController.js
    │   ├── factoryController.js
    │   ├── generateReport.js
    │   ├── khataBookController.js
    │   ├─ mobileOilSaleController.js
    │   ├── mobileOilStockController.js
    │   ├── reportController.js
    │   ├── salesController.js
    │   ├── stockController.js
    │   └── updateStocks.js
    ├── models/
    │   ├── DailyDIP.js
    │   ├── DailyStock.js
    │   ├── Expenditure.js
    │   ├── KhataBook.js
    │   ├── MobileOilSale.js
    │   ├── MobileOilStock.js
    │   ├── Sales.js
    │   ├── Stock.js
    │   └── StockHistory.js
    ├── routes/
    │   ├── dipRoutes.js
    │   ├── expenditure.js
    │   ├── mobileOilSale.js
    │   ├── mobileOilStock.js
    │   ├── reportRoutes.js
    │   ├── sales.js
    │   ├── khataBookRoutes.js
    │   └── stock.js
    ├── .gitignore
    ├── index.js
    ├── package.json
    └── README.md

## Models

The models are defined using Mongoose and are located in the `models` directory. Each model represents a collection in the MongoDB database.

## Controllers

The controllers handle the business logic and are located in the `controllers` directory. Each controller corresponds to a specific model and provides functions to handle various operations.

## Routes

The routes define the API endpoints and are located in the `routes` directory. Each route file corresponds to a specific controller and maps HTTP requests to controller functions.
