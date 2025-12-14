import { cn } from "@/lib/utils";

interface Role {
    key: string;
    label: string;
}

interface RoleFilterProps {
    roles: Role[];
    selectedRole: string;
    onChange: (role: string) => void;
}

export default function RoleFilter({
    roles,
    selectedRole,
    onChange,
}: RoleFilterProps) {
    return (
        <div className="flex flex-wrap gap-2 justify-center mx-auto">
            {roles.map((role) => {
                const isActive = selectedRole === role.key;

                return (
                    <button
                        key={role.key}
                        onClick={() => onChange(role.key)}
                        className={cn(
                            "px-4 py-2 rounded-lg border text-sm transition dark:border-neutral-600 ",
                            isActive
                                ? "bg-[#3A5988] text-white border-neutral-600 dark:border-gray-800 dark:bg-white dark:text-gray-900"
                                : "bg-background hover:bg-muted"
                        )}
                    >
                        {role.label}
                    </button>
                );
            })}
        </div>
    );

}