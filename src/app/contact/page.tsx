"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const socialLinks = [
  { href: "https://twitter.com/sandjar", label: "Twitter" },
  { href: "https://www.linkedin.com/in/sandjar/", label: "LinkedIn" },
  { href: "https://mastodon.online/deck/@Sandjar", label: "Mastodon" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-heading">Contact</h1>
          <p className="text-muted max-w-xl mb-12">
            Get in touch for collaborations, inquiries, or just to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-heading mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-border rounded-none text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-heading mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-border rounded-none text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-heading mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white border border-border rounded-none text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-white rounded-none hover:bg-accent/90 transition-colors text-sm font-medium"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="p-6 rounded-none border border-border bg-white shadow-sm">
              <h2 className="text-lg font-bold text-heading mb-4">Find me online</h2>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-none border border-border bg-white shadow-sm">
              <h2 className="text-lg font-bold text-heading mb-2">Location</h2>
              <p className="text-sm text-muted">
                Atlanta, GA
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
