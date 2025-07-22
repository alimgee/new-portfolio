"use client";

import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, Heart } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Briefcase,
      title: "15+ Years Experience",
      description: "Extensive background in IT industry with diverse technical roles"
    },
    {
      icon: GraduationCap,
      title: "Code Institute Graduate", 
      description: "Certified Full Stack Developer from Europe's only university credit-rated coding bootcamp"
    },
    {
      icon: User,
      title: "Team Leadership",
      description: "11 years at eir as Senior Content Editor and Team Manager"
    },
    {
      icon: Heart,
      title: "Family Oriented",
      description: "Driven individual with strong personal values and dedication"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A seasoned digital professional passionate about continuous learning and personal development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I view myself as a family-oriented, driven and dedicated individual with a 
                desire to succeed at a high level at whatever I find myself doing. With over 
                15 years of experience in the IT industry, I&apos;ve built a solid foundation in 
                digital technologies and project management.
              </p>
              
              <p>
                For the past 11 years, I&apos;ve been working in the digital telecommunications 
                sector at eir as a Senior Content Editor and Team Manager. This role has 
                given me invaluable experience in content strategy, team leadership, and 
                large-scale digital operations.
              </p>
              
              <p>
                I believe strongly in personal development through education and continuous 
                learning. This belief led me to pursue and complete Code Institute&apos;s 
                &apos;Full Stack Development&apos; course - Europe&apos;s only university credit-rated 
                coding bootcamp. I now consider myself a Junior Full Stack Developer, 
                excited to apply my new technical skills alongside my extensive industry experience.
              </p>
            </div>
          </motion.div>

          {/* Right side - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">
                  {highlight.title}
                </h4>
                
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Professional Experience
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {/* Timeline items */}
              <div className="space-y-8">
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full mt-6"></div>
                  <div className="flex-1 bg-card border border-border rounded-lg p-6">
                    <h4 className="font-semibold text-foreground">Senior Content Editor & Team Manager</h4>
                    <p className="text-primary font-medium">eir (2013 - Present)</p>
                    <p className="text-muted-foreground mt-2">
                      Leading content strategy and managing editorial teams in the digital telecommunications sector. 
                      Responsible for large-scale content operations and team development.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full mt-6"></div>
                  <div className="flex-1 bg-card border border-border rounded-lg p-6">
                    <h4 className="font-semibold text-foreground">Full Stack Developer Certification</h4>
                    <p className="text-primary font-medium">Code Institute (2024)</p>
                    <p className="text-muted-foreground mt-2">
                      Completed comprehensive full-stack development program covering modern web technologies 
                      including Python, JavaScript, React, Django, and more.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full mt-6"></div>
                  <div className="flex-1 bg-card border border-border rounded-lg p-6">
                    <h4 className="font-semibold text-foreground">Tech Support & Customer Service</h4>
                    <p className="text-primary font-medium">Various Companies (2009 - 2013)</p>
                    <p className="text-muted-foreground mt-2">
                      Built foundational technical skills through various technical support and 
                      customer service roles in the IT industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
