import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slideImages = [
    "/hc1.JPG",
    "/hc2.JPG",
    "/hc3.JPG",
    "/hc4.JPG",
    "/hc5.JPG",
    "/hc6.JPG",
];

export default function Slider() {
    return (
        <div className="w-full mx-auto">
            <Slide
                easing="ease-out"
                autoplay={true}
                duration={3000}
                transitionDuration={1500}
                infinite
            >
                {slideImages.map((slide, index) => {
                    return (
                        <div
                            className="relative flex items-center justify-center h-screen w-full bg-cover bg-center"
                            key={slide}
                            style={{ backgroundImage: `url(${slide})` }}
                        >
                            <div className="absolute inset-0 bg-black/30"></div>
                            <img src={slide} alt={`Slide ${index + 1}`} className="max-h-[100vh] max-w-[90vw] object-contain relative z-10 rounded-lg shadow-lg" />
                        </div>
                    );
                })}
            </Slide>
        </div>
    );
}
