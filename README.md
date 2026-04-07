# Smart QA API

An AI-powered Question Answering API built with Node.js that processes user queries and returns intelligent responses using LLM integration.

This project is designed on focusing on clean architecture, observability (logging), and scalable backend patterns.

---

## 🚀 What This Project Solves

Traditional APIs return static data.

This system:

* Accepts **natural language queries**
* Uses an **LLM (Groq/OpenAI)** to generate answers
* Stores interactions for future reference
* Provides **structured logging for debugging and evaluation**

---

## 💡 Why This Design?

While building this, the focus was:

* **Separation of concerns** → Controller vs Service
* **Scalability mindset** → External LLM + DB
* **Observability** → File-based logging (Winston)
* **Developer experience** → Swagger for testing

Instead of tightly coupling logic, the system is designed so each layer has a **clear responsibility**.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <https://github.com/SurajKhonde/ai-powered-qa-api.git>
cd ai-powered-qa-api
```

---

## ⚙️ Environment Setup

Create a `.env` file:

```env
PORT=5000

# MongoDB
MONGO_URI=mongodb://admin:password@localhost:27017/smart-qa?authSource=admin

# LLM Provider
GROQ_API_KEY=your_api_key_here

NODE_ENV=development
```

---

## 🐳 MongoDB Setup

### Option 1: Using Docker (Recommended)

```bash
docker-compose up -d
```

This will:

* Spin up MongoDB
* Create default credentials:

  * Username: `admin`
  * Password: `password`
* Create database: `smart-qa`

---

### Option 2: Local MongoDB

* Use your own Mongo instance
* Update `MONGO_URI`

---

## 🔑 LLM API Key Setup

1. Go to Groq / OpenAI dashboard
2. Generate API key
3. Add to `.env`

---

## ▶️ Run the Application

```bash
npm install
npm run start
```

Server runs at:

```
http://localhost:5000
```

---

## 📘 API Testing

Swagger UI:

```
http://localhost:5000/api-docs/
```

You can:

* Execute APIs
* Inspect request/response
* Test the full flow

---

## 🧪 Example Flow

1. Open Swagger UI
2. Call **Ask Question API**
3. Enter query
4. System:

   * Processes input
   * Calls LLM
   * Stores response
   * Returns answer

---

## 🧠 How RAG Works in This Project

> This project follows a **basic Retrieval-Augmented Generation mindset**, even if simplified.

### Flow:

1. User sends query
2. System checks/stores query in DB
3. Query is sent to LLM
4. Response is generated
5. Response is stored for future reference

### Why this matters:

* Enables **future enhancement with retrieval layer**
* Allows caching or history-based improvements
* Keeps system extensible

👉 Current implementation = **LLM-first approach with storage**
👉 Can evolve into full RAG with embeddings + vector DB

---

## 🏗️ Architecture Overview

```mermaid
flowchart LR
Client["Client (Swagger UI / Frontend)"] -->|"HTTP REST"| API["Express API (Node.js)"]

API -->|"Route Layer"| Controller["Controllers"]
Controller -->|"Business Logic"| Service["Service Layer"]

Service -->|"Query Processing"| LLM["LLM API (Groq / OpenAI)"]

Service -->|"Read/Write"| DB[(MongoDB)]

API -->|"Request Logging"| Logger["Winston Logger"]
Logger -->|"Store logs"| Logs[(Log Files)]

Controller -->|"Error Handling"| ErrorHandler["Global Error Middleware"]
ErrorHandler -->|"Log Errors"| Logger
```

---

## 🔄 Request Lifecycle (Step-by-Step)

1. Client sends request
2. Route receives request
3. Controller validates input
4. Service processes logic
5. LLM generates response
6. Data stored in MongoDB
7. Logger records request + response
8. Response sent back

---

## 🪵 Logging System (Winston)

### Why Logging?

* Debug faster
* Track failures
* Understand system behavior

---

### Features

* File-based logging
* Separate error logs
* Structured JSON logs

---

### Log Files

```
logs/
  app.log
  error.log
```

---

### Example Log

```json
{
  "level": "error",
  "message": "Invalid input",
  "timestamp": "2026-04-07T14:36:29.723Z"
}
```

---

### Important Note

* Stack traces are stored in logs
* Not exposed via API (security best practice)

---

## 🔐 Security Considerations

* Sensitive data not exposed in API responses
* Logs excluded via `.gitignore`
* Environment variables used for secrets

---

## 🧩 Key Features

* AI-powered Q&A system
* Clean layered architecture
* Swagger documentation
* Docker-based setup
* Structured logging
* Error handling middleware

---

## ⚡ Future Improvements

* Full RAG (Vector DB + embeddings)
* Redis caching
* Rate limiting
* Authentication (JWT / cookies)
* Queue system (Bull/Kafka)
* Analytics dashboard

---

## 👨‍💻 Author

**Suraj Khonde**
Full Stack Engineering

---

## 💭 Final Thought

This project is not just about calling an LLM.

It’s about:

* Designing systems cleanly
* Thinking in layers
* Preparing for scale
* Writing code that can evolve

---
