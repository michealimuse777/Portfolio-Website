import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Likeyou AI | Imuse Michael",
    description: "AI-powered matchmaking platform using intelligent reasoning.",
};

export default function LikeyouPage() {
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
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-md text-sm font-medium">
                        Work in Progress
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold">Likeyou AI</h1>
                <p className="mt-4 text-xl text-zinc-400 max-w-2xl">
                    AI-powered matchmaking platform that connects people through intelligent reasoning, not just swipes.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    {["LLM API", "Next.js", "TypeScript", "Supabase", "PostgreSQL"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 rounded-md text-sm">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-8 flex gap-4">
                    <a href="https://likeyou-lac.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        View Live Demo
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
                            Dating apps reduce connection to superficial swiping. Users spend hours on matches that
                            go nowhere because compatibility is judged by photos alone. The result: swipe fatigue,
                            shallow conversations, and wasted time for everyone.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-3 text-[#7C7CFF]">The Solution</h3>
                        <p className="text-zinc-400">
                            Likeyou uses AI to match based on personality and interests, not looks. Describe your
                            ideal connection in natural language - &quot;someone who loves philosophy and late-night
                            conversations&quot; - and let the AI find compatible profiles.
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
│  Next.js 14 (App Router) + TypeScript + Tailwind                │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       API ROUTES                                │
│  ┌─────────────────┐    ┌─────────────────┐                     │
│  │ /api/discover   │    │ /api/chat       │                     │
│  │ (AI Matching)   │    │ (Real-time)     │                     │
│  └─────────────────┘    └─────────────────┘                     │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   LLM API       │  │    SUPABASE     │  │   SUPABASE      │
│  (AI Reasoning) │  │  (PostgreSQL)   │  │  (Realtime)     │
│                 │  │  Users/Profiles │  │  Chat/Presence  │
└─────────────────┘  └─────────────────┘  └─────────────────┘`}
                    </pre>
                </div>
                <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
                    <div>
                        <h4 className="font-medium text-white mb-2">AI Layer</h4>
                        <p className="text-zinc-400">LLM processes natural language queries and computes compatibility scores.</p>
                    </div>
                    <div>
                        <h4 className="font-medium text-white mb-2">Data Layer</h4>
                        <p className="text-zinc-400">Supabase handles auth, user profiles, and connection state.</p>
                    </div>
                    <div>
                        <h4 className="font-medium text-white mb-2">Real-time Layer</h4>
                        <p className="text-zinc-400">Supabase Realtime powers chat, typing indicators, and presence.</p>
                    </div>
                </div>
            </section>

            {/* 3. Tech Stack Rationale */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
                <p className="text-zinc-400 mb-8">Every tool was chosen for a specific reason:</p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">LLM API</h3>
                        <p className="text-zinc-400 text-sm">
                            Chosen over OpenAI for better reasoning on nuanced personality matching. The 1M context
                            window allows processing multiple profiles in a single inference call.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Supabase</h3>
                        <p className="text-zinc-400 text-sm">
                            PostgreSQL with built-in auth, real-time subscriptions, and row-level security. One
                            platform replaces Firebase + custom auth + WebSocket server.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Next.js 14</h3>
                        <p className="text-zinc-400 text-sm">
                            App Router for server components, reducing client bundle size. API routes colocate
                            backend logic with frontend, simplifying deployment.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">TypeScript</h3>
                        <p className="text-zinc-400 text-sm">
                            Type safety across the stack - from API responses to database queries. Catches
                            integration bugs before they reach production.
                        </p>
                    </div>
                </div>
            </section>

            {/* Screenshots */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-8">How It Works</h2>

                <div className="mb-16">
                    <h3 className="text-xl font-medium mb-4">1. AI Vibe Match</h3>
                    <p className="text-zinc-400 mb-6 max-w-2xl">
                        Describe your ideal connection in natural language. The AI searches profiles for compatible matches.
                    </p>
                    <div className="relative w-full max-w-4xl rounded-xl overflow-hidden border border-white/10">
                        <Image src="/likeyou-discover.png" alt="Likeyou Discover" width={1024} height={768} className="w-full h-auto" />
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-xl font-medium mb-4">2. Browse Profiles</h3>
                    <p className="text-zinc-400 mb-6 max-w-2xl">
                        View AI-calculated compatibility scores. Each card shows occupation, bio, and match percentage.
                    </p>
                    <div className="relative w-full max-w-4xl rounded-xl overflow-hidden border border-white/10">
                        <Image src="/likeyou-profiles.png" alt="Likeyou profiles" width={1024} height={768} className="w-full h-auto" />
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-xl font-medium mb-4">3. Manage Connections</h3>
                    <p className="text-zinc-400 mb-6 max-w-2xl">
                        Track sent requests, received requests, and established connections in one place.
                    </p>
                    <div className="relative w-full max-w-4xl rounded-xl overflow-hidden border border-white/10">
                        <Image src="/likeyou-connections.png" alt="Likeyou connections" width={1024} height={768} className="w-full h-auto" />
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-xl font-medium mb-4">4. Real-time Chat</h3>
                    <p className="text-zinc-400 mb-6 max-w-2xl">
                        Message matches with text, images, voice notes, and video calls.
                    </p>
                    <div className="relative w-full max-w-4xl rounded-xl overflow-hidden border border-white/10">
                        <Image src="/likeyou-chat.png" alt="Likeyou chat" width={1024} height={768} className="w-full h-auto" />
                    </div>
                </div>
            </section>

            {/* 4. Challenges */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-6">Challenges</h2>
                <div className="space-y-6">
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">AI Response Latency</h3>
                        <p className="text-zinc-400 text-sm mb-3">
                            <strong className="text-white">Problem:</strong> LLM API calls take 2-5 seconds. Users expect instant search.
                        </p>
                        <p className="text-zinc-400 text-sm">
                            <strong className="text-white">Solution:</strong> Implemented streaming responses with loading states.
                            Pre-computed compatibility embeddings for frequently searched traits.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Real-time Chat at Scale</h3>
                        <p className="text-zinc-400 text-sm mb-3">
                            <strong className="text-white">Problem:</strong> Managing WebSocket connections and message ordering.
                        </p>
                        <p className="text-zinc-400 text-sm">
                            <strong className="text-white">Solution:</strong> Leveraged Supabase Realtime instead of custom WebSockets.
                            Optimistic UI updates with server reconciliation for perceived speed.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Matching Algorithm Accuracy</h3>
                        <p className="text-zinc-400 text-sm mb-3">
                            <strong className="text-white">Problem:</strong> Early prompts returned irrelevant matches.
                        </p>
                        <p className="text-zinc-400 text-sm">
                            <strong className="text-white">Solution:</strong> Iterated on prompt engineering. Added structured output
                            format with explicit scoring rubric. Included negative examples in system prompt.
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
                            <li>• AI-powered profile discovery</li>
                            <li>• Natural language search queries</li>
                            <li>• Full connection request flow</li>
                            <li>• Real-time chat with media support</li>
                            <li>• User authentication and profiles</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4 text-amber-400">Planned Next</h3>
                        <ul className="text-zinc-400 space-y-2">
                            <li>• Video call integration</li>
                            <li>• Enhanced AI personality analysis</li>
                            <li>• Icebreaker question suggestions</li>
                            <li>• Mobile app (React Native)</li>
                            <li>• Premium matching tiers</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Try Likeyou AI</h2>
                    <p className="text-zinc-400 mb-6">Experience AI-powered matchmaking</p>
                    <a href="https://likeyou-lac.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Launch App
                    </a>
                </div>
            </section>
        </main>
    );
}
