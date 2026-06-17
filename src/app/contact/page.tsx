"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-[#a0a0a0] max-w-xl mb-12">
            Get in touch for collaborations, inquiries, or just to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm text-[#a0a0a0] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#4975ef] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#a0a0a0] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#4975ef] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[#a0a0a0] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-[#111] border border-[#222] rounded-lg text-white placeholder-[#666] focus:outline-none focus:border-[#4975ef] transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#4975ef] text-white rounded-lg hover:bg-[#3a5fc7] transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-medium mb-4">Connect</h3>
              <div className="space-y-3">
                <Link
                  href="https://twitter.com/sandjar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#a0a0a0] hover:text-white transition-colors"
                >
                  Twitter → @sandjar
                </Link>
                <Link
                  href="https://www.linkedin.com/in/sandjar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#a0a0a0] hover:text-white transition-colors"
                >
                  LinkedIn → /in/sandjar
                </Link>
                <Link
                  href="https://mastodon.online/deck/@Sandjar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#a0a0a0] hover:text-white transition-colors"
                >
                  Mastodon → @Sandjar
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Location</h3>
              <p className="text-[#a0a0a0]">New York, NY</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
