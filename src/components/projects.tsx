"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";

const projects = [
  {
    title: "Molly Rose - Childhood Cancer Awareness",
    description: "A personal development project aimed at driving awareness of childhood cancer while providing information on living through a diagnosis and how to help. Built with React, Reactstrap, and React Helmet.",
    tech: ["React", "Reactstrap", "React Helmet", "Responsive Design"],
    image: "/api/placeholder/600/400",
    liveUrl: "https://www.mollyrose.ie",
    githubUrl: "https://github.com/alimgee/book-review-milestone-project3",
    category: "Personal Project",
    year: "2024"
  },
  {
    title: "DevAssist - Full Stack Forum",
    description: "Final project from Code Institute's Full Stack course. A responsive forum-style platform where users can raise technical queries and respond to others, with integrated ecommerce donation functionality using Stripe.",
    tech: ["Python", "Django", "Bootstrap", "Stripe", "PostgreSQL"],
    image: "/api/placeholder/600/400",
    liveUrl: "https://dev-assist.herokuapp.com/",
    githubUrl: "https://github.com/alimgee/dev_assist",
    category: "Full Stack",
    year: "2024"
  },
  {
    title: "BookBites - Book Review Platform",
    description: "A fully responsive book review site where users can register, log in, add reviews, and 'like' other users' reviews with a 'bookbite'. Built using Python, Flask, and MongoDB database.",
    tech: ["Python", "Flask", "MongoDB", "Responsive Design"],
    image: "/api/placeholder/600/400",
    liveUrl: "https://book-bites.herokuapp.com/",
    githubUrl: "https://github.com/alimgee/book-review-milestone-project3",
    category: "Web Application",
    year: "2023"
  },
  {
    title: "Simon Memory Game",
    description: "Recreation of the classic 80s Simon memory game. A fully responsive site that challenges users to repeat computer-generated sequences. Built with Bootstrap 4 and JavaScript/jQuery.",
    tech: ["JavaScript", "jQuery", "Bootstrap 4", "Game Logic"],
    image: "/api/placeholder/600/400",
    liveUrl: "https://alimgee.github.io/milestone-project2-simon-game/",
    githubUrl: "https://github.com/alimgee/milestone-project2-simon-game",
    category: "Interactive Game",
    year: "2023"
  },
  {
    title: "Taste the Pain - WordPress Site",
    description: "Commissioned WordPress site for a Red Hot Chilli Peppers cover band. Provided consultation on setup, custom CSS styling for responsiveness, and ensured easy content management for the client.",
    tech: ["WordPress", "CSS", "Responsive Design", "Client Consultation"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    category: "Client Work",
    year: "2023"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects & Commissions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my journey through full-stack development, 
            from personal initiatives to client commissions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full">
                    {project.year}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-background/90 text-foreground text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
                {/* Placeholder for actual image */}
                <div className="w-full h-full flex items-center justify-center">
                  <Code className="h-12 w-12 text-primary/40" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Site
                    </a>
                  )}
                  
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/alimgee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Github className="h-5 w-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
