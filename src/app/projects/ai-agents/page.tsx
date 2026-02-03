import Link from "next/link";

export const metadata = {
    title: "AI Agents Suite | Imuse Michael",
    description: "Automation agents for social media, moderation, trading, and coding.",
};

export default function AIAgentsPage() {
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
                        In Progress
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-semibold">AI Agents Suite</h1>
                <p className="mt-4 text-xl text-zinc-400 max-w-2xl">
                    A modular collection of AI agents for automating repetitive tasks across social media, trading, moderation, and development workflows.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    {["Python", "LangChain", "FastAPI", "Redis", "OpenAI/Gemini"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 rounded-md text-sm">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-8 flex gap-4">
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
                            Repetitive tasks drain time: scheduling social posts, moderating communities,
                            monitoring markets, reviewing code. Each domain has its own tools, none of
                            which talk to each other. Context switching kills productivity.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-3 text-[#7C7CFF]">The Solution</h3>
                        <p className="text-zinc-400">
                            Build once, deploy everywhere. A unified agent framework where each agent
                            specializes in one domain but shares infrastructure: scheduling, logging,
                            error handling, and a common LLM interface.
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
│                      AGENT ORCHESTRATOR                         │
│  Scheduling • Logging • Error Handling • Rate Limiting          │
└─────────────────────────────────────────────────────────────────┘
                              │
       ┌──────────────────────┼──────────────────────┐
       ▼                      ▼                      ▼
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│  SOCIAL AGENT   │   │ MODERATION AGT  │   │  TRADING AGENT  │
│  Twitter/X      │   │ Discord/Slack   │   │  Market Data    │
│  Content Gen    │   │ Content Filter  │   │  Signal Gen     │
└─────────────────┘   └─────────────────┘   └─────────────────┘
       │                      │                      │
       └──────────────────────┼──────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       LLM INTERFACE                             │
│  OpenAI / Gemini / Local Models (Ollama)                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        EXTERNAL APIs                            │
│  Twitter API • Discord API • Exchange APIs • GitHub API         │
└─────────────────────────────────────────────────────────────────┘`}
                    </pre>
                </div>
                <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
                    <div>
                        <h4 className="font-medium text-white mb-2">Orchestration</h4>
                        <p className="text-zinc-400">Central coordinator handles scheduling, retry logic, and cross-agent communication.</p>
                    </div>
                    <div>
                        <h4 className="font-medium text-white mb-2">Specialized Agents</h4>
                        <p className="text-zinc-400">Each agent is a self-contained module with domain-specific prompts and tools.</p>
                    </div>
                    <div>
                        <h4 className="font-medium text-white mb-2">LLM Abstraction</h4>
                        <p className="text-zinc-400">Swap between OpenAI, Gemini, or local models without changing agent code.</p>
                    </div>
                </div>
            </section>

            {/* 3. Tech Stack Rationale */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
                <p className="text-zinc-400 mb-8">Every tool was chosen for a specific reason:</p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Python</h3>
                        <p className="text-zinc-400 text-sm">
                            The lingua franca for AI/ML. Every LLM SDK has first-class Python support.
                            Async/await handles concurrent API calls efficiently.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">LangChain</h3>
                        <p className="text-zinc-400 text-sm">
                            Agent framework with built-in tools, memory, and chain composition.
                            Accelerates development vs building from scratch.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">FastAPI</h3>
                        <p className="text-zinc-400 text-sm">
                            High-performance Python API framework. Automatic OpenAPI docs,
                            Pydantic validation, and async support out of the box.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Redis</h3>
                        <p className="text-zinc-400 text-sm">
                            Task queue for background jobs. Rate limiting per API. Caching
                            LLM responses to reduce costs. Pub/sub for real-time events.
                        </p>
                    </div>
                </div>
            </section>

            {/* Agent Types */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-8">Agent Types</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Social Media Agent</h3>
                        <p className="text-zinc-400 text-sm mb-4">
                            Automated posting, engagement tracking, and AI-generated responses.
                        </p>
                        <ul className="text-zinc-500 text-sm space-y-1">
                            <li>• Multi-platform scheduling</li>
                            <li>• Content generation with brand voice</li>
                            <li>• Engagement analytics</li>
                        </ul>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Moderation Agent</h3>
                        <p className="text-zinc-400 text-sm mb-4">
                            Community moderation for Discord/Slack with configurable rules.
                        </p>
                        <ul className="text-zinc-500 text-sm space-y-1">
                            <li>• Real-time content analysis</li>
                            <li>• Configurable severity thresholds</li>
                            <li>• Audit logs for review</li>
                        </ul>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Trading Agent</h3>
                        <p className="text-zinc-400 text-sm mb-4">
                            Market monitoring and signal generation (analysis only, no execution).
                        </p>
                        <ul className="text-zinc-500 text-sm space-y-1">
                            <li>• Technical indicator monitoring</li>
                            <li>• Sentiment analysis from social</li>
                            <li>• Alert notifications</li>
                        </ul>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Dev Assistant</h3>
                        <p className="text-zinc-400 text-sm mb-4">
                            Code review, documentation generation, and CI/CD automation.
                        </p>
                        <ul className="text-zinc-500 text-sm space-y-1">
                            <li>• PR review suggestions</li>
                            <li>• Auto-generated docs</li>
                            <li>• Test generation</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 4. Challenges */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <h2 className="text-2xl font-semibold mb-6">Challenges</h2>
                <div className="space-y-6">
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">LLM Cost Management</h3>
                        <p className="text-zinc-400 text-sm mb-3">
                            <strong className="text-white">Problem:</strong> Agents making hundreds of API calls per day adds up quickly.
                        </p>
                        <p className="text-zinc-400 text-sm">
                            <strong className="text-white">Solution:</strong> Implemented response caching in Redis. Semantic similarity
                            check before new API call. Smaller models for simple tasks, larger for complex reasoning.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">API Rate Limits</h3>
                        <p className="text-zinc-400 text-sm mb-3">
                            <strong className="text-white">Problem:</strong> Twitter, Discord, and exchange APIs all have different rate limits.
                        </p>
                        <p className="text-zinc-400 text-sm">
                            <strong className="text-white">Solution:</strong> Per-API rate limiters using Redis token buckets.
                            Exponential backoff on 429 errors. Priority queuing for time-sensitive tasks.
                        </p>
                    </div>
                    <div className="bg-[#121218] border border-white/10 p-6 rounded-xl">
                        <h3 className="font-medium text-lg mb-2">Agent Reliability</h3>
                        <p className="text-zinc-400 text-sm mb-3">
                            <strong className="text-white">Problem:</strong> LLMs sometimes produce unexpected outputs that break downstream logic.
                        </p>
                        <p className="text-zinc-400 text-sm">
                            <strong className="text-white">Solution:</strong> Structured output with Pydantic validation. Fallback
                            handlers for malformed responses. Human-in-the-loop for high-stakes actions.
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
                            <li>• Core orchestrator with scheduling</li>
                            <li>• Social agent prototype (Twitter)</li>
                            <li>• LLM abstraction layer</li>
                            <li>• Redis-based task queue</li>
                            <li>• Basic logging and monitoring</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4 text-amber-400">Planned Next</h3>
                        <ul className="text-zinc-400 space-y-2">
                            <li>• Moderation agent for Discord</li>
                            <li>• Trading signal agent</li>
                            <li>• Web dashboard for configuration</li>
                            <li>• Multi-agent collaboration</li>
                            <li>• Self-hosted local models</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 md:px-20 py-16 border-t border-white/10">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Follow Development</h2>
                    <p className="text-zinc-400 mb-6">This project is actively being built</p>
                    <a href="https://github.com/michealimuse777" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        GitHub
                    </a>
                </div>
            </section>
        </main>
    );
}
