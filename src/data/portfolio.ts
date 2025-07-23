export const portfolioData = {
  personal: {
    name: "Alan McGee",
    title: "Full Stack Developer with 15+ Years IT Experience",
    email: "alan@alanmg.ie",
    location: "Ireland",
    github: "https://github.com/alanmcgee",
    linkedin: "https://linkedin.com/in/alanmcgee",
  },

  about: {
    title: "About Me",
    description: [
      "I'm a passionate Full Stack Developer with over 15 years of IT experience, including 11 years in telecommunications with eir. I recently completed my Full Stack Developer certification from Code Institute.",
      "I specialize in creating modern, responsive web applications using cutting-edge technologies and agile methodologies. I love turning complex problems into simple, elegant solutions."
    ],
    whatIDo: [
      {
        icon: "icon-frontend",
        text: "Frontend Development (React, JavaScript)"
      },
      {
        icon: "icon-backend", 
        text: "Backend Development (Python, Django, Flask)"
      },
      {
        icon: "icon-database",
        text: "Database Design (MongoDB, SQLite)"
      }
    ]
  },

  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "MollyRose.ie",
        description: "A beautiful React-based website showcasing modern frontend development with responsive design and smooth user interactions.",
        liveUrl: "https://mollyrose.ie",
        githubUrl: "https://github.com/alimgee/mollyrose--in-react"
      },
      {
        title: "DevAssist",
        description: "A comprehensive Django application with user authentication, CRUD operations, and modern backend architecture.",
        liveUrl: "https://dev-assist.herokuapp.com/",
        githubUrl: "https://github.com/alimgee/dev_assist"
      },
      {
        title: "BookBites",
        description: "A Flask-based web application demonstrating full-stack development with database integration and user management.",
        liveUrl: "https://book-review-mongo.onrender.com/",
        githubUrl: "https://github.com/alimgee/book-review-milestone-project3"
      },
      {
        title: "Simon Game",
        description: "An interactive JavaScript game showcasing frontend development skills with engaging animations and game logic.",
        liveUrl: "https://alimgee.github.io/milestone-project2-simon-game/",
        githubUrl: "https://github.com/alimgee/milestone-project2-simon-game"
      }
    ]
  },

  skills: {
    title: "Technical Skills",
    categories: [
      {
        icon: "icon-frontend",
        title: "Frontend",
        technologies: "React, JavaScript, HTML5, CSS3, TypeScript"
      },
      {
        icon: "icon-backend",
        title: "Backend", 
        technologies: "Python, Django, Flask, Node.js"
      },
      {
        icon: "icon-database",
        title: "Database",
        technologies: "MongoDB, SQLite, PostgreSQL"
      },
      {
        icon: "icon-tools",
        title: "Tools",
        technologies: "Git, VS Code, Agile, WordPress"
      }
    ]
  },

  contact: {
    title: "Let's Work Together",
    getInTouch: {
      title: "Get In Touch",
      description: "I'm always interested in hearing about new opportunities and exciting projects."
    },
    downloadCV: {
      title: "Download CV",
      description: "Want to know more about my experience and qualifications?",
      url: "/cv.pdf"
    }
  },

  navigation: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ]
};
