"use client";
import { useEffect, useState } from "react";
const images = [
    "/hc1.JPG",
    "/hc2.JPG",
    "/hc3.JPG",
    "/hc4.JPG",
    "/hc5.JPG",
    "/hc6.JPG",
  ];
export function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = images.length;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, 3000); // Chuyển ảnh mỗi 3 giây
  
      return () => clearInterval(interval);
    }, [totalSlides]);
    return (
      <section id="home" className="h-screen flex items-center justify-center bg-gray-100 border-b">
        <h2 className="text-3xl font-bold">Trang Chủ</h2>
      </section>
    );
  }