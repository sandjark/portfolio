"use client";

import { motion } from "framer-motion";
import { publications } from "@/data/publications";

export default function PublicationsPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-heading">Publications</h1>
          <p className="text-muted max-w-xl mb-12">
            Academic papers, articles, and publications on design research and futures thinking.
          </p>
        </motion.div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="pb-8 border-b border-border last:border-b-0"
            >
              {pub.link ? (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h2 className="text-lg font-medium text-heading group-hover:text-accent transition-colors font-heading">
                    {pub.title}
                  </h2>
                </a>
              ) : (
                <h2 className="text-lg font-medium text-heading font-heading">
                  {pub.title}
                </h2>
              )}
              <p className="text-sm text-muted mt-2">{pub.authors}</p>
              <p className="text-sm text-muted mt-1">
                {pub.venue} · {pub.year}
              </p>
            </motion.div>
          ))}
        </div>

        {publications.length === 0 && (
          <p className="text-center text-muted py-20">No publications yet.</p>
        )}
      </div>
    </div>
  );
}
