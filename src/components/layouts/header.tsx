import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-cyan-200 to-white">
      <div className="container mx-auto px-4 pt-8 pb-32">
        <nav className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
          >
            Cypherex
          </Link>
          <div className="flex space-x-40">
            <Link
              href="/contact"
              className="text-2xl bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
            >
              Contact Us
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
            >
              Github
            </Link>
            <Link
              href="/docs"
              className="text-2xl bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
            >
              Documentation
            </Link>
            <Link
              href="/coming-soon"
              className="text-2xl bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
            >
              Coming Soon
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
