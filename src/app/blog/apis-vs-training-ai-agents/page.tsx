import Link from "next/link";

export const metadata = {
    title: "APIs vs Training: Lessons from Building AI Agents | Imuse Michael",
    description: "When to use pre-built APIs and when to train your own models.",
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
                        <span>January 28, 2026</span>
                        <span>·</span>
                        <span>7 min read</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                        APIs vs Training: Lessons from Building AI Agents
                    </h1>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {["AI", "Agents", "Architecture"].map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="mt-12 prose prose-invert prose-zinc max-w-none">
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        Building AI agents taught me something counterintuitive: the less you try to train,
                        the faster you ship. Here&apos;s how I think about the API vs training decision.
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-4">The Default Should Be APIs</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Every time you consider training a model, ask: &quot;Can I get 80% of the result with an
                        API call?&quot; The answer is usually yes. OpenAI, LLM, Claude - these models are
                        incredibly capable out of the box.
                    </p>
                    <p className="text-zinc-400 leading-relaxed mt-4">
                        My social media agent doesn&apos;t have a custom model for content generation. It uses
                        LLM with a carefully crafted system prompt that includes brand voice guidelines,
                        example posts, and formatting rules. Zero training required.
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-4">When APIs Fall Short</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        APIs become limiting when:
                    </p>
                    <ul className="text-zinc-400 mt-4 space-y-2">
                        <li><strong className="text-white">Latency matters.</strong> API calls take 1-5 seconds. If you&apos;re moderating
                            a chat with dozens of messages per second, that doesn&apos;t scale.</li>
                        <li><strong className="text-white">Costs explode.</strong> At 100k+ requests/day, API costs can exceed hosting
                            your own fine-tuned model.</li>
                        <li><strong className="text-white">Privacy is critical.</strong> Some data can&apos;t leave your infrastructure.</li>
                        <li><strong className="text-white">The task is niche.</strong> General-purpose LLMs struggle with highly
                            specialized domains (medical, legal, etc.).</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-10 mb-4">The Hybrid Approach</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Most of my agents use a hybrid architecture:
                    </p>

                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl my-8 font-mono text-sm">
                        <p className="text-zinc-400">
                            1. Fast path: Local classifier for obvious cases<br />
                            2. Slow path: API call for complex reasoning<br />
                            3. Cache: Store API responses for similar inputs<br />
                            4. Fallback: Default behavior when API fails
                        </p>
                    </div>

                    <p className="text-zinc-400 leading-relaxed">
                        For moderation, I run a lightweight local model first. It catches 70% of violations
                        instantly. Only ambiguous cases go to the API for nuanced judgment. This cuts costs
                        by 60% while maintaining accuracy.
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-4">The Real Trade-off</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        APIs trade money for time. Training trades time for money. When you&apos;re building, time
                        is more valuable. When you&apos;re scaling, money might be.
                    </p>
                    <p className="text-zinc-400 leading-relaxed mt-4">
                        Start with APIs. Always. You can optimize later with training once you know what
                        actually needs optimizing. Premature optimization in AI is just as dangerous as in
                        regular software.
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
