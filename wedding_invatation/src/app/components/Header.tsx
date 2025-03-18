// src/app/components/Header.tsx
"use client";
import { Heart } from "lucide-react";
import { Fleur_De_Leah, Hurricane } from "next/font/google";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", title: "Home" },
  { id: "about", title: "Cặp đôi" },
  { id: "story", title: "Chuyện Tình Yêu" },
  { id: "event", title: "Sự Kiện Cưới" },
  { id: "bridalParty", title: "Phù Dâu & Phù Rể" },
  { id: "gallery", title: "Album Hình cưới" },
  { id: "rsvp", title: "Sổ Lưu Bút" },
  { id: "contact", title: "Mừng Cưới" },
];
const fleurDeLeah = Fleur_De_Leah({ subsets: ["latin"], weight: "400" });
const meaCulpa = Hurricane({ subsets: ["vietnamese"], weight: "400" });

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
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
      setIsScrolled(currentSection==="home");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const targetPosition = element.offsetTop;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 giây
      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, startPosition + distance * progress);
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
<header
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    !isScrolled ? "bg-white/90 shadow-md text-black" : "bg-white/30 text-white"
  }`}
>
  <nav className="flex justify-center space-x-10 p-4">
    <div className="w-48 flex gap-x-2 justify-center items-center">
      <span
        className={`${fleurDeLeah.className} text-5xl`}
        style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}
      >
        P
      </span>
      <Heart className="text-red-500 w-10 h-10" fill="red" />
      <span
        className={`${fleurDeLeah.className} text-5xl`}
        style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}
      >
        T
      </span>
    </div>

    {sections.map((section) => (
      <button
        key={section.id}
        onClick={() => handleClick(section.id)}
        className={`${meaCulpa.className} text-4xl cursor-pointer transition-colors duration-300 hover:text-red-600 ${
          activeSection === section.id ? "!text-red-600" : ""
        }`}
        style={{
          color: !isScrolled ? "black" : "white",
          textShadow:
            activeSection !== section.id
              ? "2px 2px 10px rgba(0,0,0,0.5)"
              : "1px 1px 0.5px rgba(255, 255, 255, 0.8)",
        }}
      >
        {section.title}
      </button>
    ))}
  </nav>
</header>

  );
}
