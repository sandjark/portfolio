"use client";

import { motion } from "framer-motion";

export default function BioPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-8 font-heading text-heading">Bio</h1>
        </motion.div>

        <div className="space-y-6 text-muted leading-relaxed">
          <p>
            Sandjar Kozubaev is a designer, researcher, and educator exploring the intersection of
            design research, futures thinking, and digital media. His work focuses on how design
            can shape more equitable and sustainable futures through participatory methods and
            speculative approaches.
          </p>

          <p>
            He is currently a PhD candidate in Digital Media at Georgia Tech, where his research
            examines the role of design in public sector innovation, civic engagement, and the
            governance of emerging technologies. His work has been published in leading design
            research journals and conferences.
          </p>

          <p>
            Previously, Sandjar has worked as a design researcher and strategist, collaborating
            with government agencies, non-profits, and technology companies to develop human-centered
            approaches to complex societal challenges. He holds a Master's degree in Design
            Research from the University of the Arts London and a Bachelor's degree in
            Architecture from the University of Westminster.
          </p>

          <p>
            His research interests include participatory design, design for policy, speculative
            design, futures studies, and the ethics of emerging technologies. He is particularly
            interested in how design methods can be used to engage diverse stakeholders in
            imagining and creating alternative futures.
          </p>
        </div>
      </div>
    </div>
  );
}
