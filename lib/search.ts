import { SearchResult } from "@/types/search";

export async function searchHeroes(
        query: string, 
        role?: string,
        // offset: number = 0,
        // limit: number = 24
    ): Promise<SearchResult[]> {
    //Si no hay busqueda no retornamos nada
    const q = query.trim();
    const isAll = role === "all";

    if (!q && !role) {
        return [];
    }

    try {
        // const res = await fetch(`/api/search?q=${query}`);
        const params = new URLSearchParams();

        if (q) params.append("q", q);
        if (!isAll) params.append("role", role ??  ""); 
        else params.append("role","all");
        
        // params.append("offset", offset.toString());
        // params.append("limit", limit.toString());

        const res = await fetch(`/api/search?${params.toString()}`);

        if (!res.ok) return [];

        const data = await res.json();

        return data.results as SearchResult[];

    } catch (err) {
        console.error("Search error:", err);
        return [];
    }
}