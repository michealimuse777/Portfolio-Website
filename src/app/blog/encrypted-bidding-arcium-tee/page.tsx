import Link from "next/link";

export const metadata = {
    title: "Building Encrypted Bidding with Arcium TEE | Imuse Michael",
    description: "How we implemented privacy-preserving auctions on Solana.",
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-[#0B0B0E] text-[#EDEDED]">
            {/* Header */}
            <div className="px-6 md:px-20 py-10">
                <Link href="/blog" className="text-zinc-400 hover:text-white transition-colors">
                    ← Back to Blog
                </Link>
            </div>

            {/* Article */}
            <article className="px-6 md:px-20 py-10 max-w-3xl">
                <header>
                    <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                        <span>January 15, 2026</span>
                        <span>·</span>
                        <span>8 min read</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                        Building Encrypted Bidding with Arcium TEE
                    </h1>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {["Blockchain", "Privacy", "Solana"].map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="mt-12 prose prose-invert prose-zinc max-w-none">
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        Token launches have a problem: transparency enables manipulation. When everyone can
                        see pending bids, bots front-run legitimate participants. Here&apos;s how we solved this
                        with encrypted bidding for Obsidian.
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-4">The Privacy Problem</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Blockchain&apos;s transparency is usually a feature. But for auctions, it&apos;s a bug. If I
                        bid 100 USDC and you can see that before the auction closes, you can bid 101.
                        Front-running bots do this at scale, extracting value from retail users.
                    </p>
                    <p className="text-zinc-400 leading-relaxed mt-4">
                        The solution: encrypt bids so nobody - not even the platform - can see amounts until
                        the auction ends.
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-4">Why TEE Over ZK?</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Zero-knowledge proofs were the obvious choice. But ZK has constraints: you need to
                        express your logic as arithmetic circuits. For complex auction logic with variable
                        distributions, this becomes impractical.
                    </p>
                    <p className="text-zinc-400 leading-relaxed mt-4">
                        Trusted Execution Environments (TEEs) offer a different trade-off. Instead of
                        mathematical guarantees, you trust the hardware. The computation happens in an
                        isolated enclave that even the host machine can&apos;t access.
                    </p>

                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl my-8">
                        <p className="text-sm text-zinc-400">
                            <strong className="text-white">ZK Trade-off:</strong> Trust math, limited expressiveness<br />
                            <strong className="text-white">TEE Trade-off:</strong> Trust hardware, arbitrary computation
                        </p>
                    </div>

                    <h2 className="text-xl font-semibold mt-10 mb-4">The Architecture</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Here&apos;s how bids flow through the system:
                    </p>
                    <ol className="text-zinc-400 mt-4 space-y-2 list-decimal ml-5">
                        <li><strong className="text-white">Client encrypts bid</strong> using the TEE&apos;s public key (fetched on page load)</li>
                        <li><strong className="text-white">Encrypted bid submitted</strong> to Solana program</li>
                        <li><strong className="text-white">On-chain storage</strong> holds encrypted blobs (unreadable)</li>
                        <li><strong className="text-white">Auction closes</strong> and TEE is triggered</li>
                        <li><strong className="text-white">TEE decrypts all bids</strong> inside secure enclave</li>
                        <li><strong className="text-white">Allocation computed</strong> using fair distribution rules</li>
                        <li><strong className="text-white">Results published</strong> without revealing individual bids</li>
                    </ol>

                    <h2 className="text-xl font-semibold mt-10 mb-4">Implementation Challenges</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        <strong className="text-white">Client-side encryption:</strong> Getting the encryption
                        right in the browser was tricky. We used hybrid encryption - RSA for key exchange,
                        AES for the actual bid payload. Wrong padding or key format meant the TEE couldn&apos;t decrypt.
                    </p>
                    <p className="text-zinc-400 leading-relaxed mt-4">
                        <strong className="text-white">Solana account limits:</strong> Each bid needs storage
                        on-chain. With hundreds of participants, account space adds up. We optimized by storing
                        only the encrypted blob and essential metadata.
                    </p>
                    <p className="text-zinc-400 leading-relaxed mt-4">
                        <strong className="text-white">TEE attestation:</strong> Users need confidence the TEE
                        is legitimate. Arcium provides attestation proofs that the enclave is running verified code.
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-4">What I Learned</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Building privacy systems is harder than expected. The crypto is the easy part.
                        The challenge is user experience: explaining why bids are encrypted, handling
                        failures gracefully, showing proof without revealing secrets.
                    </p>
                    <p className="text-zinc-400 leading-relaxed mt-4">
                        TEEs are a pragmatic middle ground between nothing and full ZK. For hackathon
                        timelines and complex logic, they&apos;re often the right choice.
                    </p>
                </div>
            </article>

            {/* Footer */}
            <div className="px-6 md:px-20 py-16 border-t border-white/10 max-w-3xl">
                <Link href="/blog" className="text-[#7C7CFF] hover:underline">
                    ← Read more posts
                </Link>
            </div>
        </main>
    );
}
