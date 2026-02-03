"use client";

import { useState } from "react";

const techData = [
    {
        title: "Languages & Frameworks",
        items: ["Python (AI agents, automation)", "JavaScript / TypeScript", "Rust (Solana smart contracts)"],
    },
    {
        title: "Frontend Development",
        items: ["Next.js (React framework)", "Tailwind CSS", "Vercel / Deployment", "React Libraries"],
    },
    {
        title: "Backend & APIs",
        items: ["Node.js / Express.js", "REST & GraphQL APIs", "FastAPI", "PostgreSQL", "AI Integration"],
    },
    {
        title: "Blockchain",
        items: ["Solana", "Anchor Framework", "Smart Contracts (Rust)"],
    },
    {
        title: "AI & Automation",
        items: ["Gemini API", "AI Agents", "Prompt Engineering", "Automation Workflows"],
    },
];

export default function TechStack() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="px-6 md:px-20 py-16 sm:py-24">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-10">Tech Stack</h2>

            {/* Mobile: Accordion */}
            <div className="sm:hidden space-y-2">
                {techData.map((category, index) => (
                    <div key={category.title} className="border border-white/10 rounded-xl overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex justify-between items-center p-4 text-left bg-[#121218] 
                                       active:bg-white/5 transition-colors"
                        >
                            <span className="font-medium">{category.title}</span>
                            <span className={`text-zinc-500 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}>
                                ↓
                            </span>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-out ${openIndex === index ? "max-h-64" : "max-h-0"
                                }`}
                        >
                            <ul className="p-4 pt-0 space-y-2 text-zinc-400 text-sm">
                                {category.items.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop: Grid */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-zinc-400">
                {techData.map((category) => (
                    <div key={category.title} className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="text-lg font-medium text-white mb-4">{category.title}</h3>
                        <ul className="space-y-2">
                            {category.items.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
