"use client";

import { useState, useEffect} from "react";
import { ArrowUp } from "lucide-react";


export default function FloatingBackTop() {
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 250);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <button
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="
                fixed bottom-6 right-6 z-50
                rounded-full p-3 bg-[#222C43]
                text-white shadow-lg
                hover:scale-110 transition-transform
            "
            aria-label="Back to top"
        >
            <ArrowUp className="h-5 w-5" />
        </button>  
    );

}
