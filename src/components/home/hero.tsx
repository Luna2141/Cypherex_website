"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-48">
      {/* SVG Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <Image
          src="/images/hero-background.svg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 text-center relative z-10 flex flex-col justify-center items-center h-full">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light mb-4 animate-fade-in"
          style={{
            background:
              "linear-gradient(to right, #F6BCFF 0%, #FF9EFB 33%, #AE9AFF 67%, #B1D0FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            filter: "drop-shadow(0px 6px 3px rgba(0, 0, 0, 0.25))",
          }}
        >
          Cypherex
        </h1>
        <p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light pt-4 sm:pt-8 md:pt-14 animate-fade-in-delay-300"
          style={{
            background:
              "linear-gradient(to right, #F6BCFF 0%, #FF9EFB 33%, #AE9AFF 67%, #B1D0FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            filter: "drop-shadow(0px 6px 3px rgba(0, 0, 0, 0.25))",
          }}
        >
          A new way to Secure
        </p>
        <p className="mt-6 text-base sm:text-lg md:text-xl font-light text-purple-400 animate-fade-in-delay-600">
          A local-first password manager. In development.
        </p>
      </div>
    </div>
  );
}
