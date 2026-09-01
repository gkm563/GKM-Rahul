// Community Contributor Data File
// Practice GitHub PR: Add your profile or team contribution entry below!

export const CONTRIBUTORS = [
  {
    id: 1,
    name: "Gautam (Repository Owner)",
    github: "gkm563",
    role: "Project Lead & Maintainer",
    avatar: "https://github.com/gkm563.png",
    bio: "Architecting automated CI/CD pipelines, Vercel preview environments, and GitHub Pull Request review standards.",
    skills: ["React", "Vercel", "GitHub Actions", "Tailwind CSS", "CI/CD"],
    status: "merged",
    mergedDate: "2026-08-31"
  },
  {
    id: 2,
    name: "Rahul (Collaborator)",
    github: "Rahul-Contributor",
    role: "Frontend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    bio: "Mastering Git branching, Pull Requests (PRs), collaborative reviews, and automated build verification.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Git", "PR Workflow"],
    status: "pending",
    mergedDate: "In Review"
  }
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    badge: "Setup",
    title: "Fork / Clone Repository",
    desc: "Clone the project to your local workstation or fork directly into your GitHub account.",
    command: "git clone https://github.com/gkm563/GKM-Rahul.git"
  },
  {
    step: "02",
    badge: "Branching",
    title: "Create Feature Branch",
    desc: "Always branch off 'main' with a descriptive branch name for clean git tracking.",
    command: "git checkout -b feature/rahul-profile"
  },
  {
    step: "03",
    badge: "Development",
    title: "Make Changes & Commit",
    desc: "Add your profile in 'src/data/contributors.js' or enhance components, then stage and commit.",
    command: "git commit -m 'feat: add Rahul profile'"
  },
  {
    step: "04",
    badge: "Remote Push",
    title: "Push Branch to GitHub",
    desc: "Push your committed branch to your remote repository origin on GitHub.",
    command: "git push origin feature/rahul-profile"
  },
  {
    step: "05",
    badge: "Preview Bot",
    title: "Open Pull Request (PR)",
    desc: "Open a PR against 'main'. Vercel and GitHub Actions trigger an instant live preview deployment!",
    command: "https://github.com/gkm563/GKM-Rahul/pulls"
  },
  {
    step: "06",
    badge: "Production",
    title: "Review & Merge PR",
    desc: "Collaborator reviews the code diff, approves the PR, merges to main, and deploys live.",
    command: "git checkout main && git pull origin main"
  }
];
