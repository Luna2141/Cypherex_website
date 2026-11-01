import Link from "next/link";

export default function ComingSoon({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-24 min-h-[60vh]">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 max-w-xl mb-10">
        {message}
      </p>
      <Link
        href="/"
        className="text-lg font-light bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity underline underline-offset-8"
      >
        Back to home
      </Link>
    </div>
  );
}
