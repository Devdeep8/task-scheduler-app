# 🧠 Task Scheduler App

A minimal yet powerful task manager built with:

✅ Undo/Redo functionality using database-backed history  
🧩 Next.js (Page Router) + Prisma ORM for backend  
💅 Shadcn UI + Tailwind CSS for a sleek frontend  
🐳 Fully Dockerized (ready for production)  

---

## 🚀 Features

- Add, Undo, and Redo tasks with persistent state
- Type-safe backend using Prisma + PostgreSQL
- Built for learning how to structure fullstack apps cleanly
- Uses in-memory stacks for Undo/Redo, synced with the database

---

## 🧰 Tech Stack

**Frontend:**  
- [Next.js (Page Router)](https://nextjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

**Backend:**  
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

**Infrastructure:**  
- [Docker](https://www.docker.com/)

---

## 🛠️ Getting Started

```bash
git clone https://github.com/your-username/task-scheduler-app
cd task-scheduler-app
docker-compose up --build
