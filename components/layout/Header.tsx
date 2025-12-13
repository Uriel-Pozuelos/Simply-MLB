"use client";

import Link from "next/link";
import { ModeToggle } from "./Mode-toggle";
import { NavbarLinks } from "./NavbarLinks";
import { SearchBar } from "./Search";
import { MobileMenu } from "./MobileMenu";

export function Header() {
    return (
        <header className="w-full border-b bg-background sticky top-0 z-50">
            <div className="mx-auto grid grid-cols-12 items-center justify-between px-6 py-4 ">
                
                <Link href="/" className="text-xl font-bold col-span-4 md:col-span-3"> 
                    <h1 className="">Simply MLBB</h1>
                </Link>

                
                <div className="hidden md:flex md:col-span-9 md:justify-between items-center col-span-8 justify-between">

                        <div className="flex items-center gap-6 w-[80%]">
                            <NavbarLinks />
                        </div>
                        
                        <div className="flex justify-end items-center md:gap-2 md:space-x-2">
                            <ModeToggle />
                        
                            <SearchBar />
                        </div>
                    
                </div>

                <div className="flex items-center gap-4 justify-end col-span-8">
                    <MobileMenu />
                </div>
                
            </div>
            
        </header>
    )
}