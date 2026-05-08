# 📈 Zerodha Clone - Full Stack Trading Platform

A comprehensive, full-stack web application replicating the core UI/UX and functionalities of Zerodha's Kite trading platform. This project features a modular architecture, separating the public-facing landing site from the secure user trading dashboard.


## 🚀 Features

* **Full MERN Stack Integration:** A complete end-to-end flow from MongoDB to React.
* **Dual-Application Architecture:** Separated React environments for the public website (`/frontend`) and the trading console (`/dashboard`).
* **Modern UI with Bootstrap:** Leverages Bootstrap 5 for core components alongside custom catchy, high-contrast CSS.
* **User Authentication:** Secure login and registration systems to protect user trading data.
* **Database-Driven Dashboard:** The trading console dynamically fetches and displays portfolio data stored in MongoDB.


## 🛠️ Tech Stack

**Frontend (Landing & Information Pages)**
* React.js
* Bootstrap 5
* Custom CSS3 (High-contrast styling & UI/UX optimization)

**Dashboard (Trading Console)**
* React.js
* Component-driven UI

**Backend (API & Data)**
* Node.js & Express.js
* MongoDB


## 📂 Project Structure

This repository follows a unified monorepo structure to manage all micro-applications in one place:

```text
zerodha-clone/
├── backend/            # Express.js & MongoDB backend for APIs and data storage
├── dashboard/          # React application for the authenticated user trading dashboard
├── frontend/           # React application for the public landing pages (Home, About, etc.)
├── .gitignore          # Root-level git rules for node_modules and env files
└── README.md           # Project documentation
```

##🚧 Project Status & Roadmap
[x] Database Integration: Successfully fetching portfolio data from MongoDB.

[x] Authentication: User login and signup functionality is live.

[ ] Full Mobile Responsiveness: Currently refining Bootstrap grid layouts for consistent display across all mobile devices.

[ ] Live Market Data: Future integration with external APIs (like Upstox or Alpha Vantage) for real-time price updates.

⚙️ Getting Ready
Follow these steps to get the project up and running on your local machine.

1. Clone the Repository
First, clone the repository to your local system:

```bash
git clone [https://github.com/DebankurSaikia/zerodha-clone.git](https://github.com/DebankurSaikia/zerodha-clone.git)
cd zerodha-clone
```

2. Set Up the Backend
Navigate to the backend folder, install dependencies, and start the server:

```bash
cd backend
npm install
npm start
```
3. Launch the Public Frontend
In a new terminal window, start the landing page application:

```bash
cd frontend
npm install
npm start
```

4. Open the Trading Dashboard
In another terminal window, start the user dashboard:

```bash
cd dashboard
npm install
npm start
```

👨‍💻 Developer
Developed by Debankur Saikia.
