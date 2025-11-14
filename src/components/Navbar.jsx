import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav
      className="navbar-bg fixed w-full flex justify-between items-center px-8 py-4 z-50
                 light-bg dark:dark-bg text-[#2c2f37] dark:text-white
                 backdrop-blur-sm transition-all duration-500"
    >
      <div className="relative flex w-full justify-between items-center navbar-inner">
        
        {/* Logo */}
        <h2 className="text-3xl font-semibold text-[#13b1b0] dark:text-[#13b1b0]">
          Mebit.M 
        </h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-2xl font-medium">
          {[
            { label: "Home", href: "#Hero" },
            { label: "About", href: "#About" },
            { label: "Projects", href: "#Projects" },
            { label: "Certifications", href: "#Certification" },
            { label: "Testimonials", href: "#Testimonials" },
            { label: "Contact", href: "#Contact" },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition text-2xl text-[#2c2f37] dark:text-gray-200 
                           hover:text-[#f59e0b]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
