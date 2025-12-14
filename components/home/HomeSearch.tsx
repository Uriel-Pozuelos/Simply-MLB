import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";

interface HomeSearchProps {
    value: string;
    onChange: (value: string) => void;
}

export default function HomeSearch({value, onChange}: HomeSearchProps) {
    return (
        <div className="relative w-5/12 mx-auto transition-all duration-200 ease-in-out">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Buscar héroe..."
                className="pl-10 text-center py-5 focus-visible:ring-2
                        focus-visible:border-[#2B405B] focus-visible:ring-[#2B405B]
                        w-full shadow-md bg-white dark:bg-gray-800
                        border border-gray-300 dark:border-gray-600
                        dark:shadow-neutral-700"
            />
        </div>
    )
}