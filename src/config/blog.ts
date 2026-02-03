export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "why-i-didnt-fine-tune-for-mvp",
        title: "Why I Didn't Fine-Tune Models for My MVP",
        description:
            "Lessons from building Likeyou AI without custom model training. Prompt engineering vs fine-tuning trade-offs.",
        date: "2026-02-03",
        readTime: "5 min",
        tags: ["AI", "Engineering", "Startups"],
    },
    {
        slug: "apis-vs-training-ai-agents",
        title: "APIs vs Training: Lessons from Building AI Agents",
        description:
            "When to use pre-built APIs and when to train your own models. Practical guidance from building automation agents.",
        date: "2026-01-28",
        readTime: "7 min",
        tags: ["AI", "Agents", "Architecture"],
    },
    {
        slug: "encrypted-bidding-arcium-tee",
        title: "Building Encrypted Bidding with Arcium TEE",
        description:
            "How we implemented privacy-preserving auctions on Solana using trusted execution environments.",
        date: "2026-01-15",
        readTime: "8 min",
        tags: ["Blockchain", "Privacy", "Solana"],
    },
];
