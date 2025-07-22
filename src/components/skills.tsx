"use client";

import { motion } from "framer-motion";
import { Code, Database, Palette, Users, Zap, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Palette,
    skills: [
      { name: "HTML", level: 90, color: "bg-orange-500" },
      { name: "CSS", level: 85, color: "bg-blue-500" },
      { name: "JavaScript", level: 65, color: "bg-yellow-500" },
      { name: "React", level: 70, color: "bg-cyan-500" },
    ]
  },
  {
    title: "Backend Development", 
    icon: Code,
    skills: [
      { name: "Python", level: 50, color: "bg-green-500" },
      { name: "Django", level: 45, color: "bg-emerald-600" },
      { name: "Flask", level: 45, color: "bg-red-500" },
    ]
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 50, color: "bg-green-600" },
      { name: "SQLite", level: 50, color: "bg-blue-600" },
    ]
  },
  {
    title: "Development Practices",
    icon: Zap,
    skills: [
      { name: "Agile Methodologies", level: 65, color: "bg-purple-500" },
      { name: "Git & Version Control", level: 70, color: "bg-orange-600" },
      { name: "Responsive Design", level: 85, color: "bg-pink-500" },
    ]
  },
  {
    title: "Content & Management",
    icon: Users,
    skills: [
      { name: "Team Management", level: 85, color: "bg-indigo-500" },
      { name: "Content Strategy", level: 90, color: "bg-teal-500" },
      { name: "Project Management", level: 80, color: "bg-violet-500" },
    ]
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "WordPress", level: 75, color: "bg-blue-700" },
      { name: "SEO Optimization", level: 70, color: "bg-green-700" },
      { name: "Web Analytics", level: 65, color: "bg-red-600" },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies, 
            developed through years of experience and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className={`h-full ${skill.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card border border-border rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Continuous Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in personal development through education and continuous learning. 
              As a recent graduate of Code Institute&apos;s Full Stack Development program, 
              I&apos;m constantly updating my skills and staying current with the latest 
              technologies and best practices in web development. My experience in team 
              management and content strategy complements my technical skills, making me 
              a well-rounded professional ready to contribute to any development team.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
