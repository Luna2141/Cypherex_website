import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-cyan-200 to-white">
      <div className="container mx-auto px-4 pb-4 pt-12 sm:pb-6 sm:pt-16 md:pb-6 md:pt-20 lg:pb-8 lg:pt-32">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 md:space-x-12 lg:space-x-16 xl:space-x-24">
          <Link
            href="/contact"
            className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-cyan-800 to-teal-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Contact Us
          </Link>
          <div className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-cyan-800 to-teal-600 bg-clip-text text-transparent">
            Cypherex©
          </div>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-cyan-800 to-teal-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
}
