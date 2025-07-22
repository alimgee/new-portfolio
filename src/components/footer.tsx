"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/alan-mcgee",
      icon: Linkedin
    },
    {
      name: "GitHub", 
      href: "https://github.com/alimgee",
      icon: Github
    },
    {
      name: "Email",
      href: "mailto:contact@alanmg.ie",
      icon: Mail
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Alan Mc Gee</h3>
            <p className="text-muted-foreground">
              Junior Full Stack Developer passionate about creating meaningful 
              digital experiences and continuous learning.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="text-muted-foreground space-y-2">
              <p>Available for new opportunities</p>
              <p>Based in Ireland</p>
              <p>Open to remote work</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Alan M Mc Gee. All rights reserved.
            </p>
            
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
