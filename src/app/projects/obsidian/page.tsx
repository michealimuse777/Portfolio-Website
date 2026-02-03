import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Obsidian | Imuse Michael",
    description: "Privacy-preserving token launchpad on Solana with encrypted bidding.",
};

export default function ObsidianPage() {
    return (
        <main className="min-h-screen bg-[#0B0B0E] text-[#EDEDED]">
            {/* Header */}
            <div className="px-6 md:px-20 py-10">
                <Link href="/#projects" className="text-zinc-400 hover:text-white transition-colors">
                    ← Back to Projects
                </Link>
            </div>

            {/* Hero */}
            <section className="px-6 md:px-20 py-10">
                <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#7C7CFF]/20 text-[#7C7CFF] rounded-md text-sm font-medium">
                        Hackathon Project
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold">Obsidian</h1>
                <p className="mt-4 text-xl text-zinc-400 max-w-2xl">
                    Privacy-preserving token launchpad on Solana with encrypted bidding and fair allocation.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    {["Rust", "Solana", "Anchor", "Arcium TEE", "TypeScript", "Next.js"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 rounded-md text-sm">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-8 flex gap-4">
                    <a href="https://obsidian-qdke.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        View Live Demo
                    </a>
                    <a href="https://github.com/michealimuse777" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        GitHub
                    </a>
                </div>
            </section>

            {/* 1. Overview */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-6">Overview</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-lg font-medium mb-3 text-[#7C7CFF]">The Problem</h3>
                        <p className="text-zinc-400">
                            Token launches on public blockchains have a critical flaw: transparency enables manipulation.
                            Front-running bots can see pending bids and outbid legitimate participants. Large players
                            collude to extract value. The result is unfair distribution and eroded trust.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-3 text-[#7C7CFF]">The Solution</h3>
                        <p className="text-zinc-400">
                            Obsidian introduces &quot;dark launches&quot; - token sales where bid amounts are encrypted until
                            the auction closes. Using Arcium&apos;s Trusted Execution Environment, bids are processed
                            inside a secure enclave. No one - not even operators - can see amounts before allocation.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Architecture */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-6">Architecture</h2>
                <div className="bg-[#121218] border border-white/10 p-8 rounded-xl font-mono text-sm">
                    <pre className="text-zinc-400 overflow-x-auto">
                        {`┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                │
│  Next.js + TypeScript + Wallet Adapter                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      ARCIUM TEE LAYER                           │
│  ┌─────────────────┐    ┌─────────────────┐                     │
│  │ Encrypt Bids    │ →  │ Secure Enclave  │ → Fair Allocation   │
│  │ (Client-side)   │    │ (Computation)   │                     │
│  └─────────────────┘    └─────────────────┘                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     SOLANA BLOCKCHAIN                           │
│  ┌─────────────────┐    ┌─────────────────┐    ┌──────────────┐ │
│  │ Anchor Program  │    │ SPL Tokens      │    │ PDAs         │ │
│  │ (Rust)          │    │ (Distribution)  │    │ (State)      │ │
│  └─────────────────┘    └─────────────────┘    └──────────────┘ │
└─────────────────────────────────────────────────────────────────┘`}
                    </pre>
                </div>
                <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
                    <div>
                        <h4 className="font-medium text-white mb-2">Frontend Layer</h4>
                        <p className="text-zinc-400">Next.js handles UI, wallet connections, and bid encryption before submission.</p>
                    </div>
                    <div>
                        <h4 className="font-medium text-white mb-2">Privacy Layer</h4>
                        <p className="text-zinc-400">Arcium TEE decrypts and processes bids in isolation, outputting only final allocations.</p>
                    </div>
                    <div>
                        <h4 className="font-medium text-white mb-2">Settlement Layer</h4>
                        <p className="text-zinc-400">Solana smart contracts handle token distribution based on TEE-computed results.</p>
                    </div>
                </div>
            </section>

            {/* 3. Tech Stack Rationale */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
                <p className="text-zinc-400 mb-8">Every tool was chosen for a specific reason:</p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Rust + Anchor</h3>
                        <p className="text-zinc-400 text-sm">
                            Solana programs require Rust. Anchor provides type-safe macros and reduces boilerplate
                            by 50%+. The strict type system catches bugs at compile time - critical for financial code.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Arcium TEE</h3>
                        <p className="text-zinc-400 text-sm">
                            Hardware-level isolation for sensitive computation. Unlike ZK proofs, TEEs can handle
                            arbitrary logic without circuit constraints. Trade-off: trust in hardware vs. math-only trust.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Next.js + TypeScript</h3>
                        <p className="text-zinc-400 text-sm">
                            SSR for SEO, file-based routing for speed. TypeScript catches type errors during
                            development - essential when handling wallet interactions and token amounts.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Solana</h3>
                        <p className="text-zinc-400 text-sm">
                            Sub-second finality and $0.001 transactions. For a launchpad handling many small bids,
                            Ethereum gas costs would be prohibitive. Solana enables micro-participation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Screenshots */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-8">How It Works</h2>

                <div className="mb-16">
                    <h3 className="text-xl font-medium mb-4">1. Dark Launchpad</h3>
                    <p className="text-zinc-400 mb-6 max-w-2xl">
                        Connect your wallet to the main interface. The &quot;Dark Launchpad&quot; emphasizes privacy-first design.
                    </p>
                    <div className="relative w-full max-w-4xl rounded-xl overflow-hidden border border-white/10">
                        <Image src="/obsidian-hero.png" alt="Obsidian Dark Launchpad" width={1024} height={768} className="w-full h-auto" />
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-xl font-medium mb-4">2. Confidential Bidding</h3>
                    <p className="text-zinc-400 mb-6 max-w-2xl">
                        Enter your bid in USDC. The amount is encrypted client-side before on-chain submission.
                    </p>
                    <div className="relative w-full max-w-4xl rounded-xl overflow-hidden border border-white/10">
                        <Image src="/obsidian-bid.png" alt="Obsidian bidding interface" width={1024} height={768} className="w-full h-auto" />
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-xl font-medium mb-4">3. Claim Tokens</h3>
                    <p className="text-zinc-400 mb-6 max-w-2xl">
                        After auction completion, claim your allocation. Bid amounts remain encrypted even post-auction.
                    </p>
                    <div className="relative w-full max-w-4xl rounded-xl overflow-hidden border border-white/10">
                        <Image src="/obsidian-claim.png" alt="Obsidian token claim" width={1024} height={768} className="w-full h-auto" />
                    </div>
                </div>
            </section>

            {/* 4. Challenges */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-6">Challenges</h2>
                <div className="space-y-6">
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Cross-Program Invocation Complexity</h3>
                        <p className="text-zinc-400 text-sm mb-3">
                            <strong className="text-white">Problem:</strong> Coordinating between the main auction program, SPL token
                            program, and TEE verification required careful account management.
                        </p>
                        <p className="text-zinc-400 text-sm">
                            <strong className="text-white">Solution:</strong> Used Program Derived Addresses (PDAs) with deterministic
                            seeds. Each state transition validates all required signers, preventing unauthorized mutations.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Client-Side Encryption</h3>
                        <p className="text-zinc-400 text-sm mb-3">
                            <strong className="text-white">Problem:</strong> Encrypting bids in the browser while maintaining
                            compatibility with TEE decryption.
                        </p>
                        <p className="text-zinc-400 text-sm">
                            <strong className="text-white">Solution:</strong> Implemented hybrid encryption - RSA for key exchange,
                            AES for bid payload. The TEE public key is fetched on page load and cached.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Hackathon Time Constraints</h3>
                        <p className="text-zinc-400 text-sm mb-3">
                            <strong className="text-white">Problem:</strong> Building a full privacy system in 48 hours.
                        </p>
                        <p className="text-zinc-400 text-sm">
                            <strong className="text-white">Solution:</strong> Focused on the core flow (bid → encrypt → allocate → claim).
                            Deferred features like auction creation UI and multi-token support.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. Results */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-6">Results</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-lg font-medium mb-4 text-green-400">What Works Today</h3>
                        <ul className="text-zinc-400 space-y-2">
                            <li>• Full encrypted bidding flow on Solana Devnet</li>
                            <li>• Wallet connection (Phantom, Solflare)</li>
                            <li>• Real-time auction state updates</li>
                            <li>• Token claim functionality</li>
                            <li>• Responsive UI across devices</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4 text-amber-400">Planned Next</h3>
                        <ul className="text-zinc-400 space-y-2">
                            <li>• Mainnet deployment with audited contracts</li>
                            <li>• Auction creation dashboard for project teams</li>
                            <li>• Multi-token and NFT launch support</li>
                            <li>• On-chain governance for platform parameters</li>
                            <li>• Mobile-optimized progressive web app</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Explore Obsidian</h2>
                    <p className="text-zinc-400 mb-6">See privacy-preserving token launches in action</p>
                    <a href="https://obsidian-qdke.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Launch App
                    </a>
                </div>
            </section>
        </main>
    );
}
