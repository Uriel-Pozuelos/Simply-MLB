'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { CarouselImage } from '@/types/index';
import Image from 'next/image';

interface HeroCarouselProps {
    images: CarouselImage[];
    autoPlayInterval?: number;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ 
    images, 
    autoPlayInterval = 4000 
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {

        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [isAutoPlaying, images.length, autoPlayInterval]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 5000);
    };

    return (
        <div className="relative w-full h-full bg-slate-900 rounded-lg overflow-hidden group">
        
            {/* Imágenes */}
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <Image
                            src={image.url}
                            alt={image.alt}
                            fill
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />
                    </div>
                ))}
            </div>

            {/* Controles */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/60 
                        hover:bg-slate-900/90 text-white p-1 opacity-100 rounded-full transition-all
                        sm:p-1 sm:w-5 sm:h-5
                        md:p-3 md:group-hover:opacity-100 
                        md:w-auto md:h-auto
                        "
                aria-label="Imagen anterior"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/60 
                        hover:bg-slate-900/90 text-white p-1 opacity-100 rounded-full transition-all
                        sm:p-1 sm:w-5 sm:h-5 
                        md:p-3 md:group-hover:opacity-100
                        md:w-auto md:h-auto
                        "
                aria-label="Siguiente imagen"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all rounded-full hover:cursor-pointer ${
                            index === currentIndex
                                ? 'bg-white w-8 h-3'
                                : 'bg-white/50 hover:bg-white/75 w-3 h-3'
                            }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};  