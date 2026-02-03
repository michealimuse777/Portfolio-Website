import Link from "next/link";

export const metadata = {
    title: "Why I Didn't Fine-Tune Models for My MVP | Imuse Michael",
    description: "Lessons from building Likeyou AI without custom model training.",
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
                        <span>February 3, 2026</span>
                        <span>·</span>
                        <span>5 min read</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                        Why I Didn&apos;t Fine-Tune Models for My MVP
                    </h1>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {["AI", "Engineering", "Startups"].map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="mt-12 prose prose-invert prose-zinc max-w-none">
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        When I started building Likeyou AI, the obvious path seemed to be fine-tuning a model
                        for personality matching. Everyone talks about fine-tuning. It&apos;s what &quot;real&quot; AI
                        companies do, right?
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-4">The Fine-Tuning Trap</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Here&apos;s what nobody tells you: fine-tuning is expensive, slow, and often unnecessary
                        for an MVP. The data requirements alone can kill your timeline. You need thousands of
                        examples of good matches, which I didn&apos;t have because... the product didn&apos;t exist yet.
                    </p>
                    <p className="text-zinc-400 leading-relaxed mt-4">
                        The chicken-and-egg problem is real: you need data to train a model, but you need a
                        model to get the product working, but you need a product to collect data.
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-4">Prompt Engineering First</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Instead of fine-tuning, I focused on prompt engineering with Gemini&apos;s base model.
                        The results were surprisingly good. By carefully structuring the prompts - defining
                        what compatibility means, providing scoring rubrics, including negative examples -
                        I got 80% of the way there without any training.
                    </p>

                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl my-8">
                        <p className="text-sm text-zinc-400 font-mono">
              // Instead of training on &quot;these users matched well&quot;<br />
              // I told the model explicitly what to look for:<br /><br />
                            &quot;Score compatibility based on:<br />
                            - Shared interests (weight: 0.3)<br />
                            - Communication style similarity (weight: 0.25)<br />
                            - Life goals alignment (weight: 0.25)<br />
                            - Complementary traits (weight: 0.2)&quot;
                        </p>
                    </div>

                    <h2 className="text-xl font-semibold mt-10 mb-4">When to Fine-Tune</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Fine-tuning makes sense when:
                    </p>
                    <ul className="text-zinc-400 mt-4 space-y-2">
                        <li>• You have thousands of labeled examples</li>
                        <li>• Prompt engineering hits a ceiling you can&apos;t break through</li>
                        <li>• The task is highly specialized and domain-specific</li>
                        <li>• You need consistent formatting that prompts can&apos;t guarantee</li>
                    </ul>
                    <p className="text-zinc-400 leading-relaxed mt-4">
                        For an MVP? Prompt engineering is almost always the right choice. Ship fast, validate
                        the idea, then optimize with training data you&apos;ve collected from real users.
                    </p>

                    <h2 className="text-xl font-semibold mt-10 mb-4">The Lesson</h2>
                    <p className="text-zinc-400 leading-relaxed">
                        Don&apos;t let &quot;best practices&quot; slow you down. The goal of an MVP is learning, not
                        perfection. Gemini&apos;s base model plus good prompts got me to a shippable product in
                        weeks instead of months. Now I have real user data to inform whether fine-tuning
                        is even necessary.
                    </p>
                    <p className="text-zinc-400 leading-relaxed mt-4">
                        Spoiler: it probably isn&apos;t. The prompts keep getting better.
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
