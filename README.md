# GitHub Actions CI/CD Setup  
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description  
This repo contains a full-stack MERN application wired up with a GitHub Actions CI/CD pipeline. On every Pull Request to **develop**, it automatically runs Cypress component tests. When code is merged into **main**, it triggers a Deploy Hook to Render so your live app is always up-to-date.

## Table of Contents  
- [Installation](#installation)  
- [Features](#features)  
- [Tech](#tech)  
- [Usage](#usage)  
- [License](#license)  
- [Contribution](#contribution)  
- [Testing](#testing)  
- [Contact](#contact)  

## Installation  
1. Clone the repo to your machine:  
   ```bash
   git clone https://github.com/langiam/GitHub-Actions-CI-CD-Setup.git
   cd GitHub-Actions-CI-CD-Setup

2. Checkout the `develop` branch (where CI runs):

   ```bash
   git checkout develop
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

## Features

* **CI**: Cypress component tests automatically run on every PR to `develop`.
* **CD**: Merging `develop` → `main` fires a Render Deploy Hook for zero-downtime deploys.
* **Full-stack MERN**: React + TypeScript front end, Node.js + Express + MongoDB back end.
* **Seed script** (optional): Quickly populate your database with sample data.

## Tech

* **Frontend:** React, TypeScript, Vite
* **Backend:** Node.js, Express, MongoDB, Mongoose
* **CI/CD:** GitHub Actions
* **Testing:** Cypress (component tests)
* **Deployment:** Render

## Usage

### Configuring Environment Variables

> *No local `.env` file is required for CI/CD or Render.*

* **On Render**: In your Web Service’s **Settings → Environment**, add:

  * `MONGODB_URI` (your Atlas connection string)
  * Any other `process.env` keys your server requires (e.g. `JWT_SECRET`).
* **In GitHub Actions** (if you ever need DB creds in workflows):

  * Add the same variables under **Settings → Secrets and variables → Actions**.

### Local Development

1. Ensure you have your own MongoDB URI available (Atlas or local).
2. Start the back end:

   ```bash
   npm run start:dev
   ```
3. Start the front end:

   ```bash
   npm run dev
   ```

### Git Workflow

1. Create a feature branch off of `develop`:

   ```bash
   git checkout develop
   git checkout -b feature/my-feature
   ```
2. Push & open a PR to `develop` → runs Cypress CI.
3. Merge when CI passes → code lands on `develop`.
4. Merge `develop` → `main` → triggers Render CD.

## License

This project is licensed under the **MIT** License.
See [LICENSE](LICENSE) for details.

## Contribution

Contributions are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/…`)
3. Commit your changes (`git commit -m 'feat: …'`)
4. Push to your fork and open a Pull Request

## Testing

* Component tests run automatically on PRs to `develop`.
* To run them locally:

  ```bash
  npx cypress open --component
  ```
* Report bugs or request features via the **Issues** tab on GitHub.

## Contact

* **GitHub**: [langiam](https://github.com/langiam)
* **Email**: [ryan.matthew.lang@gmail.com](mailto:ryan.matthew.lang@gmail.com)



