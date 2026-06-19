"use client";

import { motion } from "framer-motion";
import type { PublicationSection } from "@/lib/types";

export default function PublicationsClient({
  publicationSections,
}: {
  publicationSections: PublicationSection[];
}) {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading text-heading">
            Publications
          </h1>
          <p className="text-muted max-w-xl mb-12 font-mono-text">
            WRITINGS ON DESIGN, FUTURES & DIGITAL MEDIA
          </p>
        </motion.div>

        {publicationSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
            className="mb-14"
          >
            <h2 className="text-xl font-bold text-heading mb-6 pb-2 border-b border-border">
              {section.title}
            </h2>

            <div className="space-y-3">
              {section.items.map((pub, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="text-sm text-muted leading-relaxed"
                >
                  {/* Title */}
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-heading hover:text-accent transition-colors font-medium"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    <span className="text-heading font-medium">{pub.title}</span>
                  )}

                  {/* Authors */}
                  <span> · {pub.authors}</span>

                  {/* Venue + Year */}
                  <span className="text-muted"> · {pub.venue}</span>

                  {/* Links */}
                  {pub.pdf && (
                    <>
                      {" "}
                      <a
                        href={pub.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-heading transition-colors font-medium"
                      >
                        [pdf]
                      </a>
                    </>
                  )}
                  {pub.doi && (
                    <>
                      {" "}
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-heading transition-colors font-medium"
                      >
                        [doi]
                      </a>
                    </>
                  )}
                  {pub.link && !pub.pdf && !pub.doi && (
                    <>
                      {" "}
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-heading transition-colors font-medium"
                      >
                        [link]
                      </a>
                    </>
                  )}
                  {pub.note && (
                    <span className="text-muted italic"> ({pub.note})</span>
                  )}
                </motion.p>
              ))}
            </div>
          </motion.div>
        ))}

        {publicationSections.length === 0 && (
          <p className="text-center text-muted py-20">No publications yet.</p>
        )}
      </div>
    </div>
  );
}
