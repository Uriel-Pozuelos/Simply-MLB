import { NextResponse } from "next/server";
import { SearchResult } from "@/types/search";
import { supabaseServer} from "@/lib/supabase";

// const mock: SearchResult[] = [
//     { id: 1, name: "Layla", type: "hero", subtype: "Marksman", subTypeEs: "Tirador"},
//     { id: 2, name: "Tigreal", type: "hero", subtype: "Tank", subTypeEs: "Tanque" },
//     { id: 3, name: "Miya", type: "hero", subtype: "Marksman", subTypeEs: "Tirador" },
//     { id: 4, name: "Balmond", type: "hero", subtype: "Fighter", subTypeEs: "Combatiente" },
// ];

// Funcion asincrona tipo GET que recibe una solicitud
export async function GET(req: Request) {
    const supabase = supabaseServer();
    // Asignamos los params de la url a la variable 
    const { searchParams } = new URL(req.url);

    // 
    const q = searchParams.get("q")?.toLowerCase() ?? "";

    if (!q.trim()) {
        return NextResponse.json({ results: [] });
    }   

    // Filtramos los resultados que coinciden con la consulta
    // const resultsMock = mock.filter((x) =>
    //     x.name.toLowerCase().includes(q)
    // );

    const { data, error } = await supabase
        .from("Heroes")
        .select("id, name, type, subType, subTypeEs")
        .ilike("name", `%${q}%`)
        // .limit(10);
    
    // console.log("Supabase search data: ", data);


    const results: SearchResult[] = data?.map((hero) => ({
        id: hero.id,
        name: hero.name,
        type: "hero",
        role: hero.type,
        subType: hero.subType,
        subTypeEs: hero.subTypeEs,        
    })) || [];

    if(error){
        console.error("Supabase search error: ", error.message);
        return NextResponse.json(
            {error: error.message, results: []},
            { status: 500 }
        )
    }

    return NextResponse.json({ results });
}


