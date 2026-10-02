// src/data/projects.js

const projects = [
  {
    id: 1,
    name: "Maintenance Request & Vendor Accountability System",
    summary:
      "A full-stack facility management platform with role-based access for residents, vendors, and admins — featuring a state-machine-enforced ticket lifecycle, SLA-based auto-escalation, and recurring-issue detection.",
    techStack: ["Django", "HTML", "CSS", "JavaScript", "Bootstrap", "SQLite"],
    liveLink: null, // No live deployment yet — UI should show a "Live Demo Coming Soon" state instead of a link
    githubLink: "https://github.com/yashwadve/Maintenance_System",
    image: "/images/maintenance_system.png"
  },
  {
    id: 2,
    name: "SplitEase: Group Expense Splitting",
    summary:
      "A full-stack expense-splitting web app with group management, multiple split types, and a debt-simplification algorithm to minimize settlement payments.",
    techStack: ["Django", "HTML", "CSS", "JavaScript", "Bootstrap", "SQLite"],
    liveLink: null,
    githubLink: "https://github.com/yashwadve/SplitEase",
    image: "/images/Splitease.png"
  },
];

export default projects;