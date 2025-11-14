import Ecomerce from "../assets/ecomerce.png";
import HolyTrinity from "../assets/HolyTrinity.png";
import React from "react";
export default function Projects() {
  const featuredProjects = [
    {
      year: "2025",
      title: "E-Commerce Platform",
      category: "Full-Stack",
      description: "A modern e-commerce solution built with PHP, featuring real-time inventory management, payment processing, and admin dashboard.",
      technologies: ["HTML", "Bootstrap", "JavaScript","PHP", "Ajax",  "MySQL", ],
      image: Ecomerce,
      liveUrl: "https://msglcd.com",
      githubUrl: "https://github.com/username/ecommerce-platform",
      featured: true,
      status: "Live"
    },
    {
      year: "2025",
      title: "Holy Trinity Ethiopian Orthodox Tewahedo Centre — Canberra",
      category: "Frontend",
      description: "Modern, responsive website for the Holy Trinity Ethiopian Orthodox Tewahedo Centre in Canberra, showcasing events, services, and community resources.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", ],
      image: HolyTrinity,
      liveUrl: "https://holytrinitycanberra.org.au/",
      githubUrl: "https://github.com/me-1219/Holy_Trinity_Canberra",
      featured: true,
      status: "Beta"
    },
    {
      year: "2023",
      title: "Portfolio Website",
      category: "",
      description: "A modern and responsive personal portfolio website built using React and TailwindCSS. Showcases my projects, skills, and experience with smooth animations and clean UI design.",
      technologies: ["React vite","Tailwindcss"],
      image: "/projects/healthcare-dashboard.jpg",
      liveUrl: "https://cv.melaklegacy.com.et",
      githubUrl: "https://github.com/me-1219/my-portfolios",
      featured: false,
      status: "Live"
    },
    {
      year: "2023",
      title: "Cryptocurrency Tracker",
      category: "FinTech",
      description: "Real-time cryptocurrency tracking application with portfolio management, price alerts, and advanced charting capabilities.",
      technologies: ["React", "TypeScript", "CoinGecko API", "Recharts", "Firebase", "PWA"],
      image: "/projects/crypto-tracker.jpg",
      liveUrl: "https://crypto-tracker-demo.com",
      githubUrl: "https://github.com/username/crypto-tracker",
      featured: false,
      status: "Live"
    },
    {
      year: "2022",
      title: "Task Management App",
      category: "Productivity",
      description: "Collaborative task management tool with Kanban boards, time tracking, and team collaboration features.",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Socket.io", "Jest"],
      image: "/projects/task-management.jpg",
      liveUrl: "https://taskapp-demo.com",
      githubUrl: "https://github.com/username/task-management",
      featured: false,
      status: "Maintained"
    },
    {
      year: "2022",
      title: "Social Media Analytics",
      category: "Data Visualization",
      description: "Comprehensive social media analytics dashboard with sentiment analysis, engagement metrics, and competitor tracking.",
      technologies: ["Next.js", "D3.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
      image: "/projects/social-analytics.jpg",
      liveUrl: "https://social-analytics-demo.com",
      githubUrl: "https://github.com/username/social-analytics",
      featured: false,
      status: "Live"
    }
  ];

  const projectStats = [
    { number: "5+", label: "Projects Completed", color: "text-blue-500" },
    { number: "15+", label: "Happy Clients", color: "text-green-500" },
    { number: "5k+", label: "Code Commits", color: "text-purple-500" },
    { number: "2+", label: "Years Experience", color: "text-orange-500" }
  ];

  const technologies = {
    "Frontend": ["React",   "TypeScript", "Tailwind CSS", "Bootstrap", ],
    "Backend": ["PHP", "Python",  "FastAPI",  "REST APIs"],
    "Database": ["PostgreSQL", "MongoDB",  "MySQL", "Firebase"],
    "DevOps": ["Cpanel", "Docker", "Plesk", "Vercel", ]
  };

  return (
    <section id="Projects" className="light-bg dark:dark-bg py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold dark:text-white mb-6 tracking-tight">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building innovative solutions that solve real-world problems through clean code and modern technologies
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {projectStats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-50 font-medium text-xl">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Filter & Grid */}
        <div className="mb-16">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors">
              All Projects
            </button>
            <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Full-Stack
            </button>
            <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Frontend
            </button>
            <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Mobile
            </button>
            <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              AI/ML
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex space-x-3 w-full">
                      <a 
                        href={project.liveUrl} 
                        className="flex-1 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors text-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.githubUrl} 
                        className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors text-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      project.status === 'Beta' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-xs font-medium">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-500 dark:text-blue-400 font-semibold">
                      {project.year}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold dark:text-white mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg text-xs font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveUrl} 
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                    </a>
                    <a 
                      href={project.githubUrl} 
                      className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-center py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 mb-16">
          <h2 className="text-3xl font-bold dark:text-white text-center mb-12">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(technologies).map(([category, techs]) => (
              <div key={category} className="text-center">
                <h3 className="text-lg font-semibold dark:text-gray-50 mb-4 text-blue-500">
                  {category}
                </h3>
                <div className="space-y-2">
                  {techs.map((tech, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}