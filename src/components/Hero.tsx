import { profile } from "@/config/profile";

export default function Hero() {
    return (
        <section className="min-h-[90vh] sm:min-h-screen flex items-center px-6 md:px-20 py-16 sm:py-0">
            <div className="max-w-6xl w-full">
                {/* TEXT */}
                <div className="max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        Hi, I&apos;m <span className="text-[#7C7CFF]">{profile.name}</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-zinc-400 mt-2">
                        {profile.role}
                    </p>

                    <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-md">
                        {profile.tagline}
                    </p>

                    {/* CTAs - Stack on mobile, row on desktop */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                        <a href="#projects" className="btn-primary h-12 flex items-center justify-center text-base w-full sm:w-auto">
                            View Projects
                        </a>
                        <a href="/about" className="btn-secondary h-12 flex items-center justify-center text-base w-full sm:w-auto">
                            About Me
                        </a>
                        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-secondary h-12 flex items-center justify-center text-base w-full sm:w-auto">
                            GitHub
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-zinc-500">
                        Currently building AI agents for automation & moderation.
                    </p>
                </div>
            </div>
        </section>
    );
}
