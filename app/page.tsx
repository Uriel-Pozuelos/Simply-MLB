"use client";


import ButtonBackTop from "@/components/ui/floatingBackTop";

import { HeroSection } from '@/components/home/HeroSection';
import type { CarouselImage, NavigationItem } from '@/types';

// Datos de desarrollo - después se conectará con Supabase
const carouselImages: CarouselImage[] = [
  { id: 1, url: 'https://placehold.co/1200x800/1E3A8A/white/png?text=Hero+1', alt: 'Hero destacado 1' },
  { id: 2, url: 'https://placehold.co/1200x800/1E3A8A/white/png?text=Hero+2', alt: 'Hero destacado 2' },
  { id: 3, url: 'https://placehold.co/1200x800/1E3A8A/white/png?text=Hero+3', alt: 'Hero destacado 3' },
  { id: 4, url: 'https://placehold.co/1200x800/1E3A8A/white/png?text=Hero+4', alt: 'Hero destacado 4' },
  { id: 5, url: 'https://placehold.co/1200x800/1E3A8A/white/png?text=Hero+5', alt: 'Hero destacado 5' },
  { id: 6, url: 'https://placehold.co/1200x800/1E3A8A/white/png?text=Hero+6', alt: 'Hero destacado 6' },
];

const navigationItems: NavigationItem[] = [
  { id: 1, title: 'Heroes', color: 'bg-blue-600', link: '/heroes' },
  { id: 2, title: 'Items', color: 'bg-purple-600', link: '/items' },
  { id: 3, title: 'Tierlist', color: 'bg-red-600', link: '/tierlist' },
  { id: 4, title: 'Actualizaciones', color: 'bg-green-600', link: '/updates' },
];
  

export default function Home() {
  
  return (
    <div className="flex items-center justify-center bg-zinc-50  dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center gap-y-3 bg-white dark:bg-black sm:items-start">
          
            <HeroSection 
                carouselImages={carouselImages} 
                navigationItems={navigationItems} 
            />

          <ButtonBackTop />
      </main>
    </div>
  );
}
