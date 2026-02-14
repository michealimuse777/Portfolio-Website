import Link from "next/link";

export const metadata = {
    title: "Sentinel - AI Guardian | Imuse Michael",
    description: "Advanced AI Discord Guardian powered by LLM and ChromaDB.",
};

export default function SentinelPage() {
    return (
        <main className="min-h-screen bg-[#0B0B0E] text-[#EDEDED]">
            {/* Header */}
            <div className="px-6 md:px-20 py-10">
                <Link href="/projects/ai-agents" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                    Back to AI Agents Suite
                </Link>
            </div>

            {/* Hero */}
            <section className="px-6 md:px-20 py-10">
                <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-md text-sm font-medium flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Live Implementation
                    </span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-md text-sm font-medium">
                        Level 4 Agent
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold mb-6">Sentinel - Advanced AI Guardian</h1>
                <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
                    Sentinel is an autonomous AI Agent powered by Google&apos;s LLM and ChromaDB. Unlike standard bots, Sentinel acts on its own: it browses the web for real-time answers, reads the news, and actively protects your server from scammers.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    {["Python", "Discord.py", "LangChain", "ChromaDB", "DuckDuckGo", "LLM API"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-sm text-zinc-300">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-10 flex gap-4">
                    <a href="https://github.com/michealimuse777/Sentinel-Bot-Showcase" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                        View Source
                    </a>
                </div>
            </section>

            {/* Key Features */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-10 flex items-center gap-3">
                    Key Capabilities
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Researcher */}
                    <div className="bg-[#121218] border border-white/10 p-8 rounded-2xl hover:border-blue-500/30 transition-colors group">
                        <h3 className="font-medium text-xl mb-3 text-white">Researcher</h3>
                        <p className="text-zinc-400 mb-6 leading-relaxed">
                            Sentinel isn&apos;t limited to its training data. It uses DuckDuckGo to browse the web for real-time information.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-sm text-zinc-400">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                <span><strong className="text-zinc-200">Real-Time Knowledge:</strong> Answers queries like &quot;Price of Bitcoin&quot; or &quot;Latest AI news&quot;.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-zinc-400">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                <span><strong className="text-zinc-200">Autonomous Decisions:</strong> The AI intelligently decides when a web search is necessary.</span>
                            </li>
                        </ul>
                    </div>

                    {/* News Anchor */}
                    <div className="bg-[#121218] border border-white/10 p-8 rounded-2xl hover:border-yellow-500/30 transition-colors group">
                        <h3 className="font-medium text-xl mb-3 text-white">News Anchor</h3>
                        <p className="text-zinc-400 mb-6 leading-relaxed">
                            Autonomous news aggregation and broadcasting to keep your community informed without manual effort.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-sm text-zinc-400">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0"></div>
                                <span><strong className="text-zinc-200">Auto-Fetch:</strong> Monitors RSS feeds (e.g., Cointelegraph) every 4 hours.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-zinc-400">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0"></div>
                                <span><strong className="text-zinc-200">Broadcast:</strong> Formats and posts breaking news to designated channels.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-zinc-400">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0"></div>
                                <span><strong className="text-zinc-200">Manual Override:</strong> Admins can force a fetch anytime.</span>
                            </li>
                        </ul>
                    </div>

                    {/* The Cleaner */}
                    <div className="bg-[#121218] border border-white/10 p-8 rounded-2xl hover:border-red-500/30 transition-colors group">
                        <h3 className="font-medium text-xl mb-3 text-white">The Cleaner</h3>
                        <p className="text-zinc-400 mb-6 leading-relaxed">
                            A proactive security system that scans user lists and moderates content to prevent scams.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-sm text-zinc-400">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                                <span><strong className="text-zinc-200">Active Scanning:</strong> Scans member lists hourly for suspicious patterns (e.g., &quot;Support&quot;).</span>
                            </li>
                            <li className="flex gap-3 text-sm text-zinc-400">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                                <span><strong className="text-zinc-200">Instant Ban:</strong> Automatically bans known scammer signatures.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Ticket System */}
                    <div className="bg-[#121218] border border-white/10 p-8 rounded-2xl hover:border-purple-500/30 transition-colors group">
                        <h3 className="font-medium text-xl mb-3 text-white">Professional Support</h3>
                        <p className="text-zinc-400 mb-6 leading-relaxed">
                            A fully integrated ticket system where Sentinel acts as the first line of support.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 text-sm text-zinc-400">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                                <span><strong className="text-zinc-200">Slash Commands:</strong> Native Discord UI integration.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-zinc-400">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0"></div>
                                <span><strong className="text-zinc-200">Transcripts:</strong> Generates HTML transcripts of closed tickets via DM.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hybrid Brain */}
                    <div className="bg-[#121218] border border-white/10 p-8 rounded-2xl hover:border-emerald-500/30 transition-colors group md:col-span-2">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div>
                                <h3 className="font-medium text-xl mb-3 text-white">Hybrid AI Brain (RAG)</h3>
                                <p className="text-zinc-400 mb-4 leading-relaxed">
                                    Sentinel combines short-term conversational context with long-term memory via ChromaDB. It learns from interactions and can be manually trained by admins.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="text-sm text-zinc-400 flex items-center gap-2">
                                        Admin Training <code>/learn [N]</code>
                                    </span>
                                    <span className="text-sm text-zinc-400 flex items-center gap-2">
                                        Custom Welcome Cards
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commands */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                    Command Reference
                </h2>
                <div className="bg-[#121218] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-zinc-400">
                            <thead className="bg-white/5 text-white uppercase font-medium tracking-wider">
                                <tr>
                                    <th className="px-6 py-4 border-b border-white/10">Command</th>
                                    <th className="px-6 py-4 border-b border-white/10">Description</th>
                                    <th className="px-6 py-4 border-b border-white/10">Permission</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr className="bg-white/[0.02]">
                                    <td className="px-6 py-3 font-semibold text-white text-xs uppercase tracking-widest" colSpan={3}>User Commands</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-mono text-blue-400 font-medium">@Sentinel [query]</td>
                                    <td className="px-6 py-4">Chat with the AI. Triggers web search if needed.</td>
                                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs">Everyone</span></td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-mono text-blue-400 font-medium">/ticket</td>
                                    <td className="px-6 py-4">Open a private support ticket channel.</td>
                                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs">Everyone</span></td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-mono text-blue-400 font-medium">/close</td>
                                    <td className="px-6 py-4">Close the ticket and DM transcript to user.</td>
                                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-purple-900/30 text-purple-300 text-xs text-nowrap">Ticket Only</span></td>
                                </tr>
                                <tr className="bg-white/[0.02]">
                                    <td className="px-6 py-3 font-semibold text-white text-xs uppercase tracking-widest" colSpan={3}>Admin Commands</td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-mono text-pink-400 font-medium">/learn [N]</td>
                                    <td className="px-6 py-4">Force Sentinel to learn the last N messages in channel.</td>
                                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-red-900/30 text-red-300 text-xs">Admin</span></td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-mono text-pink-400 font-medium">/news</td>
                                    <td className="px-6 py-4">Force-fetch and broadcast latest crypto news.</td>
                                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-red-900/30 text-red-300 text-xs">Admin</span></td>
                                </tr>
                                <tr className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-mono text-pink-400 font-medium">/scan</td>
                                    <td className="px-6 py-4">Force-scan server member list for scammers.</td>
                                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-md bg-red-900/30 text-red-300 text-xs">Admin</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    );
}
