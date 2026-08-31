# 🚀 GKM-Rahul | GitHub PR & Vercel CI/CD Practice Repository

Welcome to **GKM-Rahul**! This repository is built as an interactive hands-on sandbox for learning **Git Branching, Pull Requests (PR), Code Reviews, GitHub Actions, and Vercel CI/CD Auto-Deployments**.

---

## 🌐 Live Vercel Deployment Setup

To make this live on Vercel:
1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Import the GitHub repository: `gkm563/GKM-Rahul`
3. Click **Deploy**!
4. Vercel will build the React Vite application in ~30 seconds and give you a live production URL (e.g. `https://gkm-rahul.vercel.app`).
5. **Vercel GitHub Integration**: Vercel will now automatically create a **Live Preview Link** for every Pull Request submitted by you or your friends!

---

## 🛠️ Step-by-Step Guide: How Your Friend (Rahul) Can Submit a PR

### Step 1: Clone the Repository
```bash
git clone https://github.com/gkm563/GKM-Rahul.git
cd GKM-Rahul
npm install
```

### Step 2: Create a New Feature Branch
```bash
git checkout -b feature/rahul-profile
```

### Step 3: Add Contribution / Profile Data
Open `src/data/contributors.js` and add your profile object:
```javascript
{
  id: 3,
  name: "Rahul Sharma",
  github: "rahul-github-id",
  role: "Full Stack Contributor",
  avatar: "https://github.com/rahul-github-id.png",
  bio: "Contributed via GitHub Pull Request practice!",
  skills: ["React", "Git", "Tailwind"],
  mergedDate: "2026-08-31"
}
```

### Step 4: Commit Your Changes
```bash
git add .
git commit -m "feat: add Rahul contribution profile"
```

### Step 5: Push Branch to GitHub
```bash
git push -u origin feature/rahul-profile
```

### Step 6: Create the Pull Request (PR)
1. Go to [https://github.com/gkm563/GKM-Rahul](https://github.com/gkm563/GKM-Rahul)
2. You will see a banner: **"feature/rahul-profile had recent pushes. Compare & pull request"**.
3. Click **Compare & Pull Request**.
4. Write a title: `feat: add Rahul profile card` and click **Create Pull Request**.

---

## ⚡ What Happens Next? (CI/CD Automation in Action)

1. **GitHub Actions CI Pipeline**: Runs automated build verification (`npm run lint` & `npm run build`).
2. **Vercel Preview Bot**: Automatically comments on the PR with a **Live Preview Link** (e.g., `https://gkm-rahul-git-feature-rahul-profile-gkm563.vercel.app`). You can test the changes live *before* merging!
3. **Repository Maintainer (Gautam)**:
   - Opens the PR on GitHub.
   - Reviews the code changes under **Files Changed**.
   - Clicks **Approve** ➔ **Merge Pull Request** ➔ **Confirm Merge**.
4. **Automatic Production Deployment**: Once merged into `main`, Vercel automatically deploys the updated code to the main production website within seconds!

---

## 💻 Local Development Commands

```bash
# Install packages
npm install

# Run local development server
npm run dev

# Build production bundle
npm run build
```
