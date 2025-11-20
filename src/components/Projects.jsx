import React from "react";

// Imported images MUST be inside src/assets/

export default function Projects() {
  const featuredProjects = [
    {
      year: "2025",
      title: "E-Commerce Platform",
      category: "Full-Stack",
      description:
        "A modern e-commerce solution built with PHP, featuring real-time inventory management, payment processing, and admin dashboard.",
      technologies: [
        "HTML",
        "Bootstrap",
        "JavaScript",
        "PHP",
        "Ajax",
        "MySQL",
      ],
      image: '/public/projects/ecomerce.png',
      liveUrl: "https://msglcd.com",
      githubUrl: "https://github.com/me-1219/phone-accessories-stores",
      featured: true,
      status: "Live",
    },
    {
      year: "2025",
      title: "Holy Trinity Ethiopian Orthodox Tewahedo Centre — Canberra",
      category: "Frontend",
      description:
        "Modern, responsive website for the Holy Trinity Ethiopian Orthodox Tewahedo Centre in Canberra, showcasing events, services, and community resources.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      image: "/public/projects/holytrinity.png",
      liveUrl: "https://holytrinitycanberra.org.au/",
      githubUrl: "https://github.com/me-1219/Holy_Trinity_Canberra",
      featured: true,
      status: "Beta",
    },
    {
      year: "2025",
      title: "Portfolio Website",
      category: "Frontend",
      description:
        "A modern and responsive personal portfolio website built using React and TailwindCSS.",
      technologies: ["React", "Tailwindcss"],
      image: "/public/projects/portifolio.png",
      liveUrl: "https://cv.melaklegacy.com.et",
      githubUrl: "https://github.com/me-1219/my-portfolios",
      featured: false,
      status: "Live",
    },
    {
      year: "2025",
      title: "BMI (Body Mass Index) Calculator",
      category: "Health",
      description:
        "Responsive web app that calculates BMI using height, weight, gender, and age.",
      technologies: ["React", "Tailwind CSS", "Lucide Icons", "Hook Form"],
      image: "/public/projects/bmi.png",
      liveUrl: "https://bmi-calculators-beta.vercel.app",
      githubUrl: "https://github.com/me-1219/bmi-calculators",
      featured: false,
      status: "Live",
    },
    {
      year: "2022",
      title: "Task Management App",
      category: "Productivity",
      description:
        "Collaborative task tool with Kanban boards, time tracking, and team collaboration.",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Socket.io", "Jest"],
      image: "/projects/task-management.jpg",
      liveUrl: "https://taskapp-demo.com",
      githubUrl: "https://github.com/username/task-management",
      featured: false,
      status: "Maintained",
    },
    {
      year: "2022",
      title: "Social Media Analytics",
      category: "Data Visualization",
      description:
        "Analytics dashboard with sentiment analysis, engagement tracking, and competitor insights.",
      technologies: [
        "Next.js",
        "D3.js",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Docker",
      ],
      image: "/projects/social-analytics.jpg",
      liveUrl: "https://social-analytics-demo.com",
      githubUrl: "https://github.com/username/social-analytics",
      featured: false,
      status: "Live",
    },
  ];

  return (
    <section
      id="Projects"
      className="light-bg dark:dark-bg py-20 px-4 sm:px-6 lg:px-8 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold dark:text-white mb-6">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Building modern, real-world solutions with clean code & modern tech.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 overflow-hidden group"
            >
              {/* IMAGE FIX BELOW */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Status Badge */}
                <span
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Live"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : project.status === "Beta"
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  }`}
                >
                  {project.status}
                </span>

                {/* Featured Badge */}
                {project.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-xs font-medium">
                    ⭐ Featured
                  </span>
                )}
              </div>

              {/* CARD CONTENT */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-500 font-semibold">
                    {project.year}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg text-sm font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 
                    hover:bg-gray-50 dark:hover:bg-gray-700 text-center py-2 rounded-lg text-sm font-medium"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
