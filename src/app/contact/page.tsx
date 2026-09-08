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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-none border border-border bg-white shadow-sm"
          >
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
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-none border border-border bg-white shadow-sm"
          >
            <h2 className="text-lg font-bold text-heading mb-2">Location</h2>
            <p className="text-sm text-muted">
              Atlanta, GA
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
