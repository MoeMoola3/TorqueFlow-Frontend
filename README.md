<p align="center">
  <img width="453" height="75" alt="image" src="https://github.com/user-attachments/assets/91f40780-ed5d-4fd5-a2c7-da4b581712f8" />
</p>

<h1 align="center">⚙️ TorqueFlow Frontend</h1>

<p align="center">
  <b>Real-Time Automotive Data Visualization | React + Spring Boot + GitHub Actions</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.0-blue?logo=react" />
  <img src="https://img.shields.io/badge/MUI-Design-green?logo=mui" />
  <img src="https://img.shields.io/badge/CI/CD-GitHub%20Actions-blueviolet?logo=githubactions" />
  <img src="https://img.shields.io/badge/Deploy-GitHub%20Pages-lightgrey?logo=githubpages" />
  <img src="https://img.shields.io/badge/Backend-Spring%20Boot-green?logo=springboot" />
</p>

---

## 🧭 Overview

**TorqueFlow** is a modern, visually dynamic frontend built with **React.js**, designed to simulate and display **real-time automotive data**.  
It connects to a **Spring Boot backend** (via REST/WebSocket) to visualize live metrics like engine RPM, fuel level, O₂ sensor readings, and more — all rendered through responsive gauges and dashboards.

A *virtual engine control dashboard* built for developers, car enthusiasts, and data geeks.

---

## 🌐 Live Demo

> 🔗 **Coming Soon** (auto-deployed via GitHub Pages on each main branch push)

---

## 📸 Preview

<p align="center">
  <img src="https://github.com/your-username/torqueflow-frontend/assets/dashboard.gif" alt="Live Data Dashboard" width="90%" />
</p>

<p align="center">
  <b>▲ Live Data Gauges reacting to simulated engine modes</b>
</p>

---

## 🚀 Core Features

### 🔴 **1. Live Data Dashboard**
A real-time, animated view of the engine’s simulated telemetry:
- ⛽ **Fuel Level**
- ⚙️ **Engine Load**
- 🔧 **Fuel Trim**
- 🌡️ **Coolant Temperature**
- 🌀 **O₂ Sensor**
- 🏎️ **Throttle Position**
- 🚗 **Speed**
- 💨 **Engine RPM**

Each **engine mode** changes how the gauges react, creating a realistic simulation effect — perfect for visualization demos or testing telemetry UIs.

---

### 📊 **2. Data Log Table**
A clean and responsive log viewer that:
- Displays all recorded metrics over time
- Fetches from the **Spring Boot + MySQL** backend
- Supports smooth scrolling and structured data display

Ideal for reviewing trends or diagnosing simulation behavior.

---

### 🧾 **3. Info Page**
A simple, readable section describing:
- The purpose of TorqueFlow
- How data flows through the system
- What each engine metric represents

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend Framework** | [React.js](https://reactjs.org/) |
| **UI Library** | [Material UI (MUI)](https://mui.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Data Visualization** | [react-gauge-component](https://www.npmjs.com/package/react-gauge-component) |
| **Backend API** | [Spring Boot Backend Repo →](https://github.com/your-username/torqueflow-backend) |
| **Database** | MySQL |
| **CI/CD** | GitHub Actions |
| **Deployment** | GitHub Pages |

---

## 🔁 Continuous Deployment

TorqueFlow uses **GitHub Actions** to automatically build and deploy the app to **GitHub Pages** every time a change is pushed to the `main` branch.


