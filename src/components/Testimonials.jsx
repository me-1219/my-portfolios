import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  Quote, 
  Linkedin,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Abel Adnew",
      position: "Product Manager",
      company: "TechSolutions Inc.",
      image: "/testimonials/abel.jpg",
      content: "Working with Mebit was an absolute pleasure. His attention to detail and technical expertise helped us deliver our project ahead of schedule. The code quality was exceptional and his communication throughout the process was outstanding.",
      rating: 5,
      link: "https://linkedin.com/in/abeljohnson"
    },
    {
      id: 2,
      name: "Sara Chen",
      position: "CTO",
      company: "StartUp Ventures",
      image: "/testimonials/sara.jpg",
      content: "Mebit's ability to understand complex requirements and translate them into efficient solutions is remarkable. He's not just a developer; he's a problem-solver who consistently delivers beyond expectations.",
      rating: 5,
      link: "https://linkedin.com/in/sarachen"
    },
    {
      id: 3,
      name: "Beki Rodriguez",
      position: "Lead Designer",
      company: "Digital Creative Co.",
      image: "/testimonials/beki.jpg",
      content: "Collaborating with Mebit on our design system was fantastic. He understands the importance of UI/UX and implements designs with precision. His React components are clean, reusable, and performant.",
      rating: 5,
      link: "https://linkedin.com/in/bekirodriguez"
    },
    {
      id: 4,
      name: "Naol Thompson",
      position: "Senior Developer",
      company: "CodeCraft Studio",
      image: "/testimonials/naol.jpg",
      content: "Mebit is one of the most dedicated developers I've worked with. His commitment to writing clean, maintainable code and his willingness to mentor junior developers makes him a valuable asset to any team.",
      rating: 5,
      link: "https://linkedin.com/in/naolthompson"
    }
  ];

  const stats = [
    { number: "15+", label: "Happy Clients", color: "text-blue-500" },
    { number: "4.2/5", label: "Average Rating", color: "text-green-500" },
    { number: "85%", label: "Project Success", color: "text-purple-500" },
    { number: "2+", label: "Years Experience", color: "text-orange-500" }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="Testimonials" className="light-bg dark:dark-bg py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm mb-6">
            <Quote className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Client Testimonials
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Feedback from clients and colleagues I've had the pleasure of working with
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
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-50 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-110 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-110 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Testimonial Card */}
          <div className="relative h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-blue-500/50" />
                  </div>

                  {/* Rating */}
                  <div className="mb-6">
                    <StarRating rating={testimonials[currentIndex].rating} />
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg flex-1 mb-8">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white text-xl">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                      </p>
                    </div>

                    <a
                      href={testimonials[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;