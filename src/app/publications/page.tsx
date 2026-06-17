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
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Publications</h1>
          <p className="text-muted max-w-xl mb-12">
            Academic papers, articles, and publications on design research, futures thinking, and digital media.
          </p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 rounded-lg border border-border hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-2 font-heading">{pub.title}</h3>
                  <p className="text-sm text-muted mb-1">{pub.authors}</p>
                  <p className="text-sm text-[#666]">{pub.venue}</p>
                </div>
                <span className="text-sm text-accent whitespace-nowrap">{pub.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
