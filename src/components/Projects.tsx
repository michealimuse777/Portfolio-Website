import Link from "next/link";
import { projects } from "@/config/projects";

export default function Projects() {
    return (
        <section id="projects" className="px-6 md:px-20 py-16 sm:py-24">
            <div className="flex justify-between items-end mb-8 sm:mb-10">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
                    <p className="text-sm text-zinc-500 mt-1 hidden sm:block">Click any project for full details</p>
                    <p className="text-sm text-zinc-500 mt-1 sm:hidden">Swipe to browse • Tap for details</p>
                </div>
            </div>

            {/* Mobile: Horizontal swipeable cards */}
            <div className="relative sm:hidden -mx-6 px-6">
                <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#0B0B0E] to-transparent z-10" />

                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar">
                    {projects.map((p) => (
                        <Link
                            key={p.name}
                            href={`/projects/${p.slug}`}
                            className="relative min-w-[85%] snap-center bg-[#121218] border border-white/10 p-5 rounded-xl 
                                       transition-transform duration-300 active:scale-[0.98]"
                        >
                            {/* Status badge */}
                            <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-full bg-white/5 text-zinc-400">
                                {p.status}
                            </span>

                            <h3 className="text-lg font-medium pr-16">{p.name}</h3>
                            <p className="mt-2 text-zinc-400 text-sm">{p.description}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tech.slice(0, 3).map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs px-2 py-1 bg-white/5 rounded-md"
                                    >
                                        {t}
                                    </span>
                                ))}
                                {p.tech.length > 3 && (
                                    <span className="text-xs px-2 py-1 bg-white/5 rounded-md text-zinc-500">
                                        +{p.tech.length - 3}
                                    </span>
                                )}
                            </div>

                            <div className="mt-4 flex justify-end">
                                <span className="text-sm text-[#7C7CFF]">
                                    Tap to view →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-6">
                {projects.map((p) => (
                    <Link
                        key={p.name}
                        href={`/projects/${p.slug}`}
                        className="group block bg-[#121218] border border-white/10 p-6 rounded-xl 
                                   transition-all duration-300 hover:border-[#7C7CFF]/50 hover:-translate-y-1"
                    >
                        <div className="flex justify-between items-start">
                            <h3 className="text-lg font-medium">{p.name}</h3>
                            <span className="text-zinc-500 group-hover:text-[#7C7CFF] transition-colors">→</span>
                        </div>
                        <p className="mt-2 text-zinc-400">{p.description}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {p.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-xs px-2 py-1 bg-white/5 rounded-md"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-xs text-zinc-500">{p.status}</span>
                            <span className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">
                                View details
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
