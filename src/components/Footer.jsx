import React from "react";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Heart
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/mebitmelak",
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/mebitmelak",
    },
    {
      icon: Twitter,
      url: "https://twitter.com/mebitmelak",
    },
    {
      icon: Mail,
      url: "mailto:mebit.melak@email.com",
    }
  ];

  return (
 <section
      id="Footer"
      className="hero-bg flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-20 transition-colors duration-300 mt-auto overflow-hidden font-['Poppins'] text-gray-800 dark:text-gray-100">                
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          
          {/* Logo */}
          <h3 className="text-2xl font-bold text-[#13b1b0]">
            Mebit.M
          </h3>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-orange-400 rounded-xl text-gray-800 dark:text-gray-50 hover:text-white hover:bg-[#13b1b0] transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-800 dark:text-gray-200">
            <p className="flex items-center gap-2 text-2xl">
              © {currentYear} Mebit Melak. Made with 
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              in Ethiopia
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-lg text-gray-800 dark:text-gray-200 ">
            <a href="#privacy" className="hover:text-white transition-colors duration-200">
              Privacy
            </a>
            <a href="#terms" className="hover:text-white transition-colors duration-200">
              Terms
            </a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;