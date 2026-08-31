// Community Contributor Data File
// Practice GitHub PR: Add your profile or team contribution entry below!

export const CONTRIBUTORS = [
  {
    id: 1,
    name: "Gautam (Repository Owner)",
    github: "gkm563",
    role: "Project Lead & Maintainer",
    avatar: "https://github.com/gkm563.png",
    bio: "Setting up automated CI/CD pipelines, Vercel deployments, and PR review workflows.",
    skills: ["React", "Vercel", "GitHub Actions", "Git Workflow"],
    mergedDate: "2026-08-31"
  },
  {
    id: 2,
    name: "Rahul Sharma (Collaborator)",
    github: "Rahul-Dev",
    role: "Full Stack Contributor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    bio: "Learning Git branching, Pull Requests (PRs), code reviews, and automatic Vercel deployment.",
    skills: ["JavaScript", "React", "Git Branching", "Pull Requests"],
    mergedDate: "2026-08-31 (PR Practice)"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Fork / Clone Repository",
    desc: "Clone the repo locally or fork it: git clone https://github.com/gkm563/GKM-Rahul.git"
  },
  {
    step: "02",
    title: "Create Feature Branch",
    desc: "Create a new git branch: git checkout -b feature/rahul-profile"
  },
  {
    step: "03",
    title: "Make Changes & Commit",
    desc: "Edit src/data/contributors.js or add a feature, then: git commit -m 'feat: add Rahul profile'"
  },
  {
    step: "04",
    title: "Push Branch to GitHub",
    desc: "Push your feature branch: git push origin feature/rahul-profile"
  },
  {
    step: "05",
    title: "Open Pull Request (PR)",
    desc: "Go to GitHub and click 'Compare & Pull Request'. Watch Vercel generate a Live Preview Link!"
  },
  {
    step: "06",
    title: "Review & Merge PR",
    desc: "Maintainer reviews the PR, approves it, and clicks 'Merge Pull Request'. Production deploys automatically!"
  }
];
