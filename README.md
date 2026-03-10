# Edrian Mariñas — Software Developer
**🌐 Live:** [edrian-marinas.vercel.app](https://edrian-marinas.vercel.app)

---

Metro Manila, PH · [LinkedIn](https://linkedin.com/in/edrian-a-marinas) · [GitHub](https://github.com/edrian-a-marinas) · edrian.a.marinas@gmail.com

---

## Skills

| Area | Technologies |
|------|-------------|
| Back-end | Python, FastAPI, REST APIs, Pydantic, asyncpg, Type Annotations |
| Database | PostgreSQL, MySQL, SQL, Supabase, DB Modeling |
| Front-end | TypeScript, React, Zod, Vite, JavaScript, HTML/CSS, Tailwind |
| Tools | Git, GitHub, Postman, Vercel, Render, Linux/CLI, VS Code |
| Concepts | JWT Auth, RBAC, HTTP, Routing, End-to-End Type Safety, Schema Validation |

---

## Projects

### [TransacScope](https://transacscope.vercel.app) — Role-Based Business Finance & Transaction Management System `2026`
A finance management web app adaptable to any business, where admins can fully manage categories, users, and roles to fit their operations.
- Role-based access control (Super Admin, Admin, Standard User) with JWT authentication, email verification, and backend rate limiting to prevent brute-force attacks
- 37 secured REST API endpoints across 11 database tables — covering transaction CRUD, deletion workflows, notifications, audit logs, and report generation. Tested via Postman with Bearer token auth
- Password security: 90-day expiry with a forced change gate, 7-day reuse prevention via password history, and a protected demo account with role-locked access
- 13 modal components handling the full user interaction layer — multi-step flows, role-gated views, and real-time notification deep-linking
- End-to-end type safety and data validation via Pydantic (backend) and Zod (frontend) — database constraints: CHECK, FK integrity, ENUMs, and partial unique indexes

**Stack:** Python · FastAPI · PostgreSQL · React · TypeScript · Vite · Zod · Pydantic

---

### Personal AI Profile Assistant `2026`
AI-powered personal chatbot using FastAPI and React, powered by a locally-running Ollama model — answers questions about my skills, background, and personal details.
- Handles complex and open-ended questions via the Ollama AI backend, running entirely locally on-device without any external API calls
- Implements fast predefined responses for common queries (greetings, age, contacts) for instant replies without hitting the AI model

**Stack:** Python · FastAPI · React · Ollama · REST API · JavaScript

---

## Extra Projects

### Water Level & Temperature Monitoring `2025`
Real-time water level and temperature monitoring system with IoT and a desktop GUI.
- Built using a Raspberry Pi Pico W with HCSR04 ultrasonic and DS18B20 temperature sensors, transmitting live readings via TCP/IP over Wi-Fi
- Desktop GUI in Python (Tkinter + Matplotlib) displaying live graphs with water level and temperature alert states
- Readings automatically logged to MySQL, with critical alerts visually flagged on the graph

**Stack:** Python · Tkinter · Matplotlib · MySQL · Raspberry Pi Pico W · MicroPython · TCP/IP

---

### Payroll CLI `2024`
Command-line Payroll & Employee Management System with PostgreSQL.
- Menu-driven CLI in Python for full employee CRUD — managing status, departments, and job assignments across a relational PostgreSQL schema
- Payroll generation with overtime and deduction calculations, duplicate period prevention, and summary reports with total and average net pay
- Normalized database schema across 5 tables with FK constraints and safe deletion handling

**Stack:** Python · PostgreSQL · asyncpg · SQL · CLI

---

## Experience

**BirdCare – Smart Cage for Optimal Environmental Management** | Software Developer · Capstone Project
Our Lady of Fatima University · March 2025 – November 2025
- Developed an installable mobile app (PWA) using React.js connected to a FastAPI back-end, enabling real-time sensor monitoring, threshold alerts, and a live ESP32-CAM video feed
- Integrated a multi-sensor IoT network (BME680, SCD40, MQ135, PMS5003, JSN-SR04T ultrasonic) via a Raspberry Pi Pico W, transmitting environmental data to Firebase in real time

---

## Education

**Our Lady of Fatima University** — B.S. Information Technology *(2022 – Present)*
**Arellano University** — STEM Strand *(2020 – 2022)*

---

## Certifications

- IT Specialist – Python · Certiport *(2026)*
- Digital Fabric: AI Imperatives and Risk, Quantum Computing, and Automated Business · Seminar and Convention *(2025)*
- Python Essentials 1 & 2 Course · Cisco NetAcad *(2024)*