"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useI18n } from "@/i18n/context";
import type en from "@/i18n/en.json";

type ProjectKey = keyof typeof en.experience.projects;

const PROJECT_ORDER: ProjectKey[] = [
  "project1",
  "project2",
  "project3",
  "project4",
  "project5",
  "project6",
  "project7",
  "project8",
];

function ProjectCard({
  projectKey,
  index,
  isLast,
}: {
  projectKey: ProjectKey;
  index: number;
  isLast: boolean;
}) {
  const { t } = useI18n();
  const project = t.experience.projects[projectKey];
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const period = project.endDate
    ? `${project.startDate} — ${project.endDate}`
    : `${project.startDate} — ${t.experience.present}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      className={`group cursor-pointer ${isLast ? "" : "border-b border-white/10"}`}
      onClick={() => setExpanded(!expanded)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setExpanded(!expanded); } }}
    >
      <div className="flex items-center gap-4 sm:gap-8 py-6">
        <span className="text-[11px] tracking-[0.2em] text-amber-500 font-mono shrink-0 w-6">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-500 transition-colors duration-300">
            {project.client}
          </h3>
          <p className="text-[11px] tracking-[0.15em] text-amber-500 mt-0.5">
            {project.company}
          </p>
        </div>

        <span className="text-[11px] tracking-[0.15em] text-white hidden sm:block font-mono">
          {period}
        </span>

        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white text-[10px] shrink-0"
        >
          ▼
        </motion.span>
      </div>

      {expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pb-8 pl-10 sm:pl-14 pr-4"
        >
          <p className="text-[11px] tracking-[0.15em] text-white font-mono mb-4 sm:hidden">
            {period}
          </p>

          <p className="text-sm text-white leading-[1.8] mb-5 max-w-2xl">
            {project.description}
          </p>

          <div className="mb-5">
            <p className="text-[11px] tracking-[0.4em] uppercase text-amber-500 mb-2">
              {t.experience.impact}
            </p>
            <p className="text-sm text-white leading-[1.8] max-w-2xl">
              {project.impact}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] tracking-wider px-3 py-1.5 bg-white/[0.06] border border-white/10 text-white rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Experience() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative z-10 py-32 sm:py-40 px-6">
      <div className="max-w-4xl mx-auto rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] p-8 sm:p-12 md:p-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[11px] tracking-[0.5em] uppercase text-amber-500 mb-6">
            {t.experience.title}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            {t.experience.subtitle}
          </h2>
        </motion.div>

        <div>
          {PROJECT_ORDER.map((key, i) => (
            <ProjectCard key={key} projectKey={key} index={i} isLast={i === PROJECT_ORDER.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
