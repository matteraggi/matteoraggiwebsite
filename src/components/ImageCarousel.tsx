import { useState, useEffect } from 'react';

const ImageCarousel = (images: any) => {
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Verifica se è mobile (puoi anche usare una media query se preferisci)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize(); // iniziale
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Clic su mobile → passa all’immagine successiva
    const handleClick = () => {
        if (isMobile) {
            setIndex((prevIndex) => (prevIndex + 1) % images.images.length);
        }
    };

    // Movimento mouse su desktop → aggiorna l’immagine in base alla posizione
    const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => any; }; clientX: number; }) => {
        if (!isMobile) {
            const bounds = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - bounds.left;
            const width = bounds.width;
            const newIndex = Math.floor((x / width) * images.images.length);
            setIndex(Math.min(images.images.length - 1, Math.max(0, newIndex)));
        }
    };

    return (
        <div
            className="relative w-full h-full overflow-hidden rounded-xl cursor-pointer select-none mb-10"
            onMouseMove={handleMouseMove}
            onClick={handleClick}
        >
            <img
                src={images.images[index]}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                {images.images.map((_: any, i: any) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
