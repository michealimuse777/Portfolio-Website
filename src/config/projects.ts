export interface Project {
    name: string;
    slug: string;
    description: string;
    tech: string[];
    status: string;
    liveUrl?: string;
    githubUrl?: string;
    features?: string[];
}

export const projects: Project[] = [
    {
        name: "Obsidian",
        slug: "obsidian",
        description:
            "Privacy-preserving token launchpad on Solana with encrypted bidding.",
        tech: ["Rust", "Solana", "Anchor", "Arcium TEE"],
        status: "Hackathon",
        liveUrl: "https://obsidian-qdke.vercel.app/",
        features: [
            "Encrypted bidding & fair allocation",
            "Confidential computing using Arcium TEE",
            "AI-assisted participant validation",
        ],
    },
    {
        name: "Likeyou AI",
        slug: "likeyou",
        description:
            "AI-powered matchmaking platform using intelligent reasoning.",
        tech: ["Gemini API", "Next.js", "TypeScript", "AI"],
        status: "WIP",
        liveUrl: "https://likeyou-lac.vercel.app/",
        features: [
            "Prompt-based matching using AI reasoning",
            "Intelligent personalization",
            "Modern, responsive UI",
        ],
    },
    {
        name: "AI Agents Suite",
        slug: "ai-agents",
        description:
            "Automation agents for social media, moderation, trading, and coding.",
        tech: ["Python", "APIs", "AI Agents"],
        status: "In Progress",
        features: [
            "Multi-platform automation",
            "Configurable workflows",
            "API integration layer",
        ],
    },
];
