import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showPrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const showNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
    };

    return (
        <div className="relative w-full mx-auto overflow-visible">
            {/* Carousel wrapper */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(calc(-${currentIndex * 90}% + ${currentIndex * 8}px))`,
                }}
            >
                {images.map((src, i) => (
                    <div
                        key={i}
                        className={`min-w-[90%] transition-all duration-300 ${i === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-40 scale-95 z-0'
                            }`}
                        style={{
                            transform: `translateX(${(i - currentIndex) * 15}%)`,
                            padding: '0 4px',
                        }}
                    >
                        <img
                            src={src}
                            className="rounded-xl w-full h-auto object-cover shadow-md"
                            alt={`img-${i}`}
                        />
                    </div>
                ))}
            </div>

            {/* Left arrow */}
            {currentIndex > 0 && (
                <button
                    onClick={showPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white z-20"
                >
                    <ChevronLeft size={28} />
                </button>
            )}

            {/* Right arrow */}
            {currentIndex < images.length - 1 && (
                <button
                    onClick={showNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2 shadow-md hover:bg-white z-20"
                >
                    <ChevronRight size={28} />
                </button>
            )}
        </div>
    );
};

export default ImageCarousel;
