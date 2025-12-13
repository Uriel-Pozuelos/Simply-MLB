export const dynamic = "force-dynamic";

import SearchGrid from "@/components/layout/SearchGrid";
import { headers } from "next/headers";


export default async function SearchPage(props: { searchParams: Promise<{ q?: string }> }) {
    
    const searchParams = await props.searchParams;
    const q = searchParams.q?.trim() ?? "";

    if (!q.trim()) {
        return (
            <main className="max-w-4xl mx-auto px-6 py-10">
                <h1 className="text-2xl font-bold mb-6">Busca algo en MLBB 🔍</h1>
                <p className="text-muted-foreground">Empieza escribiendo un nombre arriba.</p>
            </main>
        );
    }

    const headerList = headers();
    const host = (await headerList).get("host");
    const protocol = host?.includes("localhost") ? "http" : "https";

    const url = `${protocol}://${host}/api/search?q=${q}`;
    const response = await fetch(url, {
        cache : "no-store",
    });

    if (!response.ok) {
        return (
            <main className="max-w-4xl mx-auto px-6 py-10">
                <h1 className="text-2xl font-bold mb-6">Error al buscar</h1> 
                <p className="text-muted-foreground">Hubo un problema al realizar la búsqueda. Por favor, intenta de nuevo más tarde.</p>
            </main>
        );
    }

    const { results } = await response.json();

    return (
        <SearchGrid items={results} title={`Resultados de búsqueda para "${q}"`} />
    );
}

