import Link from "next/link";

export function NavbarLinks({ onClick }: { onClick?: () => void }) {
    return (
        <nav className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center w-[80%] text-nowrap">

            <Link href="/items" onClick={onClick} className=" hover:text-[#3086FF]">
                Items
            </Link>

            <Link href="/tierlist" onClick={onClick} className=" hover:text-[#3086FF]">
                Tierlsit
            </Link>

            <Link href="/tierlistForFun" onClick={onClick} className=" hover:text-[#3086FF]">
                Tierlsit para divertirse
            </Link>

            <Link href="/updates" onClick={onClick} className=" hover:text-[#3086FF]">
                Actualizaciones
            </Link>

        </nav>
    );
}