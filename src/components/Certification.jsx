import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Programing from '../assets/programming.png';
import Data from '../assets/data.png';
import Android from '../assets/android.png';
import Cyber from '../assets/cyber.png';


import { 
  ExternalLink, 
  Award, 
  Calendar,
  X
} from "lucide-react";
import { data } from "autoprefixer";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
const certificates = [
  {
    id: 1,
    title: "Fundamental Programing",
    issuer: "Udacity",
    date: "2024",
    category: "Programming",
    image: Programing,
    credentialUrl: "https://www.udacity.com/certificate/e/0f634148-7aa2-11ef-ae47-67a49c42a227",
    skills: ["Python", "Problem Solving", "Algorithms"],
    description:
      "Foundational Through the Programming Fundamentals Nanodegree, I have developed essential programming skills, including problem-solving, algorithm design, and proficiency in Python.",
  },

  {
    id: 2,
    title: "Data Analysis Fundamentals",
    issuer: "Udacity",
    date: "2024",
    category: "Data Analysis",
    image: Data,
    credentialUrl: "https://www.udacity.com/certificate/e/dcbbdd42-7aa4-11ef-a0c9-eb8dcf715c4a",
    skills: ["python", "Pandas", "Data Visualization", "Matplotlib", " NumPy", "Data Cleaning"],
    description:
      "Data Analysis Fundamentals Nanodegree is to empower learners with the skills to analyze and visualize data effectively, enabling data-driven decision-making in various fields.",
  },

  {
    id: 3,
    title: "Android Basics Nanodegree",
    issuer: "Udacity",
    date: "2024",
    category: "Mobile Development",
    image: Android,
    credentialUrl: "https://www.udacity.com/certificate/e/a752f142-50cc-11ef-bc93-7bd95d0266e7",
    skills: ["Java/Kotlin", "Android Studio", "Android SDK", "Gradle"],
    description:
      "This Certification Assessment evaluates your skills and knowledge in Android development to certify your readiness for real-world challenges in the field.",
  },

  {
    id: 4,
    title: "Introduction to Cyber Security",
    issuer: "Simplilearn",
    date: "2025",
    category: "Cyber Security",
    image: Cyber,
    credentialUrl:
      "https://lms.simplilearn.com/courses/3736/Introduction%20to%20Cyber%20Security/certificate/download-skillup",
    skills: ["Cybersecurity Basics", "Threat Analysis", "Network Security", "Risk Management"],
    description:
      "The 'Introduction to Cyber Security' course by Simplilearn provides a comprehensive overview of cybersecurity principles, threat analysis, and risk management strategies to protect digital assets.",
  },
];

  const stats = [
    { number: "4", label: "Certificates", color: "text-blue-500" },
    { number: "3", label: "Categories", color: "text-green-500" },
    { number: "2023-2025", label: "Timeline", color: "text-purple-500" },
    { number: "100%", label: "Verified", color: "text-orange-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="Certification" className="light-bg dark:dark-bg py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm mb-6">
            <Award className="w-6 h-6 text-yellow-500" />
            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Professional Certifications
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Validated expertise in modern web technologies and cloud platforms
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-50 dark:border-gray-700 shadow-lg text-2xl"
            >
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-900 dark:text-gray-50 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={itemVariants}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCertificate(certificate)}
            >
              {/* Certificate Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40  flex items-end p-6">
                  <div className="h-48 w-full overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-medium">
                    {certificate.category}
                  </span>
                </div>

                {/* Date Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Calendar className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    {certificate.date}
                  </span>
                </div>

                {/* Certificate Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="w-16 h-16 text-orange-500 dark:text-orange-400" />
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {certificate.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-3">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">{certificate.issuer}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                  {certificate.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>

                  {/* Certificate Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 relative flex items-center justify-center">
                    
                     <div className="h-48 w-full overflow-hidden">
                     
                      <img
                        src={selectedCertificate.image}
                        alt={selectedCertificate.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                     </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                      <Award className="w-16 h-16 text-orange-500 dark:text-orange-400" />
                     </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {selectedCertificate.title}
                    </h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Award className="w-16 h-16 text-orange-500 dark:text-orange-400" />
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Issuer</div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {selectedCertificate.issuer}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-green-500" />
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Issued</div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {selectedCertificate.date}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {selectedCertificate.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Skills & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertificate.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={selectedCertificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Verify Certificate
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;