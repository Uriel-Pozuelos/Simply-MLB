import { SearchResult } from "@/types/search";

export async function searchHeroes(query: string): Promise<SearchResult[]> {
    //Si no hay busqueda no retornamos nada
    if (query.trim() === "") return [];

    try {
        const res = await fetch(`/api/search?q=${query}`);
        if (!res.ok) return [];

        const data = await res.json();
        return data.results as SearchResult[];
    } catch (err) {
        console.error("Search error:", err);
        return [];
    }
}