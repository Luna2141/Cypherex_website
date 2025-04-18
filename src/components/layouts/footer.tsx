import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-cyan-200 to-teal-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center items-center space-x-12">
          <Link href="/contact" className="text-cyan-800">
            Contact Us
          </Link>
          <div className="text-cyan-800">Cypherex©</div>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-800"
          >
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
}
