"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
    { href: "/", label: "Home", icon: "⌂" },

    { href: "/#projects", label: "Projects", icon: "◈" },
    { href: "/blog", label: "Blog", icon: "✎" },
    { href: "/about", label: "About", icon: "◯" },
];

export default function MobileNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#0B0B0E]/95 backdrop-blur-md border-t border-white/10">
            <div className="flex justify-around items-center h-16 px-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href ||
                        (item.href === "/" && pathname === "/") ||
                        (item.href !== "/" && pathname.startsWith(item.href.replace("/#", "/")));

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center flex-1 py-2 
                                       transition-colors active:scale-95 ${isActive ? "text-[var(--primary)]" : "text-[var(--muted-foreground)]"
                                }`}
                        >
                            <span className="text-lg mb-1">{item.icon}</span>
                            <span className="text-xs">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
            {/* Safe area for iPhone home indicator */}
            <div className="h-safe-area-inset-bottom bg-[#0B0B0E]" />
        </nav>
    );
}
