export default function About() {
  const timeline = [
    {
      year: "2023-Present",
      title: "Senior Frontend Developer",
      company: "Tech Innovations",
      description: "Leading frontend architecture and mentoring junior developers while implementing cutting-edge React and Next.js solutions."
    },
    {
      year: "2024-present",
      title: "Full-stack Developer",
      company: "Digital Solutions Inc",
      description: "Built scalable web applications for various clients, focusing on performance optimization and user experience."
    },
    {
      year: "2024-2025",
      title: "Junior Developer",
      company: "StartUp Labs",
      description: "Started my professional journey, mastering fundamentals and contributing to various web development projects."
    },
    {
      year: "2021-2025",
      title: "Computer Science Student",
      company: "Haramaya University",
      description: "Built foundation in software engineering principles and discovered passion for web development."
    }
  ];

  const technologies = [
    {
      category: "Frontend Mastery",
      year: "Expert Level",
      items: ["HTML","CSS","JavaScript","React", "Next.js", "TypeScript","Bootstrap", "Tailwind CSS",  "Vite"],
      color: "from-blue-500 to-cyan-500",
      icon: "🖥️"
    },
    {
      category: "Backend & Databases",
      year: "Advanced Level",
      items: ["PHP" ,"Laravel","Node.js", "Python", "Express", "PostgreSQL", "MongoDB",  "REST APIs", "Firebase"],
      color: "from-green-500 to-emerald-500",
      icon: "⚙️"
    },
    {
      category: "Cloud & DevOps",
      year: "Professional Level",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Vercel", "Netlify", "Linux", "Nginx"],
      color: "from-purple-500 to-pink-500",
      icon: "☁️"
    },
    {
      category: "Tools & Practices",
      year: "Daily Drivers",
      items: ["Git", "VS Code", "Figma", "Jest", "Cypress", "WebStorm", "Postman", "Agile", "Scrum"],
      color: "from-orange-500 to-red-500",
      icon: "🛠️"
    }
  ];

  return (
    <section id="About" className="light-bg dark:dark-bg py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold dark:text-white mb-6 tracking-tight">
            My Journey
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From curious beginner to passionate professional developer, 
            crafting digital experiences that make a difference
          </p>
        </div>

        {/* Professional Timeline Section */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-center mb-16">
            Professional Journey
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full z-20 shadow-lg"></div>
                
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12 md:pl-0' : 'md:pl-12 md:pr-0'
                }`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1">
                    <div className="text-base font-semibold text-blue-500 dark:text-blue-400 mb-2 tracking-wide">
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold dark:text-white mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <div className="text-xl text-gray-600 dark:text-gray-400 font-medium mb-3">
                      {item.company}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed  text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Passion Timeline */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-center mb-16">
            Technologies & Passion
          </h2>
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 to-blue-500"></div>
            
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-20 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-800 border-4 rounded-full z-20 shadow-lg flex items-center justify-center text-lg">
                  {tech.icon}
                </div>
                
                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12 md:pl-0' : 'md:pl-12 md:pr-0'
                }`}>
                  <div className={`bg-gradient-to-br ${tech.color} rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 p-8 text-white transform hover:-translate-y-2`}>
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{tech.category}</h3>
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full font-medium">
                        {tech.year}
                      </span>
                    </div>
                    
                    {/* Technology Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {tech.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-center text-sm font-medium hover:bg-white/30 transition-colors duration-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        
      </div>
    </section>
  );
}