// src/app/components/Header.tsx
"use client";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", title: "Trang Chủ" },
  { id: "about", title: "Giới Thiệu" },
  { id: "gallery", title: "Thư Viện" },
  { id: "rsvp", title: "Lời Mời" },
  { id: "contact", title: "Liên Hệ" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentSection = "home";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition + 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="flex justify-center space-x-6 p-4">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`text-lg font-semibold cursor-pointer transition-colors duration-300 ${
              activeSection === section.id ? "text-blue-600" : "text-gray-600"
            }`}
          >
            {section.title}
          </a>
        ))}
      </nav>
    </header>
  );
}