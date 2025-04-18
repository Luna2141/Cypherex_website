import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-teal-100 to-cyan-200">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
          >
            Cypherex
          </Link>
          <div className="flex space-x-8">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
            >
              Contact Us
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
            >
              Github
            </Link>
            <Link
              href="/docs"
              className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
            >
              Documentation
            </Link>
            <Link
              href="/coming-soon"
              className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
            >
              Coming Soon
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
