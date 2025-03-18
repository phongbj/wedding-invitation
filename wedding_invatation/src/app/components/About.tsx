import { Heart } from "lucide-react";

export function About() {
    return (
      <section id="about" className="h-screen flex items-center justify-center bg-gray-100 border-b">
        <div className="heart-rain-container">
          {[...Array(50)].map((_, i) => (
            <span key={i} className="heart"><Heart className="text-red-500 w-8 h-8" fill="red" /></span>
          ))}
        </div>
        <div className="heart-rain-container">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="heart">🤍</span>
          ))}
        </div>
        <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'></link>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='title'></div>
          <span>
            PURE CSS
          </span>
          <br></br>
          <span>
            PARALLAX PIXEL STARS
          </span>
      </section>
    );
  }