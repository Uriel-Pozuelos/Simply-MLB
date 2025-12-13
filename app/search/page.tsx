export const dynamic = "force-dynamic";

import SearchGrid from "@/components/layout/SearchGrid";
// import { SearchResult } from "@/types/search";


export default async function SearchPage(props: { searchParams: Promise<{ q?: string }> }) {
    const searchParams = await props.searchParams;

    const q = searchParams.q?.trim() ?? "";
    console.log("Search query:", q);

    if (!q.trim()) {
        return (
            <main className="max-w-4xl mx-auto px-6 py-10">
                <h1 className="text-2xl font-bold mb-6">Busca algo en MLBB 🔍</h1>
                <p className="text-muted-foreground">Empieza escribiendo un nombre arriba.</p>
            </main>
        );
    }

    const response = await fetch(process.env.NEXT_PUBLIC_URL + `/api/search?q=${q}`, {
        cache: "no-store"
    });

    const { results } = await response.json();

    return (
        <SearchGrid items={results} title={`Resultados de búsqueda para "${q}"`} />
    );
}

