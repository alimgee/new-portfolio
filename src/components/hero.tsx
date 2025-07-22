"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-foreground">Hi, I&apos;m </span>
                <span className="text-primary">Alan Mc Gee</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Junior Fullstack Developer & Content Manager
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                A family-oriented, driven individual with over 15 years of experience in the IT industry. 
                Recently certified as a Full Stack Developer through Code Institute&apos;s comprehensive program, 
                bringing together technical expertise with strong content management and team leadership skills.
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Mail className="h-5 w-5" />
                Get In Touch
              </a>
              
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-border bg-background hover:bg-accent text-foreground px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4"
            >
              <a
                href="https://www.linkedin.com/in/alan-mcgee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border bg-background hover:bg-accent rounded-lg transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              
              <a
                href="https://github.com/alimgee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border bg-background hover:bg-accent rounded-lg transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-2">
                <div className="w-full h-full rounded-full bg-background border-4 border-primary/20 overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary/60">AM</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
              >
                <span className="text-primary font-bold">JS</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center"
              >
                <span className="text-secondary-foreground font-bold">⚛️</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
