interface SearchSkeletonProps {
    amount?: number;
}

export default function SearchSkeleton ({amount = 40} : SearchSkeletonProps) {
    return (
        <section className="max-w-11/12 mx-auto px-4 py-5">
            <div className="
                    grid justify-center gap-4 max-w-7xl mx-auto
                    transition-all duration-300 ease-out
                    opacity-100 translate-y-0"
                style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                }}
            >
                {Array.from({ length: amount }).map((_, i) => (
                <div
                    key={i}
                    className="border rounded-md p-4 bg-card shadow-sm animate-pulse"
                >
                    <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                </div>
                ))}
            </div>
        </section>
    );
}