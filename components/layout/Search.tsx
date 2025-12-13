"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormSubmitEvent, SearchResult } from "@/types/search";
import { searchHeroes } from "@/lib/search";

export function SearchBar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [showAutocomplete, setShowAutocomplete] = useState(false);

    const router = useRouter();

    useEffect(() => { 
        if (query.trim() === "") {
            
            return;
        }

        const debounce = setTimeout( async () => {
            
            // const res = await fetch(`/api/search?q=${query}`);
            // const data: { results: SearchResult[] } = await res.json();

            // setResults(data.results);
            const data = await searchHeroes(query);
            setResults(data);
            setShowAutocomplete(true);

        }, 500);

        return () => clearTimeout(debounce);
    }, [query]);

    const handleSubmit = (e: FormSubmitEvent) => {
        e.preventDefault();
        router.push(`/search?q=${query}`);
        setShowAutocomplete(false);
    };

    return (
        <div className="relative max-w-xs mx-auto md:justify-center">
            <form onSubmit={handleSubmit}>

                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder="Buscar..."
                    className="pl-10"
                    value={query}
                    onChange={(e) => {
                        const value = e.target.value;
                        setQuery(value);

                        if (value.trim() === "") {
                            setShowAutocomplete(false);
                            setResults([]);
                            return;
                        }
                        setShowAutocomplete(true);
                    }}
                    />
            </form>

            {/* AUTOCOMPLETE */}
            {showAutocomplete && results.length > 0 && (
                <div className="absolute top-12 left-0 w-full bg-card border rounded-md shadow z-50 p-2">
                {results.map((item: SearchResult) => (
                    <div
                        key={item.id}
                        onClick={() => {
                            router.push(`/search?q=${item.name}/${item.id}`);
                            setShowAutocomplete(false);
                        }}
                        className="p-2 hover:bg-muted cursor-pointer rounded"
                    >
                        <span className="font-medium">{item.name}</span>
                        <p className="text-xs text-muted-foreground">
                            {item.subTypeEs}
                        </p>
                    </div>
                ))}
                </div>
            )}
        </div>
    );
}
