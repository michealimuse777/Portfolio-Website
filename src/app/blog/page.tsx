import Link from "next/link";
import { blogPosts } from "@/config/blog";

export const metadata = {
    title: "Blog | Imuse Michael",
    description: "Thoughts on AI, blockchain, and software engineering.",
};

export default function BlogPage() {
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
                <h1 className="text-4xl md:text-5xl font-semibold">Blog</h1>
                <p className="mt-4 text-xl text-zinc-400 max-w-2xl">
                    Lessons learned from building AI systems, blockchain apps, and shipping products.
                </p>
            </section>

            {/* Posts */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <div className="space-y-6 max-w-3xl">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group block bg-[#121218] border border-white/10 p-6 rounded-xl hover:border-[#7C7CFF]/50 transition-all hover:translate-y-[-2px]"
                        >
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h2 className="text-lg font-medium group-hover:text-[#7C7CFF] transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="mt-2 text-zinc-400 text-sm">{post.description}</p>
                                </div>
                                <span className="text-zinc-500 group-hover:text-[#7C7CFF] transition-colors shrink-0">→</span>
                            </div>

                            <div className="mt-4 flex items-center gap-4 text-xs text-zinc-500">
                                <span>{post.date}</span>
                                <span>·</span>
                                <span>{post.readTime} read</span>
                            </div>

                            <div className="mt-3 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
