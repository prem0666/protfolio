import React from "react";
import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";

const experiences = [
  {
    year: "2030 - 2031",
    company: "NEXORA",
    role: "Junior UI Designer",
    description:
      "Designed UI components, collaborated with devs, and learned scalable design systems.",
  },
  {
    year: "2031 - 2032",
    company: "PIXELSHIFT",
    role: "UI/UX Designer",
    description:
      "Led UX flows, improved usability metrics, and shipped production-ready designs.",
  },
  {
    year: "2032 - 2034",
    company: "WISBOOM",
    role: "Senior Product Designer",
    description:
      "Defined UX strategy, mentored designers, and aligned business goals with user needs.",
  },
  {
    year: "2034 - 2035",
    company: "WISBOOM",
    role: "Associate Design Director",
    description:
      "Managed design team, reviewed quality, and ensured brand consistency.",
  },
  {
    year: "2035 - Present",
    company: "HOP!",
    role: "Creative Design Lead",
    description:
      "Owned creative direction and delivered high-impact branding solutions.",
  },
];

const ExperienceSection = () => {
  return (
    <section
      className="relative  bg-center"
      
    >
      {/* Overlay */}
      <div className="absolute inset-0 " />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-28">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -35 }}
          whileInView={{ opacity: 1, y: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold tracking-widest text-white mb-24"
        >
          03 EXPERIENCE
        </motion.h2>

        {/* Timeline Line */}
        <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-48 bottom-24 w-px bg-green-500" />

        <div className="space-y-28">
          {experiences.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
