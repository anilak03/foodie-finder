# 🍔 Foodie Finder

**Foodie Finder** is a mini blog-style web application built with React and Tailwind CSS. It allows users to register, log in, create, edit, and delete food-related blog posts. All data is stored using `localStorage` (no backend).

---

## 🚀 Features

- ✅ User registration and login (auth stored in `localStorage`)
- 📝 Create, edit, delete blog posts (only by the logged-in user)
- 📃 View a list of all food blog posts
- 🔐 Private user dashboard for managing your posts
- 🌐 Simple routing with `react-router-dom`
- 🎨 Styled with Tailwind CSS

---

## 🛠️ Setup Instructions

### Prerequisites

- Node.js and npm installed
- Git installed

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/anilak03/foodie-finder.git
cd foodie-finder
2. Install dependencies
npm install
3.  Run the app
npm start
The app will open at http://localhost:3000.

📁 Folder Structure
src/
├── App.js
├── index.js
├── context/
│   └── AuthContext.js
├── pages/
│   ├── Home.js
│   ├── Login.js
│   ├── Register.js
│   ├── Dashboard.js
│   ├── NewPost.js
│   ├── EditPost.js
│   └── Post.js
