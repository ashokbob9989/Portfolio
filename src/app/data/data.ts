export const skills = [
  {
    section: "Web Development",
    subSkills: [
      {
        category: "Frontend",
        skills: [
          "HTML5", "CSS3", "SCSS", "Bootstrap", "Tailwind CSS",
          "JavaScript (ES6+)", "TypeScript", "Angular", "React", "Responsive Design"
        ],
      },
      {
        category: "Backend",
        skills: ["Java (OOP, Core Java, Streams)", "Spring", "Spring Boot", "Spring Security", "REST APIs"],
      },
      {
        category: "Databases",
        skills: ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "Firebase", "SQL & NoSQL design"],
      },
      {
        category: "Web Dev Tools",
        skills: ["Git", "GitHub", "GitLab", "NPM", "Docker", "Postman", "Insomnia", "Browser Dev Tools"],
      },
    ],
  },
  {
    section: "Cloud & Deployment",
    subSkills: [
      {
        category: "Cloud & DevOps",
        skills: ["Docker", "Kubernetes", "CI/CD (GitHub Actions, Jenkins)", "Netlify / Tomcat"],
      },
    ],
  },
  {
    section: "Tools & Productivity",
    subSkills: [
      {
        category: "Tools",
        skills: ["IDEs: IntelliJ, VS Code, Windsurf", "Version Control: Git", "Task Management: Jira",
          "Code Quality: SonarQube, ESLint, Prettier", "Documentation: Confluence"],
      },
    ],
  },
  {
    section: "Testing & Quality",
    subSkills: [
      {
        category: "Testing",
        skills: ["Unit Testing: JUnit", "Integration Testing", "Mocking & Stubbing",
          "Debugging & Performance Tuning", "Automation Testing: Playwright"],
      },
    ],
  },
  {
    section: "Other Skills",
    subSkills: [
      {
        category: "Core & Architecture",
        skills: ["Algorithms & Data Structures", "Design Patterns & SOLID Principles", "Microservices Architecture",
          "RESTful APIs & API Design", "Agile Methodologies (Scrum, Kanban)"],
      },
      {
        category: "Soft Skills",
        skills: ["Problem-solving", "Effective Communication", "Team Collaboration", "Mentoring & Coaching",
          "Adaptability", "Time Management", "Critical Thinking", "Leadership"],
      },
    ],
  },
  {
    section: "Operating Systems & Developer Environment",
    subSkills: [
      { category: "Operating Systems", skills: ["Linux: Ubuntu", "Unix", "Windows"] },
      { category: "Shell & CLI", skills: ["Bash / Shell Scripting", "Linux Command Line",
        "File Permissions & Process Management", "Networking Commands: curl, wget"] },
      { category: "Editors & Terminals", skills: ["Vim", "Terminal / Command Prompt"] },
      { category: "System & Dev Utilities", skills: ["Package Managers: apt", "Environment Variables & PATH",
        "SSH & Secure Access", "Log Analysis & Monitoring"] },
    ],
  },
];

export const projects = [
  {
    id: 0,
    title: 'Smart Service Request Portal',
    type: 'Full Stack',
    description: 'Implements structured service request workflows with role-based access control, status-driven processing, escalation handling, and centralized monitoring. The system standardizes service operations and improves efficiency by minimizing manual follow-ups and communication gaps.',
    tech: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
    likes: 0,
    comments: [],
    github: 'https://github.com/ashokbob9989/osms',
    live: '#',
    liked: false,
    showCommentInput: false,
    showShareOptions: false,
    newComment: '',
    iconClass: 'fa-solid fa-handshake-angle'
  },
  {
    id: 1,
    title: 'DueMate Website',
    type: 'Full Stack',
    description: 'DueMate is a privacy-first personal finance and lifecycle management platform designed to help users track subscriptions, bills, warranties, and renewals in one centralized system. It focuses on reducing missed payments and expirations through structured item management, document organization, configurable reminders, and clear visualizations, while emphasizing security, accessibility, and long-term maintainability.',
    tech: ['Java', 'Spring', 'Spring Boot', 'Angular', 'PostgreSQL'],
    likes: 0,
    comments: [],
    github: 'https://github.com/ashokbob9989/DueMate',
    live: '#',
    liked: false,
    showCommentInput: false,
    showShareOptions: false,
    newComment: '',
    iconClass: 'fa-solid fa-bell'
  }
];

export const sharePlatforms = [
  { name: 'WhatsApp', icon: 'fa-brands fa-whatsapp', urlPrefix: 'https://wa.me/?text=' },
  { name: 'Telegram', icon: 'fa-brands fa-telegram', urlPrefix: 'https://t.me/share/url?url=' },
  { name: 'LinkedIn', icon: 'fa-brands fa-linkedin', urlPrefix: 'https://www.linkedin.com/sharing/share-offsite/?url=' }
];

export const titles = [
  'Full Stack Developer', 'Software Engineer', 'UI / UX Designer',
  'Frontend Specialist', 'Backend Engineer', 'Competitive Programmer'
];

export const resumeLink = 'https://drive.google.com/file/d/1WkuVZdLKY_ws_7y4Uk5odBonjP8R2Gen/view?usp=sharing';
export const phoneNumber = '+917386905031';

export const experiences = [
  {
    company: 'BNY - Bank of New York',
    website: 'https://www.bny.com',
    role: 'Software Engineer',
    position: 'Full Stack Developer',
    duration: 'August 2025 - Present',
    location: 'Pune, India',
    teamSize: 6,
    responsibilities: [
      'Developing and maintaining enterprise-scale full-stack applications in a production environment',
      'Designing and implementing RESTful APIs and scalable frontend components',
      'Optimizing backend services for performance, reliability, and maintainability',
      'Collaborating with cross-functional teams including QA, product, and DevOps',
      'Ensuring code quality through reviews, testing, and adherence to engineering standards'
    ],
    tools: ['Angular', 'Spring Boot', 'Java', 'Oracle', 'Docker', 'Unix', 'WinSCP'],
    achievements: [
      'Converted from Software Engineer Intern to Full-Time Employee',
      'Actively contributing to production releases and ongoing feature development'
    ],
    iconClass: 'fa-solid fa-briefcase'
  },
  {
    company: 'BNY - Bank of New York',
    website: 'https://www.bny.com',
    role: 'Software Engineer Intern',
    position: 'Full Stack Developer',
    duration: 'May 2024 - July 2024',
    location: 'Pune, India',
    teamSize: 6,
    responsibilities: [
      'Contributed to the development and maintenance of internal full-stack web applications',
      'Implemented frontend features and backend APIs under guidance from senior engineers',
      'Integrated internal and third-party APIs as part of project deliverables',
      'Assisted in backend performance analysis and basic optimizations',
      'Participated in Agile ceremonies including sprint planning and reviews'
    ],
    tools: ['Angular', 'Spring Boot', 'Java', 'Oracle', 'Docker', 'Unix', 'WinSCP'],
    achievements: [
      'Successfully completed internship with strong performance feedback',
      'Offered full-time Software Engineer position based on internship contributions'
    ],
    iconClass: 'fa-solid fa-user-graduate'
  }
];
