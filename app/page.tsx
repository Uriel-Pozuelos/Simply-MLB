"use client";

import { HERO_ROLES } from "@/constants/roles";
import HomeSearch from "@/components/home/HomeSearch";
import RoleFilter from "@/components/home/RoleFilter";
import {useState, useEffect} from "react";
import { searchHeroes } from "@/lib/search";
import { SearchResult } from "@/types/search";
import SearchGrid from "@/components/layout/SearchGrid";
import SearchSkeleton from "@/components/layout/SearchSkeleton";
  

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [role, setRole] = useState("all");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const PAGE_SIZE = 32;


  useEffect(() => {
    
      const debounce = setTimeout(async () => {
        setLoading(true);

        const data = await searchHeroes(searchQuery, role);
        setResults(data);

        setLoading(false);
      }, 400);

      return () => clearTimeout(debounce);
    
  }, [searchQuery, role]);
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50  dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center gap-y-5 py-5 bg-white dark:bg-black sm:items-start">
          
          <HomeSearch value={searchQuery} onChange={setSearchQuery} />

          <RoleFilter roles={HERO_ROLES} selectedRole={role} onChange={setRole} />

          {
            loading ? (
              <SearchSkeleton amount={PAGE_SIZE} />
            ) : (
              <SearchGrid 
                key={`${role}-${searchQuery}`}
                items={results} 
                title={searchQuery.trim() 
                    ? "Resultados de búsqueda"
                    : ""
                } />
            )
          }
      </main>
    </div>
  );
}
