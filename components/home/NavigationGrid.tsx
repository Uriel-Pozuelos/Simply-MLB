'use client';

import React from 'react';
import Link from 'next/link';
import type { NavigationItem } from '@/types';

interface NavigationGridProps {
    items: NavigationItem[];
}

export const NavigationGrid: React.FC<NavigationGridProps> = ({ items }) => {
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
            {items.map((item) => (
                <Link
                    key={item.id}
                    href={item.link}
                    className={`${item.color} transition-all rounded-lg flex items-center 
                                justify-center text-white font-bold shadow-lg transform
                                sm:text-xl sm:font-semibold 
                                lg:hover:shadow-xl lg:text-2xl lg:hover:scale-105 lg:active:scale-95 lg:hover:opacity-90
                                `}
                >
                    <span>{item.title}</span>
                </Link>
            ))}
        </div>
    );
};