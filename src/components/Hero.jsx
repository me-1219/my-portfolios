import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaExternalLinkAlt } from "react-icons/fa";

import profileImg from "../assets/profile.png";
import Cv from "../assets/melakcv.pdf";

const Hero = () => {
  const title = "Web Developer 🕸️🕸️🕸️";
  const letters = Array.from(title);
  const controls = useAnimation();

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.45,
      },
    },
  };

  const letter = {
    hidden: { y: 18, opacity: 0, rotate: -6 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  useEffect(() => {
    (async () => {
      await controls.start("visible");
      await new Promise((r) => setTimeout(r, 250));
    })();
  }, []);

  return (
    <section
      id="#"
      className="hero-bg flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-20 transition-colors duration-300 mt-auto overflow-hidden font-['Poppins'] text-gray-800 dark:text-gray-100"
    >
      <div className="hero-inner w-full flex flex-col md:flex-row items-center justify-between">

        {/* LEFT SIDE CONTENT */}
        <motion.div
          className="text-left max-w-xl mt-10 md:mt-30"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-[#13b1b0] mb-4 tracking-tight"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <span className="text-[#f59e0b] text-5xl">Mebit Melak</span>
          </motion.h1>

          {/* Animated Title */}
          <motion.h2
            className="text-2xl md:text-3xl font-medium mb-6 dark:text-gray-50 inline-block"
            variants={container}
            initial="hidden"
            animate={controls}
          >
            {letters.map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                className={char === " " ? "inline-block w-2" : "inline-block"}
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="text-gray-800 dark:text-gray-50 text-2xl leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Passionate about building scalable web applications and crafting engaging
            digital experiences using React, Django, and TailwindCSS.
          </motion.p>

          {/* INVERSE Y LAYOUT - Social Icons and Buttons */}
          <motion.div
            className="flex flex-col items-start gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {/* Social Icons Row */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/me-1219"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
              >
                <FaGithub className="text-gray-800 dark:text-gray-100 text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/mebtu-melak"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
              >
                <FaLinkedin className="text-gray-800 dark:text-gray-100 text-3xl" />
              </a>
            </div>

            {/* Buttons Row - INVERSE Y PATTERN */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={Cv}
                download="Mebit_Melak_CV.pdf"
                className="bg-gradient-to-r from-[#13b1b0] to-[#0f8d8c] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium flex items-center justify-center gap-3 text-lg hover:scale-105 min-w-[200px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="w-5 h-5" />
                Download CV
              </motion.a>

              <motion.a
                href="#Projects"
                className="bg-gradient-to-r from-[#f59e0b] to-[#d48a07] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium flex items-center justify-center gap-3 text-lg hover:scale-105 min-w-[200px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE WITH FLOATING BADGES */}
        <motion.div
          className="mb-10 md:mb-0 md:w-1/2 flex flex-col items-center relative mt-12 md:mt-20"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <img
              src={profileImg}
              alt="Mebit Melak"
              className="w-80 h-80 md:w-96 md:h-96 lg:w-[520px] lg:h-[520px] rounded-full object-cover shadow-2xl border-4 border-[#13b1b0] mt-6"
            />

            {/* 🚀 PROJECTS BADGE */}
            <motion.div
              className="hidden md:block absolute -left-6 top-1/3 bg-[#13b1b0] text-white px-4 py-2 rounded-lg shadow-lg transform -translate-x-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, type: 'spring', stiffness: 150 }}
            >
              <div className="text-xl uppercase tracking-wide">Projects</div>
              <div className="font-semibold text-2xl">🚀 5+</div>
            </motion.div>

            {/* 💼 EXPERIENCE BADGE */}
            <motion.div
              className="hidden md:block absolute -right-6 top-1/4 bg-[#f59e0b] text-white px-4 py-2 rounded-lg shadow-lg transform translate-x-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, type: 'spring', stiffness: 150 }}
            >
              <div className="text-xl uppercase tracking-wide">Experience</div>
              <div className="font-semibold text-2xl">💼 2+ Years</div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;;