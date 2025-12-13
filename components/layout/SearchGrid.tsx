
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
                <h1 className="text-2xl font-bold mb-6">{title}</h1>
            )}

            {items.length === 0 && (
                <p className="text-muted-foreground">No se encontraron resultados.</p>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="border p-4 rounded-md bg-card shadow-sm hover:shadow transition"
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
            </div>
        </section>
    );
}