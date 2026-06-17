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
          <h1 className="text-3xl md:text-5xl font-bold mb-8">Bio</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="aspect-square bg-[#111] rounded-lg overflow-hidden border border-[#222]">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
                  <span className="text-6xl opacity-20 font-bold">SK</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="space-y-4 text-[#a0a0a0] leading-relaxed">
                <p>
                  Sandjar Kozubaev is a designer, researcher, and educator working at the
                  intersection of design, futures thinking, and digital media. Their work
                  explores how design methodologies can be applied to address complex
                  societal challenges and create more equitable futures.
                </p>
                <p>
                  With a background in design research and human-computer interaction,
                  Sandjar has led projects ranging from public IoT infrastructure for
                  urban environments to participatory design initiatives in public housing
                  communities.
                </p>
                <p>
                  Their research has been published in leading academic venues including
                  the ACM Conference on Human Factors in Computing Systems (CHI), Design
                  Studies Journal, and Futures Journal. Sandjar is also the creator of
                  Futures Out Loud, a podcast and research project that brings futures
                  thinking to broader audiences.
                </p>
                <p>
                  Currently, Sandjar is focused on exploring the role of design in shaping
                  technological futures, with a particular emphasis on civic engagement,
                  public participation, and community-centered design processes.
                </p>
              </div>
            </div>
          </div>

          {/* Research Interests */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Research Interests</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Design Research",
                "Futures Thinking",
                "Digital Media",
                "Human-Computer Interaction",
                "Participatory Design",
                "Civic Engagement",
                "Public IoT",
                "Design Innovation",
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 text-sm rounded-full border border-[#222] text-[#a0a0a0]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
