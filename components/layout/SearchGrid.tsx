
interface GridItem {
    id: number;
    name: string;
    subTypeEs?: string;
    imageUrl?: string;
}

interface SearchGridProps {
    items: GridItem[];
    title?: string;
}

export default function SearchGrid({items, title}: SearchGridProps) {
    return (
        <section className="max-w-11/12 mx-auto px-4 py-5">
            {title && (
                <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
            )}

            <div className="
                    grid justify-center gap-4 max-w-7xl mx-auto
                    transition-all duration-300 ease-out
                    opacity-100 translate-y-0"
                    style={{
                        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                    }}
                    >
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="border p-4 rounded-md bg-card shadow-sm hover:shadow transition
                                    animate-in fade-in slide-in-from-bottom-2
                                    duration-300"
                    >
                        {/* {item.imageUrl && (
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="w-full h-32 object-contain mb-2"
                            />
                        )} */}
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                        {item.subTypeEs && (
                            <p className="text-sm text-muted-foreground">
                                {item.subTypeEs}
                            </p>
                        )}
                    </div>
                ))}
                
            {items.length === 0 && (
                <p className="text-muted-foreground">No se encontraron resultados.</p>
            )}
            </div>
        </section>
    );
}