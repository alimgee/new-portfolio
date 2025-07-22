"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Download } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start a new project or have a question? I&apos;d love to hear from you. 
            Let&apos;s discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Let&apos;s Connect
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              Whether you&apos;re looking for a junior developer to join your team, 
              need help with a project, or just want to connect professionally, 
              I&apos;m always open to new opportunities and conversations.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">Available upon request</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Ireland</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Find me online</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/alan-mcgee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com/alimgee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <Github className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">GitHub</span>
                </a>
              </div>
            </div>

            {/* CV Download */}
            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-foreground placeholder-muted-foreground"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-foreground placeholder-muted-foreground"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-foreground placeholder-muted-foreground resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
