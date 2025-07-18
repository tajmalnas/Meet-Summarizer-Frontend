# 🧠 AI-Powered Meeting Minutes Extractor – Frontend

This is the **frontend** for the AI-powered meeting summarizer. Users can **paste raw meeting notes or upload a `.txt` file**, and the app uses an AI backend to extract:

- 📌 A concise **summary**
- 📋 Key **decisions**
- ✅ Structured **action items** (task, owner, deadline)

The result is shown in both **JSON format** and a **beautiful visual layout**.

---

## 🚀 Features

- 🎨 Sleek modern UI built with **React**, **TypeScript**, and **Tailwind CSS**
- 📝 Accepts input as plain text or `.txt` file
- 🔁 Interacts with a backend API (`/process-meeting`)
- 💡 Displays both raw JSON and formatted UI
- 🔄 Real-time feedback with loading animations

---

## 🛠️ Tech Stack

| Tech             | Description                      |
|------------------|----------------------------------|
| ⚛️ React + Vite   | Fast frontend framework          |
| 🔡 TypeScript     | Typed JS for better DX           |
| 🎨 Tailwind CSS   | Utility-first styling framework  |
| 💅 ShadCN UI      | Reusable and accessible UI kit   |
| 🌐 Fetch API      | For calling backend endpoints    |

---

## 📂 Project Structure

```
/src
  /components        → UI components (button, card, textarea, etc.)
  /pages         
  /App.tsx
  /main.tsx
tailwind.config.ts
vite.config.ts
```

---

## ⚙️ How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/tajmalnas/Meet-Summarizer-Frontend.git
cd ai-meeting-minutes-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the frontend dev server

```bash
npm run dev
```

The app will be running on:  
👉 **http://localhost:5173**

> Make sure the **backend** is running at `http://localhost:3000`.

---


## 🧪 Backend API

This frontend sends a `POST` request to:

```
POST http://localhost:3000/process-meeting
```

Supports:
- `text/plain` JSON body
- `.txt` file via multipart/form-data

Returns:

```json
{
  "summary": "...",
  "decisions": [...],
  "actionItems": [
    {
      "task": "...",
      "owner": "...",
      "due": "..."
    }
  ]
}
```

---

## 📁 Sample `.env` (optional if needed)

If you connect to an environment-specific API:

```
VITE_API_URL=http://localhost:3000
```

---

## 👨‍💻 Author

Built with ❤️ by **Taj Malnas**  
📧 tajmalnas36@gmail.com  
📞 +91-7796327571

---
