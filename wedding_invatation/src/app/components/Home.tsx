"use client";
import { Fleur_De_Leah, Hurricane } from "next/font/google";
import Slider from "../UI/slider";
const meaCulpa = Hurricane({ subsets: ["vietnamese"], weight: "400" });
export function Home() {
    return (
<section id="home" className="h-screen flex items-center justify-center bg-gray-100 relative">
  <Slider />
  <div className="absolute inset-0 flex items-center justify-center z-10 text-3xl font-bold bg-black/20 p-4 rounded-lg text-white">
    <span className={`relative text-6xl z-10 ${meaCulpa.className} flex items-center`}>
      <img
        src="/vien.png"
        alt="Border Left"
        className="w-80 h-80 mx-2 transform scale-y-[-1] scale-x-[-1] filter invert" 
      />
      <div className="flex flex-col text-center justify-center items-center" style={{textShadow:"0.5px 0.5px 0.5px rgba(255, 255, 255, 0.8)"}}>
      <span className="mx-4 !text-5xl mb-10">We're Getting Married!</span>
      <span className="mx-4">Lê Đình Phúc & Triệu Thị Thuý</span>
      <div className="flex font-bold flex-col bg-red-500/70 rounded-2xl text-3xl mt-10 p-4">
      <span className="">SAVE THE DATE</span>
      <span className="">00-00-0000</span>
      </div>
      </div>
      <img
        src="/vien.png"
        alt="Border Right"
        className="w-80 h-80 mx-2 filter invert"
      />
    </span>
  </div>
</section>


    );
  }