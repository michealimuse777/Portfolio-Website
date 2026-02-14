import Link from "next/link";

export const metadata = {
    title: "About | Imuse Michael",
    description: "AI & Software Developer focused on automation, blockchain, and intelligent systems.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0B0B0E] text-[#EDEDED]">
            {/* Header */}
            <div className="px-6 md:px-20 py-10">
                <Link href="/" className="text-zinc-400 hover:text-white transition-colors">
                    ← Back Home
                </Link>
            </div>

            {/* Hero */}
            <section className="px-6 md:px-20 py-10">
                <h1 className="text-4xl md:text-5xl font-semibold">About Me</h1>
                <p className="mt-4 text-xl text-zinc-400 max-w-2xl">
                    I build software that solves real problems - automation systems, AI agents, and blockchain applications.
                </p>
            </section>

            {/* What I Build */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-6">What I Enjoy Building</h2>
                <div className="grid md:grid-cols-3 gap-8 text-zinc-400">
                    <div>
                        <h3 className="text-white font-medium mb-3">AI Systems</h3>
                        <p className="text-sm">
                            Agents that automate repetitive work. Prompt engineering that actually works.
                            Integration with LLMs to build intelligent products, not just chatbots.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-medium mb-3">Blockchain Applications</h3>
                        <p className="text-sm">
                            Smart contracts on Solana. Privacy-preserving systems. DeFi primitives
                            that enable new kinds of financial products.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-medium mb-3">Full-Stack Products</h3>
                        <p className="text-sm">
                            End-to-end product development. Clean UIs, reliable backends,
                            and infrastructure that scales.
                        </p>
                    </div>
                </div>
            </section>

            {/* How I Think */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-6">How I Think About Engineering</h2>
                <div className="space-y-6 max-w-3xl">
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium mb-2">Ship first, optimize later</h3>
                        <p className="text-zinc-400 text-sm">
                            A working prototype beats perfect architecture. I iterate toward the right
                            solution rather than trying to design it upfront.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium mb-2">Understand the problem deeply</h3>
                        <p className="text-zinc-400 text-sm">
                            Before writing code, I make sure I understand why something needs to be built.
                            The best engineering often means building less, not more.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium mb-2">Learn in public</h3>
                        <p className="text-zinc-400 text-sm">
                            I document what I learn, share projects early, and welcome feedback.
                            Growth comes from building in the open.
                        </p>
                    </div>
                </div>
            </section>

            {/* Current Stack */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-6">Current Stack</h2>
                <div className="grid md:grid-cols-2 gap-8 text-zinc-400">
                    <div>
                        <h3 className="text-white font-medium mb-3">Languages</h3>
                        <p className="text-sm">Python, TypeScript, Rust, JavaScript</p>
                    </div>
                    <div>
                        <h3 className="text-white font-medium mb-3">Frontend</h3>
                        <p className="text-sm">Next.js, React, Tailwind CSS</p>
                    </div>
                    <div>
                        <h3 className="text-white font-medium mb-3">AI / ML</h3>
                        <p className="text-sm">LLM API, OpenAI, LangChain, Prompt Engineering</p>
                    </div>
                    <div>
                        <h3 className="text-white font-medium mb-3">Blockchain</h3>
                        <p className="text-sm">Solana, Anchor, Rust, Arcium TEE</p>
                    </div>
                    <div>
                        <h3 className="text-white font-medium mb-3">Backend</h3>
                        <p className="text-sm">Node.js, FastAPI, Supabase, PostgreSQL</p>
                    </div>
                    <div>
                        <h3 className="text-white font-medium mb-3">Infrastructure</h3>
                        <p className="text-sm">Vercel, Docker, Redis, GitHub Actions</p>
                    </div>
                </div>
            </section>

            {/* What I'm Looking For */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-6">What I&apos;m Looking For</h2>
                <div className="max-w-3xl text-zinc-400 space-y-4">
                    <p>
                        I&apos;m interested in roles and collaborations involving:
                    </p>
                    <ul className="list-disc ml-5 space-y-2">
                        <li>AI/ML engineering - building intelligent systems and agents</li>
                        <li>Blockchain development - smart contracts and DeFi protocols</li>
                        <li>Full-stack product development - shipping complete products</li>
                        <li>Early-stage startups - moving fast and learning constantly</li>
                    </ul>
                    <p className="mt-6">
                        I work well in environments that value ownership, fast iteration, and clear communication.
                    </p>
                </div>
            </section>

            {/* Contact */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="https://github.com/michealimuse777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://x.com/michealimuse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://www.linkedin.com/in/michealimuse/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        LinkedIn
                    </a>
                </div>
            </section>
        </main>
    );
}
