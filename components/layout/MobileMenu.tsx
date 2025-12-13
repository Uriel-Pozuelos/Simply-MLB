import { SearchBar } from "./Search";
import { NavbarLinks } from "./NavbarLinks";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "../ui/sheet";

export function MobileMenu() {
    return (
        <Sheet>

            <SheetTrigger className="md:hidden">
                <Menu className="w-6 h-6" />
            </SheetTrigger>

            <SheetContent side="left">

                <SheetHeader>
                    <SheetTitle>Menú</SheetTitle>
                </SheetHeader>

                <div className="space-y-3">
                    
                    <SearchBar />
                    
                    <NavbarLinks />
                </div>
            </SheetContent>
        </Sheet>
    );
}
