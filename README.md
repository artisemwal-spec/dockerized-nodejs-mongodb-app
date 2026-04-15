# 🚀 Dockerized Node.js + MongoDB Application

## 📌 Project Overview

This project demonstrates how to build, containerize, and deploy a full-stack Node.js application using Docker and Docker Compose with MongoDB integration.

The application is deployed on a cloud-based virtual machine (AWS EC2) and showcases real-world DevOps practices such as container orchestration, service networking, and environment configuration.

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js  
* **Database:** MongoDB  
* **Containerization:** Docker  
* **Orchestration:** Docker Compose  
* **Cloud:** AWS EC2  
* **Registry:** AWS ECR  
* **Other Tools:** Mongo Express (DB UI)

---

## ⚙️ Architecture

* Node.js application runs in a container  
* MongoDB runs in a separate container  
* Mongo Express provides a web UI for DB management  
* All services communicate via Docker network  

---

## 📂 Project Structure

```
js-project/
│
├── app/
│   ├── server.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── test.jpg
├── docker-compose.yml
├── node_modules/
├── index.html-before-mongodb
├── server.js-old
├── test.jpg
└── .gitignore
```

---

## 🚀 Features

* Multi-container setup using Docker Compose  
* Persistent MongoDB database  
* Environment variable configuration  
* Web-based MongoDB admin panel (Mongo Express)  
* Cloud deployment on AWS EC2  
* Service communication using Docker networking  

---

## 🔄 Workflow

1. Developed Node.js application  
2. Created Dockerfile for containerization  
3. Built Docker image locally  
4. Pushed Docker image to AWS ECR  
5. Pulled image on EC2 server  
6. Used Docker Compose to run:
   - Node.js container (from ECR)  
   - MongoDB container (Docker Hub)  
   - Mongo Express container  
7. Deployed application on cloud infrastructure

---

## 🔧 Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

---

### 2️⃣ Run with Docker Compose

```bash
docker-compose up -d
```

---

### 3️⃣ Access Services

* App: http://:3000
* Mongo Express: http://:8081

---

## 🔐 Environment Variables

Example configuration:

```
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=password
```

---

## 🧠 Key Learnings

* Understanding containerization vs virtual machines
* Managing multi-container applications
* Debugging container networking issues
* Deploying applications on cloud infrastructure
* Writing production-like Docker configurations

---

## 📈 Future Improvements

* Add CI/CD pipeline (GitHub Actions)
* Use Nginx as reverse proxy
* Implement secure secrets management
* Add HTTPS using SSL certificates
* Migrate to Kubernetes

---

## 🙌 Author

**Arti Semwal**

---
