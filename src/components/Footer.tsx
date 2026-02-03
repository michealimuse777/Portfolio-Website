export default function Footer() {
    return (
        <footer className="px-6 md:px-20 py-10 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-zinc-500">
                    © {new Date().getFullYear()} Imuse Michael · Built with Next.js
                </p>
                <nav className="flex gap-6 text-sm text-zinc-400">
                    <a href="/" className="hover:text-white transition-colors">Home</a>
                    <a href="/#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="/blog" className="hover:text-white transition-colors">Blog</a>
                    <a href="/about" className="hover:text-white transition-colors">About</a>
                </nav>
            </div>
        </footer>
    );
}
