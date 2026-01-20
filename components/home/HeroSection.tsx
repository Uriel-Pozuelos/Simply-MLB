import React from 'react';
import { HeroCarousel } from './HeroCarousel';
import { NavigationGrid } from './NavigationGrid';
import type { CarouselImage, NavigationItem } from '@/types';

interface HeroSectionProps {
    carouselImages: CarouselImage[];
    navigationItems: NavigationItem[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    carouselImages,
    navigationItems,
}) => {
    
    return (
        <section className="w-full px-3 md:px-4 lg:px-4 sm:px-20">
            <div className="max-w-full mx-auto
                            grid grid-cols-1 min-h-full gap-4
                            md:grid-cols-1 md:h-[70vh] md:gap-4
                            lg:grid-cols-2 lg:h-[80vh] lg:gap-6">
                {/* Carrusel */}
                <div className="w-full h-60 sm:h-full md:h-full lg:h-full">
                    <HeroCarousel images={carouselImages} />
                </div>

                {/* Grid de navegación */}
                <div className="w-full h-60 sm:h-full md:h-full lg:h-full">
                    <NavigationGrid items={navigationItems} />
                </div>
            </div>
        </section>
    );
};