# Full-Stack Technical Challenge – Auto-Generated Blog (AWS + Docker)

Welcome! This is a technical exercise for a full-stack / DevOps-oriented developer.

You have **1 week** from receiving this challenge to complete it.

The goal is to build and deploy a **simple auto-generated blog** using:
- **React** (frontend)
- **Node.js** (backend)
- **Docker**
- **AWS EC2 + CodeBuild + ECR**

> ❗ **Important:**  
> - Deploy only on **EC2**.  
> - **Do NOT use ECS** (not required for the challenge).  
> - Use **free-tier AWS** as much as possible.  
> - AI text generation may use a **free API** or **max $5** on a paid API.

---

## 1. What You Must Submit

At the end of the challenge, send an email to:

**📩 hiring@asimtria.com**

with the subject:

**`[Tech Challenge] - <Your Name>`**

### Your email must include **three things**:

1. **Live URL**  
   - Link to your deployed app running on EC2.

2. **Code Repository**  
   - A link to a **public GitHub repo** containing:
     - Source code  
     - Dockerfiles  
     - Infrastructure config (CodeBuild, etc.)  
     - Any notes needed to run locally

3. **Short Video (30–120 seconds)**  
   - Briefly introduce yourself  
   - Explain what you built  
   - Explain your technical decisions  
   - Mention what you would improve with more time  
   - Any video platform is fine (YouTube unlisted, Loom, Drive, etc.)

---

## 2. Application Requirements

### Frontend (React)

- Should display a list of blog articles  
- Should display full content when clicking an article  
- Built using React, Dockerized  

### Backend (Node.js)

- Provides endpoints to:
  - List all articles
  - Retrieve a single article
- Generates new articles using one of the AI/text methods below  
- Dockerized

### Storage

- Your choice:
  - JSON file  
  - SQLite  
  - Postgres  
  - Any simple persistent option on EC2  

No constraints here — pick what you’re comfortable with.

---

## 3. AI / Text Generation Options

Your backend must generate articles using **one of the following** options:

### **Option A – Free API (Recommended)**

You may use any of these:

- HuggingFace Inference API (free models)
- OpenRouter free-tier models
- DeepInfra free-tier
- Replicate free models

→ Easily **€0 cost**.

### **Option B – OpenAI (Max ~$5)**

You can use OpenAI models, but:

- Use your own API key
- Spend **no more than $5**

### **Option C – Local Small Model**

You may run an open-source model locally inside the backend container.

---

## 4. Automation Requirements

The system must:

- Automatically generate **1 new article per day**
- Already contain **at least 3 articles** when we check it

You can implement scheduling using:

- A **cron job** on EC2, or  
- A scheduler inside Node.js (e.g. `node-cron`)

Either is fine as long as it works.

---

## 5. Infrastructure Requirements

This task evaluates your ability to set up real deployment workflows.

### AWS Resources

You must use:

- **EC2**  
  - One instance  
  - Hosts your dockerized frontend + backend  
  - **Do NOT use ECS**

- **ECR**  
  - Store your Docker images

- **CodeBuild**  
  - Pulls your repo  
  - Builds Docker images  
  - Pushes images to ECR

### Docker

- Both frontend and backend must have separate Dockerfiles
- You can include a `docker-compose.yml` for local dev

### Basic Deployment Flow

One acceptable example:

1. Push code to GitHub  
2. CodeBuild:
   - Pulls repo  
   - Builds Docker images  
   - Pushes to ECR  
3. EC2:
   - Pulls and runs the latest images  
4. App runs on EC2 public IP

You may automate this or run manually — just explain what you did.

---

## 6. Suggested Folder Structure

├── backend/
│   ├── src/
│   │   ├── index.js
│   │   ├── routes/
│   │   ├── services/
│   │   │   ├── aiClient.js
│   │   │   └── articleJob.js
│   │   └── models/
│   ├── package.json
│   ├── Dockerfile
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   │   └── client.js
│   │   └── App.jsx
│   ├── package.json
│   ├── Dockerfile
│   └── README.md
│
├── infra/
│   ├── buildspec.yml
│   ├── docker-compose.yml
│   └── scripts/
│       ├── deploy.sh
│       └── init-ec2.sh
│
├── docs/
│   └── ARCHITECTURE.md
│
└── README.md
Feel free to adjust, but keep it clean and documented.

---

## 7. Evaluation Criteria

We look at:

- End-to-end execution  
- Working deployment  
- Quality and clarity of code  
- Docker & AWS understanding  
- Clean build pipeline (CodeBuild + ECR)  
- Reasonable AI integration  
- Clear thinking in your video  
- Ability to communicate your decisions

We do **not** expect perfection.  
We expect you to show **ownership, reasoning, and autonomy**.

---

## 8. Submission Summary

Send everything to:

**📩 hiring@asimtria.com**

With subject:

**`[Tech Challenge] - <Your Name>`**

Include:

- **1. Link to deployed app**
- **2. Link to GitHub repo**
- **3. Video link (30–120 sec)**

Thank you and good luck!
